import Form from 'react-bootstrap/Form';

export const FormInput = ({onChange, name}) => {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={onChange} value={name} type="email" placeholder="name@example.com" />
        </Form.Group>
       
      </Form>
    )
}