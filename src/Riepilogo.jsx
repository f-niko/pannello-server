function Riepilogo({ok, attenzione, critici, offline, mediaCpu, lento}){
    const testoMedia = typeof mediaCpu === "number" && !Number.isNaN(mediaCpu) ? `${mediaCpu.toFixed(1)}%` : "-"

    const testoLatenza = lento && typeof lento.latenza === "number" ? `${lento.latenza} ms` : "—"

    const etichettaLento = lento && lento.nome ? `Più lento: ${lento.nome}` : "Più lento: nessuno"

    return(
        <section className="riepilogo">
            <div className="casella">
                <span className="numero">{ok}</span>
                <span className="etichetta">OK</span>
            </div>
            <div className="casella">
                <span className="numero">{attenzione}</span>
                <span className="etichetta">Attenzione</span>
            </div>
            <div className="casella">
                <span className="numero">{critici}</span>
                <span className="etichetta">Critici</span>
            </div>
            <div className="casella">
                <span className="numero">{offline}</span>
                <span className="etichetta">Offline</span>
            </div>
            <div className="casella">
                <span className="numero">{testoMedia}</span>
                <span className="etichetta">CPU media (server online)</span>
            </div>
            <div className="casella">
                <span className="numero">{testoLatenza}</span>
                <span className="etichetta">{etichettaLento}</span>
            </div>
        </section>
    )
}

export default Riepilogo