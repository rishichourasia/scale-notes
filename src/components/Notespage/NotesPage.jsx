import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../context/note-context";
import { fetchNotes, filterTask } from "../../utilis/export-utils";
import { Sidebar } from "../export";
import { InputBox } from "./InputBox";
import { NoteCard } from "./NoteCard";
import "./notespage.css";

export const NotesPage = () => {
	const { notesState, dispatchNotes } = useNotes();
	const location = useLocation();

	useEffect(() => {
		fetchNotes(dispatchNotes);
	}, [notesState]);

	const filteredTask = filterTask(notesState.notes, notesState.label);

	const pinnedNotes = filteredTask.filter((item) => item.pinned !== false);

	const allNotes = filteredTask.filter(
		(item) => item.pinned === false && item.label === "Add Status"
	);

	const todoNotes = filteredTask.filter(
		(item) => item.label === "Todo" && item.pinned === false
	);
	const assignedNotes = filteredTask.filter(
		(item) => item.label === "Assigned" && item.pinned === false
	);
	const inProgressNotes = filteredTask.filter(
		(item) => item.label === "In Progress" && item.pinned === false
	);
	const doneNotes = filteredTask.filter(
		(item) => item.label === "Done" && item.pinned === false
	);

	const pinnedLen = pinnedNotes.length > 0;
	const noteLen = notesState.notes.length > 0;
	const todoLen = todoNotes.length > 0;
	const assignedLen = assignedNotes.length > 0;
	const inProgressLen = inProgressNotes.length > 0;
	const doneLen = doneNotes.length > 0;

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<InputBox />
				<div
					className="notes-display"
					style={!noteLen ? { justifyContent: "center" } : null}
				>
					{noteLen ? (
						<>
							<div
								className="note-type"
								style={pinnedLen ? { display: "flex" } : { display: "none" }}
							>
								<p>Pinned Tasks</p>
								<div className="note-box">
									{pinnedNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div
								className="note-type"
								style={todoLen ? { display: "flex" } : { display: "none" }}
							>
								<p>Todo Tasks</p>
								<div className="note-box">
									{todoNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div
								className="note-type"
								style={assignedLen ? { display: "flex" } : { display: "none" }}
							>
								<p>Assigned Tasks</p>
								<div className="note-box">
									{assignedNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div
								className="note-type"
								style={
									inProgressLen ? { display: "flex" } : { display: "none" }
								}
							>
								<p>In Progress Tasks</p>
								<div className="note-box">
									{inProgressNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div
								className="note-type"
								style={doneLen ? { display: "flex" } : { display: "none" }}
							>
								<p>Done Tasks</p>
								<div className="note-box">
									{doneNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div className="note-type">
								<p>All Tasks</p>
								<div className="note-box">
									{allNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
						</>
					) : (
						<div className="empty-div">
							<span>
								<i className="far fa-file-check empty-icon"></i>
								<p>Tasks you add appear here</p>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
