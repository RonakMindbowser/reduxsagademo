import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeToList, deleteEmployeeFromList, getAllEmployeeList, resetStore, updateEmployeeToList } from '../redux/actions/actions';

const Dashboard = ({ }) => {
    const dispatch = useDispatch();
    const { employeeList } = useSelector(state => state?.employeReducer);
    const [employee, setEmployee] = useState({
        name: "",
        department: "",
        age: 0,
    })

    const [editValue, setEditValue] = useState({
        name: "",
        department: "",
        age: 0,
        id: "",
    })

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        console.log("employeeList useEffect::::", employeeList);

        dispatch(getAllEmployeeList())
        setEmployee({
            name: "",
            department: "",
            age: 0,
        })
    }, [JSON.stringify(employeeList)])

    const onPressAddNewButton = () => {
        const { name, department, age } = employee;
        console.log("Employee:", employee);
        if (name && department && age) {
            console.log('Adding');
            dispatch(addEmployeeToList({
                name,
                department,
                age
            }))
        }
        else {
            alert("Please fill details")
        }
    }

    const onResetStore = () => {
        dispatch(resetStore())
    }

    const onUpdateClick = () => {
        const { name, department, age, id } = editValue;
        if (name && department && age) {
            console.log('updating');
            dispatch(updateEmployeeToList({
                name,
                department,
                age,
                id,
            }))
            setShowModal(false)
        }
        else {
            alert("Please fill details")
        }
    }

    const onClickDelete = (obj) => {
        console.log("onClickDelete :");
        dispatch(deleteEmployeeFromList({
            ...obj,
        }))
    }

    console.log("employeeList :: ", employeeList);

    return (
        <div style={{}}>

            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <input style={{ margin: 10 }} type={'text'} placeholder={"Employee name"} value={employee.name} onChange={(value) => {
                    setEmployee({
                        ...employee,
                        name: value.target.value
                    })
                }} />
                <input style={{ margin: 10 }} type={'text'} placeholder={"Employee Dept"} value={employee.department} onChange={(value) => {
                    setEmployee({
                        ...employee,
                        department: value.target.value
                    })
                }} />
                <input style={{ margin: 10 }} type={'number'} placeholder={"Employee Age"} value={employee.age} onChange={(value) => {
                    setEmployee({
                        ...employee,
                        age: value.target.value
                    })
                }} />
            </div>

            <button style={{ margin: 10 }} onClick={onPressAddNewButton}>Add new</button>
            <button style={{ margin: 10 }} onClick={onResetStore}>Reset Store</button>

            {
                [...employeeList].length ? [...employeeList].map((obj) => {
                    return (
                        <div style={{
                            backgroundColor: "lightgray",
                            borderWidth: 1,
                            padding: '10px',
                            margin: '5px',
                            alignSelf: "center",
                            width: "50%"
                        }}>
                            <p>Name: {obj.name}</p>
                            <p>Department: {obj.department}</p>
                            <p>Age: {obj.age}</p>

                            <Button onClick={() => {
                                setShowModal(true)
                                setEditValue({
                                    name: obj.name,
                                    department: obj.department,
                                    age: obj.age,
                                    id: obj.id
                                })
                            }}>{"Edit"}</Button>
                            <Button style={{ marginLeft: 10 }}
                                onClick={() => onClickDelete(obj)}
                            >{"Delete"}</Button>
                        </div>
                    )
                })
                    : null
            }

            <Modal show={showModal} onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
                    <input style={{ margin: 10 }} type={'text'} placeholder={"Employee name"} value={editValue.name} onChange={(value) => {
                        setEditValue({
                            ...editValue,
                            name: value.target.value
                        })
                    }} />
                    <input style={{ margin: 10 }} type={'text'} placeholder={"Employee Dept"} value={editValue.department} onChange={(value) => {
                        setEditValue({
                            ...editValue,
                            department: value.target.value
                        })
                    }} />
                    <input style={{ margin: 10 }} type={'number'} placeholder={"Employee Age"} value={editValue.age} onChange={(value) => {
                        setEditValue({
                            ...editValue,
                            age: value.target.value
                        })
                    }} />
                    <Button onClick={onUpdateClick}>
                        {"Update"}
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Dashboard;
