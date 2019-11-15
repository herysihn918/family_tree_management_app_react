import React, {Component} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import axios from 'axios';

const API_URL = 'http://localhost:2772/api/reg_user'

export default class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        userId: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        gender: '0',
        profession: '',
        photoFile: '',
        pwdMatch: true
    }

    render() {
        // console.log(this.state);
        return (
            <>
                <Helmet>
                    <title>
                        Sign Up | Family Tree
                    </title>
                </Helmet>
                <Container>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <Form >
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this._change} required/>
                                    </Form.Group>
                                
                                    <Form.Group as={Col}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this._change} required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>User ID</Form.Label>
                                        <Form.Control name="userId" placeholder="User ID" value={this.state.userId} onChange={this._change} required/>
                                    </Form.Group>
                                
                                    <Form.Group as={Col}>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name="emailAddress" type="email" placeholder="Email Address" value={this.state.emailAddress} onChange={this._change} required/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this._change} required/>
                                    </Form.Group>
                                </Form.Row>    
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this._change} required/>
                                        {
                                            !this.state.pwdMatch ? ( 
                                                <Form.Text className="text-muted">
                                                    Please enter the same password as above. 
                                                </Form.Text>
                                            ): (
                                                <Form.Text className="text-muted">
                                                   
                                                </Form.Text>
                                            )
                                        }
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control name="dateOfBirth" type="date" placeholder="Date of Birth" value={this.state.dateOfBirth} onChange={this._change} required/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control name="gender" as="select" value={this.state.gender} onChange={this._change} required>
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Profession</Form.Label>
                                        <Form.Control name="profession" placeholder="Profession" value={this.state.profession} onChange={this._change} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control name="photoFile" type="file" accept="image/*" placeholder="Select the image file..." onChange={this._change} />
                                    </Form.Group>
                                </Form.Row>
                                <Button variant="success" onClick={this._submit}>
                                    Sign Up
                                </Button>
                                <Button variant="link" href="/login">
                                    Cancel
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    _change = (e) => {
        switch (e.target.name) {
            case 'firstName':
                this.setState({ firstName: e.target.value });
                break;
            case 'lastName':
                this.setState({ lastName: e.target.value });
                break;
            case 'userId':
                this.setState({ userId: e.target.value });
                break;
            case 'emailAddress':
                this.setState({ emailAddress: e.target.value });
                break;
            case 'password':
                this.setState({ password: e.target.value });
                break;
            case 'confirmPassword':
                this.setState({ confirmPassword: e.target.value })
                
                if(this.state.password == e.target.value){
                    this.setState({ pwdMatch: true })
                } else {
                    this.setState({ pwdMatch: false })
                }

                break;
            case 'dateOfBirth':
                this.setState({ dateOfBirth: e.target.value });
                break;
            case 'gender':
                this.setState({ gender: e.target.value });
                break;
            case 'profession':
                this.setState({ profession: e.target.value });
                break;
            case 'photoFile':
                this.setState({ photoFile: e.target.files[0] })
                // console.log(e.target.files)
                break;
            
        }
       
    }

    _submit = () => {
        let formData = new FormData();
        if (this.state.password == this.state.confirmPassword)
        {
            formData.append('photoFile', this.state.photoFile)
            formData.append('firstName', this.state.firstName)
            formData.append('lastName', this.state.lastName)
            formData.append('userId', this.state.userId)
            formData.append('emailAddress', this.state.emailAddress)
            formData.append('password', this.state.password)
            formData.append('dateOfBirth', this.state.dateOfBirth)
            formData.append('gender', this.state.gender)
            formData.append('profession', this.state.profession)

            axios.post(API_URL, formData)
            .then((res) => {
                if (res.status == 200 && res.data.success == "true"){
                    alert('You are successfully registered!')
                    window.location.href = '/login'
                }
            })
            .catch(err => console.log(err))
        } else {
            alert("Your password and confirm password are not matching!")
        }
        
        
    }
}