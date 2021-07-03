# "Vaccini per tutti" by onData

"Vaccini per tutti" è un'**applicazione sperimentale non ufficiale** che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali.

Si tratta di un progetto dell'associazione [onData APS](https://ondata.it) nell'ambito della campagna [#datiBeneComune](https://datibenecomune.it/) basato interamente su dati aperti e codice open source.

[![alt text](https://github.com/ondata/vaccinipertutti/blob/main/public/card.png?raw=true)](https://ondata.github.io/vaccinipertutti/)

> AGGIORNAMENTO: con la pubblicazione del [nuovo piano vaccinale](https://www.governo.it/sites/governo.it/files/210313_Piano_Vaccinale_marzo_2021.pdf) (13 marzo 2021) è cambiato il valore di default dell'obiettivo di copertura vaccinale dal 70% all'80% (pag. 9).

> AGGIORNAMENTO: con la pubblicazione del [nuovo piano vaccinale](https://www.governo.it/sites/governo.it/files/210313_Piano_Vaccinale_marzo_2021.pdf) (13 marzo 2021) sono cambiati gli obiettivi nazionali intermedi (pag. 20), vedi anche [issue #23](https://github.com/ondata/vaccinipertutti/issues/23).

## Come funziona

Apri l'applicazione con il tuo browser, puoi farlo sia da desktop che da tablet e smartphone: https://ondata.github.io/vaccinipertutti/.

In base a quante somministrazioni sono state effettuate in Italia nei giorni passati, l'applicazione stima quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quelle fasce di popolazione considerate ad alta priorità, così come definiti nel [piano nazionale di vaccinazione](https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione) (obiettivi di luglio, agosto e settembre).

Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su sfondo colorato ed esplora tutti gli scenari possibili.

## I dati

Le fonti istituzionali sono tre:

- [Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri](https://github.com/italia/covid19-opendata-vaccini/): dati sulle somministrazioni e le forniture a livello nazionale, per le regioni e le province autonome, aggiornamento quotidiano, licenza [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it);

- [Istituto Superiore di Sanità](https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione): dati sugli obiettivi del Piano nazionale di vaccinazione COVID-19 al 12 dicembre 2020, poi aggiornato a marzo 2021, licenza [CC BY-NC-ND 2.5 IT](https://www.epicentro.iss.it/chi-siamo/disclaimer);

- [ISTAT](http://demo.istat.it/popres/index2.php?anno=2021&lingua=ita): dati sulla popolazione residente a livello nazionale, nelle regioni e nelle province autonome al 1 gennaio 2021.

I dati sulle somministrazioni usati da questa applicazione sono automaticamente caricati su [questo repository](https://github.com/ondata/vaccinipertutti-data) ogni sei ore a partire da quello ufficiale della Struttura Commissariale per l'Emergenza Covid-19.

## Le stime

I vaccini che a partire dal 27 dicembre 2020 sono a disposizione delle autorità sanitarie possono essere uno strumento utile ad arginare la diffusione dell'epidemia da Sars-CoV-2 che causa la Covid-19. La campagna di vaccinazione in Italia si pone come obiettivo di vaccinare una frazione importante della popolazione italiana, l'80% entro settembre 2021, seguendo un piano di somministrazione articolato in varie fasi, a partire dalla vaccinazione delle fasce di popolazione più esposte o più a rischio di complicanze gravi della malattia.

Il termine previsto della campagna vaccinale in Italia contro Sars-CoV-2 è calcolato secondo questa formula:

> numero dei giorni rimanenti **uguale a** ( numero di somministrazioni necessarie per vaccinare la popolazione **meno** numero totale di somministrazioni già effettuate ) **diviso** numero medio di somministrazioni negli ultimi giorni

Questa data è calcolata ogni volta che apri la pagina e quindi cambia ogni volta che cambiano i dati sottostanti.

La formula dipende da alcuni parametri che puoi modificare a piacimento:

- il territorio di riferimento (es. Italia, ma puoi scegliere anche una regione o una provincia autonoma);
- percentuale della popolazione da vaccinare (es. 80%);
- numero di giorni su cui calcolare la media di somministrazioni al giorno (es. gli ultimi 7, escludendo i dati del giorno corrente, che potrebbero essere parziali);
- numero delle dosi che costituiscono il trattamento completo (es. 2 dosi a testa).

Dall'introduzione dei vaccini monodose (al momento il solo Janssen), di default il numero medio di dosi necessarie a vaccinare una persona è un numero tra 1 e 2:

> numero delle dosi che costituiscono il trattamento completo **uguale a** ( 2 **meno** ( forniture nazionali di vaccini monodose **diviso** forniture nazionali vaccini totali ) )

Le linee guida del piano vaccinale indicano anche che i soggetti con pregressa infezione da Covid-19 nel periodo 3-6 mesi concludono il ciclo vaccinale con un'unica dose.
Non vengono però presi in considerazione nella stima del numero medio di dosi necessarie a vaccinare una persona perché non se ne conosce la numerosità, a differenza delle forniture (note) dei vaccini monodose.

Puoi anche definire una data di termine della campagna (es. fine settembre 2021) e ottenere così il numero medio di somministrazioni giornaliere che bisognerebbe effettuare per raggiungere l'obiettivo indicato:

> numero medio di somministrazioni giornaliere **uguale a** ( numero di somministrazioni necessarie per vaccinare la popolazione **meno** numero totale di somministrazioni già effettuate ) **diviso** numero di giorni rimanenti alla data indicata

La formula dipende da due parametri che puoi modificare a piacimento:

- mese di fine della campagna (si intende entro la fine del mese);
- anno di fine della campagna (massimo al 2030).

Calcoli molto simili sono applicati per i paragrafi successivi:

- per ottenere la percentuale di popolazione effettivamente vaccinata (cioè che ha completato il ciclo di somministrazioni) sull'obiettivo totale si tiene conto di tre fattori:
  1. le somministrazioni di seconda dose (vaccini Astrazeneca, Pfizer, Moderna),
  2. le somministrazioni monodose (vaccino Janssen),
  3. le somministrazioni di prima dose ai soggetti con pregressa infezione (tutti i fornitori),
- per ottenere l'aumento nel numero medio di somministrazioni al giorno necessario per raggiungere il prossimo obiettivo del piano vaccinale si tiene conto del totale delle persone appartenenti alle fasce di popolazione prioritarie specificate.

Puoi controllare tutte queste formule e la loro implementazione guardando direttamente il [codice sorgente dell'applicazione](https://github.com/ondata/vaccinipertutti/blob/main/src/App.js).

## Frequently Asked Question (FAQ)

### A cosa serve questo lavoro?

Questo esperimento mostra che si possono fare cose interessanti, per quanto semplici, quando i dati istituzionali sono aperti, quindi è un buon caso di riuso degli open data.

Rientra in un più ampio discorso di monitoraggio civico basato sugli open data, in cui l'associazione onData è impegnata da sempre.

### Ma quindi va tutto male o va tutto bene?

Questo lavoro non vuole fornire giudizi, ma comunicare in maniera accessibile, da un punto comunicativo e tecnologico, alcuni elementi fattuali basati sui dati.

Non è detto che lo faccia al meglio, tutto è perfettibile, ma lo è proprio perché è aperto (dati, codice, segnalazioni).

### Perché l'avete fatto proprio così?

È un esempio di informazione aumentata: non è solo un testo, ma è un testo interattivo in cui l'utente può esplorare autonomamente i dati per verificare altri scenari possibili. È un esperimento di giornalismo digitale e basato sui dati (data journalism).

### Posso includere questa applicazione in una mia pagina web?

Certamente, puoi usare questo snippet di codice nel tuo sito.

```
<iframe src='https://ondata.github.io/vaccinipertutti/?embed=1'></iframe>
```

Il parametro `embed` ottimizza l'applicazione per il caricamento in un iframe nascondendo i fiori agli angoli e le icone di condivisione.

Aggiungendo anche il parametro `area` è possibile mostrare direttamente i dati della regione scelta al caricamento della pagina. Es. `<iframe src='https://ondata.github.io/vaccinipertutti/?area=VEN&embed=1'></iframe>` per il Veneto. [Qui](https://github.com/ondata/vaccinipertutti-data/blob/main/popolazione_residente_2020.json) puoi trovare tutti i codici regione disponibili.

Non dimenticare di citare la fonte, puoi copiare / incollare questo testo da qualche parte nella tua pagina.

> L'uso di questa applicazione è stato concesso dall'[Associazione onData](https://ondata.it) nell'ambito della campagna [#datiBeneComune](https://datibenecomune.it/). Il codice sorgente è open source e rilasciato sotto [licenza MIT](https://tldrlegal.com/license/mit-license) su Github: [ondata/vaccinipertutti](https://github.com/ondata/vaccinipertutti).

### Ho una domanda e non trovo una risposta, a chi posso chiedere?

Fai una segnalazione pubblica [cliccando qui](https://github.com/ondata/vaccinipertutti/issues/new). Puoi fare domande, dare suggerimenti, segnalare errori, proporre correzioni, esprimere dubbi, ma anche rispondere alle segnalazioni delle altre persone.

### Voglio sostenere questo lavoro, come posso fare?

Se anche a te stanno a cuore i dati aperti e la trasparenza delle istituzioni, dedica qualche minuto a leggere i motivi della campagna #datiBeneComune a [questa pagina](https://datibenecomune.it/). Se li condividi, sostienila e unisciti alle 45 mila e più persone e le 160 e più organizzazioni che hanno già firmato.

Puoi anche sostenere l'attività di onData in molti modi, [dai un'occhiata](https://sostieni.ondata.it/)... :)

## Disclaimer

Tutte le informazioni contenute in questa pagina sono da prendersi [così come sono](https://en.wikipedia.org/wiki/As_is), senza nessuna garanzia di correttezza o pretesa di affidabilità. I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale.

## Crediti

L'applicazione è sviluppata e mantenuta da [jenkin](https://github.com/jenkin) per [onData APS](https://ondata.it/), associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti.

L'immagine di copertina è di [Lisa Orlando](https://www.linkedin.com/in/lisa-orla/).

Dipendenze esterne: [ReactJS](https://it.reactjs.org/), [Material-UI](https://material-ui.com/), [Titillium Web](https://fonts.google.com/specimen/Titillium+Web), [Create React App](https://github.com/facebook/create-react-app), [d3js](https://d3js.org/).

I servizi di [automation](https://github.com/features/actions) e [hosting](https://pages.github.com/) sono offerti da [GitHub](https://www.github.com/).

Si ringraziano le comunità di [onData](https://ondata.it), [Dataninja](https://www.facebook.com/groups/dataninja/) e [#datiBeneComune](https://datibenecomune.it/) per i suggerimenti e il supporto.

## Contribuisci alla sviluppo

Per eseguire l'applicazione in locale e modificarne il codice devi avere installato [NodeJS](https://nodejs.org/it/) e [Yarn](https://yarnpkg.com/).

1. Clona questo repository: `git clone https://github.com/ondata/vaccinipertutti.git`
2. Entra nella cartella appena creata: `cd vaccinipertutti/`
3. Installa le dipendenze: `yarn install`
4. Avvia il server di sviluppo: `yarn start`

Una volta finito, puoi generare i file ottimizzati con `yarn build` nella cartella `build/` e pubblicare le modifiche in produzione con `yarn deploy` (solo per utenti con privilegi di *push* in questo repository).

Per proporre una modifica, effettua un [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) di questo repository, poi lavora su una *branch* diversa da `main` e infine apri una [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Sostieni il progetto

Puoi sostenere l'attività di onData in molti modi, [dai un'occhiata](https://sostieni.ondata.it/)!

Puoi sottoscrivere la campagna #datiBeneComune a [questa pagina](https://datibenecomune.it/) insieme alle 45 mila e più persone e le 160 e più organizzazioni che hanno già firmato.

## Licenza

Codice sorgente rilasciato con [licenza MIT](https://github.com/ondata/vaccinipertutti/blob/main/LICENSE).
