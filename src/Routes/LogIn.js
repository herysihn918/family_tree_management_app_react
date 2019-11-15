import React, {Component} from 'react';
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

const axios = require('axios');

const API_URL = 'http://localhost:2772/api/check_user'

export default class LogIn extends Component {
    state = {
        userId_or_email: "",
        user_password: "",
    }
    render() {
        localStorage.clear();
        return (
            <>
                <Helmet>
                    <title>
                        Log In | Family Tree
                    </title>
                </Helmet>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Card bg="light" border="light" text="black" >
                            <Card.Header>Log In</Card.Header>
                            <Card.Body>
                                
                                <Form onSubmit={this._submit}>
                                    <Form.Group>
                                        <Form.Label>ID or Email Address</Form.Label>
                                        <Form.Control  placeholder="Enter your ID or email address" value={this.state.userId_or_email} onChange={this._changeUserId} required/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={this.state.user_password} onChange={this._changeUserPwd} required/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Log In
                                    </Button>
                                    <Button variant="link" href="/signup">
                                        Sign Up
                                    </Button>
                                </Form>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }

    _changeUserId = (event) => {
        this.setState({
            userId_or_email: event.target.value
        })

    }

    _changeUserPwd = (event) => {
        this.setState({
            user_password: event.target.value
        })

    }

    _submit = () => {
        axios.post(API_URL, this.state)
        .then(res => {
            if (res.data.data.checked == 'No')
                alert('Please enter the correct user information!')
            else {
                //save user info in local storage
                localStorage.setItem('memId', res.data.data.memId)
                window.location.href='/familytree/edit'
                
            }
        })
        .catch(err => console.log(err));
    }
}