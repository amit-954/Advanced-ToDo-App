
import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(json());

dotenv.config();

const URL = "mongodb://localhost:27017/todo";

const DB_URL = process.env.VITE_MONGO_URI;


connect(URL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB:", err.message);
	});

const taskSchema = new Schema({
	text: String,
	completed: Boolean,
	date: Date,
	priority: String,
});

const Task = model("Task", taskSchema);

app.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.post("/tasks", async (req, res) => {
	try {
		const newTask = new Task(req.body);
		await newTask.save();
		res.json(newTask);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.put("/tasks/:id", async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(task);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.delete("/tasks/:id", async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.json({ message: "Task deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
