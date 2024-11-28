import apiFetch from "./apiFetch";

export const addPLantToCart = ({plantId,quantity,potColor})=> apiFetch("POST",`/cart/plants/${plantId}`,{
    quantity,
    pot_color:potColor,
});

export const getCart=()=> apiFetch("GET","/cart");

export const removeItemFromCart = ({itemId}) =>apiFetch("DELETE",`/cart/${itemId}`);