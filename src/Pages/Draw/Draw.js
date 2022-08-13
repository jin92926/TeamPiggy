// 랜덤 뽑기 메인 컴포넌트
// 행복한 기억이 필요하세요?
// 여기서 누르면 모달(HappyModal) 창이 나와야함
import { useEffect, useState } from "react";
import Modal from '../../Component/Modal';
import ClickModal from "./ClickModal";

function Draw(props) {
  const [showmodal, setShowmodal] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowmodal(false)
    },2000)
    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <>
    {
      showmodal === true
      ?
      <Modal title={props.title[1]} src={props.src[1]} vanish={props.vanish}/>
      :
      <ClickModal title={props.title[2]} src={props.src[1]} vanish={!props.vanish}/>
    }
    </>
  );
}

export default Draw;

// //1. 행복한 기억 고르기 창(Card.js))
// // 2. 렌더링 모달창 (settimeout)
// // 메인에서 isClick으로 HappyModal 띄움
// // 3.  isClick 시 나타나는 HappyModal
