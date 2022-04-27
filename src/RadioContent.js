import React, { useEffect, useRef, useState } from "react";
import styledComponents from "styled-components";

const RadioContent = () => {
  const radio = [
    { id: "_1", num: 1 },
    { id: "_2", num: 2 },
    { id: "_3", num: 3 },
  ];
  const [radioValue, setRadioValue] = useState("");

  const radioHandler = (e)=>{
    const value = e.target.value;
    setRadioValue(value);
    console.log(checkboxRef);
    for(const element of checkboxRef.current){
        // console.log(element);
        element.checked = false
        setChkArr([])
    }
}

  const checkbox = [
    { id: "_c1", num: "1c" },
    { id: "_c2", num: "2c" },
    { id: "_c3", num: "3c" },
  ]
  const [chkArr, setChkArr] = useState([])
  const unitCheck = (e)=>{

    if(e.target.checked){
        setChkArr([...chkArr, e.target.value]);
    }else{
        setChkArr(chkArr.filter((item)=>item !== e.target.value))
    }
  }
  const checkboxRef = useRef([]);
  const confirmChk = (e)=>{
      return chkArr.includes(e.target.value)?true:false
  }
  useEffect(()=>{
      console.log(chkArr);
  },[chkArr])
  return (
    <>
      <div>RadioContent</div>
      <div>
        {radio.map((value) => (
          <label key={value.id}>
            <input type="radio" value={value.num} name="radio-content" onClick={radioHandler}/>
            {value.num}번
          </label>
        ))}
      </div>
      <h3>
      radioValue: {radioValue}
      </h3>
      <div>CheckboxContent</div>
      <div>
            {
                checkbox.map((value, index)=>(
                    <label key={value.id}>
                        <CheckBox type="checkbox" value={value.num} onChange={unitCheck} ref={(el)=>checkboxRef.current[index]=el}/>
                        {value.num}박스
                    </label>
                ))
            }
      </div>
    </>
  );
};

export default RadioContent;

const CheckBox = styledComponents.input``