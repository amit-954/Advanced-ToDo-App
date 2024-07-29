// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./TodoList.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Delete";
// import UndoIcon from "@mui/icons-material/Undo";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// const TodoList = () => {
// 	const [tasks, setTasks] = useState([]);
// 	const [newTask, setNewTask] = useState("");
// 	const [error, setError] = useState("");

// 	useEffect(() => {
// 		fetchTasks();
// 	}, []);

// 	const fetchTasks = async () => {
// 		try {
// 			const response = await axios.get("http://localhost:5000/tasks");
// 			setTasks(response.data);
// 		} catch (error) {
// 			console.error("Error fetching tasks:", error);
// 		}
// 	};

// 	const addTask = async () => {
// 		if (newTask.trim() === "") {
// 			setError("Task cannot be empty");
// 			return;
// 		}

// 		try {
// 			const response = await axios.post("http://localhost:5000/tasks", {
// 				text: newTask,
// 				completed: false,
// 			});
// 			setTasks([...tasks, response.data]);
// 			setNewTask("");
// 			setError("");
// 		} catch (error) {
// 			console.error("Error adding task:", error);
// 		}
// 	};

// 	const deleteTask = async (id) => {
// 		try {
// 			await axios.delete(`http://localhost:5000/tasks/${id}`);
// 			setTasks(tasks.filter((task) => task._id !== id));
// 		} catch (error) {
// 			console.error("Error deleting task:", error);
// 		}
// 	};

// 	const completeTask = async (task) => {
// 		try {
// 			const response = await axios.put(
// 				`http://localhost:5000/tasks/${task._id}`,
// 				{
// 					text: task.text,
// 					completed: !task.completed,
// 				},
// 			);
// 			setTasks(
// 				tasks.map((t) => (t._id === task._id ? response.data : t)),
// 			);
// 		} catch (error) {
// 			console.error("Error completing task:", error);
// 		}
// 	};

// 	return (
// 		<div className="container">
// 			<h1>ToDo List</h1>

// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "center",
// 					alignItems: "center",
// 					marginBottom: "10px",
// 				}}
// 			>
// 				<Stack spacing={2} direction="row">
// 					<div>
// 						<TextField
// 							id="outlined-size-small"
// 							size="small"
// 							label="Enter a Task"
// 							variant="outlined"
// 							type="text"
// 							value={newTask}
// 							onChange={(e) => setNewTask(e.target.value)}
// 							style={{ width: "270px" }}
// 							error={!!error}
// 							helperText={error}
// 						/>
// 					</div>

// 					<div>
// 						<Button
// 							variant="outlined"
// 							size="large"
// 							onClick={addTask}
// 						>
// 							{<AddCircleOutlineIcon />}
// 						</Button>
// 					</div>
// 				</Stack>
// 			</div>

// 			<div className="task-container">
// 				{tasks.map((task, index) => (
// 					<div key={task._id}>
// 						<hr className="horizontal-line" />
// 						<div
// 							className={`task-item ${
// 								task.completed ? "task-completed" : ""
// 							}`}
// 						>
// 							<Stack spacing={2} direction="row">
// 								<div className="task-number">
// 									<span>{index + 1}.</span>
// 								</div>
// 								<div className="task-name">
// 									<span
// 										style={{
// 											fontSize: "20px",
// 										}}
// 									>
// 										{task.text}
// 									</span>
// 								</div>
// 								<div className="task-button">
// 									<Stack spacing={2} direction="row">
// 										<Button
// 											color={
// 												!task.completed
// 													? "success"
// 													: "warning"
// 											}
// 											variant="outlined"
// 											onClick={() => completeTask(task)}
// 										>
// 											{task.completed ? (
// 												<UndoIcon />
// 											) : (
// 												<TaskAltIcon />
// 											)}
// 										</Button>

