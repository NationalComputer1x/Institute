
import { useState, useEffect } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import styles from '../../../styles/home.module.css'
import Head from "next/head";
import { FaFacebookF, FaGoogle, FaLock, FaPhone, FaTwitter, FaLinkedin } from "react-icons/fa6";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "firebase/auth";

import { ref, set, get,push } from "firebase/database";
import { auth, db } from "@/lib/firebaseClient";
export default function Home() {
    const [state, setState] = useState({ userName: "", email: "", mobile: "", password: "", mobile1: "", password1: "" , role: "student" });
        const [form,setForm] = useState({
studentName:"",
relation:"",
fatherName:"",
motherName:"",
email:"",
dob:"",
joinDate:"",
course:"",
qualification:"",
state:"",
city:"",
mobile:"",
aadhaar:"",
password:"",
});
    const handleRoleChange = (role: string) => {
        setState((prevState) => ({ ...prevState, role }));
    };
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

    const handleSignUp = async (e: any) => {
  e.preventDefault();
//alert(state.email + " " + state.password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );
//alert("User created with email: " + state.email);
    const user = userCredential.user;

   //console.log("User created:", user);
setForm({...form,"studentName":state.userName,"email":state.email,"mobile":state.mobile,"password":state.password});
await set(ref(db, "students/" + user.uid), {
  ...form,
  photo: "",
  createdAt: Date.now(),
  Role: state.role
});
    alert("User Registered Successfully");
  } catch (error: any) {
    alert(error.message);
  }
};

const handleLogin = async (e: any) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
     state.email,
      state.password1
    );

    const user = userCredential.user;

    // Get user role from Realtime DB
    const snapshot = await get(ref(db, "students/"+user.uid));

    if (snapshot.exists()) {
      const userData = snapshot.val();

      if (userData.Role !== state.role) {
        alert("You are not authorized as " + state.role);
        return;
      }

      alert("Login Successful as " + userData.Role);

      if (userData.Role === "admin") {
       // window.location.href = "/admin";
       //alert("Redirecting to admin dashboard...");
       window.location.href = "/src/admin/dashboard";
      } else {
        //window.location.href = "/student";
        //alert("Redirecting to student dashboard...");
        window.location.href = "/src/student/dashboard";

      }
    } else {
      alert("User data not found");
    }
  } catch (error: any) {
    alert(error.message);
  }
};

    function onHandleChange(e: any) {
        setState({ ...state, [e.target.name]: e.target.value })
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
                        <div className="signin-signup" >
                           <form onSubmit={handleLogin} className="sign-in-form">
    <h2 className="title">
        {state.role === "admin" ? "Admin Login" : "Student Login"}
    </h2>

    {/* Toggle Buttons */}
    <div className={styles.roleToggle}>
        <button
            type="button"
             className={
      state.role === "student"
        ? `${styles.baseBtn} ${styles.activeRole}`
        : styles.baseBtn
    }
            onClick={() => handleRoleChange("student")}
        >
            Student
        </button>

        <button
            type="button"
             className={
      state.role === "admin"
        ? `${styles.baseBtn} ${styles.activeRole}`
        : styles.baseBtn
    }
            onClick={() => handleRoleChange("admin")}
        >
            Admin
        </button>
    </div>

    <div className="input-field">
        <i><FaEnvelope /></i>
        <input
          
            type="text"
            placeholder="Email or Mobile No."
            value={state.email}
            name="email"
            onChange={onHandleChange}
       
           
        />
    </div>

    <div className="input-field">
        <i><FaLock /></i>
        <input
            type="password"
            placeholder="Password"
            value={state.password1}
            name="password1"
            onChange={onHandleChange}
        />
    </div>

    <input type="submit" value="Login" className="btn solid" />
</form>
                            <form onSubmit={handleSignUp} className="sign-up-form">
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
                            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="description" />
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
                            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="description" />
                        </div>
                    </div>
                </div>

            </>

        </div>
    )
}
