import React from 'react'
import { useState } from 'react'

const Form = ({theUser})=> {

    const id = theUser._id

    const [email, setEmail] = useState(theUser.email)
    const [name, setName] = useState(theUser.name)
    const [phone, setPhone] = useState(theUser.phone)
    const [password, setPassword] = useState(theUser.password)



  return (
    <div>
          <div className="">
              <center>
                  <div className=" user-edit-form">
                      <div className="create m-5">
                          <div className=" ">
                              <div className="body p-5 ">
                                  <p className='mt-3'><b>Create  Account</b></p>
                                  {/* Email address */}
                                  <div class="form-floating mb-3">
                                      <input style={{ background: "transparent", color: "#48abfe" }} type="text" class="form-control" id="floatingInput" placeholder="Full Name" value={name} />
                                      <label for="floatingInput">Full name</label>
                                  </div>
                                  <div class="form-floating mb-3">
                                      <input style={{ background: "transparent", color: "#48abfe" }} type="email" class="form-control" id="floatingInput" placeholder="Email" value={email}/>
                                      <label for="floatingInput">Email address</label>
                                  </div>

                                  <div class="form-floating mb-3">
                                      <input style={{ background: "transparent", color: "#48abfe" }} type="number" class="form-control" id="floatingInput" placeholder="Phone Number"  value={phone}/>
                                      <label for="floatingInput">Phone number</label>
                                  </div>

                                  <div class="form-floating">
                                      <input style={{ background: "transparent", color: "#48abfe" }} type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} />
                                      <label for="floatingPassword">Password</label>
                                  </div>

                                  <button className='btn1 mt-4'>Update account</button>

                              </div>

                          </div>
                      </div>
                  </div>
              </center>
          </div>
    </div>
  )
}

export default Form