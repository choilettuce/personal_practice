import React, {useState} from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button style={{color : 'red'}} onClick={()=> setColor('red')}> 빨간색</button>
            <button style={{color : 'green'}} onClick={()=> setColor('green')}> 초록색</button>
            <button style={{color : 'blue'}} onClick={()=> setColor('blue')}>파란색</button>
            <h1>{message}</h1>

        </div>
    );

};

export default Say