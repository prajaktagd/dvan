import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import StudentCard from "./StudentCard";
import CreateCertificate from "./Institute/CreateCertificate"

const StudentRow = (props) => {
    const { doc, deleteStudent } = props;
    const [modalShow, setModalShow] = useState(false);

    return (
        <Row key={doc.id}>
            <Col>
                <StudentCard doc={doc} />
            </Col>
            <Col>
                <Button
                    variant="danger"
                    className="delete m-3"
                    onClick={() => { deleteStudent(doc.id) }}
                >
                    Delete
                </Button>
                <Button variant="primary" onClick={(event) => {
                    setModalShow(true);
                }}>
                    Create Certificate
                </Button>

                {modalShow ? <CreateCertificate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    doc={doc}
                /> : null}
            </Col>
        </Row>
    )
};

export default StudentRow;
