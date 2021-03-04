import React from 'react';
import { makeStyles, createStyles, Typography, Theme, Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.gray.light,
            padding: '2em 10em 2em 10em',
        },
        copyright: {
            textAlign: 'end',
            alignSelf: 'center',
        },
    })
);

export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <footer className={classes.root}>
                <Grid container>
                    <Grid item sm={1}>
                        <IconButton aria-label="GitHub" href="https://github.com/DakotaClawson">
                            <GitHubIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Grid>
                    <Grid item sm={1}>
                        <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/dakotaclawson">
                            <LinkedInIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Grid>
                    <Grid item sm={10} className={classes.copyright}>
                        <Typography>© 2021, Built by Dakota Clawson. All rights reserved</Typography>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}
