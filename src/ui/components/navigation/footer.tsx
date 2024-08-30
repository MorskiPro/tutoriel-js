import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import Link from "next/link";
import { Button } from "@/ui/design-system/button/button";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { footerApplicationList } from "./app-links";
import {v4 as uuidv4} from 'uuid';
import { Children, useMemo } from "react";
import { ActiveLinks } from "./active-link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerNavigationList = footerApplicationList.map((element)=> (
        <div>{element.label}</div>
    ))

    return (
        <div className="bg-secondary sm:py-5 pb-20">
            <Container className="flex justify-between pt-4 px-5"> 
                <div className="flex flex-col item-center gap-1">
                    <Link href="/">
                <Logo size="small" className=""/>
                    <Typography variant="caption4" theme="white">
                        Label Pizza
                    </Typography>
                    <Typography variant="body-sm" theme="white">
                        Votre camion a pizza authentique dans le 79
                    </Typography>
                    </Link>
                </div>
                <div className=""><FooterLink/></div>
            </Container>

            
                 <Container className="pt-3">
                 
                    <hr className="text-gray-100"/>
                    
                    <div className="flex items-center justify-between max-sm:px-5">
                        <Typography variant="light" theme="white">{`Copyright © | ${currentYear} |`} Propusled by Gauthier MAGIERA</Typography>
                        <div className="flex item-center gap-3 py-3">
                            <ActiveLinks href="https://www.facebook.com/profile.php?id=100077369687935">
                        <Button size="small" variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
                            </ActiveLinks>
                        <Button size="small" variant="ico" iconTheme="gray" icon={{icon: RiInstagramFill }} />
                        </div>
                    </div>
                 </Container>
        </div>
    );
};

const FooterLink =() => {
    const linksList = footerApplicationList.map((link)=> (
        <div key={uuidv4()}>
            {link.type === "internal" && (
            <ActiveLinks key={uuidv4()} href={link.baseUrl}>{link.label}</ActiveLinks> 
            )}

            {link.type === "external" && (
            <a href={link.baseUrl} target ="_blank">{link.label}</a>
            )}
        </div>
    ));

    return (
        <div className="pt-3 text-right">
            <Typography theme="white" variant="caption1" weight="medium" className="pb-2">
                Menu
            </Typography>
            <Typography theme="white" variant="light" className="space-y-1">
                {linksList}
            </Typography>
        </div>

    )
}