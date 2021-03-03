import Link from 'next/link';
import { makeStyles, createStyles, Typography, Theme, Grid } from '@material-ui/core';
//type Props = {};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignContent: 'center',
            backgroundColor: theme.palette.secondary.main,
            margin: '0px',
            paddingBottom: '1em',
        },
        text: {
            textDecoration: 'none',
            color: theme.palette.secondary.dark,
            '&:hover:not($disabled):after': {
                backgroundColor: 'red',
            },
        },
    })
);
export default function Navbar() {
    const classes = useStyles();
    return (
        <Grid container sm={12} direction="row" spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant="h5">
                    <Link href="/">
                        <a className={classes.text}>Home</a>
                    </Link>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    <Link href="/about">
                        <a className={classes.text}>About</a>
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
}
