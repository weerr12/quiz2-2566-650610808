import { comments } from "@/libs/comments";
export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
  key,
  add,
}) => {
  const adds = () => {
    add(id);
  };
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum}</span>
          </div>
        </div>
      </div>
      {/* map-loop render Reply component here */}
      {replies.map((reply, i) => (
        <div key={i} className="reply">
          <p>{reply.text}</p>
          {reply.likeNum > 0 && (
            <p>
              <img src="/like.svg" width={20}></img> {reply.likeNum}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
