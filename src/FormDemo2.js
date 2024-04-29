import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import { Button } from "react-bootstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.email + "added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="enter email"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="email">Password</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="enter password"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="email">Description</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              name="description"
              placeholder="enter description"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <select type="select" name="city" id="city" onChange={this.handleChange}>
            <option>İstanbul</option>
            <option>Ankara</option>
            <option>İzmir</option>
            <option>Diyarbakır</option>
            <option>Adana</option>

            </select>
            
          </FormGroup>
         <Button type="submit">Save</Button> 
        </Form>
      </div>
    );
  }
}
