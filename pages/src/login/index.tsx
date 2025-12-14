
import { useState, useEffect } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Head from "next/head";
import { FaFacebookF, FaGoogle, FaLock, FaPhone, FaTwitter, FaLinkedin } from "react-icons/fa6";
export default function Home() {
    const [state, setState] = useState({ userName: "", email: "", mobile: "", password: "", mobile1: "", password1: "" })
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn?.addEventListener("click", () => {
            container?.classList.add("sign-up-mode");
        });

        sign_in_btn?.addEventListener("click", () => {
            container?.classList.remove("sign-up-mode");
        });
    }, []);
    function onHandleChange(e: any) {
        setState({ ...state, [e.target.name]: [e.target.value] })
    }
    return (
        <div>

            <Head>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />


                <title>Sign in & Sign up Form</title>
            </Head>

            <>
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i><FaPhone /></i>
                                    <input maxLength={10} type="text" placeholder="Mobile No" value={state.mobile1} name={'mobile1'} onChange={(e) => { onHandleChange(e) }} onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} />
                                </div>
                                <div className="input-field">
                                    <i><FaLock /></i>
                                    <input type="password" placeholder="Password" value={state.password1} name={'password1'} onChange={(e) => { onHandleChange(e) }} />
                                </div>
                                <input type="submit" value="Login" className="btn solid" />
                                <p className="social-text">Or Sign in with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i><FaFacebookF /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaTwitter /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaGoogle /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaLinkedin /></i>
                                    </a>
                                </div>
                            </form>
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i><FaUser /></i>
                                    <input type="text" placeholder="Username" value={state.userName} name={'userName'} onChange={(e) => { onHandleChange(e) }} />
                                </div>
                                <div className="input-field">
                                    <i ><FaEnvelope /></i>
                                    <input type="email" placeholder="Email" value={state.email} name={'email'} onChange={(e) => { onHandleChange(e) }} />
                                </div>
                                <div className="input-field">
                                    <i><FaPhone /></i>
                                    <input maxLength={10} type="text" placeholder="Mobile No." value={state.mobile} name={'mobile'} onChange={(e) => { onHandleChange(e) }} onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} />
                                </div>

                                <div className="input-field">
                                    <i><FaLock /></i>
                                    <input type="password" placeholder="Password" value={state.password} name={'password'} onChange={(e) => { onHandleChange(e) }} />
                                </div>
                                <input type="submit" className="btn" value="Sign up" />
                                <p className="social-text">Or Sign up with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i><FaFacebookF /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaTwitter /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaGoogle /></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i><FaLinkedin /></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ?</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                    ex ratione. Aliquid!
                                </p>
                                <button className="btn transparent" id="sign-up-btn">
                                    Sign up
                                </button>
                            </div>
                            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    laboriosam ad deleniti.
                                </p>
                                <button className="btn transparent" id="sign-in-btn">
                                    Sign in
                                </button>
                            </div>
                            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
                        </div>
                    </div>
                </div>

            </>

        </div>
    )
}
