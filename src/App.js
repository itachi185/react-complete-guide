import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Allquotes from "./pages/AllQuotes";
import Newquote from "./pages/NewQuote";
import Notfound from "./pages/NotFound";
import Quotedetail from "./pages/QuoteDetail";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
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
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Allquotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quotedetail />
          </Route>
          <Route path="/new-quote">
            <Newquote />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
