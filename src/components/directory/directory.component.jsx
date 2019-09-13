import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { selectDirectoryCategories } from '../../redux/directory/directory.selectors';
import { loadCategories } from '../../redux/directory/directory.actions';
import CATEGORIES from '../../data/categories.data'


class Directory extends React.Component {

    componentDidMount() {       
        this.props.loadCategories()
    }

    render() {
        const { categories } = this.props;
        return (
            <div className='directory-menu'>
                {categories.map(({ id, ...props }) =>
                    <MenuItem
                        key={id}
                        subtitle='SHOP NOW'
                        {...props}>
                    </MenuItem>
                )}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
})

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories(CATEGORIES))
})

export default connect(mapStateToProps, mapDispatchToProps)(Directory);