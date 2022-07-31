import React from 'react';
import Nav from '../Component/Nav'

function Create() {
  return (
    <>
        <div className='container'>
          <div>사진</div>
          <div>
            <span>dd</span>
            <span>ee</span>
          </div>
          <input placeholder='제목 입력'></input>
          <input placeholder='내용 입력'></input>
          <button>행복조각 모으기</button>
        </div>
     
        <Nav/>
    </>
  );
}

export default Create;