import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div>
        <div className="">
            <div className="side">
                <ul className='p-0'>

                    
                    
                </ul>
                <div class="accordion" id="accordionExample">
                                      <div className="">
                                          <div className="filt">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                              </svg>
                                              <Link to="/dashboard" style={{ textDecoration: "none" }}><li className='dash'>Dashboard</li></Link>
                                          </div>
                                      </div>
                                      <div class="accordion-item" >
                                          <h2 class="accordion-header" id="headingOne" style={{borderBottom:"none"}}>
                                              <button style={{background: "#F2E9E4",color:"#7735FB",fontSize:"18px",fontWeight:"600"}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                                </svg>
                                                  <span className='ps-3'>USERS</span>
                                              </button>
                                          </h2>
                                          <div id="collapseOne" style={{color:"#7735FB"}} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                              <div class="accordion-body p-0">
                                                  <div className="accord">
                                                  <ul className=' p-0'><Link to="/user" style={{ textDecoration: "none" }}><li>Create User</li></Link><Link to="/alluser" style={{ textDecoration: "none" }}><li>All Users</li></Link></ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="accordion-item" >
                                          <h2 class="accordion-header" id="headingTwo" >
                                          <button style={{background: "#F2E9E4",color:"#7735FB",borderBottom:"none",fontSize:"18px",fontWeight:"600"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                                            </svg>
                                                  <span className='ps-3'>PRODUCTS</span>
                                              </button>
                                          </h2>
                                          <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                              <div class="accordion-body p-0">
                                                  <div className="accord">
                                                  <ul className=' p-0'><Link to="/product" style={{ textDecoration: "none" }}><li>Create Products</li></Link><Link to="/allproducts" style={{ textDecoration: "none" }}><li>All Products</li></Link></ul>
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

export default SideNav