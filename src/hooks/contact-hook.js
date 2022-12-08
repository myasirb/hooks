import { useCallback, useMemo, useState } from "react";

export const useContact = () => {
  const [list, setList] = useState([]);

  const push = useCallback((newContact) => {
    setList((prevList) => {
      return prevList.concat(newContact);
    });
  }, []);

  const pop = useCallback((removeContact) => {
    setList((prevList) => {
      return prevList.filter((contact) => contact.number !== removeContact.number);
    });
  }, []);

  const count = useMemo(()=>{
    return list.length;
  },[list])

  return {list, count, push, pop};
};
