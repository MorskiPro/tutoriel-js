import { Seo } from "@/ui/components/seo/seo";
import React, { Component } from "react";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";
import { HeroTopView } from "@/ui/modules/landing-page/components/hero-top/hero-top.view";

<meta name="viewport" content="width=device-width, initial-scale=1" />

export default function Home() {
  return (
    
    <>
        
        <Seo 
        title="Label Pizza 79" 
        description="Découvrez notre camion à pizza authentique dans le 79 ! Savourez le choix parmi 50 délicieuses pizzas, préparées avec des ingrédients régionaux de qualité." 
        keywords="pizzas, camion à pizzas, 79, produits régionaux, large choix de pizzas"
        restaurant="Label Pizza">
        </Seo>
        
        <Layout>
          <LandingPageContainer/>
        </Layout>
   </>
  );
}
