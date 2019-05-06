import React from 'react';

const Picture = ({src, sources, alt, className = ''}) =>
    <picture>
        {sources.map(source => <source
            srcSet={source.srcSet} media={source.media}
        />)}
        <img
            alt={alt} src={src} className={'image picture ' + className}
        />
    </picture>
;

const Caption = ({children, className = ''}) =>
    <p className={'text text--caption ' + className}>
        {children()}
    </p>
;

export { Picture, Caption };
