import React from 'react'
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { SearchInputComponent } from '../components/search_input_component';
import { CharacterCardComponent } from '../components/character_card_component';



const useStyles = makeStyles((theme: Theme) => ({
    search: {
        backgroundColor: "#ffffff",
        height: 'calc(20%)',
    },
    result: {
        backgroundColor: "rgb(32, 35, 41)",
        height: 'calc(80%)',
        padding: '10px 10px 10px 10px',
    },
}));


export const MainPage: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid item height={window.innerHeight}>
            <Grid className={classes.search}>
                <SearchInputComponent />
            </Grid>
                <Grid container rowSpacing={2} columnSpacing={2} columns={{ xs: 4, sm: 8, md: 12, lg:8 }} className={classes.result}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} lg={4} key={index}>
                            <CharacterCardComponent />
                        </Grid>
                    ))}
            </Grid>
        </Grid>
    );
}
