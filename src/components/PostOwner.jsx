export const PostOwner = (props) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/veryhansome.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {props.fullname} {props.lastname} {props.student_id}
        </span>
      </div>
    </div>
  );
};
