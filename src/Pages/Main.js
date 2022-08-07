import React, { useState } from 'react';
import Nav from '../Component/Nav'
import Modal from '../Component/Modal';

function Main() {
  const [title, setTitle] = useState('행복저금통')

  return (
    <>
      <Modal title={title}/>
      <div>서희님의 행복한 기억을 모아뒀어요</div>
      <Nav/>
    </>
  )
}

export default Main;