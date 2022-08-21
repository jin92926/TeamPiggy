import { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
const HappyListContainer = styled.div`
  background-color: #fff;
  margin: 20px;
  height: 60px;
  color: #6592ec;
  border-radius: 10px;
`;
const ItemTile = styled.div`
  font-size: 20px;
  text-align: center;
  padding-top: 9px;
`;

const DateNDelete = styled.section`
  height: 30px;
  display: flex;
  align-items: center;
`;

const DateDiv = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  span {
    margin-left: 80px;
    margin-top: 6px;
    height: 17px;
    padding-top: 4px;
    width: 130px;
    height: 15px;
    text-align: center;
    background: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    font-size: 11px;
    color: #fff;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 3.5px;

  img {
    //이미지 색 바꿔야함
    width: 13.33px;
  }
`;

const ButtonCss = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #6592ec99;
`;


function HappyList({savedHappy, openModalHandler, deleteList,selecteHandler}) {
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <Layout >
      {savedHappy.slice(offset, offset + limit).map((el) => (
        <div key={el.id} onClick={() => selecteHandler(el.id)}>
        <HappyListContainer key={el.id} onClick={openModalHandler}>
          <ItemTile>{el.제목}</ItemTile>
          <DateNDelete>
            <DateDiv>
              <span>{el.날짜.toDate().toLocaleDateString().slice(0, 11)}</span>
            </DateDiv>
            {/* <ButtonDiv>
              <img src="/trash.png" alt="삭제하기" />
              <ButtonCss
                onClick={(e) => {
                  e.stopPropagation();
                  deleteList(el.id);
                }}
              >
                삭제하기
              </ButtonCss>
            </ButtonDiv> */}
          </DateNDelete>
        </HappyListContainer>
        </div>
      ))}
      <footer>
        <Pagination
          total={savedHappy.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

export default HappyList;