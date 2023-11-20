import React from 'react';

const IconContainer = ({ src, alt, height, width, ...rest }) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                cursor: 'pointer',
                height,
                width,
            }}
            {...rest}
        />
    );
};

export default IconContainer;
