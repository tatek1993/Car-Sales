
export const carSaleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            const newItem = {
                name: action.payload.name,
                price: action.payload.price
            }
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, ...newItem] }
            };


        case 'BUY_ITEM' :
            const boughtItem = {
                name: action.payload.name,
                price: action.payload.price
            }
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, ...boughtItem] }
            };

        case 'REMOVE_FEATURE' :
            return {
                car: state.car.features.filter(item => ),
                car: [ ...state.car, {features: [...state.car.features, ...newItem]}]
            }
    } 
}