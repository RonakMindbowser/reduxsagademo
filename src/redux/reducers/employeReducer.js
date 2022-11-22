import { ADDED_EMPLOYEE, DELETED_EMPLOYEE, GOT_EMPLOYEE_LIST, RESETED_STORE, UPDATED_EMPLOYEE } from "../actions/types";

const initalState = {
    employeeList: [],
}

const employeReducer = (state = initalState, action) => {
    console.log("Action ::", action);
    switch (action.type) {
        case ADDED_EMPLOYEE:
            return {
                ...state,
                employeeList: action?.payload
            };
        case UPDATED_EMPLOYEE:
            return {
                ...state,
                employeeList: action?.payload
            };
        case DELETED_EMPLOYEE:
            return {
                ...state,
                employeeList: action?.payload
            }
        case GOT_EMPLOYEE_LIST:
            console.log("return ::", {
                ...state,
                employeeList: action?.payload ? action.payload : state.employeeList
            });
            return {
                ...state,
                employeeList: action?.payload ? action.payload : state.employeeList
            }
        case RESETED_STORE:
            return {
                employeeList: []
            };
        default:
            return state;
    }
}

export default employeReducer;