import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AppBar, Typography } from '@material-ui/core';
import { ToDoList } from '../components/ToDoList'
import { Graphic } from '../components/Graphic'
import { Form } from '../components/Form'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        color: '#fff',
        height: '100vh',
        width: '100%'
    }, 
    bar: {
        padding: '0 !important',
    },
    appbar: {
        padding: '1rem',
        marginBottom: '1rem'
    },
    appbartwo: {
        padding: '1rem',
        marginBottom: '1rem',
        color: "#242424",
        backgroundColor: 'white',
        textAlign: 'center'
    },
    main: {
        padding: '0 !important',
        backgroundColor: '#2196F3'
    },
    graphics: {
        padding: '0 1rem',
    },
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    input: {
        width: '90%',
        marginBottom: '1rem',
    },
    submit: {
        width: '90%',
    },
    radio: {
        color: '#242424',
        marginBottom: '1rem',
    },
    wrapper: {
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '5px'
    },
    black: {
        color: 'black'
    }
}));

export default function Screen() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={3} className={classes.bar}>
                <AppBar position="static" className={classes.appbar}>
                    <Typography variant="h6">
                        TodoApp
                    </Typography>
                </AppBar>
                <Form classes={classes}/>
            </Grid>
            <Grid item xs={9} className={classes.main}>
                <Grid container >
                    <AppBar position="static" className={classes.appbartwo} >
                        <Typography variant="h6">
                            Administrar tareas
                        </Typography>
                    </AppBar>
                    <Grid item xs={6}>
                        <ToDoList classes={classes}/>
                    </Grid>
                    <Grid item xs={6} className={classes.graphics}>
                        <div className={classes.wrapper}>
                            <Graphic />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}