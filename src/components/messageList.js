import React, { useState, useEffect } from "react";
const customers = [
  {
    customerName: "Sahil",
    phone: 9999999999,
    countryCode: "+91",
    messages: [
      {
        message: "HI, how are you!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 12345,
      },
      {
        message: "wehere you have been!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 12345,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "How you doing!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
    ],
  },
  {
    customerName: "Prince",
    phone: 9999999990,
    countryCode: "+91",
    messages: [
      {
        message: "HI, how are you!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 9876,
      },
      {
        message: "may be may be not",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 9877,
      },
    ],
  },
  {
    customerName: "Rajeev",
    phone: 9999999998,
    countryCode: "+91",
    messages: [
      {
        message: "Feeling confident today",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 87634,
      },
    ],
  },
];
const MessageBox = (data) => {
  return (
    <div>{data && data.map((element,index) => <div key={index}>{element.message}</div>)}</div>
  );
};

export const MessageList = () => {
  const [showMessage, setShowMessage] = useState("");
  const handleShowMessage = ()=>{

  }
  return (
    
      <div>
        {customers &&
          customers.map((element) => (
            <div key={element.phone} style={{display:"flex",gap:20}}>
              <div onClick={()=>setShowMessage(element.phone)}>{element.customerName}</div>
              <div>
                {showMessage && showMessage === element.phone
                  ? MessageBox(element.messages)
                  : null}
              </div>
            </div>
          ))}
      </div>
    
  );
};
