import React, { useState } from "react";
import {
  Wallet,
  Clock,
  Car,
  Users,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import Footer from "../pages/Footer";
import axios from "axios";

function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: "",
    about: "",
    agreement: false,
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/joinus",
        formData
      );
      if (res.status === 201) {
        setSuccessMsg("✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          vehicleType: "",
          about: "",
          agreement: false,
        });
      }
    } catch (error) {
      setErrorMsg("❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen font-[Cairo, sans-serif]"
      dir="rtl"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#F1F6F9] to-white py-20">
        <div className="absolute inset-0 bg-[url('/images/delivery-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              فرص عمل
            </span>
            <h1 className="text-5xl font-bold text-[#394867] mb-6">
              انضم إلى فريق <span className="text-[#81c408]">مُروج</span> كـ
              سائق توصيل
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              انضم إلى فريقنا المتميز وكن جزءاً من نجاحنا! نقدم فرصاً مرنة للعمل
              وأرباحاً مجزية وبيئة عمل محفزة.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#apply-form"
                className="px-8 py-3 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                قدم طلبك الآن
              </a>
              <a
                href="#benefits"
                className="px-8 py-3 bg-white text-[#394867] border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                تعرف على المزايا
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              متطلبات الانضمام
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نبحث عن سائقين يتمتعون بالالتزام والمهنية لتقديم أفضل خدمة توصيل
              لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "رخصة قيادة سارية",
                description:
                  "يجب أن تكون لديك رخصة قيادة سارية المفعول من فئة مناسبة.",
              },
              {
                title: "وسيلة نقل خاصة",
                description:
                  "امتلاك وسيلة نقل خاصة (سيارة/دراجة نارية) في حالة جيدة.",
              },
              {
                title: "مهارات التواصل",
                description:
                  "القدرة على التواصل بشكل فعال وتقديم خدمة عملاء ممتازة.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#81c408] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#394867] mr-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Apply Form Section */}
      <section id="benefits" className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* المزايا */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[#394867] mb-3 relative">
                المزايا التي نقدمها لك
                <span className="block w-16 h-1 bg-[#81c408] mt-2"></span>
              </h3>
              <p className="text-gray-600">
                اكتشف مزايا العمل معنا كسائق توصيل واستفد من فرصة رائعة للنمو
                المهني
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Wallet className="w-6 h-6" />,
                  title: "أرباح مجزية",
                  text: "دخل مناسب مع حوافز إضافية حسب عدد وقيمة الطلبات التي تقوم بتوصيلها.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "ساعات عمل مرنة",
                  text: "حدد جدولك بنفسك واختر الوقت الذي يناسبك للعمل.",
                },
                {
                  icon: <Car className="w-6 h-6" />,
                  title: "تطور مهني",
                  text: "فرص للتطور المهني وتحسين المهارات مع إمكانية الترقية.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "بيئة عمل محفزة",
                  text: "انضم لفريق داعم ومتعاون مع تقدير دائم للجهود المبذولة.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-r-4 border-[#81c408]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#81c408]/10 p-3 rounded-lg text-[#81c408]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#394867] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#81c408]/10 rounded-xl border border-[#81c408]/20">
              <h4 className="text-xl font-semibold text-[#394867] mb-3">
                ما الذي يميزنا؟
              </h4>
              <ul className="space-y-3">
                {[
                  "نظام دفع أسبوعي مع إمكانية السحب الفوري",
                  "دعم فني متاح على مدار الساعة",
                  "برامج تدريبية لتطوير المهارات",
                  "تأمين على الحوادث أثناء العمل",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#81c408] mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* النموذج */}
          <div
            id="apply-form"
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#394867] mb-2">
              قدم طلبك الآن
            </h2>
            <p className="text-gray-600 mb-6">
              املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="05xxxxxxxx"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@domain.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  العنوان
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="المدينة، المنطقة"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="vehicleType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نوع وسيلة النقل
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none bg-white"
                >
                  <option value="" disabled>
                    اختر نوع وسيلة النقل
                  </option>
                  <option value="car">سيارة</option>
                  <option value="motorcycle">دراجة نارية</option>
                  <option value="bicycle">دراجة هوائية</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نبذة عن خبرتك
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows="4"
                  value={formData.about}
                  onChange={handleChange}
                  required
                  placeholder="أخبرنا عن خبرتك في القيادة وأي معلومات إضافية ترغب في مشاركتها..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                ></textarea>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 accent-[#81c408]"
                />
                <span className="text-gray-700">
                  أوافق على{" "}
                  <a href="#" className="text-[#81c408] hover:underline">
                    الشروط والأحكام
                  </a>{" "}
                  وسياسة الخصوصية
                </span>
              </label>

              {successMsg && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <p>{successMsg}</p>
                </div>
              )}

              {errorMsg && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <p>{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 flex items-center justify-center gap-2 bg-[#81c408] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#6fa100]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-transparent"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>قدّم طلبك الآن</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              قصص نجاح السائقين معنا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تعرف على تجارب بعض السائقين الذين انضموا لفريقنا وما حققوه من نجاح
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "محمد أحمد",
                role: "سائق منذ 2023",
                quote:
                  "انضممت لفريق مُروج قبل عامين، وأصبحت الآن قادراً على تحقيق دخل إضافي مع الاحتفاظ بمرونة في جدولي اليومي.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "عبدالله خالد",
                role: "سائق متميز",
                quote:
                  "العمل مع مُروج أتاح لي فرصة الانطلاق في مجال جديد. الدعم المستمر والتدريب المقدم جعلني أطور مهاراتي بشكل كبير.",
                image: "https://randomuser.me/api/portraits/men/46.jpg",
              },
              {
                name: "سامي عمر",
                role: "سائق منذ 2022",
                quote:
                  "أفضل ما في العمل مع مُروج هو المرونة والدعم المستمر. أستطيع تنظيم وقتي بما يناسبني مع تحقيق دخل مناسب.",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#81c408]"
                  />
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#394867]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#81c408]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#81c408]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#394867] mb-6">
            جاهز للانضمام إلى فريقنا؟
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            لا تفوت هذه الفرصة الرائعة للعمل مع فريق مميز والاستفادة من المزايا
            العديدة التي نقدمها
          </p>
          <a
            href="#apply-form"
            className="inline-block px-8 py-3 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            قدم طلبك الآن
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              إليك إجابات على الأسئلة الأكثر شيوعاً حول العمل معنا كسائق توصيل
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y">
            {[
              {
                question: "ما هي متطلبات الانضمام كسائق توصيل؟",
                answer:
                  "يجب أن تكون لديك رخصة قيادة سارية، وسيلة نقل خاصة، وخبرة في القيادة. كما يجب أن تكون ملماً بالمنطقة وقادراً على استخدام تطبيقات الخرائط.",
              },
              {
                question: "كيف يتم احتساب الأرباح؟",
                answer:
                  "يتم احتساب الأرباح بناءً على عدد الطلبات التي تقوم بتوصيلها والمسافة المقطوعة، بالإضافة إلى حوافز إضافية خلال أوقات الذروة.",
              },
              {
                question: "هل يمكنني العمل بدوام جزئي؟",
                answer:
                  "نعم، نحن نوفر مرونة كبيرة في ساعات العمل، يمكنك العمل بدوام كامل أو جزئي حسب ما يناسبك.",
              },
              {
                question: "ما هي مدة التدريب قبل بدء العمل؟",
                answer:
                  "يتم تقديم تدريب لمدة يومين لتعريفك بنظام العمل وكيفية استخدام التطبيق، بالإضافة إلى أفضل الممارسات في خدمة العملاء والتوصيل.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h4 className="text-xl font-semibold text-[#394867] mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JoinUs;
