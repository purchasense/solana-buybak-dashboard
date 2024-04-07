// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: '100vh'
}));

export default Wrapper;
