import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, asc) => {
  return quotes.sort((quoteA, quoteB) => {
    if (asc) {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
    return quoteA.id > quoteB.id ? -1 : 1;
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const isAscendingSorted = queryParams.get("sort") === "asc";
  const ascendingSort = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscendingSorted ? "desc" : "asc"}`,
    });
  };

  const sortedQuotes = sortQuotes(props.quotes, isAscendingSorted);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={ascendingSort}>
          Sort {isAscendingSorted ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
