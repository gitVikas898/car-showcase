import { MouseEventHandler } from "react";


export interface CustomButtonProps{
    title:string,
    btnType?:"button" | "submit",
    containerStyles?:string,
    rightIcon?:string,
    textStyles?:string,
    isDisabled?:boolean,
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}
export interface CustomSearchbarProps{
    manufacturer :string;
    setmanufacturer:(manufacturer:string)=>void;
}

export interface CarProps {
    city_mpg: number,
    cla: 'string',
    combination_mpg: number,
    cylinders:number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make:string,
    model: string,
    transmission: string,
    year:number
}
