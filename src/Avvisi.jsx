function Avvisi({ elenco }){
    const vuoto = elenco.length === 0

    return(
        <section className={vuoto ? "avvisi avvisi-vuoto" : "avvisi"}>
            <h2>Avvisi ({elenco.length})</h2>
            <p>
                {vuoto ? "Nessun avviso" : elenco.join(" · ")}
            </p>
        </section>
    )
}

export default Avvisi