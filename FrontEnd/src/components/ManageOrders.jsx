// import React from "react";

// const ManageOrders = () => {
//   return (
//     <div className="mb-8">
//       <h3 className="text-xl font-semibold">إدارة الطلبات</h3>
//       {/* هنا يمكنك إضافة الجدول أو المكونات الأخرى لعرض الطلبات */}
//     </div>
//   );
// };

// export default ManageOrders;

import React, { useEffect, useState } from "react";
import { getOrders, approveOrder, rejectOrder } from "../api";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleApprove = async (orderId) => {
    await approveOrder(orderId);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleReject = async (orderId) => {
    await rejectOrder(orderId);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">إدارة الطلبات</h3>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="border p-4 my-2">
            <p>الطلب رقم: {order.id}</p>
            <p>المنتجات: {order.products}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleApprove(order.id)}
                className="bg-green-500 text-white p-2 rounded"
              >
                الموافقة
              </button>
              <button
                onClick={() => handleReject(order.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                الرفض
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
