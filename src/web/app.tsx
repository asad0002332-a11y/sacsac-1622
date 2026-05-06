import { Route, Switch } from "wouter";
import Index from "./pages/index";
import GuideUSA from "./pages/guides/usa";
import GuideUK from "./pages/guides/uk";
import GuideAustralia from "./pages/guides/australia";
import GuideCanada from "./pages/guides/canada";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Contact from "./pages/contact";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/guides/usa" component={GuideUSA} />
        <Route path="/guides/uk" component={GuideUK} />
        <Route path="/guides/australia" component={GuideAustralia} />
        <Route path="/guides/canada" component={GuideCanada} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/contact" component={Contact} />
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
