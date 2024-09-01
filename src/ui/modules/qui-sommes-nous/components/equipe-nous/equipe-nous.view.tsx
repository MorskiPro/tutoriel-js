import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

interface EquipeNousInterface {
    id: number,
    imagePath: string,
    imageAlt: string,
    nom: string,
    description: string, 
}

export const EquipeNousData : EquipeNousInterface [] = [
    {
        id:1,
        imagePath:"",
        imageAlt:"",
        nom:"Lorem ipsum",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id turpis justo. Phasellus egestas enim eu quam volutpat, a sollicitudin massa feugiat. Maecenas eu condimentum ante, ut aliquet dui.",
    },
    {
        id:2,
        imagePath:"/assets/images/svg/chef.svg",
        imageAlt:"",
        nom:"Yoann Boulay",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id turpis justo. Phasellus egestas enim eu quam volutpat, a sollicitudin massa feugiat. Maecenas eu condimentum ante, ut aliquet dui.",
    },
    {
        id:3,
        imagePath:"",
        imageAlt:"",
        nom:"Lorem ipsum",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id turpis justo. Phasellus egestas enim eu quam volutpat, a sollicitudin massa feugiat. Maecenas eu condimentum ante, ut aliquet dui.",
    },
];

export const EquipeNousView = () => {
    const EquipeNousList = EquipeNousData.map((EquipeNous) => (
        
        <div key={EquipeNous.id} className="flex flex-col items-center justify-center">
        <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden"> 
                    <Image fill src={EquipeNous.imagePath} alt={EquipeNous.imageAlt} className="object-scale-down blur-xl" />
                    <Image fill src={EquipeNous.imagePath} alt={EquipeNous.imageAlt} className="object-scale-down" />
                </div>
        <Typography variant="caption3" className="pt-3 pb-3">{EquipeNous.nom}</Typography>
        <Typography variant="light" className="text-center">{EquipeNous.description}</Typography>


        </div>
        
    ))

    return (
    <div className="pt-20 pb-20">
        <Container className="">
            <Typography variant="caption4"className="text-center pb-10">Léquipe</Typography>
            <div className="grid sm:grid-cols-3 grid-col-1 gap-10 p-7 sm:py-0">{EquipeNousList}</div>
        
        </Container>
        </div>
        
    )
}