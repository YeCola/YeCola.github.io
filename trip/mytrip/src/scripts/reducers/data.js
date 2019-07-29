import immutable from "immutable"

const defaultState = immutable.fromJS({
    userInfo: {}
})

export const data = (state = defaultState, action) => {
    console.log(action);

    switch (action.type) {

        case "getUserInfo":
            return state.set("userInfo", action.userInfo);
            break;

        default:
            return state;
            break;
    }
}