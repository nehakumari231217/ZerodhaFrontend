import React from "react";

function LeftSection({imageURL, ProductName, ProductDesription,tryDemo, learnMore,googleplay, appStore}){
    return(
        <div className="container mt-5">
            <div className="row ">
                <div className="col-7 ">
                 <img src={imageURL} 
                 />

                </div>
             
                <div className="col-5 p-5 mt-4">
                    <h1>{ProductName}</h1>
                    <p>{ProductDesription}</p>
                    <div className="mt-3" >
                    <a href={tryDemo} style={{textDecoration:"none"}}> Try Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}> Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                    <a href={ googleplay}>  <img Src="media/images/google-play-badge.svg"/></a>
                    <a href={ appStore}> <img src="media/images/appstore-badge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export  default LeftSection;