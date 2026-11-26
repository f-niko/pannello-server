import './App.css'

import { contaPerStato, cpuMedia, piuLento } from './calcoli'
import ServerInEvidenza from './ServerInEvidenza.jsx'
import { sistema, servers, avvisi } from './dati.js'
import GrigliaServer from './GrigliaServer.jsx'
import Intestazione from './Intestazione.jsx'
import { trovaServer } from './calcoli'
import Riepilogo from './Riepilogo.jsx'
import Avvisi from './Avvisi.jsx'


function App() {
  const ok = contaPerStato(servers, 'ok')
  const attenzione = contaPerStato(servers, 'attenzione')
  const critici = contaPerStato(servers, 'critico')
  const offline = contaPerStato(servers, 'offline')

  const mediaCpu = cpuMedia(servers)
  const lento = piuLento(servers)

  const online = servers.filter(
    server => server && server.online === true
  ).length

  const cercato = "db-01"
  const risultatoRicerca = trovaServer(servers, cercato)

  return (
    <div className="pannello">

      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={online}
        totale={servers.length}
      />

      <Riepilogo
        ok={ok}
        attenzione={attenzione}
        critici={critici}
        offline={offline}
        mediaCpu={mediaCpu}
        lento={lento}
      />

      <GrigliaServer servers={servers} />

      <ServerInEvidenza 
        cercato={cercato}
        server={risultatoRicerca}
      />

      <Avvisi elenco={avvisi} />

    </div>
  )
}

export default App

/*
  Se il file dati-blackout.js avesse o 5 o 7 server, la griglia si aggiornerebbe per mostrarne 5 o 7, seguendo la sua struttura di 3 server per riga.

  Cambiando una riga sono cambiati 6 componenti (i server) in quanto la modifica ha cambiato il file da cui App.jsx recupera i server da inserire nella
  griglia.

  Risposte alle domande sul flusso dei dati in '../risposte.md'
*/