import { Add_TO_Cart ,Remove_TO_Cart} from "../constant";

const initial_state={
    cardData:[]
}

export const cardItems=(state=[],action)=>{

    switch (action.type) {
        case Add_TO_Cart:
            console.log("reducer",action)
            return[
                ...state,
                {cardData:action.data}
            ]
            break;
        case Remove_TO_Cart:
            console.log("reducer",action)
            state.pop()
            return[
                ...state,
            
            ]
            break;
    
        default:
            return state
    }


}