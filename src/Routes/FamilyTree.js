import React, {Component} from 'react';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Script from 'react-load-script';

export default class FamilyTree extends Component {
    
    componentDidMount(){
        const memId = localStorage.getItem('memId')
        if (memId == null)
            window.location.href = '/login'
    }

    render() {
        
        return (
            <>
                <Helmet>
                    <title>
                        Tree View | Family Tree
                    </title>
                </Helmet>
                {/* edit the node information */}
                <Card id="editForm" bg="primary" text="white" style={{ width: '18rem' }} style={{display: 'none', position: 'absolute', zIndex: '10'}}>
                    <Card.Header>Edit</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="firstName" type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control id="lastName" type="text"></Form.Control>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control id="dateOfBirth" type="date"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control id="gender" as="select">
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>profession</Form.Label>
                                    <Form.Control id="profession" type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Alive or Dead</Form.Label>
                                    <Form.Control id="aliveOrDead" as="select">
                                        <option value="1">Alive</option>
                                        <option value="0">Dead</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Row>
                                <Col style={{textAlign: 'right'}}>
                                    <Button id="saveButton" variant="success">Save</Button>
                                </Col>
                                <Col>
                                    <Button id="cancelButton" variant="secondary">Cancel</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
                {/* view the node information in details */}
                <Card id="ViewForm" bg="secondary" text="white" style={{ width: '18rem' }} style={{display: 'none', position: 'absolute', zIndex: '10'}}>
                    <Card.Header>Details</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="vfirstName" type="text" readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control id="vlastName" type="text" readOnly></Form.Control>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control id="vdateOfBirth" type="date" readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control id="vgender" as="select" disabled>
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>profession</Form.Label>
                                    <Form.Control id="vprofession" type="text" readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Alive or Dead</Form.Label>
                                    <Form.Control id="valiveOrDead" as="select" disabled>
                                        <option value="1">Alive</option>
                                        <option value="0">Dead</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Row>
                                <Col style={{textAlign: 'right'}}>
                                    <Button id="CloseButton" variant="info">Close</Button>
                                </Col>
                                
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
                {/* add the new node */}
                <Card id="addForm" bg="warning" text="black" style={{ width: '18rem' }} style={{display: 'none', position: 'absolute', zIndex: '10'}}>
                    <Card.Header>Add</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control id="kindMenu" as="select">
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="child">Child</option>
                                        <option value="husbandOrWife">Husband or Wife</option>
                                        <option value="sibling">Sibling</option>
                                    </Form.Control>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="afirstName" type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control id="alastName" type="text"></Form.Control>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control id="adateOfBirth" type="date"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control id="agender" as="select">
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>profession</Form.Label>
                                    <Form.Control id="aprofession" type="text"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Alive or Dead</Form.Label>
                                    <Form.Control id="aaliveOrDead" as="select">
                                        <option value="1">Alive</option>
                                        <option value="0">Dead</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Profile Photo</Form.Label>
                                    <Form.Control id="photoFile" type="file" accept="image/*"></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Row>
                                <Col style={{textAlign: 'right'}}>
                                    <Button id="asaveButton" variant="danger">Save</Button>
                                </Col>
                                <Col>
                                    <Button id="acancelButton" variant="secondary">Cancel</Button>
                                </Col>
                            </Row>
                            
                        </Form>
                    </Card.Body>
                </Card>
                <Row >
                    <Col>
                        <Button href="/login" variant="outline-primary" >
                            Log Out
                        </Button>
                    </Col>
                </Row>
                
                <p />
                <div id="loading" style={{textAlign: 'center', backgroundColor: 'white'}}>Now reading Family Tree... Please Wait...</div>
                <div id="familyTree"></div>
                {
                    this.props.editMode == 'view' ? 
                        (<Script url='/chartComponent/familytree.js' />)
                    :
                        (
                        <>
                            <Script url='https://unpkg.com/axios/dist/axios.min.js' />
                            <Script url='/chartComponent/familytree_edit.js' />
                        </>
                        )
                }
                <p />
                
                { this.props.editMode == 'view' ? (
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <Button variant="primary" href="/familytree/edit">
                                Edit My Family Tree
                            </Button>
                        </Col>
                    </Row>
                    ) : (
                    <Row>

                        {/* <Col style={{textAlign: 'center'}}>
                            <Button variant="secondary" href="/familytree">
                                Cancel
                            </Button>
                        </Col> */}
                        
                    </Row>
                    )
                }
                
            </>
        )
    }

    
}