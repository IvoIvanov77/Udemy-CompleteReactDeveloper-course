import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { loadShopData } from '../../redux/shop/shop.actions'
import SHOP_DATA from '../../data/shop.data';
import './collections-overview.style.scss';

class CollectionsOverview extends React.Component {

  componentDidMount() {
    console.log(SHOP_DATA)
    this.props.loadShopItems()
  }


  render() {
    const { shopItems } = this.props;
    return (
      <div className='collections-overview'>
        {shopItems.map(({ id, ...props }) =>
          <div key={id}>
            <CollectionPreview  {...props} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  shopItems: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  loadShopItems: () => dispatch(loadShopData(SHOP_DATA))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview);