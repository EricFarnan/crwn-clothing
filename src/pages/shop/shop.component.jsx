import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';

// match is an object from the Route in App.js that is basically a route listener with route data we can use
const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

export default ShopPage;