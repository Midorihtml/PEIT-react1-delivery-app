import { useEffect, useState } from "react";
import "./buttons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Buttons = ({ name, icon, pressed, setPressed }) => {

  const [isActive, setIsActive] = useState(true);

  const homeTitle= ()=>{
    if (pressed === name && name === "home") {
      return "home";
    }
  }

  const handleIsActive = () => {

    if (!isActive) {
      setIsActive(true);
      setPressed(name);

    }
    //  else {
    //   setIsActive(false);
    //   setPressed(null);
    // }

  };

  useEffect(() => {

    if (pressed === name) {
      setIsActive(true);

    } else {
      setIsActive(false);
    }


  }, [name, pressed])



  const onActive = {

    color: "#31B9CC",
    height: "16px",


  };

  const offActive = {
    color: "#C6C7CA",
    height: "16px",

  };

  const onActiveShadow = {
    color: "#31B9CC",
    backgroundColor: "#F1F2F6"

  };

  const offActiveShadow = {
    color: "#C6C7CA",
    backgroundColor: "#FFFFFF"

  };




  return (
    <button className="buttonNavBar" onClick={handleIsActive} style={isActive ? onActiveShadow : offActiveShadow}>

      <FontAwesomeIcon className="iconNavBar" icon={icon} style={isActive ? onActive : offActive} />
      <p>{homeTitle()}</p>

    </button>
  );
};