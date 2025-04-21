import React from "react";

const Statistics = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">إحصائيات الموقع</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الزوار</h4>
          <p className="text-3xl">5000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الرسائل</h4>
          <p className="text-3xl">120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg">عدد الطلبات</h4>
          <p className="text-3xl">50</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
