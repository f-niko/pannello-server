const CONFIG_STATO = {
    ok: {classe: "badge-ok", testo: "Ok"},
    attenzione: {classe: "badge-attenzione", testo: "Attenzione"},
    critico: {classe: "badge-critico", testo: "Critico"},
    offline: {classe: "badge-offline", testo: "Offline"}
}

export function BadgeStato({ stato }){
    const config =  CONFIG_STATO[stato] ?? {
        classe: "badge-offline",
        testo: "Offline"
    }

    return(
        <span className={`badge ${config.classe}`}>
            {config.testo}
        </span>
    )
}

export default BadgeStato