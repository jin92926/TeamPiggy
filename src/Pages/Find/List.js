import React, { useState } from 'react';
import dummyDatas from '../../static/dummyDatas';

const List = () => {

    const [data, setData] = useState(dummyDatas)
    const newDummy = [...data]

    const newDummyList = newDummy.map((el) => (
        <li key={el.id} className="list">
            <div className="list__content">
                <span className="list__content">{el.title}</span>
                <span className="list__createdAt">{el.createdAt}</span>
            </div>
        </li>
    ))

    return (
        <>
            {newDummyList}
        </>
    )
}

export default List;