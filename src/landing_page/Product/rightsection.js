import React from "react";

function RightSection({
    imageURL,
     ProductName,
      ProductDesription,
       learnMore,
})
{
    return (
        <div className="container mt-5">
        <div className="row ">
            <div className="col-5 p-5 mt-5">
                <h1>{ProductName}</h1>
                <p>{ProductDesription}</p>
                <div className="mt-3" >
                <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}> Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
    
            </div>

            <div className="col-7">
             <img src={imageURL} 
             />

            </div>
        </div>
    </div>

    );
}
export default RightSection;