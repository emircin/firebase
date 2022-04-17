import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase"
import Toastify from "./toast";

export const SendInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "contacts");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

export const useFetch = () => {

  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contacts");

    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const contactsArr=[]
        for(let id in data) {
            contactsArr.push({id, ...data[id]})
        }
        setContactList(contactsArr);
        setIsLoading(false);
  });
}, []);
return{isLoading, contactList}

};


export const UserDelete = (id) => {
  
  const db = getDatabase();
    const userRef = ref(db, "contacts");
    remove(ref(db, "contacts/"+id))

    Toastify("Kullanıcı bilgisi silindi")
}

export const EditUser = (info) =>{
  const db = getDatabase();
  const updates = {};

  updates["contacts/"+info.id]=info;
  return update(ref(db),updates);
}