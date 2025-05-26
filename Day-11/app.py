from flask import Flask ,jsonify ,request



app = Flask(__name__)


tasks = [
    {
        "id": 1,
        "title": "Test task",
        "description": "This is your first task",
        "status": "pending"
    }
]


@app.route("/tasks", methods=["GET"])
def get_all_tasks():
    return jsonify(tasks)

@app.route("/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            return jsonify(task)
    return jsonify({"Error" :"Task not found"}),404


@app.route("/tasks/<int:task_id>", methods=["PUT"])
def put_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            data = request.get_json()
            if "title" in data:
                task["title"] = data["title"]
            if "description" in data:
                task["description"] = data["description"]
            if "status" in data:
                task["status"] = data["status"]
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

@app.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()

    title = data.get("title")
    description = data.get("description")
    status = data.get("status", "pending")
    new_id = max([task["id"] for task in tasks], default=0) + 1


    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400
    
    new_task = {
        "id" :new_id,
        "title": title,
        "description": description,
        "status": status
    }

    tasks.append(new_task)

    return jsonify(new_task), 201


@app.route("/tasks/<int:task_id>",methods=["DELETE"])
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


@app.route("/")
def home():
    return "Task Manager API is running!"

if __name__ == "__main__":
    app.run(debug=True)
