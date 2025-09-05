import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const disPatch=useDispatch()
  const navigate=useNavigate()
  const userData=useSelector((store)=>store.user)
  const fetchUser = async () => {
    if(userData) return
    try {
      console.log("me is working")
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      disPatch(addUser(res.data))
      console.log(userData)
    } catch (error) {
      if(error.status===401){
        navigate("/login")

      }
      
      console.error(error)
    }
  };
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
