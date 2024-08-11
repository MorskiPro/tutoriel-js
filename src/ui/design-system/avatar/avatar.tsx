import clsx from "clsx";
import Image from "next/image";

interface Props{
    size?: "small" | "medium"
    src: string,
    alt: string,
}

export const Avatar = ({size="small", src, alt}: Props) => {
    let sizeStyles: string, variantStyles: string;

    switch (size) {
        case "small": //Default
            sizeStyles="w-[74px] h-[74px]";
            break;
        case "medium":
            sizeStyles="w-[88px] h-[88px]";
            break;
    }

    return(
        <div className={clsx(sizeStyles, "bg-white rounded relative")}>
            <Image src={src} alt={alt} fill unoptimized/>
        </div>
    )
            
           
        
    
}
