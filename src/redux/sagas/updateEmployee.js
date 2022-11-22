import { call, put, takeEvery } from "redux-saga/effects";
import { updateEmployeeToAllListToStore } from "../../services/apis";
import { getAllEmployeeList } from "../actions/actions";
import { UPDATED_EMPLOYEE, UPDATE_EMPLOYEE } from "../actions/types";
import { store } from "../store";

export default function* updateEmployeeToAllList() {
    console.log("updateEmployeeToAllList");
    yield takeEvery(UPDATE_EMPLOYEE, updateList)
}

export function* updateList(action) {
    try {
        console.log("action :::", action);
        let response = yield call(updateEmployeeToAllListToStore, action.payload)
        console.log("response::", response);
        yield put({ type: UPDATED_EMPLOYEE, payload: response })
        setTimeout(() => {
            store.dispatch(getAllEmployeeList())
        }, 1000);
    } catch (error) {
        console.log("error::", error);
    }
}