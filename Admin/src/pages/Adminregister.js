import React from 'react'
import Pick5 from '../img/log.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'


function Adminregister() {
    const navigate = useNavigate();
//let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [error , setError] = useState("")

    const formPost = () => {
        if(email === "" || email === null , name === "" || name === null , number === "" || number === null , password === "" || password === null){
            setError("Field Required")
        }else{
            setError("")
            axios.post("http://159.65.21.42:9000/register", {
                name: name,
                phone: number,
                email: email,
                password: password,
            })
            .then(function (response) {
                console.log(response);
                alert("User created successfully")
                navigate('/adminlogin')
              })
              .catch(function (error) {
                console.log(error);
                alert("user not ceated check your internet connection")
              });
        }
    }



  return (
    <div>
          <div className="register">
              <div className="col-md-12">
                  <div className="container">
                      <center>
                          <div className="col-md-4 ">
                              <div className="body p-5 ">
                                    <Link to="/"><img src={Pick5} alt="" width="10%" /></Link>
                                  <p className='mt-3'><b>Create your Dorothy account</b></p>
                                  {/* Email address */}
                                  <div class="form-floating mb-3">
                                      <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                      <label for="floatingInput">Full name</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating mb-3">
                                      <input type="email" class="form-control" id="floatingInput" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                                      <label for="floatingInput">Email address</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating mb-3">
                                      <input type="number" class="form-control" id="floatingInput" placeholder="Phone Number"  onChange={(e) => setNumber(e.target.value)}/>
                                      <label for="floatingInput">Phone number</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating">
                                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                                      <label for="floatingPassword">Password</label>
                                  </div>
                                  <span>{error}</span>
                                  <button onClick={formPost} className='btn1 mt-4'>Create account</button>
                                  <p className='mt-3'>Already have an account?</p>
                                  <Link to="/adminlogin"><button className='btn2 mt-2'>Sign in</button></Link>
                                  
                              </div>
                              
                          </div>
                      </center>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Adminregister