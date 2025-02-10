'use client'
import { CustomSearchbarProps } from "@/types"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"
import { manufacturers } from "@/constants"


const SearchManufacturer = ({ manufacturer, setmanufacturer }: CustomSearchbarProps) => {

    const [query, setQuery] = useState("");

    const filteredManufacturer = query === " " ? manufacturers : manufacturers.filter((item) => item.toLowerCase().trim().includes(query.toLowerCase().trim()))


    return (
        <div className="searc-manufacturer">
            <Combobox value={manufacturer} onChange={setmanufacturer}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="logo" />
                    </ComboboxButton>
                    <ComboboxInput className="search-manufacturer__input"
                        placeholder="Volkaswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions>
                            {
                                filteredManufacturer.map((item) => (
                                    <ComboboxOption key={item} className={({ active }) => `
                                relative search-manufacturer__option ${active ? `bg-primary-blue text-white` : 'text-gray-900'}
                                `} value={item}>
                                       {({selected,active})=>(
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active? 'text-white' : 'text-teal-600'}`}>

                                                </span>
                                            ):null}
                                        </>
                                       )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer