import React from "react";

import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import ReactLoading from 'react-loading';
import emailjs from 'emailjs-com';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            contactEmail: '',
            contactName: '',
            contactMessage: '',
            contactSubject: '',
            formBusy: false
        });

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formBusy: true
        });

        emailjs.send(
            'gmail', 'contact_me',
            this.state, 'user_yFhUeGOJgC5KaeooCzUnz'
        ).then(() => {
            ToastsStore.success("Message sent. I'll be reaching out to you soon.");
            this.setState({
                formBusy: false
            });
        })
            .catch(err => {
                ToastsStore.error("Your message wasn't sent. Please try again later");
                console.dir(err);

                this.setState(({
                    formBusy: false,
                    contactEmail: '',
                    contactName: '',
                    contactMessage: '',
                    contactSubject: '',
                }));
            });
    }


    render() {
        return (
            <section id="contact">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>Contact</h5>
                        <h1>I'd Love To Hear From You.</h1>

                    </div>
                </div>

                <div className="row contact-form">

                    <div className="col-twelve">

                        <form onSubmit={this.handleSubmit}>
                            <fieldset>

                                <div className="form-field">
                                    <input name="contactName" type="text" id="contactName" placeholder="Name"
                                           minLength="2" required onChange={this.onChange} autoComplete="off" />
                                </div>
                                <div className="form-field">
                                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email"
                                           required onChange={this.onChange} autoComplete="off" />
                                </div>
                                <div className="form-field">
                                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"
                                           required onChange={this.onChange} autoComplete="off" />
                                </div>
                                <div className="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10"
                                          cols="50" required onChange={this.onChange} />
                                </div>
                                <div className="form-field">
                                    <button className="submitform" disabled={this.state.formBusy}>Submit</button>
                                </div>

                            </fieldset>
                        </form>

                        { this.state.formBusy ? <ReactLoading className="loading" type="spinningBubbles" color="#fff" height={50} width={50}/> : null }
                        <ToastsContainer position={ToastsContainerPosition.BOTTOM_RIGHT} store={ToastsStore} />

                    </div>

                </div>

                <div className="row contact-info">

                    <div className="col-six tab-full collapse">

                        <div className="icon">
                            <i className="icon-mail"></i>
                        </div>

                        <h5>Email Me At</h5>

                        <p>oluwafunso.oluyole.balogun@gmail.com<br />
                        </p>

                    </div>

                    <div className="col-six tab-full">

                        <div className="icon">
                            <i className="icon-phone"></i>
                        </div>

                        <h5>Call Me At</h5>

                        <p>Phone: (+234) 813 849 8175 <br />
                        </p>

                    </div>

                </div>

            </section>
        )
    }
}
