import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

const Calendar = () => {
    const [value, setValue] = React.useState(new Date());
    const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 3, 4, 5]);
    console.log(highlightedDays);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker 
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
            const isSelected = !DayComponentProps.outsideCurrentMonth && highlightedDays.indexOf(day.getDate()) >= 0;

            return (
                <Badge
                    key={day.toString()}
                    overlap="circular"
                    badgeContent={isSelected ? <CheckIcon color='black' /> : undefined}>
                    <PickersDay {...DayComponentProps} />
                </Badge>
            );
        }}
        />
    </LocalizationProvider>
  );
};

export default Calendar