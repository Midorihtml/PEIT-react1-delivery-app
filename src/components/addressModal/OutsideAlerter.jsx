import { useEffect, useRef } from 'react'

  /* Hook that alerts clicks outside of the passed ref */

const useOutsideAlerter = (firstRef, setIsAddressEditOn) => {

    const handleClickOutside = (e) => {
        if (firstRef.current && !firstRef.current.contains(e.target)) {
          setIsAddressEditOn(false);
        } 
      };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return ()=>{
        document.addEventListener("mousedown", handleClickOutside);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[firstRef]);
  };

export const OutsideAlerter = (props) => {

    const {setIsAddressEditOn}  = props;
    const firstRef = useRef(null);
    useOutsideAlerter(firstRef, setIsAddressEditOn);

    
  return (
    <div className="modalContainer" ref={firstRef} setIsAddressEditOn={setIsAddressEditOn} >
        {props.children}
    </div>
  )
}