import {Link, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';

function SignUp(){

    const [phoneInputValue, setPhoneInputValue] = useState('');
    
    const phoneHandlePress = (e)=>{
        const phone_regex = /^[0-9\b -]{0,13}$/;
        if(phone_regex.test(e.target.value)){
            setPhoneInputValue(e.target.value);
        }    
    }

    useEffect(()=>{
        if(phoneInputValue.length===11){
            setPhoneInputValue(phoneInputValue.replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3'));
        }
        if(phoneInputValue.length===13){
            setPhoneInputValue(phoneInputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3'));
        }
    },[phoneInputValue]);


    return (
        <>
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {
                        // Nested Row within Card Body
                    }
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" id="name" placeholder="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" id="id" placeholder="id" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user" id="password" placeholder="password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user" id="confirm_password" placeholder="confirm password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" id="email" placeholder="email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" id="phone" placeholder="010-0000-0000" onChange={phoneHandlePress} value={phoneInputValue} />
                                    </div>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-user" id="birth" placeholder="birth" />
                                    </div>
                                    <div className="form-group">
                                            <div className="form-control form-control-user px-3 py-1">
                                                <div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" />
                                                        <label className="form-check-label" for="inlineRadio1">남</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" />
                                                        <label className="form-check-label" for="inlineRadio2">여</label>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <a href="/signUp/register" className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <a href="/main" className="btn btn-danger btn-user btn-block">
                                        Cancel
                                    </a>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="/login">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignUp;