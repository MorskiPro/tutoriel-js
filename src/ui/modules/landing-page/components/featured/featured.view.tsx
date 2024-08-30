import { Container } from "@/ui/components/container/container"
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { title } from "process";
import { Children } from "react";
import {v4 as uuidv4} from "uuid";
import Link from "next/link"

interface FeatureListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}

        // Creation d'une interface tableau nous permettant d'aller chercher les informations pour les cases
const featuresData: FeatureListInterface[] = [
    {
        imagePath: "/assets/images/svg/fromage.svg",
        imageAlt: "un fromage pour la pizza",
        title: "Fromages",
        description:"Chèvre, Gorgonzola, Maroilles, Bleu d'Auvergne...",
    },
    {
        imagePath: "/assets/images/svg/viande.svg",
        imageAlt: "Une piece de viande pour la pizza",
        title: "Viandes",
        description:"Boeuf, Poulet, Andouille de Guéméné, Chorizo...",
    },
    {
        imagePath: "/assets/images/svg/poisson.svg",
        imageAlt: "Un poisson pour la pizza",
        title: "Poissons",
        description:"Thon, Crevettes, Moules, Saumon...",
    },
    {
        imagePath: "/assets/images/svg/vege.svg",
        imageAlt: "Des legumes pour la pizza",
        title: "Végie",
        description:"Artichaut, Pommes de terre, Champignons, Poivrons...",
    },
]


export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        // Creation d'une case pour boucler sur les 4 autres elements
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-3">

            {/* Creation d'un cercle de 130x130 avec tout ce qu'il depasse du cercle masqué */}
            <div className="relative w-[130px] h-[130px] rounded-full mb-2 p-10 overflow-hidden"> 

                {/* Image en blur pour faire le fond */}
                <Image fill src={feature.imagePath} alt={feature.imageAlt} className="object-scale-down blur-xl"/>
                <Image fill src={feature.imagePath} alt={feature.imageAlt} className="object-scale-down"/>
            </div>

                {/* On demande a la boucle d'aller chercher le titre pour chaque case */}
            <Typography variant="caption3" component="h3" weight="medium">
                {feature.title}
            </Typography>

                {/* On demande a la boucle d'aller chercher la description pour chaque case */}
            <Typography variant="light" component="p" weight="medium" theme="gray" className="text-center pt-2">
                {feature.description}
            </Typography>
        </div>
    ))
       
    

    return(
        // Definition de la couleur de la section
        <div className="bg-gray-100 drop-shadow-xl">

            {/* On défini une grille avec 2 colonnes: avec un gap et un padding pour élargir la zone */}
            <Container className="sm:grid grid-cols-2 gap-20 py-10 drop-shadow-sm">

                {/* On défini que dans cette grille ces textes en prendrons une sur les 2 disponibles */}
                <div className="col-span-1 h-96">
                    
                    {/* Saisie des éléments qui seront situé a gauche */}
                    <Typography variant="h2" className="sm:text-right sm:py-2 text-center p-3 sm:pt-20">
                        Un vaste choix de recette et de taille 
                        <Typography theme="primary">pour toutes les papilles</Typography>
                    </Typography>

                    <Typography className="sm:text-right text-center p-3 sm:py-2" variant="body-sm">
                    Ce soir plutôt petite ou grande faim ? Plutôt poisson ou fromage ? Plus de 50 combinaisons de pizza qui ravira vos papilles.
                    </Typography>
                    
                    <div className="flex sm:justify-end justify-center px-3 sm:py-5">
                        <Link href="/nos-pizzas">
                    <Button>Parcourir la carte</Button>
                        </Link>
                    </div>
                </div>
                
                {/* Liste des types de pizzas */}
                <div className="sm:pt-0 pt-14">

                    {/* On créer une autre grille de 2 col et on dit que dans la grille déjà créee on prend une colone pour les cards */}
                    <div className="grid grid-cols-2 gap-4 col-span-1 py-7 sm:py-0">{featuredList}</div>
                </div>
            </Container>
        </div>
    )
}