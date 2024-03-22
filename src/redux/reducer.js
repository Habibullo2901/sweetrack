const initialState = {
    suppliers: JSON.parse(localStorage.getItem('suppliers')) || []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SUPPLIER':
            localStorage.setItem('suppliers', JSON.stringify([ action.payload, ...state.suppliers]))
            return {
                suppliers: [ action.payload, ...state.suppliers]    
            }
        case 'ADD_PRODUCT':
            localStorage.setItem('suppliers', JSON.stringify(state.suppliers))
            return {
                suppliers: state.suppliers
            }
        default:
            return state
    }
}

export { reducer }