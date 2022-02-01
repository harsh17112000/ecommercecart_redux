const INIT_STATE = {
    hives: [],
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
           
            return {
                ...state,
                hives: [...state.hives, action.payload],
            };
        
        case "RMV_CART":

            const data =  state.hives.filter((el)=> el.id !== action.payload)

            return{
                ...state,
                hives : data
            } 
        default:
            return state
    }

}







// explanation
// export const cartreducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "ADD_CART":
//             // console.log({...state});
//             return {
//                 ...state,    // means starting ma blank state 6
//                 hives: [...state.hives, action.payload], // means array blank 6 pachi tema payload ni value add thay 6
//             };
        
//         case "RMV_CART":
//             return{
//                 ...state, // means starting ma all value 6 
//                 hives : state.hives.filter((el)=> el.id !== action.payload) // and dlt click pr filter karie 6 amd array maj set karie 6
//             } 
//         default:
//             return state
//     }

// }

//   case "RMV_CART":
// const dat = state.hives.filter((el)=> el.id !== action.payload)
//             return{
//                 ...state, // means starting ma all value 6 
//                 hives : dat //  alg variable bnai ne karie tob chale
//             } 