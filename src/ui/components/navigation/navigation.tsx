import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import { Logo } from "@/ui/design-system/logo/logo"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLinks } from "./active-link"
import CallButton from "@/ui/design-system/button/button-call"
interface Props {}


export const Navigation=({}:Props)=> {
    return(
        <div className = "border-b-2 border-gray-200">
            <Container className="flex py-4 gap-7"> {/*justifie les div de l'une et l'autre de l'écran + ajout d'une marge en haut et en bas du logo qui condition le container*/}
                <div className="flex w-full max-lg:justify-start max-sm:justify-center gap-2.5">
                    <Link className="flex items-center"href="/">
                    <Logo size="small"/>
                        <div className="flex flex-col">
                            <Typography variant="caption4" theme="black">
                                Label Pizza 
                            </Typography>
                            <Typography variant="body-sm" theme="secondary" component="span" className="">
                                Votre camion a pizza authentique <br/> dans le 79
                            </Typography>
                        </div>
                    </Link>
                </div>

                <div className="flex max-sm:hidden items-center gap-7">
                    <Typography variant="body-sm" component="div" className="flex items-center gap-7 text-nowrap">
                        <ActiveLinks href="/design-system">Qui sommes-nous ?</ActiveLinks>
                        <ActiveLinks href="/nos-pizzas">Nos pizzas</ActiveLinks>
                        <ActiveLinks href="/nos-horaires">Nos Horaires</ActiveLinks>
                    </Typography>     
                    <Link href="/contact">    
                    <Button variant="secondary" size="small">
                        Commander
                    </Button>
                    </Link> 
                </div>
            </Container>
        </div>

    )
}