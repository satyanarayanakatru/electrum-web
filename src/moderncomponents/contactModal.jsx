"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './contactModal.css';
import Link from "next/link";

function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link href="/contact" className="contact-button ">
        Talk to Us
      </Link>

      <Modal show={show} onHide={handleClose} className="contact-modal">
        <Modal.Header closeButton>
          <Modal.Title>Electrum Charging Solutions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="contact-button">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="contact-button">
            TALK TO US
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;

