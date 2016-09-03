// loginReducer

const initialState = {
    lol : 3,
    input : {
        email : 'nigga'
    },
    field : 'email'
}

export default function(state = initialState, action){
    let newState = Object.assign({}, state);
    switch(action.type){
        case 'input':
            newState.input[action.input] = action.text;
            return newState;
        case 'sendEmail':
            console.log('Change state field -> code')
            newState.field = 'code';
            return newState;
        default: 
            return state;
    }
}