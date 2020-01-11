import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
    const collections =
        items &&
        items
            .filter((item, index) => index < 4)
            .map(({id, ...itemProps}) => {
                return (
                    <CollectionItem key={id} {...itemProps} />
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