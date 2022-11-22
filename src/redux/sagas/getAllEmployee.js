import { call, put, takeEvery } from "redux-saga/effects";
import { getListFromStore } from "../../services/apis";
import { GET_EMPLOYEE_LIST, GOT_EMPLOYEE_LIST } from "../actions/types";

export default function* getEmployeeList() {
    console.log("getEmployeeList");
    yield takeEvery(GET_EMPLOYEE_LIST, getList)
}

export function* getList() {
    try {
        let response = yield call(getListFromStore);
        console.log("response::", response);
        yield put({ type: GOT_EMPLOYEE_LIST, payload: response })
    } catch (error) {
        console.log("error::", error);
    }
}