import { ADD_EMPLOYEE, DELET_EMPLOYEE, GET_EMPLOYEE_LIST, RESET_STORE, UPDATE_EMPLOYEE } from "./types"

export const getAllEmployeeList = () => {
    console.log("getAllEmployeeList");
    return {
        type: GET_EMPLOYEE_LIST
    }
}

export const addEmployeeToList = (data) => {
    console.log("addEmployeeToList");
    return {
        type: ADD_EMPLOYEE,
        payload: data,
    }
}

export const updateEmployeeToList = (data) => {
    console.log("updateEmployeeToList");
    return {
        type: UPDATE_EMPLOYEE,
        payload: data,
    }
}

export const deleteEmployeeFromList = (data) => {
    console.log("deleteEmployeeFromList");
    return {
        type: DELET_EMPLOYEE,
        payload: data,
    }
}

export const resetStore = () => {
    return {
        type: RESET_STORE
    }
}