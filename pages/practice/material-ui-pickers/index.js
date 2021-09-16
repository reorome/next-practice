import React from 'react';
import Layout from '@/components/layout';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function DatePicker() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Layout>
      <Grid container justifyContent='space-around'>
        <TextField
          id='datetime-local'
          label='Next appointment'
          type='datetime-local'
          defaultValue='2017-05-24T10:30'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent='space-around' alignItems='center' direction='row'>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='yyyy/MM/dd'
            margin='normal'
            id='date-picker-inline'
            label='Date picker inline'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Grid container justifyContent='space-around' alignItems='center' direction='row'>
          <KeyboardDatePicker
            margin='normal'
            id='date-picker-dialog'
            label='Date picker dialog'
            format='yyyy/MM/dd'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        <Grid container justifyContent='space-around' alignItems='center' direction='row'>
          <KeyboardTimePicker
            margin='normal'
            id='time-picker'
            label='Time picker'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div>メモ :2021/09/04 23:30 メモ</div>
    </Layout>
  );
}
