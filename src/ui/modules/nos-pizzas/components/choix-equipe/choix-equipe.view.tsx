import { useState } from "react"; // Assurez-vous d'importer useState
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";

interface ChoixEquipeInterface {
    id: string,
    imagePath: string;
    imageAlt: string,
    title: string,
    description: string,
    tailles: string,
    taillel: string,
    taillexl: string,
    prices: string,
    pricel: string,
    pricexl: string,
}

const ChoixEquipeData: ChoixEquipeInterface[] = [
    {
        id: uuidv4(),
        imagePath: "/assets/images/campagnarde.png",
        imageAlt: "",
        title: "LA CAMPAGNARDE",
        description: "Tomate, Pommes de terre, Jambon de campagne, Fromage, Crème Fraîche, Persil",
        tailles: "S",
        taillel: "L",
        taillexl: "XL",
        prices: "9,50",
        pricel: "12,50", // Exemple de prix pour la taille L
        pricexl: "14", // Exemple de prix pour la taille XL
    },
    {id: uuidv4(),
        imagePath: "/assets/images/Burger.png",
        imageAlt: "",
        title: "LA BURGER",
        description: "Tomate, Viande Hachée, Oignons, Poivrons, Cheddar, Sauce Burger, Fromage",
        tailles: "S",
        taillel: "L",
        taillexl: "XL",
        prices: "9,50",
        pricel: "12,50", // Exemple de prix pour la taille L
        pricexl: "14", // Exemple de prix pour la taille XL
    },
    {id: uuidv4(),
        imagePath: "/assets/images/abeille.png",
        imageAlt: "",
        title: "L\'ABEILLE",
        description: "Crème Fraîche, Jambon, Lardons, Oignons, Chèvre, Fromage, Miel",
        tailles: "S",
        taillel: "L",
        taillexl: "XL",
        prices: "9,50",
        pricel: "12,50", // Exemple de prix pour la taille L
        pricexl: "14", // Exemple de prix pour la taille XL
    },
    {id: uuidv4(),
        imagePath: "/assets/images/poitevine.png",
        imageAlt: "",
        title: "LA POITEVINE",
        description: "Tomate, Champignons, Fromage de Chèvre, Fromage, Crème Fraîche",
        tailles: "S",
        taillel: "L",
        taillexl: "XL",
        prices: "9,50",
        pricel: "12,50", // Exemple de prix pour la taille L
        pricexl: "14", // Exemple de prix pour la taille XL
    },
    // Ajoutez d'autres pizzas similaires ici...
];

export const ChoixEquipeView = () => {
    // Un état pour suivre la taille sélectionnée pour chaque pizza
    const [selectedSizes, setSelectedSizes] = useState<string[]>(Array(ChoixEquipeData.length).fill("L"));

    const ChoixEquipeList = ChoixEquipeData.map((ChoixEquipe, index) => {
        // Détermine le prix selon la taille sélectionnée pour cette pizza spécifique
        const price = selectedSizes[index] === "S" ? ChoixEquipe.prices :
                      selectedSizes[index] === "L" ? ChoixEquipe.pricel :
                      ChoixEquipe.pricexl; // Default to XL

        return (
            <div key={ChoixEquipe.id} className="flex flex-col items-center justify-center bg-white rounded p-3">
                <div className="relative w-[130px] h-[130px] rounded-full mb-2 p-10 overflow-hidden"> 
                    <Image fill src={ChoixEquipe.imagePath} alt={ChoixEquipe.imageAlt} className="object-scale-down blur-xl" />
                    <Image fill src={ChoixEquipe.imagePath} alt={ChoixEquipe.imageAlt} className="object-scale-down" />
                </div>

                <Typography variant="caption3" component="h3" weight="medium" className="max-h-20 text-center pb-3">{ChoixEquipe.title}</Typography>
                <Typography variant="body-sm" theme="secondary" component="p" weight="medium" className="min-h-44 sm:min-h-fit gap-4 text-center pb-3">
                    {ChoixEquipe.description}
                </Typography>
                <div className="space-x-4">
                    <Button size="small" variant="secondary" onClick={() => {
                        const newSizes = [...selectedSizes]; // Créer une copie de l'état actuel
                        newSizes[index] = "S"; // Définir la taille sélectionnée pour cette pizza S
                        setSelectedSizes(newSizes); // Mettre à jour l'état
                    }}>{ChoixEquipe.tailles}</Button>

                    <Button size="small" variant="secondary" onClick={() => {
                        const newSizes = [...selectedSizes];
                        newSizes[index] = "L"; // Définir la taille sélectionnée pour cette pizza L
                        setSelectedSizes(newSizes);
                    }}>{ChoixEquipe.taillel}</Button>

                    <Button size="small" variant="secondary" onClick={() => {
                        const newSizes = [...selectedSizes];
                        newSizes[index] = "XL"; // Définir la taille sélectionnée pour cette pizza XL
                        setSelectedSizes(newSizes);
                    }}>{ChoixEquipe.taillexl}</Button>
                </div>
                <div>
                    <Typography className="p-5"variant="caption4" component="h3" weight="extra-bold">{price} €</Typography>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-gray-100 drop-shadow-xl pb-20">
            <Container>
                <div>
                    <Typography variant="h2" className="sm:text-left sm:py-10 text-center pt-10">
                        Le choix de léquipe 
                    </Typography>
                </div>
                <div className="sm:pt-0 pt-14">
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 col-span-1 py-7 sm:py-0">{ChoixEquipeList}</div>
                </div>
            </Container>
        </div>
    );
}
