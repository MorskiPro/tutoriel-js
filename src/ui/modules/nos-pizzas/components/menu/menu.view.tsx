import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import {v4 as uuidv4} from "uuid";
import Image from "next/image";
import { Button } from "@/ui/design-system/button/button";
import { useState } from "react";

interface MenuListInterface {

    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;

    prices: string;
    pricel: string;
    pricexl: string;

    base: string,

    id: string,

}

        // Creation d'une interface tableau nous permettant d'aller chercher les informations pour les cases
const MenuData: MenuListInterface[] = [
    {
        id: uuidv4(),
        imagePath: "/assets/images/Magherita.png",
        imageAlt: "Drapeau de l'Italie pays de la pizza",
        title: "La Margherita",
        description:"Tomate, Fromage",

        prices:"S: 6€",
        pricel:"L: 8€",
        pricexl:"XL: 10€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Reine.png",
        imageAlt: "Une couronne, pizza reine, jambon",
        title: "La Reine",
        description:"Tomate, Jambon, Fromage",

        prices:"S: 7€",
        pricel:"L: 9€",
        pricexl:"XL: 11€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Chorizo.png",
        imageAlt: "une part de pizza avec du chorizo",
        title: "La Chorizo",
        description:"Tomate, Chorizo, Fromage",
   
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Royale.png",
        imageAlt: "un roi pour la royale pizza jambon champignon",
        title: "La Royale",
        description:"Tomate, Jambon, Champignons, Fromage",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Oceane.png",
        imageAlt: "un voilié pour une pizza de la mer moules et crevettes",
        title: "L'Oceane",
        description:"Tomate, Moules, Crevettes, Fromage, Ail, Persil",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Forestiere.png",
        imageAlt: "Arbre pour pizza forestiere champignons ail",
        title: "La Forestière",
        description:"Tomate, Champignons, Fromage , Ail, Crème fraîche, Persil",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Fromagere.png",
        imageAlt: "coeur bleu pour le bleu auvergne de la pizza",
        title: "La Fromagère",
        description:"Tomate, Bleu d'Auvergne, Fromage",

      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Napolitaine.png",
        imageAlt: "canne a peche pour pizza napolitaine avec anchois",
        title: "La Napolitaine",
        description:"Tomate, Anchois, Olives, Fromage, Persil",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Speciale.png",
        imageAlt: "etoile pour pizza speciale avec anchois et jambon",
        title: "La Speciale",
        description:"Tomate, Jambon, Champignons, Anchois, Câpres, Fromage, Oeuf",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Regionale.png",
        imageAlt: "carte pour pizza regionale lardon chevre",
        title: "La Regionale",
        description:"Tomate, Lardons, Fromage de chèvre, Fromage, Crème Fraîche",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {
        id: uuidv4(),
        imagePath: "/assets/images/Paysanne.png",
        imageAlt: "paysan pour pizza paysanne jambon et lardon",
        title: "La Paysanne",
        description:"Tomate, Jambon, Lardons, Fromage, Oeuf, Crème Fraîche",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Gorgonzola.png",
        imageAlt: "constellation pour pizza gorgonzola",
        title: "La Gorgonzola",
        description:"Tomate, Gorgonzola, Fromage",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Artichauthon.png",
        imageAlt: "choux pour pizza artichauthon avec thon et artichaut",
        title: "L'Artichauthon",
        description:"Tomate, Thon, Artichaut, Fromage, Crème Fraîche",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Orientale.png",
        imageAlt: "orientale pour pizza orientale merguez et poivrons",
        title: "L'Orientale",
        description:"Tomate, Merguez, Poivrons, Olives, Fromage",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Poitevine.png",
        imageAlt: "chevre pour pizza poitevine chevre et champignon",
        title: "La Poitevine",
        description:"Tomate, Champignons, Fromage de Chèvre, Fromage, Crème Fraîche",
      
        prices:"S: 8,50€",
        pricel:"L: 11,50€",
        pricexl:"XL: 13€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Maroilles.png",
        imageAlt: "tracteur pour pizza maroille",
        title: "La Maroilles",
        description:"Tomate, Maroilles, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Champizo.png",
        imageAlt: "champignon pour pizza champizo avec chorizo champignon",
        title: "La Champizo",
        description:"Tomate, Champignons, Chorizo, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Trois-Fromages.png",
        imageAlt: "fromage pour pizza trois fromages chevre et bleu",
        title: "La Trois Fromages",
        description:"Tomate, Chèvre, Bleu d'Auvergne, Fromage, Crème Fraîche",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Saumon.png",
        imageAlt: "poisson pour pizza saumon",
        title: "La Saumon",
        description:"Tomate, Saumon, Fromage, Crème Fraîche, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Normande.png",
        imageAlt: "beurre pour la pizza normande lardons camemberg",
        title: "La Normande",
        description:"Tomate, Champignons, Lardons, Oignons, Olives, Camemberg, Fromage, Crème Fraîche, Oeuf, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Champithon.png",
        imageAlt: "hamecon pour pizza champithon thon champignon",
        title: "La Champithon",
        description:"Tomate, Champignons, Thon, Lardons, Fromage, Crème Fraîche, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Quatre-Fromages.png",
        imageAlt: "fondu pour pizza quatre formages avec bleu et maroilles",
        title: "La Quatre Fromages",
        description:"Tomate, Chèvre, Bleu d'Auvergne, Gorgonzola ou Maroilles, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/4-Saisons.png",
        imageAlt: "arc en ciel pour pizza quatre saisons avec jambon artichaut",
        title: "La 4 Saisons",
        description:"Tomate, Jambon, Champignons, Artichaut, Poivrons, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Du-Pizzaïole.png",
        imageAlt: "pizzaiole pour pizza Pizzaïole avec chevre et lardon",
        title: "La Pizzaïole",
        description:"Tomate, Jambon, Champignons, Lardons, Chèvre ou Bleu d'Auvergne, Fromage, Crème Fraîche",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Reblochonne.png",
        imageAlt: "montagne pour pizza reblochon avec reblochon lardon",
        title: "La Reblochonne",
        description:"Tomate, Lardons, Reblochon, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Campagnarde.png",
        imageAlt: "tente pour pizza campagnarde avec pomme de terre et jambon de campagne",
        title: "La Campagnarde",
        description:"Tomate, Pommes de terre, Jambon de campagne, Fromage, Crème Fraîche, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Bolognaise.png",
        imageAlt: "pate bolognaise pour pizza bolognaise avec viande hachee et lardon",
        title: "La Bolognaise",
        description:"Tomate, Viande Hachée, Lardons, Fromage, Crème Fraîche, Oeuf",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Magret.png",
        imageAlt: "canard pour pizza magret avec pomme de terre et magret",
        title: "La Magret",
        description:"Tomate, Pommes de Terre, Magret de canard, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Végétarienne.png",
        imageAlt: "plante pour pizza vegetarienne avec tomates et poivrons",
        title: "La Végétarienne",
        description:"Tomate, Champignons, Tomates Fraîches, Oignons, Olives, Poivrons, Fromage, Ail, Basilic",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/CHTI.png",
        imageAlt: "chateau pour la pizza chti avec andouille de guemene et maroilles",
        title: "La CH'TI",
        description:"Tomate, Andouille de Guéméné, Maroilles, Fromage, Crème Fraîche",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Raclette.png",
        imageAlt: "pomme de terre pour pizza raclette avec pomme de terre lardon et fromage",
        title: "La Raclette",
        description:"Tomate, Pommes de Terre, Jambon, Lardons, Fromage à Raclette, Fromage, Cornichons, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Guemenoise.png",
        imageAlt: "cochon pour la pizza guemenoise avec lardon andouille de guemene",
        title: "La Guemenoise",
        description:"Tomate, Champignons, Lardons, Andouille de Guéméné, Fromage, Crème Fraîche, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Blanc-Bec.png",
        imageAlt: "poulet pour pizza blanc bec avec poulet et lardon",
        title: "La Blanc Bec",
        description:"Tomate, Blanc de Poulet, Lardons, Fromage, Crème Fraîche, Oeuf, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Force-7.png",
        imageAlt: "exctincteur pour la pizza force 7 avec merguez et poivrons",
        title: "La Force 7",
        description:"Tomate, Merguez, Chorizo, Oignons, Poivrons, Fromage, Curry",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Texane.png",
        imageAlt: "cow boy pour la pizza texane avec viande hachee et chorizo",
        title: "La Texane",
        description:"Tomate, Viande Hachée, Chorizo, Poivrons, Fromage, Oeuf, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Barbecue.png",
        imageAlt: "barbecue pour pizza barbecue avec viande hachee et poivron",
        title: "La Barbecue",
        description:"Tomate, Viande Hachée, Oignons, Pommes de Terres, Poivrons, Sauce Barbecue, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Burger.png",
        imageAlt: "burger pour pizza burger avec viande hachee et cheddar",
        title: "La Burger",
        description:"Tomate, Viande Hachée, Oignons, Poivrons, Cheddar, Sauce Burger, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Popeye.png",
        imageAlt: "trefle pour pizza popeye avec epinard et lardons",
        title: "La Popeye",
        description:"Jambon, Epinard, Lardons, Fromage, Crème Fraîche, Oeuf",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "tomate",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Calzone.png",
        imageAlt: "chausson pour la pizza calzone avec jambon et champignon",
        title: "La Calzone",
        description:"Tomate, Jambon, Champignons, Fromage, Oeuf",
      
        prices:"",
        pricel:"L: 12,50€",
        pricexl:"",

        base: "tomate",
    },

    //BASE CREME

    {id: uuidv4(),
        imagePath: "/assets/images/Flambée.png",
        imageAlt: "flamme pour la pizza flambee avec lardons et oignons",
        title: "La Flambée",
        description:"Crème Fraîche, Lardons, Oignons, Fromage, Persil",
      
        prices:"S: 8,50€",
        pricel:"L: 10,50€",
        pricexl:"XL: 12€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Flambée-Chèvre.png",
        imageAlt: "chevre pour flambee chevre avec lardon et chevre",
        title: "La Flambée Chèvre",
        description:"Crème Fraîche, Lardons, Oignons, Chèvre, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Flambée-Saumon.png",
        imageAlt: "poisson pour flambee saumon avec saumon et lardon",
        title: "La Flambée Saumon",
        description:"Crème Fraîche, Lardons, Oignons, Saumon, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Flambée-Anchois.png",
        imageAlt: "canne a peche pour flambee anchois avec anchois et lardon",
        title: "La Flambée Anchois",
        description:"Crème Fraîche, Lardons, Oignons, Anchois, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Tartiflette.png",
        imageAlt: "pomme de terre pour pizza tartiflette pomme de terre et reblochon",
        title: "La Tartiflette",
        description:"Crème Fraîche, Pommes de terre, Lardons, Oignons, Reblochon, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Kébab.png",
        imageAlt: "kebab pour pizza kebab avec blanc de poulet et sauce kebab",
        title: "La Kébab",
        description:"Crème Fraîche, Blanc de Poulet, Tomates Fraîches, Oignons, Epice Kebab, Sauce Kebab, Fromage",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Provençale.png",
        imageAlt: "soleil pour pizza provencale lardons et tomate",
        title: "La Provençale",
        description:"Crème Fraîche, Lardons, Tomates Fraîches, Oignons, Chèvre, Fromage, Ail, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Haway.png",
        imageAlt: "surfeur pour pizza haway avec blanc de poulet et ananas",
        title: "La Haway",
        description:"Crème Fraîche, Blanc de Poulet, Ananas, Fromage, Curry",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Littoral.png",
        imageAlt: "vague pour pizza littoral thon et lardon",
        title: "La Littoral",
        description:"Crème Fraîche, Lardons, Thon, Oignons, Fromage, Oeuf, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Fred.png",
        imageAlt: "guitar electrique pour pizza fred avec saumon et fromage de chevre",
        title: "La Fred",
        description:"Crème Fraîche, Saumon, Fromage de Chèvre, Fromage, Aneth, Oeuf",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Abeille.png",
        imageAlt: "abeille pour pizza abeille avec chevre et miel",
        title: "L'Abeille",
        description:"Crème Fraîche, Jambon, Lardons, Oignons, Chèvre, Fromage, Miel",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Dijonnaise.png",
        imageAlt: "cuilliere pour pizza dijonnaise avec moutarde a lancienne et poulet ou thon",
        title: "La Dijonnaise",
        description:"Crème Fraîche, Moutarde à l'ancienne, Thon ou Blanc de Poulet, Pommes de terre, Tomates Fraîches, Fromage, Persil",
      
        prices:"S: 9,50€",
        pricel:"L: 12,50€",
        pricexl:"XL: 14€",

        base: "creme",
    },
    

]

export const MenuView = () => {
    // État pour gérer le type de pizza affiché
    const [isTomatoBase, setIsTomatoBase] = useState(true);

    // Filtrer les pizzas en fonction de la base
    const pizzasToDisplay = MenuData.filter(menuItem => 
        isTomatoBase ? menuItem.base === "tomate" : menuItem.base === "creme"
    );

    // Fonction pour basculer entre les types de base
    const toggleBase = () => {
        setIsTomatoBase(!isTomatoBase);
    };

    const MenuList =pizzasToDisplay.map ((Menu) => (
        <div key={Menu.id} className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 pb-2"> 
            <Image src={Menu.imagePath} alt="logo pour pizza au feu de bois 79" width={45} height={45}/>
            <Typography variant="caption3">{Menu.title}</Typography>
            </div>
            <div className="flex justify-center items-center gap-4 pb-3">
            <Typography variant="body-sm" component="p" className="max-w-xs h-20" >{Menu.description}</Typography>
            </div>
            <div className="flex justify-center items-center gap-4 pb-5">
            <Button variant="outline" disabled size="small">{Menu.prices}</Button>
            <Button variant="outline" disabled size="small">{Menu.pricel}</Button>
            <Button variant="outline" disabled size="small">{Menu.pricexl}</Button>
            </div>
        </div>
    )
)

    return(
        <div className="bg-gray-100">
            <Container className="pt-16 pb-16">
                <Typography className="pt-3 px-5 sm:px-0 sm:text-left text-center"> Nos pizzas bases {isTomatoBase ? "tomate" : "creme fraiche"}</Typography>
                <Typography className="pt-5 sm:text-left text-center" variant="caption1" theme="secondary">Toutes nos pizzas existent en petite S de 20cm, moyenne M de 26cm, et grande L de 33cm.</Typography>
                <Typography className="pt-5 sm:text-left text-center" variant="caption2" theme="secondary">Ingrédients Supplémentaires</Typography>
                <Typography className="py-3 sm:text-left text-center" variant="caption1" theme="secondary">Oeuf, Légumes = 1€ </Typography>
                <Typography className="sm:text-left text-center" variant="caption1" theme="secondary">Fromages, Viandes = 1,50€</Typography>

                <div className="flex justify-center items-center mb-4 p-3">
            <Button onClick={toggleBase} size="small">
                    Nos bases {isTomatoBase ? "crème fraiche" : "tomate"}
                </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    {MenuList}
                </div>
            
            </Container>
            

        </div>
    )
}

