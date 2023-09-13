import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const useAdmin = () =>{
    const {user} = useContext(AuthContext)
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() =>{
            const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/users/admin/${user?.email}`)
            return res.data
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin