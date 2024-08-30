import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { RiFacebookFill } from "react-icons/ri"; // importation de l'icon Facebook de la lib remix icon
import { IoIosArrowForward } from "react-icons/io"; // importation de l'icon arrow de la lib remix icon
import head from "next/head";
import React, { Component } from "react";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { Menubar } from "@/ui/components/navigation/menubar";
import { Footer } from "@/ui/components/navigation/footer";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";
import { HeroTopView } from "@/ui/modules/landing-page/components/hero-top/hero-top.view";

<meta name="viewport" content="width=device-width, initial-scale=1" />

export default function Home() {
  return (
    
    <>
        <Seo title="Label Pizza" description="Votre camion a pizza authentique dans le 79"/>
        <Layout>
          <LandingPageContainer/>
        </Layout>
   </>
  );
}
