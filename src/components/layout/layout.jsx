import React from 'react';
import { Helmet } from 'react-helmet';
import { Animated } from 'react-animated-css';

import Navbar from '../navbar/navbar';

import * as style from './layout.module.css';

const Layout = ({ pageTitle, children, ...props }) => {
    return (
        <main className={style.container}>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>{pageTitle}</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'/>
            </Helmet>

            <Navbar />

            <Animated {...props}>
                <h1 className={style.heading}>{pageTitle}</h1>
                {children}
            </Animated>
        </main>
    );
};

export default Layout;