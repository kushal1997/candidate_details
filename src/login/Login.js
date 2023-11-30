import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useState } from 'react'


import image from "../assets/q.png"

export const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.email==="recruiter2023" && credentials.password==="Dayacs2023"){
            navigate("/recruiter");
        }
        else{
            alert("Wrong Credentials")
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img
                        className={styles.img}
                        src={image}
                        alt="login-img"
                    />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Welcome Back!</h2>
                    <h6>Login to continue</h6>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={styles.input}
                            name="username"
                            value={credentials.email}
                            onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your email"
                            
                        />

                        <input
                            type="password"
                            className={styles.input}
                            name="password"
                            value={credentials.password}
                            onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your password"
                            
                        />
                        <button type="submit" className={styles.btn} >
                            Log In
                        </button>

                        

                       
                    </form>
                </div>
            </div>
        </div>
    );
};
