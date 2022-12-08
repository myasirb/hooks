import { createContext } from "react";

export const ContactContext = createContext({
    list:[],
    push: ()=>{},
    pop: () =>{}
});