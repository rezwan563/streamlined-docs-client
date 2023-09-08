import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
function useProfileData() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_SERVER_API}/api/profiles/${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((profileData) => {
          setData(profileData || {});
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return { data, loading, error };
}

export default useProfileData;
