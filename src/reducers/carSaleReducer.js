
export const initialState = {
    
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carSaleReducer = (state = initialState, action) => { 
    console.log('stoot', action);
    switch (action.type) {
        case 'BUY_ITEM' :
           
            const boughtItem = state.additionalFeatures.filter(item => item.id === action.payload)[0]

            // state.additionalFeatures.map(item => {
            //     if (item.id === action.payload) {
            //         // console.log(item.name);
            //         return {
            //         }
            //     }
            // })
            
            
            console.log(action.payload);
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, boughtItem] }
            };
        default: return state;

        
        // case 'REMOVE_FEATURE' :
        //     return {
        //         // car: state.car.features.filter(item => ),
        //         car: [ ...state.car, {features: [...state.car.features, ...newItem]}]
        //     }
    } 
}