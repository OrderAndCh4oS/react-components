import React from 'react';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

const Picture = ({src, sources, alt, className = null}) =>
    <picture>
        {sources.map(source => <source
            srcSet={source.srcSet} media={source.media}
        />)}
        <img
            alt={alt}
            src={src}
            className={`image picture ${className}`}
        />
    </picture>
;

const Caption = ({className = null, children, ...rest}) =>
    <p className={`${styles.text_caption} ${className}`} {...rest}>{children}</p>
;

export { Picture, Caption };
