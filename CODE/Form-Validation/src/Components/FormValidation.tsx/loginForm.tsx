import React from "react";
import "./loginForm.css";


  
  const LoginForm = () => {
   

    return (
      <>
      <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
        <div className="login ">
            <h2 className="mn-3">Login Form</h2>
            <form action="needs-validation">
                <div className="form-group was-validated text-start mb-2">
                    <label htmlFor="email" className=" form-label"> Email Address</label>
                    <input type="email" className="form-control" required></input>
                    <div className="invalid-feedback">Please enter your email</div>
                </div>
                <div className="form-group was-validated text-start mb-2">
                    <label htmlFor="password" className="form-label"> Password</label>
                    <input type="password" className="form-control" required ></input>
                    <div className="invalid-feedback">Please enter your password</div>
                </div>
                <div className="form-group form-check text-start mb-2">
                    <input type="checkbox" className="form-check-input" ></input>
                    <label htmlFor="check" className="form-check-label"> Remember me</label>            
                </div>
                <button type="submit" className="btn btn-success block mt-2 w-100"> Sign In</button>
            </form>
        </div>
      </div>
      
       
      
  
      </>
    );
  };
  export default LoginForm;
  