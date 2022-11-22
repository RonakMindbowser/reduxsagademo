import { call, put, takeEvery } from "redux-saga/effects";
import { deleteEmployeeFromAllListFromStore } from "../../services/apis";
import { getAllEmployeeList } from "../actions/actions";
import { DELETED_EMPLOYEE, DELET_EMPLOYEE } from "../actions/types";
import { store } from "../store";

export default function* deleteEmployeeFromAllList() {
    console.log("getEmployeeList");
    yield takeEvery(DELET_EMPLOYEE, deleteFromList)
}

export function* deleteFromList(action) {
    try {
        console.log("action :::", action);
        let response = yield call(deleteEmployeeFromAllListFromStore, action.payload)
        console.log("response::", response);
        yield put({ type: DELETED_EMPLOYEE, payload: response })
        setTimeout(() => {
            store.dispatch(getAllEmployeeList())
        }, 1000);
    } catch (error) {
        console.log("error::", error);
    }
}