// COMPNENT
import { Container } from "@/ui/components/container/container"
import { Layout } from "@/ui/components/layout/layout"
import { Navigation } from "@/ui/components/navigation/navigation"
import { Seo } from "@/ui/components/seo/seo"

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Spinner } from "@/ui/design-system/spinner/spinner"
import { Typography } from "@/ui/design-system/typography/typography"

//ICO
import { IoIosArrowForward } from "react-icons/io"
import { RiFacebookFill } from "react-icons/ri"

export default function DesignSystem() {
    return(

        <>
        <Seo title="Application test" description="description..."/>

      <Layout>
        <Container className="space-y-5">
          {/*Typographie*/}
            <div className="space-y-2">
              <Typography variant="caption4" weight="medium">
                Typographie
              </Typography>
            </div>

            <div className="flex flex-col gap-2 p-5 border-gray-300 divide-y-2 divide-gray-300 rounded">
              <div className="pb-5 space-y-2">
                <Typography variant="caption2" weight="medium">
                  Display
                </Typography>
                <Typography variant= "display">Des pizzas cuites au feu de bois</Typography>
              </div>
            </div>
 
            <div className="pb-5 space-y-2"> 
              <Typography variant="caption2" weight="medium">
                H1
              </Typography>
              <Typography variant= "h1">Un vaste choix de recette et de taille pour toutes les papilles</Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="caption2" weight="medium">
                H2
              </Typography>
              <Typography variant= "h2">Le choix de l’équipe</Typography>
            </div>

        <div className="pb-5 space-y-2">
          <Typography variant="caption2" weight="medium">
            Body-lg
          </Typography>
          <Typography variant= "body-lg">Chez Label Pizza toutes nos pizza sont garnies de produits régionaux et cuites sur place, dans le camion, au feu de bois.</Typography>
        </div>

        <div className="pb-5 space-y-2">
          <Typography variant="caption2" weight="medium">
            Body
          </Typography>
          <Typography variant= "body-base">Chez Label Pizza toutes nos pizza sont garnies de produits régionaux et cuites sur place, dans le camion, au feu de bois.</Typography>
        </div>

        <div className="pb-5 space-y-2">
          <Typography variant="caption2" weight="medium">
            Body-sm
          </Typography>
          <Typography variant= "body-sm">Artichaut, Pommes de terre, Champignons, Poivrons...</Typography>
        </div>

        <div className="pb-5 space-y-2">
          <Typography variant="caption2" weight="medium">
            Caption 1
          </Typography>
          <Typography variant= "caption1">Label Pizza</Typography>

          <Typography variant="caption2" weight="medium">
            Caption 2
          </Typography>
          <Typography variant= "caption2">Label Pizza</Typography>

          <Typography variant="caption2" weight="medium">
            Caption 3
          </Typography>
          <Typography variant= "caption3">Label Pizza</Typography>

          <Typography variant="caption3" weight="medium">
            Caption 4
          </Typography>
          <Typography variant= "caption4">Label Pizza</Typography>
        </div>
     
    {/* Spinners */}
    <div className="space-y-2">
      <Typography variant="caption4" weight="medium">
        Spinner
      </Typography>
      <div className="flex item-center gap-4 p-10">
        <Spinner size="small" variant="primary"/>
        <Spinner />
        <Spinner size="large" variant="white"/>
      </div>
    </div>

    {/* Logo */}
    <div className="space-y-2">
      <Typography variant="caption4" weight="medium">
        Logos
      </Typography>
      <div className="flex item-center gap-4 p-10">
        <Logo size="very-small"/>
        <Logo size="small"/>
        <Logo />
        <Logo size="large"/>
      </div>
    </div>

    {/* Avatar */}
    <div className="space-y-2">
      <Avatar size="small" src="/assets/images/Magherita.png" alt="Margehrita"/>
    </div>

    {/* Buttons */}
    <div className="space-y-2">
      <Typography variant="caption4" weight="medium">
        Buttons
      </Typography>
      
      <div className="flex flex-col gap-2 p-5 border-gray-300 divide-y-2 divide-gray-300 rounded">
      <div className="flex item-center gap-4 p-5">
        <Button size="small" variant="accent">Accent</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="disabled" disabled>Disabled</Button>
        <Button size="small" variant="outline">Outline</Button>
        <Button size="small" variant="ico" icon={{icon: RiFacebookFill }} />
        <Button size="small" variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
        <Button size="small" variant="ico" iconTheme="secondary" icon={{icon: RiFacebookFill }} />
        </div>
        
        <div className="flex item-center gap-4 p-5">
        <Button size="small" isLoading variant="accent" >Accent</Button>
        <Button size="small" isLoading variant="secondary">Secondary</Button>
        <Button size="small" isLoading variant="disabled" disabled>Disabled</Button>
        <Button size="small" isLoading variant="outline">Outline</Button>
        <Button size="small" isLoading variant="ico" icon={{icon: RiFacebookFill }} />
        <Button size="small" isLoading variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
        <Button size="small" isLoading variant="ico" iconTheme="secondary" icon={{icon: RiFacebookFill }} />
      </div>
  
  <div className="flex item-center gap-4 p-5">
    <Button size="medium" variant="accent" icon={{icon: IoIosArrowForward }} iconPosition="right">Accent</Button>
    <Button size="medium" variant="secondary">Secondary</Button>
    <Button size="medium" variant="disabled" disabled>Disabled</Button>
    <Button size="medium" variant="outline">Outline</Button>
    <Button size="medium" variant="ico" icon={{icon: RiFacebookFill }} />
    <Button size="medium" variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
    <Button size="medium" variant="ico" iconTheme="secondary" icon={{icon: RiFacebookFill }} />
  </div>

  <div className="flex item-center gap-4 p-5">
      <Button size="medium" isLoading variant="accent">Accent</Button>
      <Button size="medium" isLoading variant="secondary">Secondary</Button>
      <Button size="medium" isLoading variant="disabled" disabled>Disabled</Button>
      <Button size="medium" isLoading variant="outline">Outline</Button>
      <Button size="medium" isLoading variant="ico" icon={{icon: RiFacebookFill }} />
      <Button size="medium" isLoading variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
      <Button size="medium" isLoading variant="ico" iconTheme="secondary" icon={{icon: RiFacebookFill }} />
  </div>

  <div className="flex item-center gap-4 p-5">
    <Button size="large" variant="accent">Accent</Button>
    <Button size="large" variant="secondary">Secondary</Button>
    <Button size="large" variant="disabled" disabled>Disabled</Button>
    <Button size="large" variant="outline">Outline</Button>
    <Button size="large" variant="ico" icon={{icon: RiFacebookFill }} />
    <Button size="large" variant="ico" iconTheme="gray" icon={{icon: RiFacebookFill }} />
    <Button size="large" variant="ico" iconTheme="secondary" icon={{icon: RiFacebookFill }} />
    
  </div>
  
  <div className="flex item-center gap-4 p-5">
        <Button size="large" variant="accent" isLoading>Accent</Button>
        <Button size="large" variant="secondary" isLoading>Secondary</Button>
        <Button size="large" variant="disabled" isLoading disabled>Disabled</Button>
        <Button size="large" variant="outline" isLoading>Outline</Button>
        <Button size="large" variant="ico" isLoading icon={{icon: RiFacebookFill }} />
        <Button size="large" variant="ico" isLoading iconTheme="gray" icon={{icon: RiFacebookFill }} />
        <Button size="large" variant="ico" isLoading iconTheme="secondary" icon={{icon: RiFacebookFill }} />
  </div>
  </div>
  </div>
 
    </Container>
    </Layout>
    

    </>
    )
}