import Layout from '@/components/layout';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

const PostPage = () => {
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
    </Layout>
  );
};

export default PostPage;
