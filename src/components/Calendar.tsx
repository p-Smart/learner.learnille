import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateCalendar,
  DateCalendarProps,
} from "@mui/x-date-pickers/DateCalendar";
import { FC, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

interface ICalendar extends DateCalendarProps<Dayjs> {
  date?: Date;
  setDate?: (date: Date) => void;
}

const Calendar: FC<ICalendar> = ({ date, setDate, ...rest }) => {
  const theme = createTheme({
    typography: { fontFamily: "Proxima Nova" },
    palette: { primary: { main: "#4364f7" } },
  });

  const [internalValue, setInternalValue] = useState<Dayjs | null>(dayjs());

  const value = date ? dayjs(date) : internalValue;
  const handleChange = (newValue: Dayjs | null) => {
    if (setDate && newValue) setDate(newValue.toDate());
    else setInternalValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ width: "100%" }}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          {...rest}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Calendar;