// 										<Button
// 											color="error"
// 											variant="outlined"
// 											onClick={() => deleteTask(task._id)}
// 										>
// 											{<DeleteIcon />}
// 										</Button>
// 									</Stack>
// 								</div>
// 							</Stack>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default TodoList;





























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./TodoList.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Delete";
// import UndoIcon from "@mui/icons-material/Undo";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import TodayIcon from "@mui/icons-material/Today";
// import AlarmIcon from "@mui/icons-material/Alarm";
// import { Box } from "@mui/material";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

// const TodoList = () => {
// 	const [tasks, setTasks] = useState([]);
// 	const [newTask, setNewTask] = useState("");
// 	const [date, setDate] = useState(dayjs());
// 	const [time, setTime] = useState(dayjs());
// 	const [priority, setPriority] = useState("Low");
// 	const [error, setError] = useState("");

// 	useEffect(() => {
// 		fetchTasks();
// 	}, []);

// 	const fetchTasks = async () => {
// 		try {
// 			const response = await axios.get("http://localhost:5000/tasks");
// 			setTasks(response.data);
// 		} catch (error) {
// 			console.error("Error fetching tasks:", error);
// 		}
// 	};

// 	const addTask = async () => {
// 		if (newTask.trim() === "" || !date || !time) {
// 			setError("Task cannot be empty");
// 			return;
// 		}

// 		try {
// 			const response = await axios.post("http://localhost:5000/tasks", {
// 				text: newTask,
// 				completed: false,
// 				date: new Date(
// 					date.format("YYYY-MM-DD") + "T" + time.format("HH:mm"),
// 				),
// 				priority: priority,
// 			});
// 			setTasks([...tasks, response.data]);
// 			setNewTask("");
// 			setDate(dayjs());
// 			setTime(dayjs());
// 			setPriority("Low");
// 			setError("");
// 		} catch (error) {
// 			console.error("Error adding task:", error);
// 		}
// 	};

// 	const completeTask = async (task) => {
// 		try {
// 			const response = await axios.put(
// 				`http://localhost:5000/tasks/${task._id}`,
// 				{
// 					...task,
// 					completed: !task.completed,
// 				},
// 			);
// 			setTasks(
// 				tasks.map((t) => (t._id === task._id ? response.data : t)),
// 			);
// 		} catch (error) {
// 			console.error("Error completing task:", error);
// 		}
// 	};

// 	const deleteTask = async (id) => {
// 		try {
// 			await axios.delete(`http://localhost:5000/tasks/${id}`);
// 			setTasks(tasks.filter((task) => task._id !== id));
// 		} catch (error) {
// 			console.error("Error deleting task:", error);
// 		}
// 	};

// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<div className="container">
// 				<h1>ToDo List</h1>

// 				<div className="input-section">
// 					<Stack spacing={2} direction="row" alignItems="center">
// 						<TextField
// 							id="outlined-size-small"
// 							size="small"
// 							label="Enter a Task"
// 							variant="outlined"
// 							type="text"
// 							value={newTask}
// 							onChange={(e) => setNewTask(e.target.value)}
// 							style={{ width: "410px" }}
// 							error={!!error}
// 							helperText={error}
// 						/>
// 					</Stack>
// 				</div>

