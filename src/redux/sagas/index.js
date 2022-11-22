import { put, takeEvery, all } from 'redux-saga/effects'
import addEmployeeToAllList from './addEmployee'
import deleteEmployeeFromAllList from './deleteEmployee'
import getEmployeeList from './getAllEmployee'
import resetAllStore from './resetStore'
import updateEmployeeToAllList from './updateEmployee'

export default function* rootSaga() {
    yield all([
        getEmployeeList(),
        addEmployeeToAllList(),
        updateEmployeeToAllList(),
        deleteEmployeeFromAllList(),
        resetAllStore(),
    ])
}