"""Backend API tests for Daniyal Graphic Designer site."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://brand-identity-pro-6.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Healthcheck ----------
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "message" in data
        assert "Daniyal" in data["message"]


# ---------- Contact create + persistence ----------
class TestContact:
    def test_create_contact_persists_and_lists(self, session):
        payload = {
            "name": "TEST_Tester One",
            "email": "test_tester1@example.com",
            "service": "Logo Design",
            "message": "TEST_ Please ignore — automated test message.",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        # Required fields
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "_id" not in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"].lower()
        assert data["service"] == payload["service"]
        assert data["message"] == payload["message"]
        # ISO created_at
        assert "T" in data["created_at"]

        # Verify it's in the list (most recent first), no _id leak
        lr = session.get(f"{API}/contact?limit=20", timeout=15)
        assert lr.status_code == 200, lr.text
        items = lr.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
        ids = [it["id"] for it in items]
        assert data["id"] in ids
        # Sorted desc
        if len(items) >= 2:
            assert items[0]["created_at"] >= items[1]["created_at"]

    def test_invalid_email_returns_422(self, session):
        bad = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "service": "Logo Design",
            "message": "Should fail",
        }
        r = session.post(f"{API}/contact", json=bad, timeout=15)
        assert r.status_code == 422, r.text

    def test_missing_field_returns_422(self, session):
        # missing message
        r = session.post(f"{API}/contact", json={
            "name": "TEST_NoMsg", "email": "a@b.com", "service": "Logo Design"
        }, timeout=15)
        assert r.status_code == 422

    def test_empty_name_rejected(self, session):
        r = session.post(f"{API}/contact", json={
            "name": "", "email": "a@b.com", "service": "Logo Design", "message": "hi"
        }, timeout=15)
        assert r.status_code == 422


# ---------- List endpoint sanity ----------
class TestContactList:
    def test_list_no_objectid(self, session):
        r = session.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        for it in r.json():
            assert "_id" not in it
            assert "id" in it
            assert "created_at" in it
