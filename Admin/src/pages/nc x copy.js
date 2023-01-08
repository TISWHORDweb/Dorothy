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

    useEffect(() => {
        axios.get("http://159.65.21.42:9000/users")
        .then((getData) => {
            console.log(getData.data)
            setApiData(getData.data)
            console.log(apiData)
        })
        .catch(function (error) {
            console.log(error);
            alert("check your internet connection")
        });
    })

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
                                    {apiData.map((data) => {
                                        return(
                                            <tr key={data._id}>
                                                <th scope="row"><img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/c234fc766e76abede3137a27335b3d04/2571eb7b-09da-479c-9899-85e23b0ae16d_rw_1200.gif?h=405def0b04967caaa03b559bfd9c2761" alt="" height="30px" /></th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.password}</td>
                                                <td>
                                                    <div className="act">
                                                        <button className='one' >Edit</button>
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