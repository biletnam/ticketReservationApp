// loginReducer

const initialState = {
    lol : 3,
    input : {
        email : 'nigga'
    }
}

export default function(state = initialState, action){
    let newState = Object.assign({}, state);
    switch(action.type){
        case 'input':
            newState.input[action.input] = action.text;
            return newState;
        case 'send':
            console.log('send');
            newState.lol++;
            return newState;
        default: 
            return state;
    }
}