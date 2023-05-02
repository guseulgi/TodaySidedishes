import React, { useEffect, useRef, useState } from 'react'

export default function Typemark({type}:{type:string}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>('');
  let typeColor = '';
  
  switch(type) {
    case '한식' :
      typeColor = '#E37F3C';
      break;
    case '중국' :
      typeColor = '#E33C3C';
      break;
    case '일본' :
      typeColor = '#CAD9DC';
      break;
    case '양식' :
      typeColor = '#E8B465';
      break;
    default : 
      typeColor = '#536F7D';
      break;
  }

  useEffect(() => {
    setColor(typeColor);
  }, [])

  if(divRef.current !== null){
    divRef.current.style.backgroundColor = color;
  }

  return (
    <div className='inline-block px-4 py-1 rounded-lg text-white
    bg-[#536F7D]'
      ref={divRef}>
      {type}
    </div>
  )
}
