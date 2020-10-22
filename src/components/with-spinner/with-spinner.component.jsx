import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// Higher Ordered Component (HOC)
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    );
};

export default WithSpinner;