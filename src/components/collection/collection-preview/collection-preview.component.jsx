import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {/* filter the items that come in to only display 4 maximum, map data to display a div for each item with the item key and name */}
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div> 
    </div>
)

export default CollectionPreview;