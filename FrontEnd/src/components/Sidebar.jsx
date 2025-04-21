import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaShoppingCart,
  FaCreditCard,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">لوحة التحكم</h2>
      <ul>
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 py-2 hover:bg-gray-700"
          >
            <FaHome /> إحصائيات
          </Link>
        </li>
        <li>
          <Link
            to="/manage-messages"
            className="flex items-center gap-2 py-2 hover:bg-gray-700"
          >
            <FaEnvelope /> الرسائل
          </Link>
        </li>
        <li>
          <Link
            to="/manage-orders"
            className="flex items-center gap-2 py-2 hover:bg-gray-700"
          >
            <FaShoppingCart /> الطلبات
          </Link>
        </li>
        <li>
          <Link
            to="/manage-payments"
            className="flex items-center gap-2 py-2 hover:bg-gray-700"
          >
            <FaCreditCard /> المدفوعات
          </Link>
        </li>
        <li>
          <Link
            to="/manage-accounts"
            className="flex items-center gap-2 py-2 hover:bg-gray-700"
          >
            <FaUsers /> الحسابات
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
