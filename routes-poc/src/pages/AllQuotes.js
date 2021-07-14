import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadSpinner from "../components/UI/LoadingSpinner";
let DUMMY_QUOTES = [];
const AllQuotes = (props) => {
  const { status, data, sendRequest, error } = useHttp(getAllQuotes);
  let content = <QuoteList quotes={DUMMY_QUOTES} />;
  if (status === "completed") {
    DUMMY_QUOTES = data;
    if (data === null || DUMMY_QUOTES.length === 0) {
      content = (
        <div className="centerd">
          <h2>No Quotes...!! Add some quote</h2>
        </div>
      );
      if (error) {
        content = (
          <div className="centerd">
            <h2>{error}</h2>
          </div>
        );
      }
    } else content = <QuoteList quotes={DUMMY_QUOTES} />;
  } else {
    content = <LoadSpinner />;
  }
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return <React.Fragment>{content}</React.Fragment>;
};

export default AllQuotes;
