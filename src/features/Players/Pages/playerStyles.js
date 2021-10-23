import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media : {
      height : 140,
    },
    productContainer : {
      marginTop : "3rem",
    },
    searchField : {
      marginBottom : "3rem",
      textAlign : "center"
    },
    searchTextField : {
      width : "50%"
    }
  }));

  export default useStyles;