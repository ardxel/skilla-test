import {Route, Routes} from "react-router-dom";
import CallsPage from "./calls-page";

export const AppRoutes = () => (
  <Routes>
    <Route path='/' index element={<CallsPage/>} />
  </Routes>
)