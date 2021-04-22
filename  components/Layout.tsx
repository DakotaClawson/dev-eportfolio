import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Footer from './Footer';

type Props = {
    children?: ReactNode;
    title?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '8em',
            alignContent: 'center',
            backgroundColor: theme.palette.gray.light,
            minHeight: '44rem',
            width: '100%',
            margin: '0px',
        },
        footer: {
            backgroundColor: theme.palette.secondary.main,
            padding: '5em',
        },
    })
);

export default function Layout({ children, title = 'Dakota Clawson' }: Props) {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={classes.root}>{children}</div>
            <Footer />
        </>
    );
}
