import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Route } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];
const QuoteDetail = (props) => {
  const params = useParams();
  const match = useRouteMatch();
  const { sendRequest, status, data } = useHttp(getSingleQuote);
  useEffect(() => {
    sendRequest(params.quoteID);
  }, [sendRequest, params]);
  const quote = data;
  console.log(match);
  if(status === "pending"){
    return <LoadingSpinner/>
  }
  if (quote === null) return <p>No Quote Found...!!</p>;
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`}>
            <button className="btn--flat"> Load Comments</button>
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments  />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
