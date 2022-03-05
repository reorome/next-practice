import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';

function SimpleDialog(props) {
  const { onClose, selectedValue, open, addRows } = props;
  const [row, setRow] = useState({ id: '', name: '' });

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleClick = (e, col) => {
    // addRows({ ...row, [col]: e.target.value });
    addRows(row);

    onClose();
  };

  const handleChange = (e, col) => {
    setRow({ ...row, [col]: e.target.value });
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ minWidth: 500 }} fullWidth>
      <DialogTitle>Set backup account</DialogTitle>
      <TextField
        id='outlined-basic'
        label='ID'
        variant='outlined'
        value={row.id}
        onChange={(e) => handleChange(e, 'id')}
      />
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        value={row.name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <Button variant='outlined' onClick={handleClick}>
        Create
      </Button>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const { addRows } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} addRows={addRows} />
    </div>
  );
}
