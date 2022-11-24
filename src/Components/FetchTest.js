import { collection ,getDoc,getDocs, doc} from "firebase/firestore";
import { db } from "../firebase-config";

import React from 'react'
import { useState } from "react";



let productcollectionref = collection(db,'products');
export async function getdata() {
  const docref = doc(db,'products',"SF");
  // const docsnap = (await getDoc(docref)).data();
 await getDoc(docref).then((doc) =>{
  console.log(getDoc(docref));
  // console.log(doc.data().duration + "hello");
  })
}


function FetchTest() {
  return (
    <div>FetchTest</div>
  )
}

export default FetchTest