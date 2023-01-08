import React from 'react'
import Nav from '../component/Nav'
import SideNav from '../component/SideNav'
// import Pick5 from '../img/log.png'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function All_User() {
    

    const [apiData , setApiData] = useState([])
    const [edit, setEdit] = useState(false);
    const [info, setInfo] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
    });

    useEffect(() => {
        axios.get("http://159.65.21.42:9000/users")
        .then((getData) => {
            setApiData(getData.data)
        })
        .catch(function (error) {
            console.log(error);
            alert("check your internet connection")
        });
    })

    function handleEdit(index) {
        // let userInfo = apiData[index]
        // setInfo(userInfo);
        setEdit(true);
        // console.log(users._id);
    }

    function updateUser(e) {
        e.preventDefault();
        let itemApi = info;
    
        fetch(`http://159.65.21.42:9000/user/${info._id}`, {
          method: 'Put',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemApi),
        }).then((resp) => {
          if (resp.ok) {
            console.log('HTTP request successful');
          } else {
            console.log('HTTP request unsuccessful');
          }
          return resp;
          resp.json().then((data) => {});
        });
        setEdit(false);
      }

    const deleteUser = (id) =>{
        axios.delete(`http://159.65.21.42:9000/user/${id}`)
        .then((res) => {
            console.log(res)
            window.location.reload()
            alert("User deleted successfully")
        })
    }



  return (
    <div>
        <div className="">
            <Nav />
            <div className="dark " style={{height:"200vh"}}>
                <div className="container m-0 p-0">
                    <div className="row">
                        <div className="col-md-3">
                        <SideNav />
                        </div>
                        <div className="col-md-9 pt-5 pe-0 ps-0">
                            { edit && (
                                
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" >
                                    <div class="modal-content" style={{background:"#34374e"}} >
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <center>
                                        <div className="" style={{background:"#34374e"}}>
                                        <div className="create ">
                                        <div className=" ">
                                            <div className="body p-5 ">
                                                <p className='mt-3'><b>Edit Users</b></p>
                                                <div class="form-floating mb-3">
                                                    <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Name"  value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })}/>
                                                    <label for="floatingInput">Users Name</label>
                                                </div>
                                                {/* Email address */}
                                                <div class="form-floating mb-3">
                                                    <input style={{background:"transparent",color:"#48abfe"}} type="email" class="form-control" id="floatingInput" placeholder="Email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })}/>
                                                    <label for="floatingInput">Email</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" placeholder="Description" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })}/>
                                                    <label for="floatingInput">Mobile Number</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input style={{background:"transparent",color:"#48abfe"}} type="password" class="form-control" id="floatingInput" placeholder="Price" value={info.password} onChange={(e) => setInfo({ ...info, password: e.target.value })}/>
                                                    <label for="floatingPassword">Password</label>
                                                </div>

                                                <button onClick={() => updateUser()} className='btn1 mt-4'>Create Product</button>
                                                
                                            </div>
                                            
                                        </div>
                                </div>
                                            </div>
                                        </center>
                                    </div>
                                    {/* <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                            )}
                          <div className="table1 mt-5">
                            <div className="">
                            <table class="table" style={{color:"#ddd"}}>
                                <thead>
                                    <tr>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">Full-name</th>
                                    <th scope="col">Phone number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {apiData.map((data, index) => {
                                        return(
                                            <tr key={data._id}>
                                                <th scope="row"><img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/c234fc766e76abede3137a27335b3d04/2571eb7b-09da-479c-9899-85e23b0ae16d_rw_1200.gif?h=405def0b04967caaa03b559bfd9c2761" alt="" height="30px" /></th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.password}</td>
                                                <td>
                                                    <div className="act">
                                                    <button type="button" onClick={() => handleEdit(index)} class="one" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                        <button className='two' onClick={() => deleteUser(data._id)}>Delete</button>
                                                    </div>
                                                </td>
                                                
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default All_User