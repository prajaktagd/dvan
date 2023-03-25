import React, { useEffect, useState } from "react";
import UserDataService from "../services/user.services";
import { Button, Container } from "react-bootstrap";
import StudentRow from "../StudentRow";

const Institute = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const data = await UserDataService.getAllUsers();
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await UserDataService.deleteUser(id);
        getUsers();
    };

    return (
        <div className="p-2">
            <h2 className="text-center text-primary">Request List Of Student</h2>
            <Button variant="dark edit" onClick={getUsers}>
                Refresh List
            </Button>
            <Container>
                {
                    users.map((doc) => (
                        <StudentRow key={doc.id} doc={doc} deleteStudent={deleteHandler} />
                    ))
                }
            </Container>
        </div>
    );
}

export default Institute;
