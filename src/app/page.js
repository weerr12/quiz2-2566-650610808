"use client";
import { useState } from "react";
import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { nanoid } from "nanoid";
import { comments } from "@/libs/comments";

export default function HomePage() {
  const [Comment, setComment] = useState([]);
  const [] = useState();
  const [] = useState();

  const addTask = (newTaskTitle) => {
    const newTask = {
      id: nanoid(),
      userImagePath: newTaskTitle,
      username: newTaskTitle,
      commentText: newTaskTitle,
      likeNum: newTaskTitle,
      replies: newTaskTitle,
    };
    const newTasks = [...task, newTask];
    setTask(newTask);
  };
  const addTaskBtn = () => {
    addTask(task);
  };
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <PostOwner
            fullname="Werasak"
            lastname="Mayer"
            student_id="650610808"
          />
          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>

        {/* Comment Example */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
          {comments.map((comment, i) => (
            <Comment
              key={i}
              userImagePath={comment.userImagePath}
              username={comment.username}
              commentText={comment.commentText}
              likeNum={comment.likeNum}
              replies={comment.replies}
            />
          ))}
        </div>

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div>
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
