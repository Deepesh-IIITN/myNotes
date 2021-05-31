import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });
      if (res.status === 200) {
        history.push("/login", { replace: true });
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return <div></div>;
};

export default Logout;
