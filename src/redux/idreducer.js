const initialState = {
    lastid : ''
}

const idreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LAST_ID':
            return {
                lastid: action.id
            }
        default:
            return state
    }
}

export { idreducer }