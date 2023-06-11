import {withProviders} from "./providers";
import {GlobalStyles} from "./styles";
import {Sidebar} from "widgets/sidebar";
import {AppRoutes} from "pages";
import {Header} from "widgets/header";

const App = withProviders(() => (
  <>
    <GlobalStyles/>
    <Sidebar/>
    <Header/>
    <AppRoutes/>
  </>
))

export default App;