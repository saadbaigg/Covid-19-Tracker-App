import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cx from 'classnames'
import footerVector from '../images/footer_vector3.png'
import { useStyles } from './StyleFooter'


export default function Footer() {

    const classes = useStyles();

  return (
    <div className={classes.container}>

        <AppBar position="static" className={classes.footer} >
            <Toolbar variant="dense" className={classes.toolbar} >
                <img src={footerVector} className={classes.vector} />
                <div>
                    <Typography variant="h4" className={classes.typo} >
                        Saad Baig    
                    </Typography>
                    <Typography variant="h6" className={classes.typo2}>
                        github: @7-baig
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}
