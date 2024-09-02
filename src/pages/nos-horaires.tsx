import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { HorairesPageView } from "@/ui/modules/nos-horaires/horaires-page.view";
import { PizzapageView } from "@/ui/modules/nos-pizzas/pizza-page.view";

export default function NosHoraires() {
    return(
        <>
        <Seo 
        title="Les horaires de Label Pizza" 
        description="Découvrez notre camion à pizza authentique dans le 79 ! Prenez note de nos horaires et des lieux de passage de notre camion a pizza dans le 79." 
        keywords="pizzas, camion à pizzas, 79, produits régionaux, pizza coulonges, pizza Chataigneraie, pizza absie, pizza Champdeniers, pizza Secondigny"
        restaurant="Label Pizza">
        </Seo>
        <Layout>
            <HorairesPageView/>
        </Layout>
        </>
    )}