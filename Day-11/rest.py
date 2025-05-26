from flask import Flask, request, jsonify
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
auth = HTTPBasicAuth()

# In-memory user store (username: hashed password)
users = {
    "nikin": generate_password_hash("1234")  # Change to your password
}

# Verify username and password
@auth.verify_password
def verify(username, password):
    if username in users and check_password_hash(users.get(username), password):
        return username

# In-memory task list
tasks = [
    {
        "id": 1,
        "title": "Test task",
        "description": "This is your first task",
        "status": "pending"
    }
]

# ✅ Input validation function
def validate_task_data(data, require_all=True):
    errors = []
    if "title" not in data or not isinstance(data["title"], str) or not data["title"].strip():
        errors.append("Title is required and must be a non-empty string.")
    if "description" not in data or not isinstance(data["description"], str) or not data["description"].strip():
        errors.append("Description is required and must be a non-empty string.")
    if "status" in data and data["status"] not in ["pending", "done"]:
        errors.append("Status must be either 'pending' or 'done'.")
    return errors

# GET all tasks
@app.route("/tasks", methods=["GET"])
@auth.login_required
def get_all_tasks():
    return jsonify(tasks)

# GET task by ID
@app.route("/tasks/<int:task_id>", methods=["GET"])
@auth.login_required
def get_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

# POST create new task
@app.route("/tasks", methods=["POST"])
@auth.login_required
def create_task():
    data = request.get_json()
    errors = validate_task_data(data)
    if errors:
        return jsonify({"errors": errors}), 400

    new_id = max([task["id"] for task in tasks], default=0) + 1
    new_task = {
        "id": new_id,
        "title": data["title"],
        "description": data["description"],
        "status": data.get("status", "pending")
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

# PUT update task
@app.route("/tasks/<int:task_id>", methods=["PUT"])
@auth.login_required
def update_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            data = request.get_json()
            errors = validate_task_data(data, require_all=False)
            if errors:
                return jsonify({"errors": errors}), 400

            task["title"] = data.get("title", task["title"])
            task["description"] = data.get("description", task["description"])
            task["status"] = data.get("status", task["status"])
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

# DELETE task
@app.route("/tasks/<int:task_id>", methods=["DELETE"])
@auth.login_required
def delete_task(task_id):
    t = None
    for task in tasks:
        if task["id"] == task_id:
            t = task
            break
    if t:
        tasks.remove(t)
        return jsonify({"message": f"Task {task_id} deleted successfully"})
    else:
        return jsonify({"error": "Task not found"}), 404

# Home route
@app.route("/")
def home():
    return "Task Manager API is running with authentication and validation!"

if __name__ == "__main__":
    app.run(debug=True)
