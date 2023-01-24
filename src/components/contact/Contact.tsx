import React, { useState } from "react";
import axios from "axios";


const Contact: React.FC = () => {
    const [userRequest, setUserRequest] = useState({name: "", phone: "", email: ""})
    const {name, phone, email} = userRequest;
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserRequest({...userRequest, [e.target.name]: e.target.value});
    }

    const handleClick = () => {
        axios.post("http://localhost:3004/feedback", userRequest)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="contact">
            <div className="wrapper">
                <div className="contact__wrapper">
                    <div className="contact__under__main under__block__gradient">
                        <div className="contact__main">
                            <h2 className="contact__title">Contact us</h2>
                            <p className="contact__subtitle">Do you have any kind of help please contact with us.</p>
                            <div className="contact__under__block__input under__block__gradient">
                                <input type="text" name="name" className="contact__input__name" placeholder="Name" value={name} onChange={e=>handleChange(e)}/>
                            </div>
                            <div className="contact__under__block__input under__block__gradient">
                                <input type="text" name="phone"className="contact__input__phone" placeholder="Phone" value={phone} onChange={e=>handleChange(e)}/>
                            </div>
                            <div className="contact__under__block__input under__block__gradient ">
                                <input type="text" name="email"className="contact__input__email" placeholder="Email" value={email} onChange={e=>handleChange(e)}/>
                            </div>
                            <button className="contact__btn__send" onClick={e=>handleClick()}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;