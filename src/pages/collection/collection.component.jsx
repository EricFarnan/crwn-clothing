import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({match, collection}) => (

    <div className='collection-page'>
        {console.log(collection)}
        <h2>COLLECTION PAGE</h2>
    </div>
);

// ownProps are the existing properties on the component
const mapStateToProps = (state, ownProps) => ({
    // ownProps match params collectionId is the route path
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);