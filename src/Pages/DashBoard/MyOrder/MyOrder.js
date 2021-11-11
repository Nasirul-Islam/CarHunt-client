import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/order?${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, [user.email]);
  console.log(user);
  return (
    <div>
      <h2>orders {order?.length}</h2>
    </div>
  );
};

export default MyOrder;
