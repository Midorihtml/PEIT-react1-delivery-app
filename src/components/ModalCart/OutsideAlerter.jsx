import { useEffect, useRef } from 'react'

  /*
    Hook that alerts clicks outside of the passed ref
   */

const useOutsideAlerter = (firstRef,setIsOpenModal) => {

    const handleClickOutside = (e) => {
        if (firstRef.current && !firstRef.current.contains(e.target)) {
          setIsOpenModal(false);
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

    const {setIsOpenModal}  = props;
    const firstRef = useRef(null);
    useOutsideAlerter(firstRef, setIsOpenModal);

    
  return (
    <div className="modalContainer" ref={firstRef} setIsOpenModal={setIsOpenModal} >
        {props.children}
    </div>
  )
}

