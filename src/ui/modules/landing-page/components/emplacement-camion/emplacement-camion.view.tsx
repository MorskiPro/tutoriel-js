import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import Link from "next/link"

export const EmplacementCamion = () => {
    return(

        //Background de la section
        <div className="bg-secondary-500 drop-shadow-xl">
            {/* Création d'un tableau de 2 colonnes */}
            <Container className="sm:grid grid-cols-2 gap-24 py-1">
                {/* Occupation d'une grille pour l'image*/}
                <div className="flex justify-center col-span-1 h-90">
                    <div className="w-[330px] h-[330px] relative sm:mt-10 mt-5 ">
                        <Image src="/assets/images/map.png" alt="map designant les emplacements du camiom a pizza dans le 79" fill className=""/>
                        </div>
                </div>

                {/* Occupation d'une grille pour le texte, le texte doit etre centrer en mobile et a gauche pour Desktop*/}
                <div className="sm:text-left sm:py-16 col-span-1 text-center p-3">
                    <Typography variant="h2" theme="white" className="sm:text-left text-center pb-5">Tous nos lieux de passage</Typography>
                    <Typography variant="body-sm" theme="white" className="sm:text-left text-center pb-5 sm:pb-10">De la Chataigneraie à Champdeniers, découvrez nos jours de passage près de chez vous.</Typography>
                    <div className="pb-5">
                    <Link href="/nos-horaires">
                    <Button>Les lieux de passage</Button>
                    </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}