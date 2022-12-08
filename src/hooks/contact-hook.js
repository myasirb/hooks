import { useCallback, useState } from "react";

export const useContact = () => {
  const [list, setList] = useState([]);

  const push = useCallback((newContact) => {
    setList((prevList) => {
      return prevList.concat(newContact);
    });
  }, []);

  const pop = useCallback((removeContact) => {
    setList((prevList) => {
      prevList.filter((contact) => contact !== removeContact);
    });
  }, []);

  return {list, push,pop};
};
