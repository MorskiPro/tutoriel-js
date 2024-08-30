import { iconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import React from "react";

interface Props {
    size?: "small" | "medium" | "large"; //taille du bouton
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico"; //theme du bouton + ico
    iconTheme?: "accent" | "secondary" | "gray"; //theme de l'ico
    icon?: iconProps; //l'icon de l'interface iconProps
    iconPosition?: "left" | "right" //Position de l'ico
    disabled?: boolean; //check disable
    isLoading?: boolean; //check loading
    children?: React.ReactNode;
    onClick?:()=>void;
    className?: string,
}

export const Button = ({size="medium", variant="accent", icon, iconTheme="accent", iconPosition="right", disabled, isLoading, children, onClick}: Props) => {

    let variantStyles: string = "", sizeStyles: string ="", icoSize: number=0;

    switch (variant) {
        case "accent": //Default
            variantStyles = "bg-primary border-secondary hover:bg-primary-400 text-white rounded";
            break;
    
        case "secondary": 
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;

        case "outline": 
            variantStyles = "bg-secondary hover:bg-secondary-300 text-white rounded";
            break;

        case "disabled": 
            variantStyles = "bg-gray-100 border border-gray-300 text-gray-300 rounded cursor-default";
            break;

        case "ico": 
            if(iconTheme === "accent"){ //default
                variantStyles = "bg-primary border-secondary hover:bg-primary-400 text-white rounded-full";
            }

            if(iconTheme === "secondary"){
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }

            if(iconTheme === "gray"){
                variantStyles = "bg-gray-300 hover:bg-gray-200 text-black rounded-full";
            }
            break;
    }
    
    switch (size) {
        case "small":
                sizeStyles = `text-caption1 font-medium ${variant === 'ico' ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"}`; //si c'est un icon alors ne pas gerer le padding mais le w et h
                icoSize = 18;
                break;

        case "medium": //default
                sizeStyles = `text-caption2 font-medium ${variant === 'ico' ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"}`;
                icoSize = 20;
                break;

        case "large":
                sizeStyles = `text-caption3 font-medium ${variant === 'ico' ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"}`;
                icoSize = 24;
                break;
    }



    return <>
        <button type="button" className={clsx(variantStyles, sizeStyles, icoSize, isLoading && "cursor-wait", "relative")} onClick={onClick} disabled={disabled}> 
           {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center"> {/* aligner le loading au milieu du bouton*/}
                {
                variant==="accent" || variant==="outline" || variant==="ico"? (<Spinner size ="small" variant="white"/>) : (<Spinner size ="small" />) //Si le bouton est primary ou gray alors spinner white autrement primary
                }
            </div>
           )}

           <div className={clsx(isLoading && "invisible")}> {/* si loading rendre le text invisible pour conserver la taille du bouton*/}
            {icon && variant === "ico" ? ( /* si il reçois icon alors affichage icon...*/
                <icon.icon size={icoSize} /> 
                ) : <div className={clsx(icon && "flex item-center gap=1")}> {/*Permet de se mettre dans une flex box pour centrer ico avec txt uniquement si ico = oui */}
                    {icon && iconPosition === "left" && (
                        <icon.icon size={icoSize} /> 
                    )}
                {children} {/*sinon children*/}
                    {icon && iconPosition === "right" && (
                        <icon.icon size={icoSize} /> 
                    )}
                    
                
                    </div>} 
            </div>
        </button>
    </>;
}