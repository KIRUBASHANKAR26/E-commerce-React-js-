import * as actionTypes from "../actionTypes"

export const getProducts = (payload) => ({
    type: actionTypes.GET_PRODUCTS,
    payload
})
export const addProduct = (payload) => ({
    type: actionTypes.ADD_PRODUCT,
    payload
})
export const getSearchValue = (payload) => ({
    type: actionTypes.SEARCH_VALUE,
    payload
})
export const getPayment = (payload) => ({
    type: actionTypes.PAYMENT,
    payload
})
