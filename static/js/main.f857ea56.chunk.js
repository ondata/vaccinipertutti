(this.webpackJsonpvaccinipertutti=this.webpackJsonpvaccinipertutti||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a(11),c=a.n(r),o=a(79),s=a(13),l=a(14),d=a(80),u=a(173),j=(a(110),a(7)),b=a(58),m=a.n(b),h=a(154),f=a(157),O=a(178),p=a(184),g=a(181),x=a(161),v=a(176),w=a(182),D=a(168),k=a(169),C=a(170),z=a(171),y=a(172),S=a(162),_=a(163),T=a(164),E=a(165),I=a(166),A=a(167),q=a(151),F=a(175),N=a(152),P=a(153),M=a(177),R=a(179),B=a(75),L=a(63);a(112);var Y=function(){var e,t,a,r,c,o,s,d,u,b,Y=Object(M.a)(B),U=Y.format(",d"),V=Y.format(".1%"),Q=Object(R.a)(L),G=Q.format("%A %e %B %Y"),J=Q.format("%B %Y"),W=Q.format("%Y-%m-%d"),H=Object(i.useState)({}),K=Object(j.a)(H,2),X=K[0],Z=K[1],$=Object(i.useState)([]),ee=Object(j.a)($,2),te=ee[0],ae=ee[1],ne=Object(i.useState)({}),ie=Object(j.a)(ne,2),re=ie[0],ce=ie[1],oe=Object(i.useState)(6e7),se=Object(j.a)(oe,2),le=se[0],de=se[1],ue=Object(l.d)("populationFraction",Object(l.e)(l.a,.7)),je=Object(j.a)(ue,2),be=je[0],me=je[1],he=Object(i.useState)([]),fe=Object(j.a)(he,2),Oe=fe[0],pe=fe[1],ge=Object(l.d)("area",Object(l.e)(l.c,"ITA")),xe=Object(j.a)(ge,2),ve=xe[0],we=xe[1],De=Object(i.useState)(new Date),ke=Object(j.a)(De,2),Ce=ke[0],ze=ke[1],ye=Object(l.d)("lastDays",Object(l.e)(l.a,7)),Se=Object(j.a)(ye,2),_e=Se[0],Te=Se[1],Ee=Object(i.useState)(new Date),Ie=Object(j.a)(Ee,2),Ae=Ie[0],qe=Ie[1],Fe=Object(l.d)("doses",Object(l.e)(l.a,2)),Ne=Object(j.a)(Fe,2),Pe=Ne[0],Me=Ne[1],Re=Object(i.useState)(0),Be=Object(j.a)(Re,2),Le=Be[0],Ye=Be[1],Ue=Object(i.useState)(0),Ve=Object(j.a)(Ue,2),Qe=Ve[0],Ge=Ve[1],Je=Object(i.useState)(0),We=Object(j.a)(Je,2),He=We[0],Ke=We[1],Xe=Object(i.useState)(0),Ze=Object(j.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(i.useState)([]),at=Object(j.a)(tt,2),nt=at[0],it=at[1],rt=Object(i.useState)([]),ct=Object(j.a)(rt,2),ot=ct[0],st=ct[1],lt=Object(i.useState)(0),dt=Object(j.a)(lt,2),ut=dt[0],jt=dt[1],bt=Object(i.useState)(0),mt=Object(j.a)(bt,2),ht=mt[0],ft=mt[1],Ot=Object(l.d)("targetMonth",Object(l.e)(l.a,8)),pt=Object(j.a)(Ot,2),gt=pt[0],xt=pt[1],vt=Object(l.d)("targetYear",Object(l.e)(l.a,(new Date).getFullYear())),wt=Object(j.a)(vt,2),Dt=wt[0],kt=wt[1],Ct=Object(i.useState)(new Date),zt=Object(j.a)(Ct,2),yt=zt[0],St=zt[1],_t=Object(i.useState)(0),Tt=Object(j.a)(_t,2),Et=Tt[0],It=Tt[1],At=Object(i.useState)({}),qt=Object(j.a)(At,2),Ft=qt[0],Nt=qt[1],Pt=Object(i.useState)(0),Mt=Object(j.a)(Pt,2),Rt=Mt[0],Bt=Mt[1],Lt=Object(i.useState)(0),Yt=Object(j.a)(Lt,2),Ut=Yt[0],Vt=Yt[1],Qt=Object(i.useState)(0),Gt=Object(j.a)(Qt,2),Jt=Gt[0],Wt=Gt[1],Ht=Object(i.useState)(!1),Kt=Object(j.a)(Ht,2),Xt=Kt[0],Zt=Kt[1],$t=Object(i.useState)(!1),ea=Object(j.a)($t,2),ta=ea[0],aa=ea[1];function na(){aa(!0)}function ia(){aa(!1)}return Object(i.useEffect)((function(){Promise.all([window.fetch("../vaccinipertutti-data/last-update-dataset.json").then((function(e){return e.json()})).then((function(e){ze(new Date(e.ultimo_aggiornamento))})),window.fetch("../vaccinipertutti-data/popolazione_residente_2020.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(q.a)(e.order,t.order)}))})).then((function(e){pe(e),ce(Object.fromEntries(Object(F.a)(e,(function(e){return e.area}))))})),window.fetch("../vaccinipertutti-data/campaign-milestones.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(q.a)(e.startDate,t.startDate)}))})).then((function(e){return e.filter((function(e){return new Date(e.startDate)<new Date&&new Date(e.endDate)>new Date}))})).then((function(e){Nt(null===e||void 0===e?void 0:e[0])})),window.fetch("../vaccinipertutti-data/somministrazioni-vaccini-summary-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.sort((function(e,t){return Object(N.a)(e.data_somministrazione,t.data_somministrazione)}))})).then((function(e){Z(Object.fromEntries(Object(F.a)(e,(function(e){return e.area}))))}))]).then((function(){Zt(!0)}))}),[]),Object(i.useEffect)((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);new Date(Dt,gt+1,0)>t?St(new Date(Dt,gt+1,0)):(xt(yt.getMonth()),kt(yt.getFullYear()))}),[gt,Dt]),Object(i.useEffect)((function(){ae(X[ve]||[])}),[X,ve]),Object(i.useEffect)((function(){re[ve]&&de(re[ve][0].totale)}),[re,ve]),Object(i.useEffect)((function(){it(Object(F.b)(te,(function(e){return Object(P.a)(e,(function(e){return e.totale}))}),(function(e){return W(new Date(e.data_somministrazione))}))),st(Object(F.b)(te,(function(e){return Object(P.a)(e,(function(e){return e.seconda_dose}))}),(function(e){return W(new Date(e.data_somministrazione))}))),Ye(Object(P.a)(te,(function(e){return e.totale}))),Ge(Object(P.a)(te,(function(e){return e.seconda_dose})))}),[te]),Object(i.useEffect)((function(){It(He/(yt-new Date)*1e3*60*60*24)}),[yt,He]),Object(i.useEffect)((function(){jt(Object(P.a)(nt.filter((function(e){return e[0]!==W(new Date)})).slice(0,_e),(function(e){return e[1]}))/_e)}),[nt,_e]),Object(i.useEffect)((function(){ft(Object(P.a)(ot.filter((function(e){return e[0]!==W(new Date)})).slice(0,_e),(function(e){return e[1]}))/_e)}),[ot,_e]),Object(i.useEffect)((function(){Ke(Pe*le*be-Le)}),[Pe,le,be,Le]),Object(i.useEffect)((function(){var e=He/ut,t=new Date;t.setDate(t.getDate()+Math.round(e)),et(e),qe(t)}),[He,ut]),Object(i.useEffect)((function(){Bt((new Date(Ft.endDate)-new Date)/864e5),Vt(Pe*Ft.total-Le)}),[Pe,Ft,Le]),Object(i.useEffect)((function(){Wt(Ut/Rt)}),[Ut,Rt]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{className:"container",maxWidth:"md",style:{opacity:+Xt},children:Object(n.jsxs)(f.a,{container:!0,direction:"column",justify:"center",spacing:2,children:[Object(n.jsxs)(f.a,{item:!0,className:"footerText",children:["Che cos'\xe8 questa pagina? ",Object(n.jsx)("a",{href:"#",onClick:na,children:"Leggi qui!"})]}),Object(n.jsxs)(f.a,{item:!0,className:"supTitle",children:["Termine previsto della campagna vaccinale in ",Object(n.jsx)("em",{children:null===(e=re[ve])||void 0===e||null===(t=e[0])||void 0===t?void 0:t.nome})," contro Sars-CoV-2."]}),Object(n.jsx)(f.a,{item:!0,component:"h1",className:"mainTitle",children:G(Ae)}),Object(n.jsxs)(f.a,{item:!0,className:"footerText",children:["Come abbiamo calcolato questa data? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"Ecco tutte le info!"})]}),Object(n.jsxs)(f.a,{item:!0,className:"mainText",children:["In ",Object(n.jsx)(O.a,{value:Oe.length?ve:"",onChange:function(e){return we(e.target.value)},children:Oe.map((function(e){return Object(n.jsx)(p.a,{value:e.area,children:e.nome},e.area)}))})," si \xe8 iniziato a somministrare il primo vaccino il ",Object(n.jsx)("em",{children:"27 dicembre 2020"}),". A ",Ce.getDate()===(new Date).getDate()?"oggi":"ieri",", ",Object(n.jsx)("em",{children:G(Ce).toLowerCase()}),", sono state somministrate ",Object(n.jsx)("em",{children:U(Le)})," dosi, ma ne mancano ",Object(n.jsx)("em",{children:U(He)})," per vaccinare il ",Object(n.jsx)(g.a,{value:100*be,onChange:function(e){return me(+e.target.value/100)},inputProps:{type:"number",min:60,max:100,step:5},InputProps:{endAdornment:Object(n.jsx)(x.a,{position:"end",children:"%"})}})," della popolazione con ",Object(n.jsx)(g.a,{value:Pe,onChange:function(e){return Me(+e.target.value)},inputProps:{type:"number",min:1,max:2,step:1}})," dosi a testa."]}),Object(n.jsxs)(f.a,{item:!0,className:"mainText",children:["Al ritmo di ",Object(n.jsx)("em",{children:U(ut)})," somministrazioni al giorno tenuto negli ultimi ",Object(n.jsx)(g.a,{value:_e,onChange:function(e){return Te(+e.target.value)},inputProps:{type:"number",min:1,max:nt.length,step:1}})," giorni, mancano ",Object(n.jsxs)("em",{children:[U(Math.floor($e/365))," anni, ",U(Math.floor($e%365/30))," mesi e ",U(Math.floor($e%12))," giorni"]})," prima di raggiungere l'obiettivo. Per farlo entro ",Object(n.jsx)(O.a,{value:gt,onChange:function(e){return xt(+e.target.value)},children:L.months.map((function(e,t){return Object(n.jsx)(p.a,{value:t,children:e.toLocaleLowerCase()},t)}))})," ",Object(n.jsx)(g.a,{value:Dt,onChange:function(e){return kt(+e.target.value)},inputProps:{type:"number",min:(new Date).getFullYear(),max:2030,step:1}})," bisognerebbe somministrare una media di ",Object(n.jsx)("em",{children:U(Et)})," dosi al giorno."]}),Object(n.jsxs)(f.a,{item:!0,className:"mainText",children:["Attualmente le persone vaccinate con due dosi sono ",Object(n.jsx)("em",{children:U(Qe)})," (una media di ",Object(n.jsx)("em",{children:U(ht)})," al giorno), pari allo ",Object(n.jsx)("em",{children:V(Qe/(be*le))})," dell'obiettivo di copertura vaccinale della popolazione."]}),"ITA"===ve?Jt<ut?Object(n.jsxs)(f.a,{item:!0,className:"mainText",children:["Il ritmo attuale \xe8 in linea con il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:U(Ft.total)})," persone (",null===(a=Ft.people)||void 0===a?void 0:a.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:J(new Date(Ft.endDate))}),"."]}):Object(n.jsxs)(f.a,{item:!0,className:"mainText",children:["Il ritmo attuale dovrebbe aumentare del ",Object(n.jsx)("em",{children:V((Jt-ut)/Jt)})," per raggiungere il prossimo obiettivo di vaccinare ",Object(n.jsx)("em",{children:U(Ft.total)})," persone (",null===(r=Ft.people)||void 0===r?void 0:r.map((function(e){return e.type})).join(", "),") entro ",Object(n.jsx)("em",{children:J(new Date(Ft.endDate))}),"."]}):null,Object(n.jsxs)(f.a,{item:!0,className:"footerText",children:["Un progetto a cura dell'",Object(n.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:"Associazione onData"}),"."]}),Object(n.jsxs)(f.a,{item:!0,className:"footerText",children:["Perch\xe9 l'abbiamo fatto? ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"Scoprilo!"})]}),Object(n.jsxs)(f.a,{item:!0,className:"footerText",children:["E se ti piace, sottoscrivi la campagna ",Object(n.jsx)("a",{href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"#datiBeneComune"}),"!"]}),Object(n.jsx)(v.a,{className:"Flower lt"}),Object(n.jsx)(v.a,{className:"Flower lb"}),Object(n.jsx)(v.a,{className:"Cube rt icon",children:Object(n.jsxs)(f.a,{container:!0,justify:"center",alignContent:"center",direction:"column",children:[Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)(S.a,{color:"primary",onClick:na})}),Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Twitter",href:'https://twitter.com/share?text="'.concat(m.a.decode("Termine previsto della campagna vaccinale in ".concat(null===(c=re[ve])||void 0===c||null===(o=c[0])||void 0===o?void 0:o.nome," contro Sars-CoV-2: ").concat(G(Ae))),'" via @ondatait&hashtags=datiBeneComune&url=').concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(_.a,{color:"primary"})})}),Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href),"&hashtag=").concat(encodeURIComponent("#datiBeneComune")),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(T.a,{color:"primary"})})}),Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi su LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(E.a,{color:"primary"})})}),Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Condividi via e-mail",href:'mailto:?subject="'.concat(m.a.decode("#datiBeneComune - Termine previsto della campagna vaccinale in ".concat(null===(s=re[ve])||void 0===s||null===(d=s[0])||void 0===d?void 0:d.nome," contro Sars-CoV-2: ").concat(G(Ae))),'" via onData - APS&body=').concat(m.a.decode("In ".concat(null===(u=re[ve])||void 0===u||null===(b=u[0])||void 0===b?void 0:b.nome," si \xe8 iniziato a somministrare il primo vaccino il 27 dicembre 2020")),"... Continua a leggere su ").concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(n.jsx)(I.a,{color:"primary"})})}),Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)("a",{title:"Permalink",href:window.location.href,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(A.a,{color:"primary"})})})]})}),Object(n.jsx)(v.a,{className:"Flower rb"})]})}),Object(n.jsxs)(w.a,{open:ta,onClose:ia,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(D.a,{id:"alert-dialog-title",children:'"Vaccini per tutti" by onData'}),Object(n.jsxs)(k.a,{children:[Object(n.jsxs)(C.a,{children:['"Vaccini per tutti" \xe8 un\'',Object(n.jsx)("b",{children:"applicazione sperimentale non ufficiale"})," che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali del ",Object(n.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini/",target:"_blank",rel:"noreferrer",children:"Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri"}),", dell'",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"Istituto Superiore di Sanit\xe0"})," e di ",Object(n.jsx)("a",{href:"http://demo.istat.it/popres/index.php?anno=2020&lingua=ita",target:"_blank",rel:"noreferrer",children:"ISTAT"}),"."]}),Object(n.jsx)(C.a,{children:Object(n.jsx)("img",{width:"100%",src:"card.png"})}),Object(n.jsxs)(C.a,{children:["Come funziona? In base all'andamento della campagna di vaccinazione (quante somministrazioni effettuate in Italia nei giorni passati) stimiamo quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quella dei soggetti ad alta priorit\xe0, cos\xec come definiti nel ",Object(n.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"piano nazionale di vaccinazione"}),". Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su ",Object(n.jsx)("em",{className:"bg",children:"sfondo colorato"})," ed esplora tutti gli scenari possibili. Trovi ulteriori dettagli in ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"questa pagina"}),"."]}),Object(n.jsxs)(C.a,{children:["Per approfondire le motivazioni dietro lo sviluppo di questo lavoro, il significato e i limiti dei dati a disposizione, le modalit\xe0 di calcolo e l'affidabilit\xe0 delle stime presentate puoi leggere le nostre ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"FAQ"})," (Frequently Asked Questions)."]}),Object(n.jsxs)(C.a,{children:["Se hai un dubbio o vuoi fare una segnalazione, puoi ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/issues",target:"_blank",rel:"noreferrer",children:"aprire una issue"}),"."]}),Object(n.jsxs)(C.a,{children:["Tutte le informazioni contenute in questa pagina sono da prendersi ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/As_is",target:"_blank",rel:"noreferrer",children:"cos\xec come sono"}),", senza nessuna garanzia di correttezza o pretesa di affidabilit\xe0. I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale."]}),Object(n.jsxs)(C.a,{children:["L'applicazione \xe8 sviluppata e mantenuta da ",Object(n.jsx)("a",{href:"https://github.com/jenkin",target:"_blank",rel:"noreferrer",children:"jenkin"})," per ",Object(n.jsx)("a",{href:"https://ondata.it/",target:"_blank",rel:"noreferrer",children:"onData APS"}),", associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti."]}),Object(n.jsxs)(C.a,{children:["Il codice sorgente \xe8 open source e rilasciato sotto ",Object(n.jsx)("a",{href:"https://tldrlegal.com/license/mit-license",target:"_blank",rel:"noreferrer",children:"licenza MIT"})," su Github: ",Object(n.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti",target:"_blank",rel:"noreferrer",children:"ondata/vaccinipertutti"}),". Questa pagina \xe8 ospitata dal servizio ",Object(n.jsx)("a",{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Github Pages"})," e fa esclusivamente uso di cookie tecnici: non traccia n\xe9 profila in alcun modo gli utenti."]}),Object(n.jsxs)(C.a,{children:["Puoi sostenere l'attivit\xe0 di onData in molti modi, ",Object(n.jsx)("a",{href:"https://sostieni.ondata.it/",target:"_blank",rel:"noreferrer",children:"dai un'occhiata"}),"!"]})]}),Object(n.jsxs)(z.a,{justify:"flex-start",children:[Object(n.jsx)(y.a,{color:"primary",href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"Sottoscrivi la campagna #datiBeneComune"}),Object(n.jsx)(y.a,{onClick:ia,color:"secondary",variant:"contained",autoFocus:!0,children:"Ho capito, grazie!"})]})]})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))},V=Object(d.a)({palette:{primary:{main:"rgba(0, 0, 0, 0.87)"},secondary:{main:"#e82f7d"}},typography:{fontFamily:['"Titillium Web"',"sans-serif"]},overrides:{MuiInput:{root:{padding:"0 .5em",backgroundColor:"#e82f7d",color:"white"}},MuiDialogActions:{root:{justifyContent:"flex-start","& > *:last-child":{marginLeft:"auto !important"}}}}});c.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(l.b,{ReactRouterRoute:s.a,children:Object(n.jsx)(u.a,{theme:V,children:Object(n.jsx)(Y,{})})})}),document.getElementById("root")),U()}},[[118,1,2]]]);
//# sourceMappingURL=main.f857ea56.chunk.js.map