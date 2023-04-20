import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

const Calendar = () => {
  const [value, setValue] = React.useState(new Date());
  const [highlightedDays, setHighlightedDays] = React.useState([
    new Date(2023, 3, 1),
    new Date(2023, 3, 2),
    new Date(2023, 3, 3),
    new Date(2023, 3, 4),
    new Date(2023, 3, 5)
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        textField={<TextField />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected = highlightedDays.some(
            (highlightedDay) =>
              day.getFullYear() === highlightedDay.getFullYear() &&
              day.getMonth() === highlightedDay.getMonth() &&
              day.getDate() === highlightedDay.getDate()
          )

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <CheckIcon color="black" /> : undefined}>
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;