import Image from 'next/image';
import { makeStyles, createStyles, Typography, Theme, Grid, Paper, Grow, Fade } from '@material-ui/core';
import Navbar from '../ components/Navbar';
import Layout from '../ components/Layout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignContent: 'center',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '70px 135px 90px 115px;',
            padding: '10px',
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
            textAlign: 'right',
            paddingRight: '1em',
        },
        photoPaper: {
            textAlign: 'center',
            alignSelf: 'center',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '75px 65px 70px 115px',
            padding: '10px',
            width: '50%',
            //width: '15%',
        },
        bioGrid: {
            alignSelf: 'center',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '115px 70px 85px 75px',
            marginLeft: '10px',
            textAlign: 'center',
            padding: '10px',
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
            <Fade in timeout={{ appear: 500, enter: 700, exit: 1000 }}>
                <Grid
                    container
                    //spacing={4}
                    direction="row"
                    //alignContent="center"
                    alignItems="center"
                    className={classes.root}
                >
                    <Grid item sm={1} md={5} className={classes.photoGrid}>
                        {/* <Paper className={classes.photoPaper}> */}
                        <Image className={classes.photo} src="/Dakota.JPG" alt="Dakota" width={190} height={195} />
                        {/* </Paper> */}
                    </Grid>
                    <Grid item sm={5}>
                        {/* <Paper className={classes.bioGrid}> */}
                        <Typography variant="h4" component="h1" gutterBottom className={classes.name}>
                            Dakota Clawson
                        </Typography>
                        <Typography variant="h5" component="h1" gutterBottom className={classes.title}>
                            Software Engineer
                        </Typography>
                        <Typography variant="body1" component="h1" gutterBottom className={classes.body}>
                            Hi there! I'm working remotely in southwestern Ohio. I build web applications using React,
                            Node, and Postgres.
                        </Typography>
                        {/* </Paper> */}
                    </Grid>
                </Grid>
            </Fade>
        </Layout>
    );
}
