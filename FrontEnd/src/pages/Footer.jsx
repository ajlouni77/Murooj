import React from "react";
import {
  FaLeaf,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// تقدر تخصص هذه الألوان حسب الثيم العام
const styles = {
  primaryText: { color: "#81c408" },
  headingAccent: { borderColor: "#81c408" },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* معلومات الشركة */}
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

          {/* روابط سريعة */}
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

          {/* الأصناف */}
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

          {/* التواصل */}
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
  );
};

export default Footer;
