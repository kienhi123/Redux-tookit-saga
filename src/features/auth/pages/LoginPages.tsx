import { makeStyles, Paper, Typography, Box, Button } from '@material-ui/core';
import * as React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    box: {
        padding: theme.spacing(2)
    }
}))


export default function LoginPages() {
    const classes = useStyles()
    const dispach = useAppDispatch();
    const handleLoginClick = () => {
        dispach(
            authActions.login({
                username: '',
                password: '',
            })
        )
    }
    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant='h5' component="h1">Student Management</Typography>

                <Box mt={4}>
                    <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>Fake Login</Button>
                </Box>
            </Paper>
        </div >
    );
}
function useAppDispatchDispatch() {
    throw new Error('Function not implemented.');
}

