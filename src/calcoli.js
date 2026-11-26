export const SOGLIE = { attenzione: 70, critico: 90 }

export function statoServer(server) {
  if (!server || server.online === false) {
    return "offline"
  }

  if (typeof server.cpu !== "number") {
    return "offline"
  }

  if (server.cpu >= SOGLIE.critico) {
    return "critico"
  }

  if (server.cpu >= SOGLIE.attenzione) {
    return "attenzione"
  }

  return "ok"
}

export function contaPerStato(servers, stato) {
  if (!Array.isArray(servers)) {
    return null;
  }

  return servers.reduce((conteggio, server) => (statoServer(server) === stato ? conteggio + 1 : conteggio), 0)
}

export function cpuMedia(servers) {
    if (!Array.isArray(servers) || servers.length === 0) {
        return null
    }

    const onlineConCPU = servers.filter(
      server => server && server.online !== false &&
      typeof server.cpu === "number"
    )

    if (onlineConCPU.length === 0) return null
    
    const totaleCPU = onlineConCPU.reduce(
      (somma, server) => somma + server.cpu, 0
    )

    return totaleCPU / onlineConCPU.length
}

export function piuLento(servers){
    if (!Array.isArray(servers) || servers.length === 0){
        return null
    }

    const serverOnline = servers.filter((server) => server && server.online !== false)
    if (serverOnline.length === 0){
        return null
    }

    return serverOnline.reduce((piuLentoCorrente, server) => server.latenza > piuLentoCorrente.latenza ? server: piuLentoCorrente)
}

export function trovaServer(servers, nome) {
    if (!Array.isArray(servers)){
        return undefined
    }

    return servers.find((server) => server && server.nome === nome)
}