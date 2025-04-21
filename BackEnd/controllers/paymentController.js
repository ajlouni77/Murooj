const Payment = require("../models/Payment");

exports.submitPayment = async (req, res) => {
  try {
    const { fullName, address, phone, method, total } = req.body;

    if (!fullName || !address || !phone || !method || !total) {
      return res.status(400).json({ message: "جميع الحقول مطلوبة" });
    }

    const newPayment = new Payment({ fullName, address, phone, method, total });
    await newPayment.save();

    res.status(201).json({ message: "✅ تم تأكيد الطلب بنجاح" });
  } catch (error) {
    console.error("❌ Payment Error:", error);
    res.status(500).json({ message: "حدث خطأ أثناء تأكيد الطلب" });
  }
};
