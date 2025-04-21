import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaLeaf,
  FaAppleAlt,
  FaStore,
  FaTruck,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [category, setCategory] = useState("all");

  // Primary color used throughout the site
  const primaryColor = "#81c408";
  const secondaryColor = "#5a9805";

  // Common styles for reuse
  const styles = {
    primaryBg: { backgroundColor: primaryColor },
    primaryText: { color: primaryColor },
    secondaryBg: { backgroundColor: secondaryColor },
    primaryLightBg: { backgroundColor: "rgba(129, 196, 8, 0.1)" },
    headingAccent: { borderColor: primaryColor },
  };

  // Top selling shops data - الحديقة الخضراء has been removed
  const topSellingShops = [
    {
      id: 1,
      name: "محل الوادي للخضار",
      location: "حي النزهة، الزرقاء",
      image:
        "https://invest.midanalmal.com/wp-content/uploads/2024/06/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%AE%D8%B6%D8%A7%D8%B1-%D9%88%D9%81%D9%88%D8%A7%D9%83%D9%87-%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9-630x300.jpg",
      rating: 4.8,
      sales: 1240,
    },
    {
      id: 2,
      name: "سلة الفواكه الطازجة",
      location: "الهاشمية، الزرقاء",
      image:
        "https://cdn.alweb.com/thumbs/money/article/fit710x532/%D9%83%D9%8A%D9%81-%D8%A3%D8%A8%D8%AF%D8%A3-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%85%D8%AD%D9%84-%D8%AE%D8%B6%D8%A7%D8%B1.jpg",
      rating: 4.9,
      sales: 980,
    },
    {
      id: 4,
      name: "سوق الخير ",
      location: "ابو نصير، عمان",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6IC40mKTNxigQSIWRHiKc440jRtQrOKNbw&s",
      rating: 4.6,
      sales: 750,
    },
  ];

  return (
    <div className="bg-gray-50 font-sans" dir="rtl">
      {/* Search Section */}
      <section className="py-8 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-1 border border-green-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-grow p-2 flex items-center">
                <FaSearch className="text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ابحث عن محل..."
                  className="w-full p-3 focus:outline-none text-lg"
                />
              </div>
              <div className="w-full md:w-auto p-2">
                <button
                  className="w-full md:w-auto px-8 py-4 rounded-lg text-white font-medium transition duration-300 hover:bg-green-600 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  style={styles.primaryBg}
                >
                  بحث
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  خضروات وفواكه طازجة
                  <span className="block mt-3" style={styles.primaryText}>
                    من المزرعة إلى منزلك
                  </span>
                </h1>
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-100 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full opacity-50 blur-lg"></div>
              </div>
              <p className="text-gray-600 mt-6 text-xl max-w-lg mx-auto md:mr-0 leading-relaxed">
                نقدم أفضل المنتجات الطازجة من السوق المركزي إلى المحلات ومن
                المحلات إلى منزلك بسهولة وسرعة.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                <Link
                  to="/Shops"
                  className="px-8 py-4 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                  style={styles.primaryBg}
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-40 h-40 bg-green-100 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-yellow-100 rounded-full opacity-50 blur-lg"></div>
                <img
                  src="https://cdn.altibbi.com/cdn/cache/1000x500/image/2021/10/24/fd99b2e435f79e57cf9eba5b36a4b349.webp"
                  alt="الخضروات والفواكه"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
              لماذا تختار <span style={styles.primaryText}>مُروج</span>؟
              {/* <div className="absolute w-1/2 h-1 mx-auto bg-green-500 bottom-0 left-1/4 mt-2 rounded-full"></div> */}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature cards */}
            {[
              {
                icon: (
                  <FaLeaf className="text-3xl" style={styles.primaryText} />
                ),
                title: "منتجات طازجة",
                description:
                  "نضمن وصول المنتجات من المزرعة إلى منزلك بأقصر وقت للحفاظ على جودتها وطزاجتها.",
              },
              {
                icon: (
                  <FaTruck className="text-3xl" style={styles.primaryText} />
                ),
                title: "توصيل سريع",
                description:
                  "نوفر خدمة توصيل سريعة وموثوقة لجميع المناطق خلال ساعات قليلة من الطلب.",
              },
              {
                icon: (
                  <FaStore className="text-3xl" style={styles.primaryText} />
                ),
                title: "دعم المحلات",
                description:
                  "نساعد أصحاب المحلات على الحصول على أفضل المنتجات من السوق المركزي بأسعار تنافسية.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-100 transform hover:-translate-y-2 group"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={styles.primaryLightBg}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Shops Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
              المحلات <span className="text-green-600">الأكثر مبيعاً</span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topSellingShops.map((shop) => (
                <div
                  key={shop.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 text-sm px-3 py-1 rounded-full text-white font-medium shadow-md bg-green-600">
                      الأكثر مبيعاً
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {shop.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <FaMapMarkerAlt className="text-gray-500 ml-2" />
                      <p className="text-gray-600 text-sm">{shop.location}</p>
                    </div>

                    <div className="flex items-center mt-3 mb-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
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

                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        to={`/shops/${shop.id}`}
                        className="w-full inline-block py-2.5 text-center rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition duration-300"
                      >
                        عرض المنتجات
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Added */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
              آراء <span style={styles.primaryText}>عملائنا</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "أحمد محمد",
                  role: "صاحب محل",
                  testimonial:
                    "ساعدتني منصة مُروج على الحصول على أفضل المنتجات من السوق المركزي بأسعار تنافسية، مما أدى إلى زيادة أرباحي بنسبة 30%.",
                  avatar: "/api/placeholder/80/80",
                },
                {
                  name: "سارة أحمد",
                  role: "مستهلكة",
                  testimonial:
                    "كنت أعاني من صعوبة الحصول على خضروات وفواكه طازجة، لكن مع مُروج أصبح الأمر سهلاً جداً. المنتجات طازجة والتوصيل سريع.",
                  avatar: "/api/placeholder/80/80",
                },
                {
                  name: "خالد عبدالله",
                  role: "مستهلك",
                  testimonial:
                    "مُروج ساعدتني على تسويق منتجاتي بشكل أفضل والوصول إلى شريحة أكبر من العملاء. أنا سعيد جداً بالتعاون معهم.",
                  avatar: "/api/placeholder/80/80",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.testimonial}</p>
                  <div className="flex text-yellow-500 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <FaLeaf className="text-3xl" style={styles.primaryText} />
                <span className="text-3xl font-bold" style={styles.primaryText}>
                  مُروج
                </span>
              </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                منصة توصيل المنتجات الطازجة من السوق المركزي إلى المحلات ومن
                المحلات إلى المستهلكين.
              </p>
              <div className="flex space-x-6 space-x-reverse">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300 bg-gray-800 hover:bg-green-600 p-3 rounded-full"
                    >
                      <Icon className="text-lg" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-xl font-bold mb-6 border-r-4 pr-4"
                style={styles.headingAccent}
              >
                روابط سريعة
              </h3>
              <ul className="space-y-4">
                {[
                  { path: "/", text: "الرئيسية" },
                  { path: "/central-market", text: "السوق المركزي" },
                  { path: "/shops", text: "المحلات" },
                  { path: "/about", text: "من نحن" },
                  { path: "/contact", text: "اتصل بنا" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3
                className="text-xl font-bold mb-6 border-r-4 pr-4"
                style={styles.headingAccent}
              >
                الأصناف
              </h3>
              <ul className="space-y-4">
                {[
                  { path: "/category/vegetables", text: "خضروات" },
                  { path: "/category/fruits", text: "فواكه" },
                ].map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.path}
                      className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"></span>
                      {category.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className="text-xl font-bold mb-6 border-r-4 pr-4"
                style={styles.headingAccent}
              >
                تواصل معنا
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4 space-x-reverse text-gray-400 group">
                  <div className="mt-1 p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <span className="group-hover:text-white transition duration-300">
                    الزرقاء , حي النزهة , مجمع الوائر
                  </span>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse text-gray-400 group">
                  <div className="mt-1 p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <span className="group-hover:text-white transition duration-300">
                    info@murawij.com
                  </span>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse text-gray-400 group">
                  <div className="mt-1 p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <span className="group-hover:text-white transition duration-300">
                    +966 12 345 6789
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 جميع الحقوق محفوظة | مُروج
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-8 space-x-reverse">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    الشروط والأحكام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
