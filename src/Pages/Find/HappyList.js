<<<<<<< HEAD
//onClickHappy, deleteList 추가.
const HappyList = function ({ item, onClickHappy, deleteList }) {
  return (
    <div>
      <li className="list" onClick={onClickHappy}>
        <div className="list__content">
          {/*class명을 list__title로 변경 */}
          <span className="list__title">{item.제목}</span>
          <span className="list__createdAt">{item.날짜.toDate().toLocaleDateString()}</span>
          <button onClick={ () => {
              deleteList(item.id); //id이겠지?
          }}>
              Delete List
          </button>
        </div>
      </li>
    </div>
=======


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
>>>>>>> origin/master
  );
};

export default HappyList;