import Layout from '@/components/layout';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SampleDialogDemo from '@/components/SampleDialogDemo';

function createRow(id, name) {
  return { id, name };
}

const rowsOrg = [createRow('1', 'id1'), createRow('2', 'id2')];

const PostPage = () => {
  const [rows, setRows] = useState(rowsOrg);

  const addRows = (row) => {
    setRows([...rows, row]);
    console.log(rows);
  };

  return (
    <Layout>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
        <InputLabel htmlFor='filled-adornment-amount'>Amount</InputLabel>
        <FilledInput id='filled-adornment-amount' value='' variant='outlined' />
      </FormControl>
      <SampleDialogDemo addRows={addRows}></SampleDialogDemo>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align='right'>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align='right'>{row.id}</TableCell>
                <TableCell component='th' scope='row' align='right'>
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default PostPage;
