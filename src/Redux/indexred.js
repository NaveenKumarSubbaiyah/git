const initstate = { counter : 0 }
export const indexRed = (state = initstate, action) => {
    console.log(state.initstate.counter);
    switch (action.type) {
        case "Increment":
            return state.counter + 1;
        case "Decrement":
            return state.counter - 1;
        default:
            return state.counter;
    }
}