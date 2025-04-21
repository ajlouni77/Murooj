// import React from "react";

// const ManagePayments = () => {
//   return (
//     <div className="mb-8">
//       <h3 className="text-xl font-semibold">إدارة المدفوعات</h3>
//       {/* هنا يمكنك إضافة الجدول أو المكونات الأخرى لعرض المدفوعات */}
//     </div>
//   );
// };

// export default ManagePayments;

import React, { useEffect, useState } from "react";
import { getPayments } from "../api";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const data = await getPayments();
      setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold">إدارة المدفوعات</h3>
      <div>
        {payments.map((payment) => (
          <div key={payment.id} className="border p-4 my-2">
            <p>المدفوعات رقم: {payment.id}</p>
            <p>المبلغ: {payment.amount} د.أ</p>
            <p>الطريقة: {payment.method}</p>
            <p>الحالة: {payment.status}</p>
            <div className="flex justify-between">
              <button
                // onClick={() => /* function to approve payment */}
                className="bg-green-500 text-white p-2 rounded"
              >
                الموافقة
              </button>
              <button
                // onClick={() => /* function to reject payment */}
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

export default ManagePayments;
