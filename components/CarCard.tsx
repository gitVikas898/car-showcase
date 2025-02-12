'use client'
import { useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types"
import { calculateCarRent, generateCarImageUrl } from "@/utils"
import CustomButton from "./CustomButton"
import CarDetails from "./CarDetails"

interface CarCardProps {
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {

    const [isOpen, setisOpen] = useState(false);

    const {city_mpg,year,make,model,transmission,drive}=car;
    const carRent = calculateCarRent(city_mpg,year);

  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">{make} {model}</h2>
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">$</span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src={generateCarImageUrl(car)} fill priority className="object-contain"  alt="car"/>
        </div>
        <div className="realtive flex flex-col gap-2 w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray-750">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/steering-wheel.svg"} alt="ster" width={20} height={20} />
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : "Manual"}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/tire.svg"} alt="ster" width={20} height={20} />
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/gas.svg"} alt="ster" width={20} height={20} />
                    <p className="text-[14px]">
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
            <div className=" ">
                <CustomButton 
                    title="View More"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    handleClick={()=>setisOpen(true)}
                    rightIcon="/right-arrow.svg"
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=>setisOpen(false)}car={car} />
    </div>
  )
}

export default CarCard