import React from 'react'

function Conditional() {
    let age = 18;
    let result;

    if(age >= 18){
        result = '성인입니다.'
    } else {
        return null;
    }


  return (
    <div><p>{result}</p></div>
  )
}

export default Conditional;