import { createContext } from "react";

export const ContactContext = createContext({
    count:0,
    list:[],
    push: ()=>{},
    pop: () =>{}
});