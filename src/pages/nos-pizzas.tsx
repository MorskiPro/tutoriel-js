import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { PizzapageView } from "@/ui/modules/nos-pizzas/pizza-page.view";

export default function NosPizzas() {
    return(
        <>
        <Seo 
        title="Les pizzas de Label Pizza" 
        description="Découvrez notre camion à pizzas dans le 79, proposant un large choix de pizzas garnies de produits régionaux." 
        keywords="pizzas, camion à pizzas, 79, produits régionaux, pas cher, grandes pizza, feu de bois, pizza feu"
        restaurant="Label Pizza">
        </Seo>
        <Layout>
            <PizzapageView/>
        </Layout>
        </>
    )}