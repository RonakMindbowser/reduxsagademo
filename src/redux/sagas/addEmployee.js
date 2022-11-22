import { call, put, takeEvery } from "redux-saga/effects";
import { addEmployeeToAllListToStore } from "../../services/apis";
import { getAllEmployeeList } from "../actions/actions";
import { ADDED_EMPLOYEE, ADD_EMPLOYEE, GET_EMPLOYEE_LIST } from "../actions/types";
import { store } from "../store";

export default function* addEmployeeToAllList() {
    console.log("addEmployeeToAllList");
    yield takeEvery(ADD_EMPLOYEE, addToList)
}

export function* addToList(action) {
    try {
        console.log("action :::", action);
        let response = yield call(addEmployeeToAllListToStore, action.payload)
        console.log("response::", response);
        yield put({ type: ADDED_EMPLOYEE, payload: response })
        store.dispatch(getAllEmployeeList())
    } catch (error) {
        console.log("error::", error);
    }
}