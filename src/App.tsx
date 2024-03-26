import { useEffect, useState, useRef } from 'react';

import './index';

export default function App(){
  const[per, setPer] = useState(0)
  const bar = useRef(null)

  useEffect(()=>{
    const perInterval = setInterval(()=>{
       if(per<1){
          setPer(per+1/4)
       }else{
        setPer(0)
       }
    },800)
   
    return ()=>clearInterval(perInterval)
  },[per])
 
  return (
    <>
      <div id='bar' ref={bar}>
      <div id='per'>{per*100}%</div>

      <div id='con' style={{width:(120*per)+'px'}}></div>
      </div>
      
    </>
  );
};

