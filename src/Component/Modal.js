import React from 'react';
import styled from 'styled-components';


const Modal = (text, img) => {
    return(
        <div className='modal'>
          <h4>{text}</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      )
}

export default Modal;