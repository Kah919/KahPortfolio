import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE':
            console.log("HIHIHIHIH")
            console.log(state)
            return {
                dark: !state.dark
            };
        default: {
            return state
        }
    }
}

const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, {dark: false});
    return { globalState, globalDispatch }
}

export default useGlobalState;