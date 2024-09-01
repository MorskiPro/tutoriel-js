import { EquipeNousView } from "./components/equipe-nous/equipe-nous.view"
import { HistoireNous } from "./components/histoire-nous/histoire-nous.view"
import { TopNous } from "./components/top-nous/top-nous.view"

export const NousPageView = () => {
    return (
        <>
        <TopNous />
        <HistoireNous />
        <EquipeNousView/>
        </>
    )
}