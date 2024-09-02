import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CommandeHoraire = () =>{

    return(
        <div className="bg-gray-200">
            <Container>
            <Typography className="pt-10 text-center sm:text-left" variant="caption4">Prise de commande à partir de 17h30</Typography>
            <div className="grid sm:grid-cols-3 gap-4 p-7 ">
            
                    <div className="sm:col-start-2 col-span-1 drop-shadow-sm pt-2 pb-2 bg-white">
                        <div className="relative w-30 h-30 rounded-full p-8 overflow-hidden">
                            <Image fill src="/assets/images/telephone.png" alt="numero de telephone pour commander les pizzas de label pizza 79"  objectFit="contain"/>
                        </div>
                            <Typography variant="caption3" className="text-center pb-1 pt-3">Yoann</Typography>
                            <Typography variant="light" theme="secondary" className="text-center">Par téléphone</Typography>
                            <Typography variant="caption3" className="text-center">06 82 31 46 01</Typography>
                        


            </div>
            </div>
            </Container>
        </div>
    )
}