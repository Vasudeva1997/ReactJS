import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";
import Layout from "./components/layout/Layout";
// import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFoundPage";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NotFound = React.lazy(() => import("./pages/NotFoundPage"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteID">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
