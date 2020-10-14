import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    // onClick function using the withRouter props to access the route history
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {/* dynamically make styles on components using style= */}
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);