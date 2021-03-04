import React from 'react';
import Navbar from '../ components/Navbar';
import { makeStyles, createStyles, Typography, Theme, Grid } from '@material-ui/core';
import Layout from '../ components/Layout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignContent: 'center',
        },
        header: {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '75px 85px 70px 115px',
            padding: '5px',
        },
        title: {
            color: theme.palette.primary.dark,
        },
        body: {
            color: theme.palette.secondary.dark,
        },
    })
);
export default function About() {
    const classes = useStyles();
    return (
        <Layout>
            <Navbar />
            <Grid container spacing={4} direction="column" className={classes.root}>
                <Grid item sm={6}>
                    <Grid item sm={1} className={classes.header}>
                        <Typography color="secondary" variant="h4" component="h1" gutterBottom>
                            About
                        </Typography>
                    </Grid>
                    <Typography variant="body1" component="h1" gutterBottom>
                        As a recent graduate, I have been building my skills as a Software Engineer Developer at a small
                        software company called Mile Two. My current goal as a developer is to continue gaining hands-on
                        experience building web applications. When I'm not coding, I spend most of my time outdoors
                        playing with my chocolate labrador, Freya.
                    </Typography>
                    <Grid item direction="row">
                        <Typography color="secondary" variant="h5" component="h1" gutterBottom>
                            Skills
                        </Typography>
                        <ul>
                            <li>Web Application Development</li>
                            <li>Database Management</li>
                        </ul>
                        <Typography color="secondary" variant="h5" component="h1" gutterBottom>
                            Tools
                        </Typography>
                        <ul>
                            <li>React</li>
                            <li>React Testing Library</li>
                            <li>Jest</li>
                            <li>Node.js</li>
                            <li>Docker</li>
                            <li>Material UI</li>
                        </ul>
                        <Typography color="secondary" variant="h5" component="h1" gutterBottom>
                            Languages
                        </Typography>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>SASS/CSS</li>
                        </ul>
                    </Grid>
                    <Typography color="secondary" variant="h5" component="h1" gutterBottom>
                        Experience
                    </Typography>
                    <Typography variant="h6" component="h1" gutterBottom className={classes.title}>
                        Mile Two LLC - Software Engineer Developer Intern
                    </Typography>
                    <Typography variant="body1" component="h1" gutterBottom>
                        August 2020 - Current
                    </Typography>
                    <ul>
                        <li>Developing an application utilizing JavaScript and Postgres</li>
                        <li>Works with dynamic teams to develop API's and web application interfaces</li>
                        <li>Shares knowledge of developer tools in the form of presentations and documentation</li>
                    </ul>
                    <Typography color="secondary" variant="h5" component="h1" gutterBottom>
                        Education
                    </Typography>
                    <Typography variant="h6" component="h1" gutterBottom className={classes.title}>
                        Sinclair Community College
                    </Typography>
                    <Typography variant="body1" component="h1" gutterBottom>
                        Computer Information Systems - Software Development and Design
                    </Typography>
                    <Typography variant="body1" component="h1" gutterBottom>
                        Certifications
                    </Typography>
                    <ul>
                        <li>Fast Track Programming</li>
                        <li>IT Fundamentals</li>
                    </ul>
                </Grid>
            </Grid>
        </Layout>
    );
}