// 				<div className="date-time-priority">
// 					<Stack spacing={2} direction="row" alignItems="center">
// 						<DatePicker
// 							label="Date"
// 							value={date}
// 							onChange={(newValue) => setDate(newValue)}
// 							slotProps={{
// 								textField: {
// 									size: "small",
// 									style: { width: "160px" },
// 								},
// 							}}
// 							renderInput={(params) => <TextField {...params} />}
// 						/>
// 						<TimePicker
// 							label="Time"
// 							value={time}
// 							onChange={(newValue) => setTime(newValue)}
// 							slotProps={{
// 								textField: {
// 									size: "small",
// 									style: { width: "140px" },
// 								},
// 							}}
// 							renderInput={(params) => <TextField {...params} />}
// 							viewRenderers={{
// 								hours: renderTimeViewClock,
// 								minutes: renderTimeViewClock,
// 								seconds: renderTimeViewClock,
// 							}}
// 						/>
// 						<FormControl size="small">
// 							<InputLabel id="priority-label">
// 								Priority
// 							</InputLabel>
// 							<Select
// 								labelId="priority-label"
// 								value={priority}
// 								onChange={(e) => setPriority(e.target.value)}
// 								label="Priority"
// 							>
// 								<MenuItem
// 									value="Low"
// 									style={{ color: "green" }}
// 								>
// 									Low
// 								</MenuItem>
// 								<MenuItem
// 									value="Medium"
// 									style={{ color: "orange" }}
// 								>
// 									Medium
// 								</MenuItem>
// 								<MenuItem value="High" style={{ color: "red" }}>
// 									High
// 								</MenuItem>
// 							</Select>
// 						</FormControl>
// 					</Stack>
// 				</div>
// 				<div className="add-task-button">
// 					<Button
// 						variant="outlined"
// 						size="large"
// 						onClick={addTask}
// 						startIcon={<AddTaskIcon />}
// 					>
// 						Add Task
// 					</Button>
// 				</div>

// 				<div className="task-container">
// 					{tasks.map((task, index) => (
// 						<div key={task._id}>
// 							<hr className="horizontal-line" />
// 							<div
// 								className={`task-item ${
// 									task.completed ? "task-completed" : ""
// 								}`}
// 							>
// 								<Stack spacing={2} direction="row">
									

// 									<div className="task-name">
// 										<span
// 											style={{
// 												fontFamily: "Roboto",
// 												fontSize: "21px",
// 												fontStyle: "italic",
// 											}}
// 										>
// 											{task.text}
// 										</span>
// 										<div className="task-date-time-priority">
// 											<div className="task-date">
// 												<TodayIcon
// 													style={{
// 														marginRight: "8px",
// 														fontSize: "20px",
// 														opacity: "0.7",
// 													}}
// 												/>{" "}
// 												{new Date(
// 													task.date,
// 												).toLocaleDateString()}
// 											</div>
// 											<div className="task-time">
// 												<AlarmIcon
// 													style={{
// 														marginRight: "8px",
// 														fontSize: "20px",
// 														opacity: "0.7",
// 													}}
// 												/>{" "}
// 												{new Intl.DateTimeFormat(
// 													"en-US",
// 													{
// 														hour: "2-digit",
// 														minute: "2-digit",
// 													},
// 												).format(new Date(task.date))}
// 											</div>
// 											<div
// 												style={{
// 													display: "flex",
// 													alignItems: "center",
// 													justifyContent: "center",
// 												}}
// 											>
// 												<Box
// 													sx={{
// 														display: "inline-block",
// 														width: "15px",
// 														height: "15px",
// 														borderRadius: "3px",
// 														backgroundColor:
// 															task.priority ===
// 															"Low"
// 																? "rgb(85, 203, 85)"
// 																: task.priority ===
// 																  "Medium"
// 																? "orange"
// 																: "red",
// 													}}
// 												/>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="task-button">
// 										<Stack spacing={2} direction="row">
// 											<Button
// 												color={
// 													!task.completed
// 														? "success"
// 														: "warning"
// 												}
// 												variant="outlined"
// 												onClick={() =>
// 													completeTask(task)
// 												}
// 												style={{
// 													width: 35,
// 													height: 35,
// 													minWidth: 35,
// 													minHeight: 35,
// 												}}
// 											>
// 												{task.completed ? (
// 													<UndoIcon />
// 												) : (
// 													<DoneAllIcon />
// 												)}
// 											</Button>

// 											<Button
// 												color="error"
// 												variant="outlined"
// 												onClick={() =>
// 													deleteTask(task._id)
// 												}
// 												style={{
// 													width: 35,
// 													height: 35,
// 													minWidth: 35,
// 													minHeight: 35,
// 												}}
// 											>
// 												<DeleteIcon />
// 											</Button>
// 										</Stack>
// 									</div>
// 								</Stack>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</LocalizationProvider>
// 	);
// };

// export default TodoList;






















