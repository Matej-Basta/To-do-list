import React, { useState } from "react";
import check from "../img/check.svg";
import cross from "../img/cross.svg";
import question from "../img/question.svg";

export const Toggle = (props) => {
  //keeping tract of the state
  const [number, setNumber] = useState(0);
  //allowing the button to have only 3 states --> 0, 1 and 2
  const changeTheIcon = () => {
    if (number !== 2) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };

  //variable that will contain the source
  let source = 0;

  //switching the value of the source based on the state of the image
  switch (number) {
    case 0:
      source = cross;
      break;
    case 1:
      source = question;
      break;
    case 2:
      source = check;
      break;
  }

  //rendering a toggle image
  return (
    <>
      <img onClick={changeTheIcon} src={source} />
    </>
  );
};
