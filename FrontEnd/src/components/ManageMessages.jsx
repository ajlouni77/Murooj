// import React from "react";

// const ManageMessages = () => {
//   return (
//     <div className="mb-8">
//       <h3 className="text-xl font-semibold">إدارة الرسائل</h3>
//       {/* هنا يمكنك إضافة الجدول أو المكونات الأخرى لعرض الرسائل */}
//     </div>
//   );
// };

// export default ManageMessages;

import React, { useEffect, useState } from "react";
import { getMessages, updateMessageStatus, replyToMessage } from "../api";

const ManageMessages = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleStatusChange = async (messageId, status) => {
    const updatedMessage = await updateMessageStatus(messageId, status);
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, status: updatedMessage.status } : msg
      )
    );
  };

  const handleReply = async (messageId) => {
    await replyToMessage(messageId, reply);
    setReply("");
    // يمكننا هنا إعادة تحميل الرسائل بعد الرد
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">إدارة الرسائل</h3>
      <div>
        {messages.map((msg) => (
          <div key={msg.id} className="border p-4 my-2">
            <p>{msg.content}</p>
            <div className="flex justify-between">
              <div>
                <button
                  onClick={() => handleStatusChange(msg.id, "approved")}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  الموافقة
                </button>
                <button
                  onClick={() => handleStatusChange(msg.id, "rejected")}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  الرفض
                </button>
              </div>
              <div>
                <input
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="أدخل ردك"
                />
                <button
                  onClick={() => handleReply(msg.id)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  رد
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMessages;
