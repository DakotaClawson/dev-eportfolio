import Link from 'next/link';
import { makeStyles, createStyles, Typography, Theme, Grid, AppBar } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignContent: 'center',
            backgroundColor: theme.palette.secondary.main,
            padding: '0.5em',
        },
        codeIcon: {
            verticalAlign: 'sub',
        },
        gridButton: {
            alignSelf: 'center',
        },
        text: {
            textDecoration: 'none',
            color: theme.palette.gray.light,
            '&:hover:not($disabled):after': {
                backgroundColor: 'red',
            },
        },
    })
);
export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root}>
            <Grid container direction="row" spacing={2} alignContent="center">
                <Grid item className={classes.gridButton}>
                    <Typography variant="h5">
                        <Link href="/">
                            <a className={classes.text}>
                                Dak
                                <CodeIcon className={classes.codeIcon} />
                                ta
                            </a>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item className={classes.gridButton}>
                    <Typography>
                        <Link href="/about">
                            <a className={classes.text}>.about( )</a>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item className={classes.gridButton}>
                    <Typography>
                        <Link href="/about">
                            <a className={classes.text}>.contact( )</a>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </AppBar>
    );
}
