import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
        this.renderCollection = this.renderCollection.bind(this);
    }

    renderCollection(collections) {
        return collections.map(({id, ...others}) => {
            return <CollectionPreview key={id} {...others} />
        });
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                { this.renderCollection(collections) }
            </div>
        );
    }
}

export default ShopPage;