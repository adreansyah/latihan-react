import { fetchApi } from "../../config/services"

export const sentUsers = () => {
    return dispatch => fetchApi("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car").then(({ data }) => {
        dispatch({
            type: "USERS",
            payload: data.cars
        })
    }).catch(e => {

    })
}