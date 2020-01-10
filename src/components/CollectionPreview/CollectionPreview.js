import React from 'react';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    const collections =
        items &&
        items
            .filter((item, index) => index < 4)
            .map(item => {
        return (
            <div key={item.id}>{item.name}</div>
        );
    });
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                { collections }
            </div>
        </div>
    );
};

export default CollectionPreview;