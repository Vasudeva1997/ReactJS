import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, error, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed" && !error ) {
      history.push("/quotes");
    }
  }, [status, history,error]);
  const onAddQuote = (quote) => {
    sendRequest(quote);
  };
  return (
    <React.Fragment>
      {error && <div className="centered">{error}</div>}
      <QuoteForm onAddQuote={onAddQuote} loading={false} />
    </React.Fragment>
  );
};

export default NewQuote;
