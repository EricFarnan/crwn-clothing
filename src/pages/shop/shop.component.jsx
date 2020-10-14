import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA      
        }
    }

    render() {
        // de-structure the collection from state so we can use the inner data
        const {collections} = this.state;

        return <div className='shop-page'>
            {
                // map the collections using the id and other properties into the CollectionPreview component
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    }
}

export default ShopPage;