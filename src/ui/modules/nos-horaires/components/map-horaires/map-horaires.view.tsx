import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { RiCarFill } from "react-icons/ri";


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
        imageAlt:"",
        jour:"Mardi",
        description:"Place du 14 juillet",
        ville:"L'Absie",
        destination:"Place du 14 juillet 79240, L'Absie",
    },
    {
        imagePath:"/assets/images/lachataigneraie.png",
        imageAlt:"",
        jour:"Mercredi",
        description:"Place de la république",
        ville:"La Chataigneraie",
        destination:"Place de la république 85120, La Chataigneraie",
    },
    {
        imagePath:"/assets/images/coulonges.png",
        imageAlt:"",
        jour:"Jeudi",
        description:"4 Place du château",
        ville:"Coulonges sur l'Autize",
        destination:"4 Place du château 79160, Coulonges sur l'Autize",
    },
    {
        imagePath:"/assets/images/champdeniers.png",
        imageAlt:"",
        jour:"Vendredi",
        description:"Place du champ de foire",
        ville:"Champdeniers",
        destination:"Place du champ de foire 79220, Champdeniers",
    },
    {
        imagePath:"/assets/images/secondigny.png",
        imageAlt:"",
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
                <Image fill src={MapHoraires.imagePath} alt="" className="object-scale-down"/>
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
                <Typography className="pt-10" variant="h2">Prise de commande à partir de 17h30</Typography>
                <div className="sm:pt-0 pt-14">
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-5 sm:py-10">{MapHorairesList}</div>
                </div>
            </Container>
        </div>
    )
}