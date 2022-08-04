function Card({ openModalHandler, isOpen }) {
  return (
    <>{isOpen ? null : <div onClick={openModalHandler}>랜덤클릭Card</div>}</>
  );
}

export default Card;
