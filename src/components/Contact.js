import React, { useState } from "react";
// https://react-bootstrap.github.io/components/forms/
import { Button, Col, Form, Alert } from "react-bootstrap";

const Contact = () => {
  // Set initial states for the form
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const postFormData = async (data) => {
    const response = await fetch(
      // API Gateway Contact Form endpoint
      process.env.REACT_APP_api,
      // Lambda example - https://gist.github.com/mshuber1981/9e95b9b83839d9e89740a6f8dcb482bf
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // Check to see if the form has been validated
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const name = event.target.elements.nameData.value;
    const email = event.target.elements.emailData.value;
    const message = event.target.elements.messageData.value;
    const data = {
      name: name,
      email: email,
      message: message,
    };

    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      postFormData(data)
        .then(() => {
          // Reset validation
          setValidated(false);
          // Reset the form inputs
          event.target.reset();
          // Success alert
          setShowSuccess(true);
        })
        .catch((error) => {
          setValidated(false);
          event.target.reset();
          // Error alert
          setErrorMessage(error.message);
          setShowError(true);
        });
    }
  };

  return (
    <section
      id="contact"
      className="container-fluid py-4 bg-secondary text-white"
    >
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <h2 className="drop-shadow text-center">Contact Me</h2>
          <hr className="mb-5" />
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="pt-5 px-2 border border-primary rounded-lg bg-light"
          >
            {/* Name */}
            <Form.Row className="justify-content-center">
              <Form.Group as={Col} md="9" controlId="nameData">
                <Form.Label className="text-dark">Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
                <Form.Control.Feedback type="invalid">
                  <h5>Name must be at least one character.</h5>
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Email */}
            <Form.Row className="justify-content-center">
              <Form.Group as={Col} md="9" controlId="emailData">
                <Form.Label className="text-dark">Email</Form.Label>
                <Form.Control
                  required
                  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                  placeholder="someone@example.com"
                />
                <Form.Control.Feedback type="invalid">
                  <h5>Please enter a valid email.</h5>
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Message */}
            <Form.Row className="justify-content-center">
              <Form.Group as={Col} md="9" controlId="messageData">
                <Form.Label className="text-dark">Message</Form.Label>
                <Form.Control required as="textarea" />
                <Form.Control.Feedback type="invalid">
                  <h5>Please provide a valid message.</h5>
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Submit Button */}
            <Form.Row className="justify-content-center pb-5">
              <Button type="submit" className="mt-3 bg-info">
                Submit
              </Button>
            </Form.Row>

            {/* Success alert */}
            <Form.Row className="justify-content-center">
              <Alert
                show={showSuccess}
                variant="success"
                onClose={() => setShowSuccess(false)}
                dismissible
              >
                <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
              </Alert>

              {/* Error alert */}
              <Alert
                show={showError}
                variant="danger"
                onClose={() => setShowError(false)}
                dismissible
              >
                <Alert.Heading>
                  Sorry, something went wrong ({errorMessage}).
                </Alert.Heading>
              </Alert>
            </Form.Row>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
