import { TYPE_KEY } from "../common/constant";

const DATA_LOADED = "DATA_LOADED";

export const DATA = "data";

export const initialState = {
    [DATA]: ""
};

export default function reducer( state = initialState, action ) {
    let newState;
    switch ( action[ TYPE_KEY ] ) {

        case DATA_LOADED:
            newState = {
                ...state,
                [DATA]: action[ DATA ]
            };
            break;
        default:
            newState = {
                ...state
            };
            break;
    }
    return newState;
}

export function dataLoadedSuccessful( ) {
    return {
        [TYPE_KEY]: DATA_LOADED,
        [DATA]: "welcome"
    };
}
