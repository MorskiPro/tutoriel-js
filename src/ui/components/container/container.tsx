import clsx from "clsx";

interface Props {
    children?: React.ReactNode,
    className?: string,
}

export const Container = ({children, className}: Props) => {
    return(
        <div className={clsx(className, "w-full max-w-7xl mx-auto px-5px lg:px-10")}> {/*mise en page padding de 5px si ecran sup 1024 (lg) alors 10*/}

        {children}
        </div>

        )
}