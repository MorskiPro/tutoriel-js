import clsx from "clsx";

interface Props {
    variant?: "display" | "h1" | "h2" | "h3" | "h4" | "lead" | "body-lg" | "body-base" | "body-sm" | "light" | "caption1" | "caption2" | "caption3" | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "div" | "p" | "span";
    theme?: "black" | "gray" | "primary" | "white" | "secondary"; //Couleur de la typo
    weight?: "regular" | "medium" | "bold" | "thin" | "extra-bold";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({variant = "h2", component: Component = "div", theme = "black", weight = "regular", className, children  }: Props) => {

    let variantStyles: string = "", colorStyles: string = "";

    switch (variant) {
        case "display":
            variantStyles = "text-8xl";
            break;

        case "h1":
            variantStyles = "text-7xl";
            break;
            
        case "h2": // Default
        variantStyles = "text-6xl";
            break;

        case "body-lg":
        variantStyles = "text-lg";
            break;

        case "body-base": 
        variantStyles = "text-base";
            break;

        case "body-sm": 
        variantStyles = "text-sm";
            break;

        case "light":
            variantStyles = "text-light";
            break;
        
        case "caption1": 
        variantStyles = "text-caption1";
            break;

        case "caption2": 
        variantStyles = "text-caption2";
            break;

        case "caption3": 
        variantStyles = "text-caption3";
            break;
                
        case "caption4": 
        variantStyles = "text-caption4";
            break;
    }

    switch (theme) {
        case "black": //Default
            colorStyles = "text-black";
            break;
        
        case "white":
            colorStyles = "text-white";
            break;
        
        case "primary": //Red
            colorStyles = "text-primary";
            break;

        case "secondary": //Gray
            colorStyles = "text-secondary";
            break;

        case "gray": //Gray-light
            colorStyles = "text-gray";
            break;
    }
    return (
        <Component className={clsx(variantStyles, weight === "medium" && "font-medium", className, colorStyles)}>{children}</Component>
    )
    
}

