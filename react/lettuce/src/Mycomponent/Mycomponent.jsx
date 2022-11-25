import React from "react";

const Mycomponent = props => {
    return (
        <div>
            안녕하세요, 제이름은 {props.name} 입니다. <br />
            children 값은 {props.children}입니다.
        </div>
    )
 };

 Mycomponent.defaultProps = {
    name : '기본이름'
 };

 export default Mycomponent;