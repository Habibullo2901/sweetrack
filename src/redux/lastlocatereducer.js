const initialState = {
    lastLocation: '/home'
}

const lastLocatereducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LAST_LOCATION':
            return {
                lastLocation: action.location
            }
        default:
            return state
    }
}

export { lastLocatereducer }