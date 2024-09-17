import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is etra? How does it work?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body> Etra is a start-up focused in helping early stage biotech companies and academic labs in streamlining their process from research to clinical trials </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    How can I get the customer support?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Feel free to email us at info@etrathera.com or book a introductory meeting<a href="https://outlook-sdf.office.com/bookwithme/user/580d376771cb4ad1b5a0d7fa15c3a5be%40etrathera.com/meetingtype/dcfd633a-584b-4695-89f3-52cc96a6f0b7?anonymous"> here.</a></Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    What can I expect from etra?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body> We will provide clinical trial expertise and up to date technical regulatory and scientific guidance. Additionally, we, at etra work hard to promote a culture of integrity and productvity.We are genuinely passionate about getting as many safe treatments to patients in need.  </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

