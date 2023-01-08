import React from 'react'
import Log from '../img/log.png'
import Img1 from '../img/guy.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className="">
            <div className="col-md-12">
                <div className="nav">
                    <div className="all">
                        <div className="set1">
                            <h1>DP.</h1>
                        </div>
                        <div className="set2">
                            <div className="">
                                <input type="text" placeholder='Search' width="100%"/>
                                <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></b>
                            </div>
                        </div>
                        <div className="col-md-1">
                        <Link to="/" style={{ textDecoration: "none" }}><img src={Img1} alt="" width="50%"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav