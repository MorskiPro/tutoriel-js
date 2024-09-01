import { Button } from "@/ui/design-system/button/button"
import { RiHome4Fill } from "react-icons/ri";
import { RiTruckFill } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa6";
import { RiCalendarFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import Link from "next/link"
import { ActiveLinks } from "./active-link";
import CallButton from "@/ui/design-system/button/button-call";



interface Props{

}
export const Menubar=({}:Props)=> {

return(

<div className="sm:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <div className="flex justify-center px-5 py-1.5">
            <ActiveLinks href="/">
                <Button variant="ico" iconTheme="gray" icon={{icon: RiHome4Fill}}size="medium"/>
            </ActiveLinks>
        </div>
            

        <div className="flex justify-center py-1.5">
            <ActiveLinks href="/qui-sommes-nous">
                <Button variant="ico" iconTheme="gray" icon={{icon: RiTruckFill}}size="medium"/>
            </ActiveLinks>
        </div>

        <div className="flex justify-center py-1.5">
            <ActiveLinks href="/nos-pizzas">
                <Button variant="ico" iconTheme="accent" icon={{icon: FaPizzaSlice}}size="medium"/>
            </ActiveLinks>
        </div>

        <div className="flex justify-center py-1.5">
            <ActiveLinks href="/nos-horaires">
            <Button variant="ico" iconTheme="gray" icon={{icon: RiCalendarFill}}size="medium"/>
            </ActiveLinks>
        </div>
    
        <div className="flex justify-center py-1.5">
            <CallButton/>
        </div>
    </div>
</div>
)
}