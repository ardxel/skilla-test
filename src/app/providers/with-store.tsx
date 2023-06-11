import {Provider} from "react-redux";
import {store} from "../store";

export const withStore = (component: Component) => () => (
  <Provider store={store}>{component()}</Provider>
)