import React from "react";
import { Card } from "react-bootstrap";

function Certification() {
    const certifications = [
        {
            certification: "DevOps, Cloud, and Agile Foundations Specialization",
            organisation: "IBM Skills Network",
            id: "QU5FMTUUCCDR",
        },
        {
            certification: "Full-Stack Web Development with React Specialization",
            organisation: "The Hong Kong University of Science and Technology",
            id: "E6KLXGSNLT93",
        },
        {
            certification: "Server-side Development with NodeJS, Express and MongoDB (avec mention)",
            organisation: "Coursera",
            id: "DUN29HKLT6G7",
        },
        {
            certification: "Data Collection and Processing with Python",
            organisation: "Coursera",
            id: "ZTTMB9L3MUWM",
        },
    ];

    return (
        <section className="section">
            {certifications.map((certification) => (
                <Card key={certification.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{certification.certification}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {certification.organisation}
                        </Card.Subtitle>
                        <Card.Text>{certification.id}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Certification;
