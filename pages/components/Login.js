import {  Form, Button, Modal} from 'react-bootstrap'

const SignIn = ({ show, setShow, form, setFormValue }) => {

    return (
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>LogIn to your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={(e) => setFormValue({ ...form, email: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setFormValue({ ...form, password: e.target.value})}
              />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  module.exports = SignIn;