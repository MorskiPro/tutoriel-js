import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HistoireNous =() => {
    return(

<div className="bg-gray-100 drop-shadow-xl pb-14 sm:pt-0 pt-10">
    <Container>
            <div className="sm:flex sm:gap-24">
                <div className=" sm:flex-none w-[350px] h-[350px] relative sm:mt-10 mx-auto sm:mx-0">
                        <Image fill src="/assets/images/notrehistoire.png" alt="" className=""/>
                </div>
                <div className="sm:flex-auto">
                    <Typography variant="caption4" className="pt-10 sm:pt-28 sm:text-left text-center ">
                        Notre histore
                    </Typography>
                    <Typography variant="body-sm" className="pt-5 sm:text-left text-center sm:px-0 px-5">
                    Fondée en 1991, notre pizzéria ambulante a célébré 31 années de passion et de créativité autour de la pizza. Depuis nos débuts, nous avons su évoluer et innover en proposant une gamme variée de 56 pizzas. Des plus classiques, telles que la pizza reine, aux plus audacieuses, comme la pizza normande, garnie de champignons et de camembert, ou la délicieuse pizza abeille, alliant chèvre et miel, chaque création est le fruit d'un savoir-faire artisanal.  
                    </Typography>
                    </div>
            </div>
    </Container>
</div>
    )
}