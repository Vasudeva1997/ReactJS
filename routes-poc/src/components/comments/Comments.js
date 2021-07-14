import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import CommentItem from "./CommentItem";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  // let comments = [];
  const [comments, setComments] = useState([]);
  const params = useParams();

  const { sendRequest, status: statusC, data } = useHttp(getAllComments);
  useEffect(() => {
    sendRequest(params.quoteID);
  }, [sendRequest, params]);
  const addComment = (comment) => {
    setComments((prevState) => {
      return prevState.concat(comment)
    });
  };
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  useEffect(() => {
    if (statusC === "completed") {
      setComments(data);
    }
  }, [data, statusC]);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {isAddingComment && <NewCommentForm addComment={addComment} />}
      {comments.map((comment) => {
        return <CommentItem key={comment.id} text={comment.text} />;
      })}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
