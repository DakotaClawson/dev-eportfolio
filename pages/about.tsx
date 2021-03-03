import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

export default function About() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Typography variant="h4" component="h1" gutterBottom>
                    About
                </Typography>
                <Typography variant="body1" component="h1" gutterBottom>
                    As a recent graduate, I have been building my skills as a Software Engineer Developer at a small
                    software company called Mile Two. My goals as a developer are to continue gaining hands-on
                    experience building web applications. When I'm not coding, I spend most of my time outdoors playing
                    with my chocolate labrador, Freya.
                </Typography>
                <Typography variant="h5" component="h1" gutterBottom>
                    Skills
                </Typography>
                <ul>
                    <li>Web Application Development</li>
                    <li>Database Management</li>
                </ul>
                <Typography variant="h5" component="h1" gutterBottom>
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
                <Typography variant="h5" component="h1" gutterBottom>
                    Languages
                </Typography>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>SASS/CSS</li>
                </ul>
                <Typography variant="h5" component="h1" gutterBottom>
                    Experience
                </Typography>
                <Typography variant="h6" component="h1" gutterBottom>
                    Mile Two LLC - Software Developer Engineer Intern
                </Typography>
                <Typography variant="body1" component="h1" gutterBottom>
                    August 2020 - Current
                </Typography>
                <ul>
                    <li>Developing an application utilizing JavaScript and Postgres</li>
                    <li>Works with dynamic teams to develop API's and web application interfaces</li>
                    <li>Shares knowledge of developer tools in the form of presentations and documentation</li>
                </ul>
                <Typography variant="h5" component="h1" gutterBottom>
                    Education
                </Typography>
                <Typography variant="h6" component="h1" gutterBottom>
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
                {/* <Button variant="contained" color="primary" component={} naked href="/">
                    Home
                </Button> */}
            </Box>
        </Container>
    );
}
