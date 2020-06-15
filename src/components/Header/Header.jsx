import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import cx from 'classnames'
import virus from './virus.png'
import { useStyles } from './Style'


export default function Header() {

    const classes = useStyles();

  return (
    <div className={classes.container}>

        <AppBar position="static" className={classes.right} >
            <Toolbar variant="dense">
                <img src={virus} className={classes.logo}/>
            </Toolbar>
        </AppBar>
        <AppBar position="static" className={classes.left} >
            <Toolbar variant="dense" className={classes.typo} >
                <Typography variant="h4" color="inherit" className={classes.heading} >
                    COVID-19 TRACKER
                </Typography>
                <Typography  color="inherit" className={classes.para}>
                    The Coronavirus (COVID-19) was first reported in Wuhan, China in December 2019,
                    the outbreak was later recognized as a pandemic by the World Health Organization (WHO)
                    on March 2020.
                </Typography>
                <Button href="https://www.who.int/" variant="contained" className={classes.button} >
                    Visit WHO.org
                </Button>
                </Toolbar>
        </AppBar>


    </div>
  );
}
