import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            name: '',
            email: '',
            message: '',
            disabled: false,
            useremailSent: null,

        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState( {
            [name]: value
        } )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState( {
            disabled: true
        } );

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        useremailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })

            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(

            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label htmlFor="full-name">
                                Full Name
                            </Form.Label>
                                <Form.Control 
                                    id="full-name" 
                                    type="text"
                                    name="name"  
                                    value={this.state.name} 
                                    onChange={this.handleChange} 
                                />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">
                                Email
                            </Form.Label>
                                <Form.Control 
                                    id="email" 
                                    type="email" 
                                    name="email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange} 
                                />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">
                                Drop your message here!
                            </Form.Label>
                                <Form.Control 
                                    id="message" 
                                    as="textarea"
                                    rows="3" 
                                    name="message" 
                                    value={this.state.message} 
                                    onChange={this.handleChange}
                                />
                        </Form.Group>


                        <Button 
                            className="d-inline-block" 
                            type="submit" 
                            variant="primary" 
                            disabled={this.state.disabled}>
                                Send
                        </Button>


                        {
                            this.state.emailSent === true && 
                                <p className="d-inline success-msg">
                                    Email sent successfully!
                                </p>
                        }
                        
                        {
                            this.state.emailSent === false && 
                                <p className="d-inline err-msg">
                                    Email sent failed.
                                </p>
                        }

                    </Form>
                </Content>

            </div>

        );
    }

}

export default ContactPage;