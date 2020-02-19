export const removeFeature = item => {
    // dispatch an action here to remove an item
};

export const buyItem = id => {
    console.log("buyItem", id);
   return { type: 'BUY_ITEM', payload: id }

};

