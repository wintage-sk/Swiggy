import React from "react";
import { CARD_URL } from "../config";

const Grocery = ()=>{
  console.log(CARD_URL)
    return(

        <div className="container">
        <div className="flex flex-col justify-center items-center gap-10 p-5">
          <span className='text-blue-dark font-bold text-4xl'>Coming Soon ...</span>
          {/* <img className="w-[300px]" alt="grocery" src= ""/> */}
        </div>
      </div>
    );
}

export default Grocery;