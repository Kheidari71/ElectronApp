import { useEffect, useState } from "react";

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const checkLoggedIn = () => {
      // Simulate an async authentication check
      setIsLoading(true);
      setTimeout(() => {

        setIsLoggedIn(true);

        setIsLoading(false);
      }, 1000);
    };

    checkLoggedIn(); // Call the checkLoggedIn function
  }, []);

  return { isLoggedIn, isLoading};
};
