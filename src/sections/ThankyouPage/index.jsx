import React from "react";
import AcceptancePage from "../../components/AcceptancePage";

const index = () => {
  return (
    <>
      <AcceptancePage
        text="We will evaluate your response and confirm your booking on email within 4-8 days."
        title="THANK YOU!"
        imgsrc="./acceptance.png"
        buttonText="EXPLORE MORE"
        iconSrc="./acceptancelikeicon.png"
      />
    </>
  );
};

export default index;
