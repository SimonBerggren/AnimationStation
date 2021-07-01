import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

// markup
const NotFoundPage = () => {
    return (
        <Layout pageTitl='Not found'>
            <Link to='/'>Go home</Link>
        </Layout>
    );
};

export default NotFoundPage;
