import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/add`, product);
  return response.data;
};



// API_URL = "http://localhost:5000/api/dashboard"

// لعرض الإحصائيات
export const getDashboardStats = async () => {
  const response = await axios.get("http://localhost:5000/api/dashboard");
  return response.data;
};


// لعرض الرسائل
export const getMessages = async () => {
  const response = await axios.get("http://localhost:5000/api/messages");
  return response.data;
};

// لحذف أو إخفاء الرسائل
export const updateMessageStatus = async (messageId, status) => {
  const response = await axios.put(`http://localhost:5000/api/messages/${messageId}`, { status });
  return response.data;
};

// للرد على الرسائل
export const replyToMessage = async (messageId, reply) => {
  const response = await axios.post(`http://localhost:5000/api/messages/${messageId}/reply`, { reply });
  return response.data;
};


// لعرض الطلبات
export const getOrders = async () => {
  const response = await axios.get("http://localhost:5000/api/orders");
  return response.data;
};

// للموافقة على الطلب
export const approveOrder = async (orderId) => {
  const response = await axios.put(`http://localhost:5000/api/orders/${orderId}/approve`);
  return response.data;
};

// لرفض الطلب
export const rejectOrder = async (orderId) => {
  const response = await axios.put(`http://localhost:5000/api/orders/${orderId}/reject`);
  return response.data;
};


// لعرض المدفوعات
export const getPayments = async () => {
  const response = await axios.get("http://localhost:5000/api/payments");
  return response.data;
};


// لعرض الحسابات المسجلة
export const getAccounts = async () => {
  const response = await axios.get("http://localhost:5000/api/accounts");
  return response.data;
};

// للموافقة على التسجيل
export const approveAccount = async (accountId) => {
  const response = await axios.put(`http://localhost:5000/api/accounts/${accountId}/approve`);
  return response.data;
};

// لرفض التسجيل
export const rejectAccount = async (accountId) => {
  const response = await axios.put(`http://localhost:5000/api/accounts/${accountId}/reject`);
  return response.data;
};
