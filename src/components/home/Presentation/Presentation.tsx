import React, { useEffect, useState } from "react";
import css from "./Presentation.module.css";
import { PresentationInfo } from "../../../utils/PresentationData";

const Presentation = () => {
  const [timeoutState, setTimeoutState] = useState<NodeJS.Timer>();
  const [messageCounter, setMessageCounter] = useState(0);
  const [PresentationData] = useState(PresentationInfo);
  useEffect(() => {
    setTimeoutState(
      setTimeout(() => {
        setMessageCounter((counter) => counter + 1);
        if (messageCounter >= PresentationData.length - 1) {
          setMessageCounter(0);
        }
      }, 3000)
    );

    return () => clearTimeout(timeoutState);
  }, [messageCounter]);

  return (
    <>
      <div className={css.container}>
        <h1>
          Development of
          <span className={css.inputLabel}>
            {" "}
            {PresentationData[messageCounter].input}{" "}
          </span>
          software that
          <span className={css.outputLabel}>
            {" "}
            {PresentationData[messageCounter].output}{" "}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Presentation;
