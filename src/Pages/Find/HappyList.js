const HappyList = function ({ item }) {
  return (
    <div>
      <li className="list">
        <div className="list__content">
          <span className="list__content">{item.제목}</span>
          <span className="list__createdAt">{item.날짜}</span>
        </div>
      </li>
    </div>
  );
};

export default HappyList;
