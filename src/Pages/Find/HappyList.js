//onClickHappy, deleteList 추가.
const HappyList = function ({ item, onClickHappy, openModalHandler,isOpen, deleteList }) {

  return (
    <>
    { isOpen
      ? null
      :
      <div>
        <li className="list" onClick={onClickHappy}>
          <div className="list__content" onClick={openModalHandler}>
            <span className="list__content">{item.제목}</span>
            <span className="list__createdAt">{item.날짜.toDate().toLocaleDateString()}</span>
            <button onClick={ () => {
              deleteList(item.id); //id이겠지?
            }}>
                Delete List
          </button>
          </div>
        </li>
      </div>
    }
    </>
  );
};

export default HappyList;