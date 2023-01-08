import React from 'react'
import Nav from '../component/Nav'
import SideNav from '../component/SideNav'
import Img1 from '../img/nnn.png'
import { useState } from 'react'
import Chart from 'chart.js/auto';
import axios from 'axios'
import { useEffect } from 'react'


function Dashboard() {

    const [apiData , setApiData] = useState([])


    useEffect(() => {
        axios.get("http://159.65.21.42:9000/products")
        .then((getData) => {
            setApiData(getData.data)
            // console.log(getData.data)
        })
        .catch(function (error) {
            console.log(error);
            alert("check your internet connection")
        });
    })


    return (
        <div>
            <div className="">
                <Nav />
                <div className="dark ">
                    <div className="container m-0 p-0">
                        <div className="row">
                            <div className="col-md-3">
                                <SideNav />
                            </div>
                            <div className="col-md-9 pt-5">
                                <div className="pt-5">
                                    <div className="row">
                                        <div className="col-md-4 ">
                                            <div className="check">
                                                <div className="path ">
                                                    <div className="">
                                                    <p>Total Users</p>
                                                        <h1>45</h1>
                                                        
                                                    </div>
                                                    <div className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                        </svg>
                                                    {/* <img src={Img1} alt="" width="40%" /> */}
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="check">
                                                <div className="path">
                                                    <div className="">
                                                    <p>Total Products</p>
                                                        <h1>22</h1>
                                                        
                                                    </div>
                                                    <div className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                                                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="check">
                                                <div className="path">
                                                    <div className="">
                                                    <p>Total Carts</p>
                                                        <h1>33</h1>
                                                        
                                                    </div>
                                                    <div className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="col-md-9  pe-0 ps-0">
                                        <div className="table1 mt-5">
                                            <div className="">
                                                <table class="table" style={{ color: "#ddd" }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ "color": "#7735FB" }}>Image</th>
                                                            <th style={{ "color": "#7735FB" }} >Name</th>
                                                            <th style={{ "color": "#7735FB" }}>Category</th>
                                                            <th style={{ "color": "#7735FB" }}>Quantity</th>
                                                            <th style={{ "color": "#7735FB" }}>Price</th>
                                                            <th style={{ "color": "#7735FB" }}>Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='bbody'>
                                                        {apiData.map((data) => {
                                                            if (data.category === "dorothy") {
                                                                return (
                                                                    <tr key={data._id} >
                                                                        <th scope="row" ><img src={`http://159.65.21.42:9000${data.image}`} alt="" height="30px" /></th>
                                                                        <td className="col-md-2" style={{ "color": "#7735FB" }}>{data.name}</td>
                                                                        <td style={{ "color": "#7735FB" }}>{data.category}</td>
                                                                        <td style={{ "color": "#7735FB" }}>{data.quantity}</td>
                                                                        <td style={{ "color": "#7735FB" }}>{data.price}</td>
                                                                        <td style={{ "color": "#7735FB" }}>{data.description}</td>
                                                                    </tr>
                                                                )
                                                            }
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="">
                                    <div className="data">
                                        <Line data={data} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard