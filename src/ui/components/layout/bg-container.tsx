

//PERMET DE METTRE UNE BANNIERE EN PLEIN PAGE AVEC LE PARAMETRE URL, TITLE ET LE THEME

import { Typography } from "@/ui/design-system/typography/typography"

interface Props {
    url?: string,
    title?: string,
    theme?: string,
    alt?: string,
}

export const BackgroundImageContainer = ({url="", title="", theme="", alt=""}: Props) => {
    return (
        <div 
            className="relative w-full"
            style={{
                backgroundImage: url, // Chemin pizza
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '337px', // Hauteur du conteneur
            }}
        >
            <div className="sm:absolute sm:inset-0 sm:flex sm:items-center sm:px-32">
                <Typography variant="h2" className={theme}> {title}
                </Typography>
            </div>
        </div>
    )
}
