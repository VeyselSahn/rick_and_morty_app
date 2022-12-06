import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';



const useStyles = makeStyles((theme: Theme) => ({
    search: {
        backgroundColor: "#ffffff",
        width: '300px',
        height: '30px',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
    },
    title:{
        textAlign: 'center',
    }
}));

export const SearchInputComponent: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid>
            <h1 className={classes.title}>The Rick And Morty App</h1>
            <input type="text" className={classes.search} placeholder='Search character' />
        </Grid>
    );
}