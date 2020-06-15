import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    footer: {
        borderTopRightRadius: '15px',
        borderTopLeftRadius: '15px',
    },
    toolbar: {
        display: 'flex',
        // justifyContent: 'space-around'
    },
    vector: {
        height: '200px',
        [theme.breakpoints.down("sm")]: {
            height: '150px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '100px'
        },    
    },
    typo: {
        fontFamily: 'monospace',
        borderBottom: '1px solid azure',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1em'
        },    
    },
    typo2: {
        fontFamily: 'monospace',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.9em'
        },    
    }
}));

