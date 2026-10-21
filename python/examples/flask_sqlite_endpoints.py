#!/usr/bin/env python3

from flask import Flask, request, jsonify, send_file, abort

'''
TEMPORARY:
REST endpoints (/users)
HTTP methods (GET, POST, PUT, PATCH, DELETE)
Query params (?name=luis)
Path params (/users/1)
RPC-style (/login)
Auth-protected (/protected)
File handling (/upload, /download)
Health check (/health)

'''

from pathlib import Path

from flask import Flask, abort, jsonify, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename


db = SQLAlchemy()


def create_app():
    """Create and configure the Flask application."""
    app = Flask(__name__, instance_relative_config=True)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["UPLOAD_FOLDER"] = str(Path(app.instance_path) / "uploads")

    db.init_app(app)

    users = {
        1: {"id": 1, "name": "Goku"},
        2: {"id": 2, "name": "Gaby"},
    }

    def get_json_object():
        """Return a JSON object or abort with HTTP 400."""
        data = request.get_json(silent=True)
        if not isinstance(data, dict):
            abort(400, description="A JSON object is required.")
        return data

    @app.route("/health", methods=["GET"])
    def health():
        """Return the API health status."""
        return jsonify({"status": "ok"}), 200

    @app.route("/users", methods=["GET"])
    def get_users():
        """Return all users or filter by name."""
        name = request.args.get("name")
        result = list(users.values())

        if name is not None:
            result = [user for user in result if user["name"] == name]

        return jsonify(result), 200

    @app.route("/users/<int:user_id>", methods=["GET"])
    def get_user(user_id):
        """Return a user by ID."""
        user = users.get(user_id)
        if user is None:
            abort(404, description="User not found.")

        return jsonify(user), 200

    @app.route("/users", methods=["POST"])
    def create_user():
        """Create a user and return HTTP 201."""
        data = get_json_object()
        name = data.get("name")

        if not isinstance(name, str) or not name.strip():
            abort(400, description="A non-empty name is required.")

        new_id = max(users, default=0) + 1
        users[new_id] = {"id": new_id, "name": name.strip()}

        return jsonify(users[new_id]), 201

    @app.route("/users/<int:user_id>", methods=["PUT"])
    def replace_user(user_id):
        """Replace a user's data."""
        if user_id not in users:
            abort(404, description="User not found.")

        data = get_json_object()
        name = data.get("name")

        if not isinstance(name, str) or not name.strip():
            abort(400, description="A non-empty name is required.")

        users[user_id] = {"id": user_id, "name": name.strip()}
        return jsonify(users[user_id]), 200

    @app.route("/users/<int:user_id>", methods=["PATCH"])
    def update_user(user_id):
        """Partially update a user's data."""
        if user_id not in users:
            abort(404, description="User not found.")

        data = get_json_object()

        if not data or set(data) != {"name"}:
            abort(400, description="Only the name field can be updated.")

        name = data["name"]
        if not isinstance(name, str) or not name.strip():
            abort(400, description="A non-empty name is required.")

        users[user_id]["name"] = name.strip()
        return jsonify(users[user_id]), 200

    @app.route("/users/<int:user_id>", methods=["DELETE"])
    def delete_user(user_id):
        """Delete a user by ID."""
        if user_id not in users:
            abort(404, description="User not found.")

        del users[user_id]
        return "", 204

    @app.route("/login", methods=["POST"])
    def login():
        """Demonstrate a login response without real authentication."""
        data = get_json_object()

        if data.get("username") == "admin":
            return jsonify({"token": "fake-jwt-token"}), 200

        return jsonify({"error": "invalid credentials"}), 401

    @app.route("/protected", methods=["GET"])
    def protected():
        """Demonstrate checking a bearer token."""
        token = request.headers.get("Authorization")

        if token != "Bearer fake-jwt-token":
            return jsonify({"error": "unauthorized"}), 401

        return jsonify({"message": "secret data"}), 200

    @app.route("/upload", methods=["POST"])
    def upload_file():
        """Save an uploaded file using a sanitized filename."""
        file = request.files.get("file")

        if file is None or not file.filename:
            return jsonify({"error": "no file"}), 400

        filename = secure_filename(file.filename)
        if not filename:
            return jsonify({"error": "invalid filename"}), 400

        upload_dir = Path(app.config["UPLOAD_FOLDER"])
        upload_dir.mkdir(parents=True, exist_ok=True)
        file.save(upload_dir / filename)

        return jsonify({"message": "file uploaded", "filename": filename}), 201

    @app.route("/download/<filename>", methods=["GET"])
    def download_file(filename):
        """Download a file from the configured upload directory."""
        return send_from_directory(
            app.config["UPLOAD_FOLDER"],
            filename,
            as_attachment=True,
        )

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
