import React from "react";
import MyParagraph from "./MyParagraph";

const DemeOutput = (props) => {
  console.log("DemoOutping RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemeOutput);
