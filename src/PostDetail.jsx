import "./PostDetail.css";
import useFetchComments from "./useFetchComments";
export function PostDetail({ post, isSuccess, mutate, update, isUpdated }) {
  // replace with useQuery
  const { id } = post;
  const { data, isPending, error } = useFetchComments(id);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(isSuccess);
  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <div>
        <button onClick={() => mutate(id)}>Delete</button>
        {isSuccess && <p>Post Deleted Successfully</p>}
      </div>
      <div>
        <button onClick={() => update(id)}>Update title</button>
        {isUpdated && <p>Post Updated Successfully</p>}
      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
