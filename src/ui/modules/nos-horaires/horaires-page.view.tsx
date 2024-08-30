import { MapHorairesView } from "./components/map-horaires/map-horaires.view"
import { TopHoraires } from "./components/top-horaires/top-horaires.view"


export const HorairesPageView = () =>  {
    return(
        <>
        <TopHoraires/>
        <MapHorairesView/>
        </>
    )
}