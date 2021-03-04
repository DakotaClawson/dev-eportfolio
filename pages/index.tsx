import Image from 'next/image';
import { makeStyles, createStyles, Typography, Theme, Grid } from '@material-ui/core';
import Navbar from '../ components/Navbar';
import Layout from '../ components/Layout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignContent: 'center',
        },
        paper: {
            background: theme.palette.gray.light,
            boxShadow: `0 0.125em 0.25em 0 ${theme.palette.shadow.main}, 0 0.1875em 0.625em 0 ${theme.palette.shadow.main}`,
            padding: '2em',
        },
        linkButton: {
            marginLeft: '1em',
        },
        photoGrid: {
            textAlign: 'center',
            alignSelf: 'center',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '75px 65px 70px 115px',
            //width: '15%',
        },
        bioGrid: {
            alignSelf: 'center',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '115px 70px 85px 75px',
            marginTop: '10px',
            textAlign: 'center',
            //width: '35%',
        },
        photo: {
            borderRadius: '90px',
            //boxShadow: `.90em .90em .90em 0 ${theme.palette.shadow.main}`,
        },
        name: {
            color: theme.palette.secondary.dark,
        },
        title: {
            color: theme.palette.primary.dark,
        },
        body: {
            color: theme.palette.secondary.dark,
        },
    })
);

export default function Home() {
    const classes = useStyles();

    return (
        <Layout>
            <Navbar />
            <Grid container spacing={4} direction="column" className={classes.root}>
                <Grid item sm={12} direction="column" className={classes.photoGrid}>
                    <Image className={classes.photo} src="/Dakota.jpg" alt="Dakota" width={190} height={195} />
                </Grid>
                <Grid item sm={3} direction="column" className={classes.bioGrid}>
                    <Typography variant="h4" component="h1" gutterBottom className={classes.name}>
                        Dakota Clawson
                    </Typography>
                    <Typography variant="h5" component="h1" gutterBottom className={classes.title}>
                        Software Engineer
                    </Typography>
                    <Typography variant="body1" component="h1" gutterBottom className={classes.body}>
                        Hi there! I'm working remotely in southwestern Ohio. I build web applications using React, Node,
                        and Postgres.
                    </Typography>
                </Grid>
            </Grid>
        </Layout>
    );
}
