import React from 'react'
import Nav from '../component/Nav'
import SideNav from '../component/SideNav'
import Pick5 from '../img/log.png'



function Create_Product() {

  return (
    <div>
        <div className="">
            <Nav />
            <div className="dark " style={{height:"120vh"}}>
                <div className="container m-0 p-0">
                    <div className="row">
                        <div className="col-md-3">
                        <SideNav />
                        </div>
                        <div className="col-md-9 pt-5">
                          <center>
                            
                          <div className="col-md-8 pt-5">
                           <div className="create m-5">
                          <div className=" ">
                              <div className="body p-5 ">
                              {/* <img src={Pick5} alt="" width="10%"/> */}
                                  <h4 className='m-3'><b>Create  Products</b></h4>
                                  <form 
                                  className='create-form'
                                  method='post'
                                  action='http://159.65.21.42:9000/create/product'
                                  enctype='multipart/form-data'
                                  >
                                    <div class="form-floating mb-3">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="file" class="form-control" id="floatingInput" name='image' placeholder="Name" />
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" name='name'  placeholder="Name"  />
                                        <label for="floatingInput">Products name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" name='description' placeholder="Description" />
                                        <label for="floatingInput">Description</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" name='price' placeholder="Price"  />
                                        <label for="floatingPassword">Price</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" name='quantity' placeholder="Quantity"  />
                                        <label for="floatingPassword">Quantity</label>
                                    </div>
                                    <div class="form-floating">
                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" name='category' placeholder="Category"  />
                                        <label for="floatingPassword">Category</label>
                                    </div>
                                    <button type='submit' className='btn1 mt-4'>Create Product</button>
                                  </form>
                                  
                              </div>
                              
                          </div>
                  </div>
                            </div>
                          </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create_Product