
import {useState} from 'react';
import {PropsInterface} from '../App'
import {ResponseCallback, ErrorCallback} from '../components/auth/auth'


export interface RegistrationForm {
    username: string,
    email: string,
    password: string,
    password2: string, 
}

export const Register = (props: PropsInterface) => {

    const [registrationData, setRegistrationData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    } as RegistrationForm
    )

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    function updateFieldValue(event: React.FormEvent<HTMLInputElement>, setValue:any){
        setValue(event.currentTarget.value);
    }

    function clearForm() {
        setUsername('')
        setEmail('')
        setPassword('')
        setPassword2('')
    }



    function registerOnValidSubmit() {
        if (password !== password2) {
            clearForm();
            // displayInvalidRegistration();
            return;
        }
        props.auth.register(email, username, password, ResponseCallback, ErrorCallback)
        .then((response: any) => {
            console.log(response);
            // If response signals valid registration, login and redirect to dashboard.
            
        })
    }

    return (
        <div id="register">
            <section className="vh-100 bg-image" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius: '15px'}}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" value={username} 
                                                    onChange={event => updateFieldValue(event, setUsername)} 
                                                    placeholder=""className="form-control form-control-lg" 
                                                />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" value={email} 
                                                    onChange={event => updateFieldValue(event, setEmail)}
                                                className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cg"  value={password} 
                                                    onChange={event => updateFieldValue(event, setPassword)}
                                                    className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg"  value={password2} 
                                                    onChange={event => updateFieldValue(event, setPassword2)}
                                                    className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    onClick={(event) => registerOnValidSubmit()}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                        Register
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account? 
                                                <a href="/login" className="fw-bold text-body"><u>Login here</u></a>
                                            </p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Register;