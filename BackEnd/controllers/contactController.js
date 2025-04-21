const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "يرجى تعبئة جميع الحقول" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "تم إرسال رسالتك بنجاح" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "حدث خطأ أثناء الإرسال" });
  }
};
