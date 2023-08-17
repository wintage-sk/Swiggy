
import {useState,useEffect}from "react";
import { FAKE_MENU_API, MENU_API } from "../config";


const useRestaurantMenu= (resID) => {

    const [resInfo, setResInfo] = useState(null);
   
    
  useEffect(() => {
    fetchMenu("http://192.168.135.142:3000/");
  },[]);
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resID || FAKE_MENU_API +resID);
      
    const json = await data.json();
     setResInfo(json.data);
    };
     return resInfo;
    };
 


export default useRestaurantMenu;
