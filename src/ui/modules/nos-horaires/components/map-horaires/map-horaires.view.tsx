import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { RiCarFill, RiFacebookFill } from "react-icons/ri";


interface MapHorairesInterface {
    imagePath: string,
    imageAlt: string,
    jour: string,
    description: string,
    ville: string,
    destination: string,
}

const MapHorairesData: MapHorairesInterface[] = [
    {
        imagePath:"/assets/images/labsie.png",
        imageAlt:"L'Absie est une commune du Centre-Ouest de la France située dans le département des Deux-Sèvres, en région Nouvelle-Aquitaine.",
        jour:"Mardi",
        description:"Place du 14 juillet",
        ville:"L'Absie",
        destination:"Place du 14 juillet 79240, L'Absie",
    },
    {
        imagePath:"/assets/images/lachataigneraie.png",
        imageAlt:"La Châtaigneraie est une commune française située dans le département de la Vendée, en région Pays de la Loire.",
        jour:"Mercredi",
        description:"Place de la république",
        ville:"La Chataigneraie",
        destination:"Place de la république 85120, La Chataigneraie",
    },
    {
        imagePath:"/assets/images/coulonges.png",
        imageAlt:"Coulonges-sur-l'Autize est une commune française, située dans le département des Deux-Sèvres en région Nouvelle-Aquitaine.",
        jour:"Jeudi",
        description:"4 Place du château",
        ville:"Coulonges sur l'Autize",
        destination:"4 Place du château 79160, Coulonges sur l'Autize",
    },
    {
        imagePath:"/assets/images/champdeniers.png",
        imageAlt:"Champdeniers, précédemment nommée Champdeniers-Saint-Denis entre 1973 et 2018, est une commune française située dans le département des Deux-Sèvres, en région Nouvelle-Aquitaine.",
        jour:"Vendredi",
        description:"Place du champ de foire",
        ville:"Champdeniers",
        destination:"Place du champ de foire 79220, Champdeniers",
    },
    {
        imagePath:"/assets/images/secondigny.png",
        imageAlt:"Secondigny est une commune du Centre-Ouest de la France située dans le département des Deux-Sèvres en région Nouvelle-Aquitaine.",
        jour:"Samedi",
        description:"Place du marché",
        ville:"Secondigny",
        destination:"Place du marché 79130, Secondigny",
    },
];

export const MapHorairesView = () => {
    const MapHorairesList = MapHorairesData.map((MapHoraires) => (
        
        <div key={uuidv4()} className="flex flex-col flex-grow items-center justify-center bg-white rounded">
            <div className="relative w-[200px] h-[200px] overflow-hidden">
                <Image fill src={MapHoraires.imagePath} alt={MapHoraires.imageAlt} className="object-scale-down"/>
            </div>
                <Typography className="text-center pb-1" variant="caption2">{MapHoraires.jour}</Typography>
                <Typography className="text-center sm:min-w-48 max-w-38 pb-1" variant="body-sm">{MapHoraires.description}</Typography>
                <Typography className="text-center pb-5" variant="caption2">{MapHoraires.ville}</Typography>  
                <div className="flex items-center justify-center pb-5">
                <Button variant="ico" size="small" iconTheme="gray" icon={{icon:RiCarFill}}
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MapHoraires.destination)}`, '_blank')}></Button>
            </div>
        </div>
        
    ))

    return(
        <div className="bg-gray-100 drop-shadow-xl">
            <Container className="">
                <Typography className="pt-10 text-center sm:text-left" variant="caption4">Nos horaires de passage</Typography>
                <div className="sm:pt-0 pt-14">
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-5 sm:py-10 drop-shadow-sm">{MapHorairesList}</div>
                </div>
                <div>
                    <Typography variant="caption3" className="sm:pt-3 pt-10 px-10 pb-5 text-center">Suivez nous sur Facebook pour ne rater aucune modification d’horaires</Typography>
                    <div className="flex justify-center items-center pb-10">
                    <Button size="small" variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} onClick={() => window.open(`https://www.facebook.com/profile.php?id=100077369687935`, '_blank')}></Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}