import React, { useContext } from 'react'
import {  Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import { useSnackbar } from 'notistack';
import Fade from '@material-ui/core/Fade';
import { Context } from '../globalState/context';
import { useLocalStorage } from '../hooks/useLocalStorage';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '1rem'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

export const ToDo = ({title, description, importance, id}) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const { dispatch } = useContext(Context);
    const { deleteFromLS } = useLocalStorage();

    const handleClick = () => {
        dispatch({
            type: 'COMPLETE',
            payload: id
        })
        deleteFromLS( id );
        enqueueSnackbar('Tarea completada, bien hecho!', { variant: 'success' });
    };

    const getImportance = ( number ) => {
        if(number === '1') {
            return 'Mínimo'
        }
        if(number === '2') {
            return 'Medio'
        }
        if(number === '3') {
            return 'Alto'
        }
    }

    return (
        <Fade in={true}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        {title}
                    </Typography>
                    
                    <Typography color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography color="textSecondary" component="p">
                        Importancia: <strong>{getImportance(importance)}</strong>
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Fab 
                        size="medium" 
                        color="secondary" 
                        onClick={handleClick}
                    >
                        <DoneIcon />
                    </Fab>
                </CardActions>
            </Card>
        </Fade>
    )
}
