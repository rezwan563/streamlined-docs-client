import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useReview = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Reviews = [] } = useQuery({
        queryKey: ['Reviews', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://streamlined-docs-server.vercel.app/reviewed_applications`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const Review = Reviews.find(ins => ins.userEmail === user?.email);

    return [Review, refetch];
};

export default useReview;
