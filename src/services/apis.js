import { store } from "../redux/store"
import { v4 as uuidv4 } from 'uuid';

export const getListFromStore = async () => {
    const employeeList = store.getState()?.employeReducer?.employeeList;
    return new Promise((resolve) => {
        setTimeout(resolve(employeeList), 2000);
    });
}

export const addEmployeeToAllListToStore = async (data) => {
    const employeeList = store.getState()?.employeReducer?.employeeList;
    return new Promise((resolve) => {
        employeeList.push({
            ...data,
            id: uuidv4(),
        });
        setTimeout(resolve(employeeList), 1000);
    });
}

export const updateEmployeeToAllListToStore = async (data) => {
    const employeeList = store.getState()?.employeReducer?.employeeList;
    return new Promise((resolve) => {
        let updatedList = [...employeeList].map((obj) => {
            console.log("obj :", obj);
            console.log("data :", data);
            if (obj.id == data.id) {
                return {
                    ...obj,
                    name: data.name,
                    department: data.department,
                    age: data.age,
                }
            }
            else {
                return obj;
            }
        })
        console.log("updatedList :: ", updatedList);
        setTimeout(resolve(updatedList), 1000);
    });
}

export const deleteEmployeeFromAllListFromStore = async (data) => {
    const employeeList = store.getState()?.employeReducer?.employeeList;
    return new Promise((resolve) => {
        let updatedList = [...employeeList].filter(obj => obj.id != data.id);
        console.log("updatedList :: ", updatedList);
        setTimeout(resolve(updatedList), 1000);
    });
}

export const clearAllStore = async () => {
    return new Promise((resolve) => {
        setTimeout(resolve(true), 2000);
    });
}