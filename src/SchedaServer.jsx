import BadgeStato from "./BadgeStato";
import { statoServer } from "./calcoli";

export function SchedaServer({ server }){
    if (!server) return null

    const stato = statoServer(server)

    return(
        <div className={`scheda scheda-${stato}`}>
            <h3>
                {server.nome} <BadgeStato stato={stato} />
            </h3>

            <p className="ruolo">
                {server.ruolo} - {server.sede}
            </p>

            <p>IP: {server.ip}</p>
            <p>CPU: {server.cpu ?? "N/D"}%</p>
            <p>Latenza: {server.latenza ?? "N/D"} ms</p>

            <p>
                Servizi: {server.servizi.length
                    ? server.servizi.join(", ")
                    : "Nessuno"}
            </p>

            <p>
                Manutenzione: {server.manutenzione
                ? `${server.manutenzione.data} - ${server.manutenzione.motivo}`
                : "Nessuna"}
            </p>
        </div>
    )
}