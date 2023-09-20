import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const usePending = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Pendings = [] } = useQuery({
        queryKey: ['Pendings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://streamlined-docs-server.vercel.app/pending_applications`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const Pending = Pendings.find(ins => ins.userEmail === user?.email);

    return [Pending, refetch];
};

export default usePending;
