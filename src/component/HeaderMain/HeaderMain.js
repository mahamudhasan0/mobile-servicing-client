import React from 'react';
import head from '../../Image/head.jpg'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-center">
           
                <div className="col-md-4 offser-md-1">
                 <h1>Your New Experience <br/> Start Here</h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, repudiandae.</p>
                 <button className="btn btn-primary">Customer Care</button>
                 </div>
            <div className="col-md-6">
                <img src={head} alt=""  width="800px" height="600px"className="img-fluid ms-3"/>
            </div>
        </main>
    );
};

export default HeaderMain;