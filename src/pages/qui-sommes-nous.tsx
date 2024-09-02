import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { NousPageView } from "@/ui/modules/qui-sommes-nous/nous-page.view";

export default function QuiSommesNous() {
    return(
        <>
        <Seo 
        title="Qui est Label Pizza" 
        description="Découvrez notre camion à pizzas dans le 79. Notre histoire et l'équipe de Label Pizza" 
        keywords="pizzas, camion à pizzas, 79, produits régionaux, taille humaine, fait maison, fait main, passion"
        restaurant="Label Pizza">
        </Seo>
        <Layout>
            <NousPageView/>
        </Layout>
        </>
    )}