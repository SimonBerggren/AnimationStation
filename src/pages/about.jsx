import * as React from 'react';
import Layout from '../components/layout/layout';

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle='About Me' animationIn='zoomInDown' animationOut='zoomOutUp'>
                <p>About</p>
            </Layout>
        </main>
    );
};

// Step 3: Export your component
export default AboutPage;