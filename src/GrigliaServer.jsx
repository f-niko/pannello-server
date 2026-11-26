import { SchedaServer } from './SchedaServer.jsx'

function GrigliaServer({ servers }) {
  return (
    <section className="griglia">
      {servers.map((server) => (
        <SchedaServer
          key={server.nome}
          server={server}
        />
      ))}
    </section>
  )
}

export default GrigliaServer