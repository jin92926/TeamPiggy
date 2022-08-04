// import React, { useEffect } from "react";
// import {
//   collection,
//   onSnapshot,
//   addDoc,
//   query,
//   orderBy,
// } from "firebase/firestore";
// import { dbService } from "../../firebase";

// const happyArrFunc = () => {
//   let happyArr = [];
//   const q = query(collection(dbService, "happy"), orderBy("날짜", "desc"));
//   onSnapshot(q, (snapshot) => {
//     happyArr = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   });
//   return happyArr;
// };

// console.log(happyArr);
// export default happyArrFunc;
