import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Allquotes from "./pages/AllQuotes";
import Newquote from "./pages/NewQuote";
import Notfound from "./pages/NotFound";
import Quotedetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
