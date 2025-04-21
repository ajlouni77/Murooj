// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userType = location.state?.userType || "buyer"; // الافتراضي مشتري

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("تم التسجيل بنجاح");
//         navigate("/login");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("خطأ أثناء التسجيل:", error);
//       alert("حدث خطأ أثناء التسجيل");
//     }
//   };

//   return (
//     <div
//       dir="rtl"
//       className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#F1F6F9] to-[#E2F0CB]"
//     >
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-center text-3xl font-semibold text-[#394867] mb-6">
//           {userType === "shop" ? "تسجيل محل جديد" : "تسجيل كمشتري"}
//         </h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-2">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               الاسم الكامل
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="أدخل اسمك الكامل"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
//             />
//           </div>

//           <div className="space-y-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               البريد الإلكتروني
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="أدخل بريدك الإلكتروني"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
//             />
//           </div>

//           <div className="space-y-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               كلمة المرور
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="أدخل كلمة المرور"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-[#81c408] text-white rounded-lg hover:bg-[#68a303] transition duration-300 font-medium text-lg"
//           >
//             تسجيل
//           </button>
//         </form>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">أو</span>
//           </div>
//         </div>

//         <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
//           <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12.545 10.239v3.821h5.445c-0.643 2.783-2.835 4.76-5.445 4.76-3.312 0-6-2.688-6-6s2.688-6 6-6c1.757 0 3.345 0.756 4.452 1.964l2.828-2.828c-1.935-1.805-4.522-2.916-7.28-2.916-5.961 0-10.8 4.839-10.8 10.8s4.839 10.8 10.8 10.8c6.435 0 10.8-4.548 10.8-10.8 0-0.756-0.096-1.471-0.276-2.161h-10.524z"></path>
//           </svg>
//           تسجيل باستخدام Google
//         </button>

//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => navigate("/login")}
//             className="text-[#394867] hover:text-[#81c408] transition duration-300"
//           >
//             هل لديك حساب بالفعل؟ تسجيل الدخول
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;












import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType || "buyer";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("تم التسجيل بنجاح");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("خطأ أثناء التسجيل:", error);
      alert("حدث خطأ أثناء التسجيل");
    }
  };

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#F1F6F9] to-[#E2F0CB]"
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-semibold text-[#394867] mb-6">
          {userType === "shop" ? "تسجيل محل جديد" : "تسجيل كمشتري"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#81c408] text-white rounded-lg hover:bg-[#68a303] transition duration-300 font-medium text-lg"
          >
            تسجيل
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">أو</span>
          </div>
        </div>

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545 10.239v3.821h5.445c-0.643 2.783-2.835 4.76-5.445 4.76-3.312 0-6-2.688-6-6s2.688-6 6-6c1.757 0 3.345 0.756 4.452 1.964l2.828-2.828c-1.935-1.805-4.522-2.916-7.28-2.916-5.961 0-10.8 4.839-10.8 10.8s4.839 10.8 10.8 10.8c6.435 0 10.8-4.548 10.8-10.8 0-0.756-0.096-1.471-0.276-2.161h-10.524z"></path>
          </svg>
          تسجيل باستخدام Google
        </button>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-[#394867] hover:text-[#81c408] transition duration-300"
          >
            هل لديك حساب بالفعل؟ تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
