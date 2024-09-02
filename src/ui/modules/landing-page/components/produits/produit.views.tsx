import { Container } from "@/ui/components/container/container"
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const Produit = () => {
    return (
       //Background de la section
       <div className="bg-gray-100 drop-shadow-xl">
        {/* Création d'un tableau de 2 colonnes */}
       <Container className="sm:grid grid-cols-2 gap-10 pt-1">
        {/* Occupation d'une grille pour l'image*/}
           <div className="flex justify-center col-span-1 h-96">
               <div className="w-[350px] h-[350px] relative mt-10 ">
                   <Image src="/assets/images/quali.png" alt="map designant les emplacements du camiom a pizza dans le 79" fill className=""/>
                </div>
           </div>

        {/* Occupation d'une grille pour le texte*/}
            <div className="sm:text-left sm:py-10 text-center col-span-1 p-3">
                    <Typography variant="h2" theme="black" className="sm:text-left text-center sm:pt-14 pb-3">Des produits triés sur 
                        <Typography variant="h2" theme="primary">le volet pour vous</Typography>
                    </Typography>
                    <Typography variant="body-sm" theme="black" className="sm:text-left text-center  pb-3">Produits régionaux exclusivement</Typography>
                    <Typography variant="body-sm" theme="black" className="sm:text-left text-center pb-3">Petits producteurs favorisés</Typography>
                    <Typography variant="body-sm" theme="black" className="sm:text-left text-center  pb-3">Qualité des produits</Typography>      
            </div>
        </Container>

        {/* Création d'un tableau de 2 colonnes */}
            <Container className="sm:grid grid-cols-2 gap-2 pt-1 pb-10">
        {/* Occupation d'une grille pour le texte*/}
            <div className="flex justify-center col-span-1 h-96">
                <div className="sm:text-left sm:py-10 text-center p-3">
                        <Typography variant="h2" theme="black" className="sm:text-right text-center sm:pt-14 pb-3">Des pizzas disponibles
                            <Typography variant="h2" theme="primary">du Mardi au Samedi</Typography>
                        </Typography>
                        <Typography variant="body-sm" theme="black" className="sm:text-right text-center pb-3">Large lieux de passage dans le 79</Typography>
                        <Typography variant="body-sm" theme="black" className="sm:text-right text-center pb-3">Prise de commande rapide</Typography>
                        <Typography variant="body-sm" theme="black" className="sm:text-right text-center pb-3">Votre pizza prête en 30 minutes</Typography>
                </div>             
            </div>
            {/* Incrustation de l'image */} 
            <div className="flex justify-center col-span-1 h-30">
                <div className="w-[350px] h-[350px] relative mb-10 ">
                    <Image src="/assets/images/camionpizza.png" alt="map designant les emplacements du camiom a pizza dans le 79" fill className=""/>
                </div>
            </div>
            </Container>
        </div>
    )
}