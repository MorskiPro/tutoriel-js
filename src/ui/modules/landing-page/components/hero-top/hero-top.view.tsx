
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


export const HeroTopView = () => {
    return (
        <>
        

        <div className="bg-secondary-500">  
        <Container className="relative pt-5 sm:pt-40 sm:pb-52 pb-20 overflow-hidden">
        <Image src="/assets/images/pizzab.png" alt="Pizza cuite au feu de bois délicieuse" width={700} height={700} className="relative sm:absolute top-0 right-0 z-0"/>
            <div>
                <Typography variant="h2" component="h1" className="max-w-lg p-5 text-center sm:text-left" theme="white">Des pizzas cuites au feu de bois</Typography>
                <Typography variant="body-sm" component="h3" className="max-w-xl pt-3 leading-6 p-5 text-center sm:text-left" theme="white">Chez Label Pizza toutes nos pizzas sont garnies de produits régionaux et cuites sur place, dans le camion, au feu de bois.</Typography>
            </div>    

            <div className="p-3 sm:p-5 space-x-3 flex justify-center sm:justify-start">
                <Link href="/nos-pizzas">
                <Button>Consulter la carte</Button>
                </Link>
                <Link href="/qui-sommes-nous">
                <Button variant="outline">Découvrez Label</Button>
                </Link>
                
            </div>
            
            
            
            
        </Container>
        </div>
        </>
    )
}