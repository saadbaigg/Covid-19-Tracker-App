import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    container: {
        margin: '50px 0',
        [theme.breakpoints.down("sm")]: {
            margin: '30px 120px 30px 120px'
        },
        [theme.breakpoints.down("xs")]: {
            margin: '30px 70px 30px 70px'
        }
    },
    card: {
        margin: '0 2% !important',        
        // margin: '50px 0',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '10px !important' 
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: '10px !important'
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        borderBottom: '1px solid azure',
        fontWeight: 'bold'
    },
    infected: {
        // borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
        background: 'rgba(0, 0, 255, 0.5)'
    },
    recovered: {
        // borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
        background: 'rgba(0, 255, 0, 0.5)'
    },
    deaths: {
        // borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
        background: 'rgba(255, 0, 0, 0.5)'
    },
    vectors: {
        height: '100px',
        marginBottom: '10px'
    },
    bottomText: {
        textAlign: 'center'
    }

}))