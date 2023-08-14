import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import userContext from "./userContext";
// import { useSelector } from "react-redux";
// import { AiOutlineMenu } from "react-icons/ai";

const Head= () => {
//   const [buttonName, setButtonName] = useState("Login");

  const onlineStatus = useOnlineStatus();
//  const{loggedInUser}=useContext(userContext)

//  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);

  return (
    <div className="flex justify-between bg-yellow-50 shadow-lg sm:bg-green-50 lg:bg-pink-100 ">
      <div className="">
        <img className="w-36" src={LOGO_URL} alt="sk logo" />
      </div>
      <div className="flex justify-center items-center">
      <span className="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green">
        loggedInUser ? `Welcome $loggedInUser ` : "Welcome to GoodFood" !!!
      </span>
    </div>
    <div className=" flex items-center">
        <ul className="flex  ">
        <li className="p-4 ">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
        <li className="p-4">
  <Link to= "/about">About</Link>
         
          </li>

    </ul>
        </div>
    </div>
      
  );
};

export default Head;