import {  useRef } from "react";
import {  useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import React from "react";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams();
  const { sendRequest, status } = useHttp(addComment);
  // useEffect(() => {
  //   if (status === "completed") {
  //     history.replace(location.pathname);
  //   }
  // }, [status, history, location]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    let comment = {
      commentData: commentTextRef.current.value,
      quoteId: params.quoteID,
      id: "key" + Math.random(),
      text: commentTextRef.current.value,
    };
    sendRequest(comment);
    props.addComment(comment);
    // optional: Could validate here

    // send comment to server
  };

  return (
    <React.Fragment>
      {status === "pending" && <LoadingSpinner />}
      {status !== "pending" && (
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control} onSubmit={submitFormHandler}>
            <label htmlFor="comment">Your Comment</label>
            <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Comment</button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default NewCommentForm;
