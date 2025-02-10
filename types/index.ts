import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    btnType:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}