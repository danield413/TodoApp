import React from 'react'
import { TextField,  Button, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import { Context } from '../globalState/context';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Form = ({classes}) => {

    const { register, handleSubmit, reset } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const { dispatch } = useContext(Context);
    //Custom Hook
    const { setLocalStorage } = useLocalStorage();

    const onSubmit = (values) => {
        const {title, description, importance} = values;
        if(title || description || importance) {
            if(description.length === 0 || title.length === 0 ) {
                enqueueSnackbar('Revisa el formulario', { variant: 'error' });
            } else {
                //OK
                const data = {
                    ...values,
                    id: uuidv4()
                }
                enqueueSnackbar('Todo agregado!', { variant: 'success' });
                dispatch({
                    type: 'ADD',
                    payload: data
                })
                setLocalStorage( data );
                reset();
            }
        } else {
            enqueueSnackbar('Revisa el formulario', { variant: 'error' });
        }
    }

    return (
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField 
                className={classes.input} 
                label="Tarea" 
                variant="outlined"
                {...register("title")}
            />
            <TextField
                label="Descripción"
                multiline
                rows={4}
                variant="outlined"
                className={classes.input} 
                {...register("description")}
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Nivel de importancia</FormLabel>
                <RadioGroup 
                    row aria-label="position" 
                    {...register("importance")}
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="Mínimo"
                        labelPlacement="bottom"
                        className={classes.radio}
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="Medio"
                        labelPlacement="bottom"
                        className={classes.radio}
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="Alto"
                        labelPlacement="bottom"
                        className={classes.radio}
                    />
                </RadioGroup>
            </FormControl>
            <Button type="submit" className={classes.submit} variant="contained" size="large" color="primary" startIcon={<SaveIcon />}
            >
                Guardar
            </Button>
        </form>
    )
}

