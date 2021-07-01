import * as React from 'react';
import Layout from '../components/layout/layout';

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle='Home Page' animationIn='bounceIn' animationOut='bounceOut' >
                <p>Home</p>
            </Layout>
        </main>
    );
};

export default IndexPage;