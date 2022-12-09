import { useCallback, useMemo, useState } from "react";

export const useContact = () => {

  // State to save list of contacts
  const [list, setList] = useState([]);

  // call back method to add a new contact in the list
  const push = useCallback((newContact) => {
    setList((prevList) => {
      return prevList.concat(newContact);
    });
  }, []);

  // call back method to remove a contact from list
  const pop = useCallback((removeContact) => {
    setList((prevList) => {
      return prevList.filter((contact) => contact.number !== removeContact.number);
    });
  }, []);

  // memo to get count of contacts each time list state is updated
  const count = useMemo(()=>{
    return list.length;
  },[list])

  // return 
  return {list, count, push, pop};
};
