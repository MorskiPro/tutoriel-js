
import { ChoixEquipeView } from "./components/choix-equipe/choix-equipe.view"
import { MenuView } from "./components/menu/menu.view"
import { TopPizza } from "./components/top-pizza/top-pizza.view"

export const PizzapageView = () =>  {
    return(
        <>
        <TopPizza/>
        <ChoixEquipeView/>
        <MenuView/>
        </>
    )
}