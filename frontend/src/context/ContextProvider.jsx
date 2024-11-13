import { useContext ,createContext, useState, useEffect } from "react"
import axios from "axios";
import { toast } from 'react-toastify';

const authContext = createContext();

const ContextProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const login = (user)=>{
        setUser(user)
    }

    const logout = ()=>{
      localStorage.removeItem("token")
      setUser(null)
      toast.success("Logged Out Successfully")
    }

    useEffect(()=>{
      const verifyingUser = async()=>{
        try {
          const  res = await axios.get('http://localhost:3000/api/v1/auth/verify',{headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }});
          if(res.data.success){
            setUser(res.data.user)
          }
          else setUser(null);
        } catch (error) {
          console.log(error)
        }
      }
      verifyingUser();
},[]);

  return (
    <authContext.Provider value={{user,login,logout}}>{children}</authContext.Provider>
  )
}
export const useAuthContext = () => useContext(authContext)
export default ContextProvider;
