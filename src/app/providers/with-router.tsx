import {BrowserRouter} from "react-router-dom";

export const withRouter = (component: Component) => () => (
  <BrowserRouter>
    {component()}
  </BrowserRouter>
)