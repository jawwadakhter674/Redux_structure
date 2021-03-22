import { Add_TO_Cart ,Remove_TO_Cart} from "../constant"

export const addToCart=(data)=>{

    console.log(data)
return{
    type:Add_TO_Cart,
    data:data
}

}



export const removeToCart=()=>{
return{
    type:Remove_TO_Cart,
   
}

}