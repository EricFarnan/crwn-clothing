import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({match, collection}) => {
    const {title, items } = collection;

    return (
    <div className='collection-page'>
        {console.log(collection)}
        <h2 className='title'>{title}</h2>
        <div className='items'>
            { items.map(item => (<CollectionItem key={item.id} item={item}/>)) }
        </div>
    </div>
    );
};

// ownProps are the existing properties on the component
const mapStateToProps = (state, ownProps) => ({
    // ownProps match params collectionId is the route path
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);