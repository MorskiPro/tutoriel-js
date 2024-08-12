import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import { Logo } from "@/ui/design-system/logo/logo"
import { Button } from "@/ui/design-system/button/button"
interface Props {}


export const Navigation=({}:Props)=> {
    return(
        <div className = "border-b-2 border-gray-200">
            <Container className="flex items-center justify-between py-1.5 gap-7"> {/*justifie les div de l'une et l'autre de l'écran + ajout d'une marge en haut et en bas du logo qui condition le container*/}
                <div className="flex items-center gap-2.5">
                    <Logo size="small"/>
                        <div className="flex flex-col">
                            <Typography variant="caption4" theme="black">
                                Label Pizza 
                            </Typography>
                            <Typography variant="body-sm" theme="secondary" component="span" className="">
                                Votre camion a pizza authentique dans le 79
                            </Typography>
                        </div>
                </div>
                <div className="flex items-center gap-7">
                    <Typography variant="body-sm" component="div" className="flex items-center gap-7">
                        <span>Qui sommes-nous ?</span>
                        <span>Nos Pizzas</span>
                        <span>Nos Horaires</span>
                    </Typography>
                    <Button size="small" variant="secondary">
                        Commander
                    </Button>
                </div>
            </Container>
        </div>

    )
}