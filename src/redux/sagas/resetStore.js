import { call, put, takeEvery } from "redux-saga/effects";
import { clearAllStore } from "../../services/apis";
import { getAllEmployeeList } from "../actions/actions";
import { RESETED_STORE, RESET_STORE } from "../actions/types";
import { store } from "../store";

export default function* resetAllStore() {
    console.log("resetAllStore");
    yield takeEvery(RESET_STORE, clearStore)
}

export function* clearStore() {
    try {
        let response = yield call(clearAllStore);
        console.log("response :", response);
        yield put({ type: RESETED_STORE, payload: response })
        setTimeout(() => {
            store.dispatch(getAllEmployeeList())
        }, 1000);
    } catch (error) {

    }
}