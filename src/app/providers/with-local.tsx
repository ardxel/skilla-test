import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export const withLocal = (component: Component) => () => (
  <LocalizationProvider dateAdapter={ AdapterDayjs } adapterLocale={'ru'}>
    { component() }
  </LocalizationProvider>
)