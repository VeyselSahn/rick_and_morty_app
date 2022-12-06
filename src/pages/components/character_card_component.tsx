import React from 'react'
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        backgroundColor: "rgb(60, 62, 68)",
        height: '220px',
        width: '600px',
        display: 'block',
        flexDirection: 'row',
        borderRadius: '10px',
    },
    image: {
        height: '220px',
        width: '250px',
        borderRadius: '10px',
    },
    h3: {
        color: 'blue',
        fontSize: '12px',
    },
    status: {
        height: '0.5rem',
        width: '0.5rem',
        marginRight: '0.375rem',
        background: 'rgb(85, 204, 68)',
        borderRadius: '50%',
    }
}));

export const CharacterCardComponent: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.card} >
            <img className={classes.image} src="https://rickandmortyapi.com/api/character/avatar/80.jpeg" alt="Rick Sanchez" />
            <Grid>
                <h3 className={classes.h3}>Rick Sanchez</h3>
                <h3 className={classes.h3}>: Alive - Human</h3>
                <h3 className={classes.h3}>Last known location:</h3>
                <h3 className={classes.h3}>Story Train</h3>
                <h3 className={classes.h3}>First seen in:</h3>
                <h3 className={classes.h3}>Never Ricking Morty</h3>
                <div className={classes.status}/>

            </Grid>
        </Grid>
    );
}