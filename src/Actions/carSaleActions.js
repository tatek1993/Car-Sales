export const removeFeature = id => {
    console.log('remove item', id);
    return { type: 'REMOVE_FEATURE', payload: id }

};

export const buyItem = id => {
    console.log("buyItem", id);
   return { type: 'BUY_ITEM', payload: id }

};

