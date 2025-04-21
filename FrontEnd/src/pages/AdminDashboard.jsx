import React from "react";
import Sidebar from "../components/Sidebar";
import Statistics from "../components/Statistics";
import ManageMessages from "../components/ManageMessages";
import ManageOrders from "../components/ManageOrders";
import ManagePayments from "../components/ManagePayments";
import ManageAccounts from "../components/ManageAccounts";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <Statistics />
        <ManageMessages />
        <ManageOrders />
        <ManagePayments />
        <ManageAccounts />
      </div>
    </div>
  );
};

export default AdminDashboard;
