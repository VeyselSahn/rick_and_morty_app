import Box from '@mui/material/Box';
import React from 'react'
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Col } from 'react-bootstrap';
import { SearchInputComponent } from './components/search_input_component';



const useStyles = makeStyles((theme: Theme) => ({
    search: {
        backgroundColor: "#ffffff",
        width: '100%',
        height: 'calc(20%)',
        paddingBottom: '10px',
    },
    result: {
        backgroundColor: "#313D3E",
        width: 'calc(100%)',
        height: 'calc(80%)',
        minHeight: 'calc(80%)',
    },
    h1: {
        padding: '0 0px 0px 0px',
        color: "#000000",
        fontSize: '50px',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
}));


export const MainPage: React.FC = () => {
    const classes = useStyles()
    return (
        <Col style={{height: 'calc(%100)'}}>
            <Box className={classes.search}>
                <SearchInputComponent></SearchInputComponent>
            </Box>
            <Box className={classes.result}>
                <h1 className={classes.h1}>Result side</h1>
            </Box>
        </Col>
    );
}
