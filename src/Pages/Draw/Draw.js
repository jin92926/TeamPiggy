// 랜덤 뽑기 메인 컴포넌트
// 행복한 기억이 필요하세요?
// 여기서 누르면 모달(HappyModal) 창이 나와야함
import { useState } from "react";
import HappyModal from "./HappyModal";
import Nav from "../../Component/Nav";
import Card from "./Card";
function Draw() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <Card openModalHandler={openModalHandler} isOpen={isOpen} />
        <HappyModal isOpen={isOpen} />
      </div>
      <Nav />
    </>
  );
}

export default Draw;

// //1. 행복한 기억 고르기 창(Card.js))
// // 2. 렌더링 모달창 (settimeout)
// // 메인에서 isClick으로 HappyModal 띄움
// // 3.  isClick 시 나타나는 HappyModal
