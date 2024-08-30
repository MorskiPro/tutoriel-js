import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography";
import {v4 as uuidv4} from "uuid";
import Image from "next/image";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";

// Définition de l'interface pour les éléments de CTA
interface CTAListInterface{
    imagePath: string,
    imageAlt: string,
    title: string,
    lien: string,
    id: number,
}
 // Creation d'une interface tableau nous permettant d'aller chercher les informations pour les cases
 const CTAData: CTAListInterface[] = [
    {
        id: 123,
        imagePath: "/assets/images/svg/Facebook.svg",
        imageAlt: "Like Facebook",
        title: "Rejoins-nous sur Facebook",
        lien: "https://www.facebook.com/p/Label-Pizza-79-100077369687935/?wtsid=rdr_084I3QsGLQ3kGYial&_rdr",
    },
    {
        id: 234,
        imagePath: "/assets/images/svg/google.svg",
        imageAlt: "Avis Google",
        title: "Laissez un avis sur Google",
        lien: "",
    },
]


export const CTAView = () => {

    const CTAList = CTAData.map((CTA) => (
     
        // Creation d'une case pour boucler sur les 3 autres elements
    <div key={CTA.id} className="pt-5" >
        <div  className="flex flex-col sm:w-[200px] sm:h-[250px] items-center justify-center bg-secondary-100 rounded p-3">
        {/* On demande a la boucle d'aller chercher le titre pour chaque case */}

            <Typography variant="caption3" component="h3" weight="medium" className="text-center">
                {CTA.title}
            </Typography>

        {/* Creation d'un cercle de 130x130 avec tout ce qu'il depasse du cercle masqué */}
            <div className="relative w-[200px] h-[200px] rounded-full mb-2 p-10 overflow-hidden"> 

                {/* Image en blur pour faire le fond */}
                <a href={CTA.lien} target="_blank"> <Image fill src={CTA.imagePath} alt={CTA.imageAlt} className="object-scale-down"/> </a>
                
            </div>    
        </div>
    </div>
    ))

    return(
        // Definition de la couleur de la section
        <div className=" bg-secondary-500 drop-shadow-xl">
            {/* On défini une grille avec 3 colonnes: avec un gap et un padding pour élargir la zone */}
            <Container className="grid grid-cols-1 py-10 drop-shadow-sm p-10">
                <div className="sm:flex sm:justify-center sm:items-center gap-10 p-7">{CTAList}</div>
           
            </Container>
        </div>
        )

}

