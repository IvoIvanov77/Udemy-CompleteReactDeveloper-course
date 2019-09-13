import { createSelector } from 'reselect';



const selectShopData = (state) => state.shopData;

export const selectShopItems = createSelector(
    [selectShopData],
    shopData => shopData.items
)

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    items => Object.keys(items).map(key => items[key])
  );

export const selectShopCollection = urlParam =>
    createSelector(
        [selectShopItems],
        items => items[urlParam]            
    )

