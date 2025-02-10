import { MouseEventHandler } from "react";


export interface CustomButtonProps{
    title:string,
    btnType?:"button" | "submit",
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}
export interface CustomSearchbarProps{
    manufacturer :string;
    setmanufacturer:(manufacturer:string)=>void;
}
