import { CTAView } from "./components/call-to-action/call-to-action.view"
import { EmplacementCamion } from "./components/emplacement-camion/emplacement-camion.view"
import { FeaturedView } from "./components/featured/featured.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { Produit } from "./components/produits/produit.views"

export const LandingPageView = () =>  {
    return(
        <>
            <HeroTopView/>
            <FeaturedView/>
            <EmplacementCamion/>
            <Produit/>
            <CTAView/>
        </>
    )
}