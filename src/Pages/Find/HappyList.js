

const HappyList = function ({ item, openModalHandler,isOpen }) {


  return (
    <>
    { isOpen
      ? null
      :
      <div>
        <li className="list">
          <div className="list__content" onClick={openModalHandler}>
            <span className="list__content">{item.제목}</span>
            <span className="list__createdAt">{item.날짜.toDate().toLocaleDateString()}</span>
          </div>
        </li>
      </div>
    }
    </>
  );
};

export default HappyList;