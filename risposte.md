1. Non si fa in quanto SchedaServer ha il compito di visualizzare i dati (tramite i props), non modificarli.
   Questo è anche dato dal fatto che 'server' è una prop ricevuta dal componente padre, e in jsx sappiamo che il figlio non può mai modificare componenti del padre.

2. Ciò è impossibile in quanto sia la scheda che il riepilogo utilizzano la stessa funzione 'statoServer' e gli stessi dati 'servers'. Finchè i dati non cambiano, il risultato
   della funzione non cambierà, in quanto deterministica.

3. Prendendo in esempio 'BadgeStato', a passargli solo 'stato' si ottiene una semplicità nella gestione: meno dipendenze, riusabilità ed una manutenzione più facile nel caso in
   cui ci fosse una modifica alla struttura generale del server.