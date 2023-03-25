import { Card } from "react-bootstrap";

const StudentCard = (props) => {
    const { fname, email, studId, branch, year } = props.doc

    return (
        <Card style={{ width: "30rem" }} className="m-3">
            <Card.Body>
                <Card.Title>
                    <span className="text-primary">Name : </span>
                    {fname}
                </Card.Title>
                <Card.Title>
                    <span className="text-primary">E-mail :</span> {email}
                </Card.Title>
                <Card.Title>
                    <span className="text-primary">Student Id :</span>
                    {studId}
                </Card.Title>
                <Card.Title>
                    <span className="text-primary">Branch :</span>
                    {branch}
                </Card.Title>
                <Card.Title>
                    <span className="text-primary">Year :</span>
                    {year}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default StudentCard;
