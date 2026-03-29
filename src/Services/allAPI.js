import commonAPI from "./commonAPI";
import serverURL from "./serverURL";


export const newRegisterAPI = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/register`, reqBody)
}

export const loginAPI = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/login`, reqBody)
}

export const plantAPI = async (reqBody, reqHeader) => {
    return await commonAPI('POST', `${serverURL}/add-plant`, reqBody, reqHeader)
}

export const viewAllAPI = async () => {
    return await commonAPI('GET', `${serverURL}/all-plant`)
}

export const deletePlantAPI = async (plantname) => {
    return await commonAPI('DELETE', `${serverURL}/remove-plant/${plantname}`)
}

export const updatePlantAPI = async (plantname, reqHeader) => {
    return await commonAPI('PUT', `${serverURL}/edit-plant/${plantname}`, reqHeader)
}

export const addCartAPI = async (reqBody, reqHeader) => {
    return await commonAPI('POST', `${serverURL}/add-cart`, reqBody, reqHeader)
}

export const viewCartAPI = async (reqHeader) => {
    return await commonAPI('GET', `${serverURL}/all-cart`, {}, reqHeader)
}

export const createPaymentIntentAPI = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/create-payment-intent`, reqBody)
}

export const deleteCartAPI = async (plantId, reqHeader) => {
    return await commonAPI('DELETE', `${serverURL}/remove-cart/${plantId}`, {}, reqHeader)
}

export const updateCartAPI = async (plantId, reqBody, reqHeader) => {
    return await commonAPI('PUT', `${serverURL}/edit-cart/${plantId}`, reqBody, reqHeader)
}


