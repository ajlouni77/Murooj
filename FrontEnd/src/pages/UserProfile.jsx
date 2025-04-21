import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

const UserProfile = () => {
  // استخدام المتغيرات اللونية
  const primaryColor = "rgb(129, 196, 8)";
  const primaryLightColor = "rgba(129, 196, 8, 0.15)";
  const primaryDarkColor = "rgb(116, 176, 7)";

  const [activeTab, setActiveTab] = useState("account");

  const [userInfo, setUserInfo] = useState({
    name: "أحمد العجلوني",
    email: "ahmad@example.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(userInfo);

  const [orders, setOrders] = useState([
    { id: 12345, date: "15/4/2025", amount: 50, status: "delivered" },
    { id: 12346, date: "10/4/2025", amount: 35, status: "processing" },
  ]);

  const [addresses, setAddresses] = useState([
    { id: 1, text: "إربد - شارع الجامعة", isDefault: true },
    { id: 2, text: "عمان - الدوار السابع", isDefault: false },
  ]);

  const [cards, setCards] = useState([
    { id: 1, type: "Visa", last4: "4242", expiry: "09/2026" },
  ]);

  const tabs = {
    account: "معلومات الحساب",
    addresses: "عناوين التوصيل",
    orders: "الطلبات السابقة",
    cards: "البطاقات المحفوظة",
    payments: "العمليات المالية",
  };

  const statusTranslations = {
    delivered: "تم التوصيل",
    processing: "قيد المعالجة",
    pending: "في الانتظار",
    cancelled: "ملغي",
  };

  useEffect(() => {
    setEditForm(userInfo);
  }, [userInfo, activeTab]);

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    setUserInfo(editForm);
    setIsEditing(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleAddAddress = () => {
    const newId = Math.max(...addresses.map((a) => a.id), 0) + 1;
    setAddresses([
      ...addresses,
      { id: newId, text: "عنوان جديد", isDefault: false },
    ]);
  };

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleAddCard = () => {
    const newId = Math.max(...cards.map((c) => c.id), 0) + 1;
    setCards([
      ...cards,
      {
        id: newId,
        type: "MasterCard",
        last4: "1234",
        expiry: "01/2027",
      },
    ]);
  };

  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      {/* Header */}
      <div
        className="fixed top-0 left-0 right-0 h-16 flex items-center justify-center px-6 shadow-sm z-10"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">بوابة المستخدم</h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="pt-16 flex justify-center">
        <div className="max-w-6xl w-full mx-auto flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md border-l border-gray-200 sticky top-16 h-screen">
            <div className="p-6 pb-4 border-b">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: primaryColor }}
                >
                  {userInfo.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{userInfo.name}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {userInfo.email}
                  </p>
                </div>
              </div>
            </div>

            <nav className="mt-4 p-4">
              <p className="text-xs font-semibold text-gray-500 mb-2 mr-2">
                إدارة الحساب
              </p>
              {Object.entries(tabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center w-full text-right py-3 px-4 rounded-lg mb-1 transition-all ${
                    activeTab === key
                      ? "font-semibold text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === key ? primaryColor : "transparent",
                  }}
                >
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 p-8">
            {activeTab === "account" && (
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  معلومات الحساب
                </h3>
                {!isEditing ? (
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mb-5 pb-5 border-b">
                      <p className="text-sm text-gray-500 mb-1">الاسم</p>
                      <p className="font-semibold text-lg text-gray-800">
                        {userInfo.name}
                      </p>
                    </div>
                    <div className="mb-5 pb-5 border-b">
                      <p className="text-sm text-gray-500 mb-1">
                        البريد الإلكتروني
                      </p>
                      <p className="font-semibold text-lg text-gray-800">
                        {userInfo.email}
                      </p>
                    </div>
                    <button
                      className="mt-4 px-5 py-2.5 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: primaryColor,
                        boxShadow: "0 2px 5px rgba(129, 196, 8, 0.3)",
                      }}
                      onClick={() => setIsEditing(true)}
                    >
                      تعديل المعلومات
                    </button>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-xl shadow-sm space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                        style={{
                          focusBorderColor: primaryColor,
                          focusRingColor: primaryLightColor,
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleEditChange}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                        style={{
                          focusBorderColor: primaryColor,
                          focusRingColor: primaryLightColor,
                        }}
                      />
                    </div>
                    <div className="flex space-x-3 space-x-reverse pt-3">
                      <button
                        onClick={handleEditSave}
                        className="px-5 py-2.5 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-md"
                        style={{
                          backgroundColor: primaryColor,
                          boxShadow: "0 2px 5px rgba(129, 196, 8, 0.3)",
                        }}
                      >
                        حفظ التغييرات
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setEditForm(userInfo);
                        }}
                        className="px-5 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    الأمان
                  </h4>
                  <button
                    className="text-gray-700 font-medium hover:text-gray-900 mb-4 flex items-center"
                    style={{ color: primaryDarkColor }}
                  >
                    <span>تغيير كلمة المرور</span>
                  </button>
                  <button
                    className="text-gray-700 font-medium hover:text-gray-900 flex items-center"
                    style={{ color: primaryDarkColor }}
                  >
                    <span>تفعيل المصادقة الثنائية</span>
                  </button>
                </div>
              </div>
            )}

            {/* تبويب العناوين */}
            {activeTab === "addresses" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  عناوين التوصيل
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="bg-white p-5 rounded-xl shadow-sm relative border-2 transition-all hover:shadow-md"
                      style={{
                        borderColor: address.isDefault
                          ? primaryColor
                          : "transparent",
                      }}
                    >
                      {address.isDefault && (
                        <span
                          className="absolute top-3 left-3 text-xs rounded-full px-2 py-1 font-medium"
                          style={{
                            backgroundColor: primaryLightColor,
                            color: primaryDarkColor,
                          }}
                        >
                          افتراضي
                        </span>
                      )}
                      <p className="font-semibold text-gray-800 text-lg mb-2">
                        {address.text}
                      </p>
                      <div className="flex space-x-3 space-x-reverse mt-4">
                        <button
                          className="text-sm font-medium px-4 py-2 rounded transition-colors"
                          style={{ color: primaryColor }}
                        >
                          تعديل
                        </button>
                        {!address.isDefault && (
                          <button
                            className="text-sm font-medium px-4 py-2 rounded transition-colors"
                            style={{ color: primaryColor }}
                          >
                            تعيين كافتراضي
                          </button>
                        )}
                        <button
                          className="text-sm font-medium text-red-500 px-4 py-2 rounded hover:text-red-600 transition-colors"
                          onClick={() => handleDeleteAddress(address.id)}
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleAddAddress}
                    className="bg-white border-2 border-dashed rounded-xl h-40 flex items-center justify-center cursor-pointer group"
                    style={{ borderColor: primaryLightColor }}
                  >
                    <div className="text-center">
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: primaryLightColor,
                          color: primaryColor,
                        }}
                      >
                        <span className="text-2xl">+</span>
                      </div>
                      <p
                        className="font-medium group-hover:font-semibold transition-all duration-200"
                        style={{ color: primaryColor }}
                      >
                        إضافة عنوان جديد
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* تبويب الطلبات */}
            {activeTab === "orders" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  الطلبات السابقة
                </h3>
                {orders.length === 0 ? (
                  <div className="bg-white p-12 rounded-xl shadow-sm text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryLightColor }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill={primaryColor}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h1.17A3 3 0 015 5zm4 1V5a1 3 0 10-2 0v1H5a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1h-3v1a1 1 0 11-2 0V7H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xl font-medium text-gray-600">
                      لا توجد طلبات حالياً
                    </p>
                    <p className="text-gray-500 mt-2 mb-6">
                      ستظهر هنا طلباتك السابقة بمجرد تقديم طلب جديد
                    </p>
                    <button
                      className="px-5 py-2.5 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: primaryColor,
                        boxShadow: "0 2px 5px rgba(129, 196, 8, 0.3)",
                      }}
                    >
                      تصفح المنتجات
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border-r-4"
                        style={{ borderRightColor: primaryColor }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-bold text-lg text-gray-800">
                                طلب{" "}
                                <span style={{ color: primaryColor }}>
                                  #{order.id}
                                </span>
                              </h4>
                              <span
                                className={`mr-3 text-xs py-1 px-2 rounded-full ${getStatusBadgeClasses(
                                  order.status
                                )}`}
                              >
                                {statusTranslations[order.status]}
                              </span>
                            </div>
                            <p className="text-gray-500 mt-1">
                              تاريخ الطلب: {order.date}
                            </p>
                            <p className="font-medium mt-2">
                              المبلغ: {order.amount} دينار
                            </p>
                          </div>
                          <div className="flex space-x-2 space-x-reverse">
                            <button
                              className="px-4 py-2 rounded-lg font-medium border transition-all duration-200"
                              style={{
                                borderColor: primaryLightColor,
                                color: primaryColor,
                              }}
                            >
                              تفاصيل الطلب
                            </button>
                            <button
                              className="text-red-500 hover:text-red-600 px-3"
                              onClick={() => handleDeleteOrder(order.id)}
                            >
                              حذف
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* تبويب البطاقات */}
            {activeTab === "cards" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  البطاقات المحفوظة
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md"
                    >
                      <div
                        className="h-12 w-full"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-gray-800 text-lg">
                            {card.type}
                          </span>
                          <button
                            className="text-red-500 hover:text-red-600 text-sm"
                            onClick={() => handleDeleteCard(card.id)}
                          >
                            إزالة
                          </button>
                        </div>
                        <p className="font-semibold text-xl text-gray-800 mb-1">
                          •••• •••• •••• {card.last4}
                        </p>
                        <p className="text-gray-500">تنتهي في {card.expiry}</p>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleAddCard}
                    className="bg-white border-2 border-dashed rounded-xl h-40 flex items-center justify-center cursor-pointer group"
                    style={{ borderColor: primaryLightColor }}
                  >
                    <div className="text-center">
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: primaryLightColor,
                          color: primaryColor,
                        }}
                      >
                        <span className="text-2xl">+</span>
                      </div>
                      <p
                        className="font-medium group-hover:font-semibold transition-all duration-200"
                        style={{ color: primaryColor }}
                      >
                        إضافة بطاقة جديدة
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* تبويب العمليات المالية */}
            {activeTab === "payments" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  العمليات المالية
                </h3>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr style={{ backgroundColor: primaryLightColor }}>
                          <th
                            className="text-right py-4 px-5 font-semibold"
                            style={{ color: primaryDarkColor }}
                          >
                            تاريخ العملية
                          </th>
                          <th
                            className="text-right py-4 px-5 font-semibold"
                            style={{ color: primaryDarkColor }}
                          >
                            رقم الطلب
                          </th>
                          <th
                            className="text-right py-4 px-5 font-semibold"
                            style={{ color: primaryDarkColor }}
                          >
                            المبلغ
                          </th>
                          <th
                            className="text-right py-4 px-5 font-semibold"
                            style={{ color: primaryDarkColor }}
                          >
                            حالة الدفع
                          </th>
                          <th
                            className="text-right py-4 px-5 font-semibold"
                            style={{ color: primaryDarkColor }}
                          >
                            إجراءات
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-b hover:bg-gray-50 transition-colors"
                          >
                            <td className="py-4 px-5">{order.date}</td>
                            <td className="py-4 px-5">
                              <a
                                href="#"
                                className="hover:underline"
                                style={{ color: primaryColor }}
                              >
                                #{order.id}
                              </a>
                            </td>
                            <td className="py-4 px-5 font-medium">
                              {order.amount} دينار
                            </td>
                            <td className="py-4 px-5">
                              <span className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">
                                تم الدفع
                              </span>
                            </td>
                            <td className="py-4 px-5">
                              <button
                                className="text-sm rounded px-3 py-1"
                                style={{ color: primaryColor }}
                              >
                                تفاصيل
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    ملخص المدفوعات
                  </h4>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">إجمالي الطلبات</span>
                    <span className="font-semibold text-lg">
                      {orders.reduce((total, order) => total + order.amount, 0)}{" "}
                      دينار
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">عدد الطلبات</span>
                    <span className="font-semibold text-lg">
                      {orders.length}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default UserProfile;




