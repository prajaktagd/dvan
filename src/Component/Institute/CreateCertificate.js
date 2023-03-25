import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Col,
    Container,
    Image,
    Row,
    Form,
    Modal,
} from "react-bootstrap";
import { exportComponentAsPNG } from "react-component-export-image";
import "./CreateCertificate.css";
import certImage from "../../newCertificate.png";

const CreateCertificate = (props) => {
    const { onHide, doc, show } = props;
    const CertificateImage = useRef(null);

    const [name, setName] = useState(doc.fname);
    const [studentId, setStudentId] = useState(doc.studId);
    const [branch, setBranch] = useState(doc.branch);
    const [year, setYear] = useState(doc.year);

    console.log(doc.fname);

    return (
        <Modal
            key={doc.id}
            onHide={onHide}
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="text-primary"
                >
                    Create Certificate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="card shadow">
                    <Row className="p-3">
                        <Col id="certificateWrapper" ref={CertificateImage}>
                            <p id="fname">{name}</p>
                            <h2 id="studIdTitle">Student ID : {studentId}</h2>
                            <h2 id="branch">Branch : {branch}</h2>
                            <h2 id="year">Year : {year}</h2>
                            <Image id="imgStyle" src={certImage} fluid />
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Student Id</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={studentId}
                                        onChange={(e) => {
                                            setStudentId(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Branch</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={branch}
                                        onChange={(e) => {
                                            setBranch(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> Year</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={year}
                                        onChange={(e) => {
                                            setYear(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Button
                                    onClick={() => exportComponentAsPNG(CertificateImage)}
                                >
                                    Download Png
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateCertificate;
