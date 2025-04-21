import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaLeaf,
} from "react-icons/fa";
import Footer from "../pages/Footer"; // ✅ استيراد الفوتر

const Shops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const primaryColor = "#81c408";
  const secondaryColor = "#394867";

  const styles = {
    primaryBg: { backgroundColor: primaryColor },
    primaryText: { color: primaryColor },
    secondaryText: { color: secondaryColor },
    primaryLightBg: { backgroundColor: "rgba(129, 196, 8, 0.1)" },
  };

  const topSellingShops = [
    {
      id: 1,
      name: "محل الوادي للخضار",
      location: "البتراوي, الزرقاء",
      image:
        "https://invest.midanalmal.com/wp-content/uploads/2024/06/ديكورات-محلات-خضار-وفواكه-عصرية-630x300.jpg",
      rating: 4.8,
      sales: 1240,
      featured: true,
    },
    {
      id: 2,
      name: "محل الخيرات",
      location: "عمان, جبل النصر",
      image:
        "https://invest.midanalmal.com/wp-content/uploads/2024/06/ديكورات-محلات-خضار-وفواكه-عصرية-630x300.jpg",
      rating: 4.8,
      sales: 1240,
    },
    {
      id: 3,
      name: "محل البركة",
      location: " اربد, الحصن",
      image:
        "https://invest.midanalmal.com/wp-content/uploads/2024/06/ديكورات-محلات-خضار-وفواكه-عصرية-630x300.jpg",
      rating: 4.8,
      sales: 1240,
    },
    {
      id: 4,
      name: "محل الطبيعة",
      location: "حي النزهة، الزرقاء",
      image:
        "https://invest.midanalmal.com/wp-content/uploads/2024/06/ديكورات-محلات-خضار-وفواكه-عصرية-630x300.jpg",
      rating: 4.8,
      sales: 1240,
    },
    {
      id: 5,
      name: "سلة الفواكه الطازجة",
      location: "عمان, ابونصير",
      image:
        "https://cdn.alweb.com/thumbs/money/article/fit710x532/كيف-أبدأ-مشروع-محل-خضار.jpg",
      rating: 4.9,
      sales: 980,
      featured: true,
    },
    {
      id: 6,
      name: "سوق الخير للمنتجات الطازجة",
      location: "الهاشمية , الزرقاء",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6IC40mKTNxigQSIWRHiKc440jRtQrOKNbw&s",
      rating: 4.6,
      sales: 750,
      featured: true,
    },
  ];

  // تطبيق الفلاتر على المحلات
  const filteredShops = topSellingShops.filter((shop) => {
    // فلترة حسب النص المدخل
    const matchesSearch = shop.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // فلترة حسب التقييم
    const matchesRating =
      selectedRating === "all" || shop.rating >= parseFloat(selectedRating);

    // فلترة حسب المنطقة
    const matchesLocation =
      selectedLocation === "all" || shop.location.includes(selectedLocation);

    return matchesSearch && matchesRating && matchesLocation;
  });

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-50" dir="rtl">
      {/* Header */}
      <div
        className="relative py-16"
        style={{
          background: "linear-gradient(to right, rgb(129, 196, 8), #4ade80)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 w-full h-full bg-black opacity-10"></div>
          <div
            className="absolute -bottom-10 left-20 w-40 h-40 rounded-full opacity-20"
            style={{ backgroundColor: "rgb(129, 196, 8)" }}
          ></div>
          <div
            className="absolute -top-10 right-20 w-40 h-40 rounded-full opacity-20"
            style={{ backgroundColor: "rgb(129, 196, 8)" }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                استكشف المحلات
              </h1>
              <p className="text-green-100 text-lg max-w-lg">
                اكتشف أفضل المحلات التي تقدم لك خضروات وفواكه طازجة من المزرعة
                مباشرة
              </p>
            </div>
            <div className="hidden md:block">
              <FaLeaf className="text-8xl text-white opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="sticky top-0 z-40 bg-white shadow-md py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-2/3 pr-0 md:ml-4 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن محل..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ "--ring-color": "rgb(129, 196, 8)" }}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full md:w-auto flex items-center justify-center space-x-2 space-x-reverse bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                <FaFilter />
                <span>فلترة</span>
              </button>
            </div>
          </div>

          {filterOpen && (
            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    التقييم
                  </label>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">جميع التقييمات</option>
                    <option value="5">5 نجوم</option>
                    <option value="4">4+ نجوم</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    المنطقة
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">جميع المناطق</option>
                    <option value="عمان">عمان</option>
                    <option value="الزرقاء">الزرقاء</option>
                    <option value="اربد">اربد</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    الترتيب حسب
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="popular">الأكثر شعبية</option>
                    <option value="rating">الأعلى تقييماً</option>
                    <option value="recent">الأحدث</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  style={{ backgroundColor: "rgb(129, 196, 8)" }}
                  className="hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg"
                >
                  تطبيق الفلتر
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Shops Grid */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          المحلات <span style={styles.primaryText}>المميزة</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {shop.featured && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium shadow-md"
                    style={styles.primaryBg}
                  >
                    محل مميز
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {shop.name}
                </h3>
                <div className="flex items-center mb-3">
                  <FaMapMarkerAlt className="text-gray-500 ml-1" />
                  <p className="text-gray-600 text-sm">{shop.location}</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(shop.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium text-sm mr-2">
                    {shop.rating}
                  </span>
                  <span className="text-gray-500 text-sm mr-2">
                    ({shop.sales} عملية بيع)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/shops/${shop.id}`}
                    className="inline-block py-2 px-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                    style={styles.primaryBg}
                  >
                    عرض المنتجات
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Shops;
