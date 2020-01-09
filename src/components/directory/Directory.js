import React, {Component} from 'react';
import './Directory.scss';
import MenuItem from "../menuItem/MenuItem";
import { sections } from "./directory.data";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { sections };
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        const { sections } = this.state;
        return sections.map(item => {
            return <MenuItem key={item.id} item={item} />
        });
    }

    render() {
        return (
            <div className="directory-menu">
                { this.renderList() }
            </div>
        );
    }
}

export default Directory;