import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import UndoIcon from "@mui/icons-material/Undo";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TodayIcon from "@mui/icons-material/Today";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Box } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";


const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [date, setDate] = useState(dayjs());
	const [time, setTime] = useState(dayjs());
	const [priority, setPriority] = useState("Low");
	const [error, setError] = useState("");
	const [sortBy, setSortBy] = useState("None");

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await axios.get("http://localhost:5000/tasks");
			setTasks(response.data);
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	const addTask = async () => {
		if (newTask.trim() === "" || !date || !time) {
			setError("Task cannot be empty");
			return;
		}

		try {
			const response = await axios.post("http://localhost:5000/tasks", {
				text: newTask,
				completed: false,
				date: new Date(
					date.format("YYYY-MM-DD") + "T" + time.format("HH:mm"),
				),
				priority: priority,
			});
			setTasks([...tasks, response.data]);
			setNewTask("");
			setDate(dayjs());
			setTime(dayjs());
			setPriority("Low");
			setError("");
		} catch (error) {
			console.error("Error adding task:", error);
		}
	};

	const completeTask = async (task) => {
		try {
			const response = await axios.put(
				`http://localhost:5000/tasks/${task._id}`,
				{
					...task,
					completed: !task.completed,
				},
			);
			setTasks(
				tasks.map((t) => (t._id === task._id ? response.data : t)),
			);
		} catch (error) {
			console.error("Error completing task:", error);
		}
	};

	const deleteTask = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/tasks/${id}`);
			setTasks(tasks.filter((task) => task._id !== id));
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	};

	const sortTasks = (tasks, criteria) => {
		if (criteria === "None") return tasks;

		const sortedTasks = [...tasks];
		switch (criteria) {
			case "Priority":
				sortedTasks.sort((a, b) => {
					const priorityOrder = { High: 3, Medium: 2, Low: 1 };
					const priorityComparison =
						priorityOrder[b.priority] - priorityOrder[a.priority];
					if (priorityComparison !== 0) return priorityComparison;

					const dateA = new Date(a.date);
					const dateB = new Date(b.date);
					if (dateA.getTime() !== dateB.getTime())
						return dateA - dateB;

					const timeA = dateA.getTime();
					const timeB = dateB.getTime();
					return timeA - timeB;
				});
				break;

			case "Time":
				sortedTasks.sort((a, b) => {
					const dateA = new Date(a.date);
					const dateB = new Date(b.date);
					if (dateA.getTime() !== dateB.getTime())
						return dateA - dateB;

					const timeA = dateA.getTime();
					const timeB = dateB.getTime();
					return timeA - timeB;
				});
				break;

			default:
				break;
		}
		return sortedTasks;
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="container">
				<h1>ToDo List</h1>

				{/* Input Section */}
				<div className="input-section">
					<Stack spacing={2} direction="row" alignItems="center">
						<TextField
							id="outlined-size-small"
							size="small"
							label="Enter a Task"
							variant="outlined"
							type="text"
							value={newTask}
							onChange={(e) => setNewTask(e.target.value)}
							style={{ width: "410px" }}
							error={!!error}
							helperText={error}
						/>
					</Stack>
				</div>

				{/* Date, Time, Priority Section */}
				<div className="date-time-priority">
					<Stack spacing={2} direction="row" alignItems="center">
						<DatePicker
							label="Date"
							value={date}
							onChange={(newValue) => setDate(newValue)}
							format="DD/MM/YYYY"
							slotProps={{
								textField: {
									size: "small",
									style: { width: "160px" },
								},
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
						<TimePicker
							label="Time"
							value={time}
							onChange={(newValue) => setTime(newValue)}
							slotProps={{
								textField: {
									size: "small",
									style: { width: "140px" },
								},
							}}
							renderInput={(params) => <TextField {...params} />}
							viewRenderers={{
								hours: renderTimeViewClock,
								minutes: renderTimeViewClock,
								seconds: renderTimeViewClock,
							}}
						/>
						<FormControl size="small">
							<InputLabel id="priority-label">
								Priority
							</InputLabel>
							<Select
								labelId="priority-label"
								value={priority}
								onChange={(e) => setPriority(e.target.value)}
								label="Priority"
							>
								<MenuItem
									value="Low"
									style={{ color: "green" }}
								>
									Low
								</MenuItem>
								<MenuItem
									value="Medium"
									style={{ color: "orange" }}
								>
									Medium
								</MenuItem>
								<MenuItem value="High" style={{ color: "red" }}>
									High
								</MenuItem>
							</Select>
						</FormControl>
					</Stack>
				</div>

				{/* Add Task Button */}
				<div className="add-task-button">
					<Button
						variant="outlined"
						size="large"
						onClick={addTask}
						startIcon={<AddTaskIcon />}
					>
						Add Task
					</Button>
				</div>

				{/* Task List with Sort By Dropdown */}
				<div className="task-list-container">
					{/* Sorting Dropdown */}
					{tasks.length > 0 && (
						<div className="sort-by">
							<FormControl size="small">
								<InputLabel id="sort-by-label">
									Sort By
								</InputLabel>
								<Select
									labelId="sort-by-label"
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									label="Sort By"
								>
									<MenuItem value="None">None</MenuItem>
									<MenuItem value="Priority">
										Priority
									</MenuItem>
									<MenuItem value="Time">Time</MenuItem>
								</Select>
							</FormControl>
						</div>
					)}

					{/* Task Items */}
					{tasks.length > 0 && (
						<div className="task-container">
							{sortTasks(tasks, sortBy).map((task) => (
								<div key={task._id}>
									<hr className="horizontal-line" />
									<div
										className={`task-item ${
											task.completed
												? "task-completed"
												: ""
										}`}
									>
										<Stack spacing={2} direction="row">
											<div className="task-name">
												<span
													style={{
														fontFamily: "Roboto",
														fontSize: "21px",
														fontStyle: "italic",
													}}
												>
													{task.text}
												</span>
												<div className="task-date-time-priority">
													<div className="task-date">
														<TodayIcon
															style={{
																marginRight:
																	"8px",
																fontSize:
																	"20px",
																opacity: "0.7",
															}}
														/>{" "}
														{dayjs(
															task.date,
														).format("DD/MM/YYYY")}
													</div>
													<div className="task-time">
														<AlarmIcon
															style={{
																marginRight:
																	"8px",
																fontSize:
																	"20px",
																opacity: "0.7",
															}}
														/>{" "}
														{new Intl.DateTimeFormat(
															"en-US",
															{
																hour: "2-digit",
																minute: "2-digit",
															},
														).format(
															new Date(task.date),
														)}
													</div>
													<div
														style={{
															display: "flex",
															alignItems:
																"center",
															justifyContent:
																"center",
														}}
													>
														<Box
															sx={{
																display:
																	"inline-block",
																width: "15px",
																height: "15px",
																borderRadius:
																	"3px",
																backgroundColor:
																	task.priority ===
																	"Low"
																		? "rgb(85, 203, 85)"
																		: task.priority ===
																		  "Medium"
																		? "orange"
																		: "red",
															}}
														/>
													</div>
												</div>
											</div>
											<div className="task-button">
												<Stack
													spacing={2}
													direction="row"
												>
													<Button
														color={
															!task.completed
																? "success"
																: "warning"
														}
														variant="outlined"
														onClick={() =>
															completeTask(task)
														}
														style={{
															width: 35,
															height: 35,
															minWidth: 35,
															minHeight: 35,
														}}
													>
														{task.completed ? (
															<UndoIcon />
														) : (
															<DoneAllIcon />
														)}
													</Button>

													<Button
														color="error"
														variant="outlined"
														onClick={() =>
															deleteTask(task._id)
														}
														style={{
															width: 35,
															height: 35,
															minWidth: 35,
															minHeight: 35,
														}}
													>
														<DeleteIcon />
													</Button>
												</Stack>
											</div>
										</Stack>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default TodoList;



