(this.webpackJsonpvaccinipertutti=this.webpackJsonpvaccinipertutti||[]).push([[0],{115:function(e,t,n){},118:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n(11),o=n.n(r),c=n(82),s=n(14),l=n(13),d=n(81),u=n(183),j=(n(115),n(83)),b=n(7),m=n(61),f=n.n(m),p=n(39),h=n.n(p),O=n(75),g=n.n(O),v=(n(117),n(164)),x=n(167),_=n(188),w=n(194),z=n(191),D=n(171),C=n(186),k=n(192),y=n(178),S=n(179),T=n(180),I=n(181),A=n(182),E=n(172),N=n(173),F=n(174),P=n(175),q=n(176),B=n(177),M=n(160),R=n(184),L=n(161),Y=n(162),U=n(163),V=n(187),J=n(189),Q=n(76),G=n(65);n(118);var W=function(){var e,t,n,r,o,c,s,d,u,m,p,O,W=["Janssen"],$=Object(V.a)(Q),H=$.format(",d"),K=$.format(".1%"),X=Object(J.a)(G),Z=X.format("%A %e %B %Y"),ee=X.format("%B %Y"),te=X.format("%Y-%m-%d");h.a.extend(g.a),h.a.locale("it");var ne=Object(l.e)("embed",Object(l.f)(l.a,!1)),ae=Object(b.a)(ne,1)[0],ie=Object(i.useState)({}),re=Object(b.a)(ie,2),oe=re[0],ce=re[1],se=Object(i.useState)([]),le=Object(b.a)(se,2),de=le[0],ue=le[1],je=Object(i.useState)({}),be=Object(b.a)(je,2),me=be[0],fe=be[1],pe=Object(i.useState)(6e7),he=Object(b.a)(pe,2),Oe=he[0],ge=he[1],ve=Object(l.e)("populationFraction",Object(l.f)(l.b,.8)),xe=Object(b.a)(ve,2),_e=xe[0],we=xe[1],ze=Object(i.useState)([]),De=Object(b.a)(ze,2),Ce=De[0],ke=De[1],ye=Object(l.e)("area",Object(l.f)(l.d,"ITA")),Se=Object(b.a)(ye,2),Te=Se[0],Ie=Se[1],Ae=Object(i.useState)(new Date),Ee=Object(b.a)(Ae,2),Ne=Ee[0],Fe=Ee[1],Pe=Object(l.e)("lastDays",Object(l.f)(l.b,7)),qe=Object(b.a)(Pe,2),Be=qe[0],Me=qe[1],Re=Object(i.useState)(new Date),Le=Object(b.a)(Re,2),Ye=Le[0],Ue=Le[1],Ve=Object(i.useState)(0),Je=Object(b.a)(Ve,2),Qe=Je[0],Ge=Je[1],We=Object(i.useState)(0),$e=Object(b.a)(We,2),He=$e[0],Ke=$e[1],Xe=Object(l.e)("doses",Object(l.f)(l.b,0)),Ze=Object(b.a)(Xe,2),et=Ze[0],tt=Ze[1],nt=Object(i.useState)(2),at=Object(b.a)(nt,2),it=at[0],rt=at[1],ot=Object(i.useState)(0),ct=Object(b.a)(ot,2),st=ct[0],lt=ct[1],dt=Object(i.useState)(0),ut=Object(b.a)(dt,2),jt=ut[0],bt=ut[1],mt=Object(i.useState)(0),ft=Object(b.a)(mt,2),pt=ft[0],ht=ft[1],Ot=Object(i.useState)(0),gt=Object(b.a)(Ot,2),vt=gt[0],xt=gt[1],_t=Object(i.useState)(0),wt=Object(b.a)(_t,2),zt=wt[0],Dt=wt[1],Ct=Object(i.useState)([]),kt=Object(b.a)(Ct,2),yt=kt[0],St=kt[1],Tt=Object(i.useState)([]),It=Object(b.a)(Tt,2),At=It[0],Et=It[1],Nt=Object(i.useState)(0),Ft=Object(b.a)(Nt,2),Pt=Ft[0],qt=Ft[1],Bt=Object(i.useState)(0),Mt=Object(b.a)(Bt,2),Rt=Mt[0],Lt=Mt[1],Yt=Object(l.e)("targetMonth",Object(l.f)(l.b,8)),Ut=Object(b.a)(Yt,2),Vt=Ut[0],Jt=Ut[1],Qt=Object(l.e)("targetYear",Object(l.f)(l.b,(new Date).getFullYear())),Gt=Object(b.a)(Qt,2),Wt=Gt[0],$t=Gt[1],Ht=Object(i.useState)(new Date),Kt=Object(b.a)(Ht,2),Xt=Kt[0],Zt=Kt[1],en=Object(i.useState)(0),tn=Object(b.a)(en,2),nn=tn[0],an=tn[1],rn=Object(i.useState)({}),on=Object(b.a)(rn,2),cn=on[0],sn=on[1],ln=Object(i.useState)(0),dn=Object(b.a)(ln,2),un=dn[0],jn=dn[1],bn=Object(i.useState)(0),mn=Object(b.a)(bn,2),fn=mn[0],pn=mn[1],hn=Object(i.useState)(0),On=Object(b.a)(hn,2),gn=On[0],vn=On[1],xn=Object(i.useState)(!1),_n=Object(b.a)(xn,2),wn=_n[0],zn=_n[1],Dn=Object(i.useState)(!1),Cn=Object(b.a)(Dn,2),kn=Cn[0],yn=Cn[1];function Sn(){yn(!0)}function Tn(){yn(!1)}var In,An=function(e,t,n,a){e(t>a?a:t<n?n:t)};return Object(i.useEffect)((function(){Promise.all([window.fetch("../vaccinipertutti-data/last-update-dataset.json").then((function(e){return e.json()})).then((function(e){Fe(new Date(e.ultimo_aggiornamento))})),window.fetch("../vaccinipertutti-data/popolazione_residente_2021.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Object(M.a)(e.order,t.order)}))})).then((function(e){ke(e),fe(Object.fromEntries(Object(R.a)(e,(function(e){return e.area}))))})),window.fetch("../vaccinipertutti-data/campaign-milestones.json").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.deprecated}))})).then((function(e){return e.sort((function(e,t){return Object(M.a)(e.startDate,t.startDate)}))})).then((function(e){return e.filter((function(e){return new Date(e.startDate)<new Date&&new Date(e.endDate)>new Date}))})).then((function(e){sn(null===e||void 0===e?void 0:e[0])})),window.fetch("../vaccinipertutti-data/consegne-vaccini-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){Ge(Object(L.a)(e,(function(e){return e.numero_dosi}))),Ke(Object(L.a)(Object(Y.a)(e,(function(e){return W.includes(e.fornitore)})),(function(e){return e.numero_dosi})))})),window.fetch("../vaccinipertutti-data/somministrazioni-vaccini-latest.json").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){return"ITA"!==e.area}))})).then((function(e){return e.sort((function(e,t){return Object(U.a)(e.data_somministrazione,t.data_somministrazione)}))})).then((function(e){ce(Object(j.a)({ITA:Array.from(Object(R.a)(e,(function(e){return e.data_somministrazione})).values()).map((function(e){return e.reduce((function(e,t){var n,a,i,r,o,c,s,l,d,u;return{area:"ITA",nome_area:"Italia",data_somministrazione:t.data_somministrazione,totale:(null!==(n=e.totale)&&void 0!==n?n:0)+(t.totale||t.prima_dose+t.seconda_dose+(null!==(a=t.pregressa_infezione)&&void 0!==a?a:0)),prima_dose:(null!==(i=e.prima_dose)&&void 0!==i?i:0)+t.prima_dose+(null!==(r=t.pregressa_infezione)&&void 0!==r?r:0),seconda_dose:(null!==(o=e.seconda_dose)&&void 0!==o?o:0)+t.seconda_dose,vaccinati_monodose:(null!==(c=e.vaccinati_monodose)&&void 0!==c?c:0)+(W.includes(t.fornitore)?t.prima_dose:0)+(null!==(s=t.pregressa_infezione)&&void 0!==s?s:0),vaccinati_doppiadose:(null!==(l=e.vaccinati_doppiadose)&&void 0!==l?l:0)+t.seconda_dose,vaccinati:(null!==(d=e.vaccinati)&&void 0!==d?d:0)+(W.includes(t.fornitore)?t.prima_dose:0)+(null!==(u=t.pregressa_infezione)&&void 0!==u?u:0)+t.seconda_dose}}),{})}))},Object.fromEntries(Object(R.a)(e,(function(e){return e.area})))))}))]).then((function(){zn(!0)}))}),[]),Object(i.useEffect)((function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);new Date(Wt,Vt+1,0)>=t?Zt(new Date(Wt,Vt+1,0)):(Jt(Xt.getMonth()),$t(Xt.getFullYear()))}),[Vt,Wt]),Object(i.useEffect)((function(){ue(oe[Te]?"ITA"===Te?oe[Te]:Array.from(Object(R.a)(oe[Te],(function(e){return e.data_somministrazione})).values()).map((function(e){return e.reduce((function(e,t){var n,a,i,r,o,c,s,l,d,u;return{area:t.area,nome_area:t.nome_area,data_somministrazione:t.data_somministrazione,totale:(null!==(n=e.totale)&&void 0!==n?n:0)+(t.totale||t.prima_dose+t.seconda_dose+(null!==(a=t.pregressa_infezione)&&void 0!==a?a:0)),prima_dose:(null!==(i=e.prima_dose)&&void 0!==i?i:0)+t.prima_dose+(null!==(r=t.pregressa_infezione)&&void 0!==r?r:0),seconda_dose:(null!==(o=e.seconda_dose)&&void 0!==o?o:0)+t.seconda_dose,vaccinati_monodose:(null!==(c=e.vaccinati_monodose)&&void 0!==c?c:0)+(W.includes(t.fornitore)?t.prima_dose:0)+(null!==(s=t.pregressa_infezione)&&void 0!==s?s:0),vaccinati_doppiadose:(null!==(l=e.vaccinati_doppiadose)&&void 0!==l?l:0)+t.seconda_dose,vaccinati:(null!==(d=e.vaccinati)&&void 0!==d?d:0)+(W.includes(t.fornitore)?t.prima_dose:0)+(null!==(u=t.pregressa_infezione)&&void 0!==u?u:0)+t.seconda_dose}}),{})})):[])}),[oe,Te]),Object(i.useEffect)((function(){et?rt(et):Qe&&rt(2-He/Qe)}),[Qe,He,et]),Object(i.useEffect)((function(){me[Te]&&ge(me[Te][0].totale)}),[me,Te]),Object(i.useEffect)((function(){St(Object(R.b)(de,(function(e){return Object(L.a)(e,(function(e){return e.totale}))}),(function(e){return te(new Date(e.data_somministrazione))}))),Et(Object(R.b)(de,(function(e){return Object(L.a)(e,(function(e){return e.vaccinati}))}),(function(e){return te(new Date(e.data_somministrazione))}))),lt(Object(L.a)(de,(function(e){return e.totale}))),bt(Object(L.a)(de,(function(e){return e.vaccinati}))),ht(Object(L.a)(de,(function(e){return e.vaccinati_monodose}))),xt(Object(L.a)(de,(function(e){return e.vaccinati_doppiadose})))}),[de]),Object(i.useEffect)((function(){an(zt/(Xt-new Date)*1e3*60*60*24)}),[Xt,zt]),Object(i.useEffect)((function(){qt(Object(L.a)(yt.filter((function(e){return e[0]!==te(new Date)})).slice(0,Be),(function(e){return e[1]}))/Be)}),[yt,Be]),Object(i.useEffect)((function(){Lt(Object(L.a)(At.filter((function(e){return e[0]!==te(new Date)})).slice(0,Be),(function(e){return e[1]}))/Be)}),[At,Be]),Object(i.useEffect)((function(){Dt(it*Oe*_e-st)}),[it,Oe,_e,st]),Object(i.useEffect)((function(){var e=zt/Pt,t=new Date;t.setDate(t.getDate()+Math.round(e)),Ue(t)}),[zt,Pt]),Object(i.useEffect)((function(){jn((new Date(cn.endDate)-new Date)/864e5),pn(it*cn.total-st)}),[it,cn,st]),Object(i.useEffect)((function(){vn(fn/un)}),[fn,un]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{className:"container ".concat(ae?"slim":"boxed"),maxWidth:"md",style:{opacity:+wn},children:Object(a.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:[Object(a.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:"ondata.png",className:"logo small",alt:"onData Logo"})}),Object(a.jsx)("a",{href:"http://www.datibenecomune.it",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:"datibenecomune.png",className:"logo small",alt:"datiBeneComune Logo"})})]}),Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:["Che cos'\xe8 questa pagina? ",Object(a.jsx)("a",{href:"#",onClick:Sn,children:"Leggi qui!"})]}),Object(a.jsxs)(x.a,{item:!0,className:"supTitle",children:["Termine previsto della campagna vaccinale in ",Object(a.jsx)("em",{children:null===(e=me[Te])||void 0===e||null===(t=e[0])||void 0===t?void 0:t.nome})," contro Sars-CoV-2."]}),Object(a.jsx)(x.a,{item:!0,component:"h1",className:"mainTitle",children:Z(Ye)}),Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:["Come abbiamo calcolato questa data? ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"Ecco tutte le info!"})]}),Object(a.jsxs)(x.a,{item:!0,className:"mainText",children:["In ",Object(a.jsx)(_.a,{value:Ce.length?Te:"",onChange:function(e){return Ie(e.target.value)},children:Ce.map((function(e){return Object(a.jsx)(w.a,{value:e.area,children:e.nome},e.area)}))})," si \xe8 iniziato a somministrare il primo vaccino il ",Object(a.jsx)("em",{children:"27 dicembre 2020"}),". A ",Ne.getDate()===(new Date).getDate()?"oggi":"ieri",", ",Object(a.jsx)("em",{children:Z(Ne).toLowerCase()}),", sono state somministrate ",Object(a.jsx)("em",{children:H(st)})," dosi, ma ne mancano ",Object(a.jsx)("em",{children:H(zt)})," per vaccinare ",(In=100*_e,"8"===In.toString().slice(0,1)?"l'":"il "),Object(a.jsx)(z.a,{value:100*_e,onChange:function(e){return we(+e.target.value/100)},onBlur:function(e){return An(we,+e.target.value/100,.6,1)},inputProps:{type:"number",min:60,max:100,step:5},InputProps:{endAdornment:Object(a.jsx)(D.a,{position:"end",children:"%"})}})," della popolazione con una media di circa ",Object(a.jsx)(z.a,{value:Math.round(10*it)/10,onChange:function(e){rt(+e.target.value),tt(+e.target.value)},onBlur:function(e){return An(rt,+e.target.value,1,2)},inputProps:{type:"number",min:1,max:2,step:.1}})," dosi a testa",!!He&&Object(a.jsxs)(a.Fragment,{children:[" (",Object(a.jsx)("em",{children:K(1-He/Qe)})," con doppia dose e ",Object(a.jsx)("em",{children:K(He/Qe)})," monodose, in base alle attuali forniture nazionali)"]}),"."]}),Object(a.jsxs)(x.a,{item:!0,className:"mainText",children:["Al ritmo di ",Object(a.jsx)("em",{children:H(Pt)})," somministrazioni al giorno tenuto negli ultimi ",Object(a.jsx)(z.a,{value:Be,onChange:function(e){return Me(+e.target.value)},onBlur:function(e){return An(Me,+e.target.value,1,yt.length)},inputProps:{type:"number",min:1,max:yt.length,step:1}})," giorni, mancano circa ",Object(a.jsx)("em",{children:function(e){var t=h.a.duration(h()(e).diff(h()()));return[t.years()?"".concat(t.years()," ann").concat(1===t.years()?"o":"i"):"",t.months()?"".concat(t.months()," mes").concat(1===t.months()?"e":"i"):"",t.days()?"".concat(t.days()," giorn").concat(1===t.days()?"o":"i"):""].filter((function(e){return e})).join(", ").replace(/, ([^,]*)$/," e $1")}(Ye)})," prima di raggiungere l'obiettivo. Per farlo entro ",Object(a.jsx)(_.a,{value:Vt,onChange:function(e){return Jt(+e.target.value)},children:G.months.map((function(e,t){return Object(a.jsx)(w.a,{value:t,children:e.toLocaleLowerCase()},t)}))})," ",Object(a.jsx)(z.a,{value:Wt,onChange:function(e){return $t(+e.target.value)},onBlur:function(e){return An($t,+e.target.value,(new Date).getFullYear(),2030)},inputProps:{type:"number",min:(new Date).getFullYear(),max:2030,step:1}})," ",Pt>nn?"basterebbe":"bisognerebbe"," somministrare una media di ",Object(a.jsx)("em",{children:H(nn)})," dosi al giorno."]}),Object(a.jsxs)(x.a,{item:!0,className:"mainText",children:["Attualmente le persone vaccinate sono ",Object(a.jsx)("em",{children:H(jt)})," (",!!pt&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("em",{children:H(vt)})," con doppia dose e ",Object(a.jsx)("em",{children:H(pt)})," monodose, "]}),"una media di ",Object(a.jsx)("em",{children:H(Rt)})," al giorno), pari al ",Object(a.jsx)("em",{children:K(jt/Oe)})," della popolazione complessiva e al ",Object(a.jsx)("em",{children:K(jt/(_e*Oe))})," dell'obiettivo di copertura vaccinale."]}),"ITA"===Te?gn<Pt?Object(a.jsxs)(x.a,{item:!0,className:"mainText",children:["Il ritmo attuale \xe8 in linea con il prossimo obiettivo di vaccinare ",Object(a.jsx)("em",{children:H(cn.total)})," persone (",null===(n=cn.people)||void 0===n?void 0:n.map((function(e){return e.type})).join(", "),") entro ",Object(a.jsx)("em",{children:ee(new Date(cn.endDate))}),"."]}):Object(a.jsxs)(x.a,{item:!0,className:"mainText",children:["Il ritmo attuale dovrebbe aumentare del ",Object(a.jsx)("em",{children:K((gn-Pt)/gn)})," per raggiungere il prossimo obiettivo di vaccinare ",Object(a.jsx)("em",{children:H(cn.total)})," persone (",null===(r=cn.people)||void 0===r?void 0:r.map((function(e){return e.type})).join(", "),") entro ",Object(a.jsx)("em",{children:ee(new Date(cn.endDate))})," (fonte: ",Object(a.jsx)("a",{href:null===cn||void 0===cn||null===(o=cn.source)||void 0===o?void 0:o.url,target:"_blank",rel:"noreferrer",children:null===cn||void 0===cn||null===(c=cn.source)||void 0===c?void 0:c.name}),")."]}):null,Object(a.jsx)(x.a,{item:!0,className:"footerText",children:Object(a.jsx)("img",{src:"syringe.png",className:"syringe large",alt:"Syringe"})}),Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:["Un progetto a cura dell'",Object(a.jsx)("a",{href:"https://ondata.it",target:"_blank",rel:"noreferrer",children:"Associazione onData"}),"."]}),Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:["Perch\xe9 l'abbiamo fatto? ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"Scoprilo!"})]}),Object(a.jsxs)(x.a,{item:!0,className:"footerText",children:["E se ti piace, sottoscrivi la campagna ",Object(a.jsx)("a",{href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"#datiBeneComune"}),"!"]}),ae||Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{className:"Flower lt"}),Object(a.jsx)(C.a,{className:"Flower lb"}),Object(a.jsx)(C.a,{className:"Cube rt icon",children:Object(a.jsxs)(x.a,{container:!0,justifyContent:"center",alignContent:"center",direction:"column",children:[Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)(E.a,{color:"primary",onClick:Sn})}),Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su Twitter",href:'https://twitter.com/share?text="'.concat(f.a.decode("Termine previsto della campagna vaccinale in ".concat(null===(s=me[Te])||void 0===s||null===(d=s[0])||void 0===d?void 0:d.nome," contro Sars-CoV-2: ").concat(Z(Ye))),'" via @ondatait&hashtags=datiBeneComune&url=').concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(N.a,{color:"primary"})})}),Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href),"&hashtag=").concat(encodeURIComponent("#datiBeneComune")),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(F.a,{color:"primary"})})}),Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi su LinkedIn",href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(P.a,{color:"primary"})})}),Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Condividi via e-mail",href:'mailto:?subject="'.concat(f.a.decode("#datiBeneComune - Termine previsto della campagna vaccinale in ".concat(null===(u=me[Te])||void 0===u||null===(m=u[0])||void 0===m?void 0:m.nome," contro Sars-CoV-2: ").concat(Z(Ye))),'" via onData - APS&body=').concat(f.a.decode("In ".concat(null===(p=me[Te])||void 0===p||null===(O=p[0])||void 0===O?void 0:O.nome," si \xe8 iniziato a somministrare il primo vaccino il 27 dicembre 2020")),"... Continua a leggere su ").concat(encodeURIComponent(window.location.href)),target:"_blank",rel:"noreferrer",children:Object(a.jsx)(q.a,{color:"primary"})})}),Object(a.jsx)(x.a,{item:!0,xs:!0,children:Object(a.jsx)("a",{title:"Permalink",href:window.location.href,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(B.a,{color:"primary"})})})]})}),Object(a.jsx)(C.a,{className:"Flower rb"})]})]})}),Object(a.jsxs)(k.a,{open:kn,onClose:Tn,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(y.a,{id:"alert-dialog-title",children:'"Vaccini per tutti" by onData'}),Object(a.jsxs)(S.a,{children:[Object(a.jsxs)(T.a,{children:['"Vaccini per tutti" \xe8 un\'',Object(a.jsx)("b",{children:"applicazione sperimentale non ufficiale"})," che permette di stimare i tempi di avanzamento della campagna di vaccinazione in Italia sulla base degli open data istituzionali del ",Object(a.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini/",target:"_blank",rel:"noreferrer",children:"Commissario straordinario per l'emergenza Covid-19 - Presidenza del Consiglio dei Ministri"}),", dell'",Object(a.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"Istituto Superiore di Sanit\xe0"})," e di ",Object(a.jsx)("a",{href:"http://demo.istat.it/popres/index2.php?anno=2021&lingua=ita",target:"_blank",rel:"noreferrer",children:"ISTAT"}),"."]}),Object(a.jsx)(T.a,{children:Object(a.jsx)("img",{width:"100%",src:"card.png",alt:"Social Card"})}),Object(a.jsxs)(T.a,{children:["Come funziona? In base all'andamento della campagna di vaccinazione (quante somministrazioni effettuate in Italia nei giorni passati) stimiamo quanto tempo resta per raggiungere gli obiettivi di copertura vaccinale della popolazione generale e di quella dei soggetti ad alta priorit\xe0, cos\xec come definiti nel ",Object(a.jsx)("a",{href:"https://www.epicentro.iss.it/vaccini/covid-19-piano-vaccinazione",target:"_blank",rel:"noreferrer",children:"primo"})," e ",Object(a.jsx)("a",{href:"https://www.governo.it/sites/governo.it/files/210313_Piano_Vaccinale_marzo_2021.pdf",target:"_blank",rel:"noreferrer",children:"secondo"})," piano nazionale di vaccinazione. Puoi modificare i parametri che influiscono sul calcolo, prova a interagire con i numeri su ",Object(a.jsx)("em",{className:"bg",children:"sfondo colorato"})," ed esplora tutti gli scenari possibili. Trovi ulteriori dettagli in ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#le-stime",target:"_blank",rel:"noreferrer",children:"questa pagina"}),"."]}),Object(a.jsxs)(T.a,{children:["Per approfondire le motivazioni dietro lo sviluppo di questo lavoro, il significato e i limiti dei dati a disposizione, le modalit\xe0 di calcolo e l'affidabilit\xe0 delle stime presentate puoi leggere le nostre ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/blob/main/README.md#frequently-asked-question-faq",target:"_blank",rel:"noreferrer",children:"FAQ"})," (Frequently Asked Questions)."]}),Object(a.jsxs)(T.a,{children:["Se hai un dubbio o vuoi fare una segnalazione, puoi ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti/issues",target:"_blank",rel:"noreferrer",children:"aprire una issue"}),"."]}),Object(a.jsxs)(T.a,{children:["Tutte le informazioni contenute in questa pagina sono da prendersi ",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/As_is",target:"_blank",rel:"noreferrer",children:"cos\xec come sono"}),", senza nessuna garanzia di correttezza o pretesa di affidabilit\xe0. I dati sottostanti sono aggiornati quotidianamente dalle fonti indicate e le stime cambiano quindi ogni giorno seguendo l'andamento della campagna vaccinale."]}),Object(a.jsxs)(T.a,{children:["L'applicazione \xe8 sviluppata e mantenuta da ",Object(a.jsx)("a",{href:"https://github.com/jenkin",target:"_blank",rel:"noreferrer",children:"jenkin"})," per ",Object(a.jsx)("a",{href:"https://ondata.it/",target:"_blank",rel:"noreferrer",children:"onData APS"}),", associazione di promozione sociale che promuove l'apertura dei dati pubblici per renderli accessibili a tutte e tutti."]}),Object(a.jsxs)(T.a,{children:["Il codice sorgente \xe8 open source e rilasciato sotto ",Object(a.jsx)("a",{href:"https://tldrlegal.com/license/mit-license",target:"_blank",rel:"noreferrer",children:"licenza MIT"})," su Github: ",Object(a.jsx)("a",{href:"https://github.com/ondata/vaccinipertutti",target:"_blank",rel:"noreferrer",children:"ondata/vaccinipertutti"}),". Questa pagina \xe8 ospitata dal servizio ",Object(a.jsx)("a",{href:"https://pages.github.com/",target:"_blank",rel:"noreferrer",children:"Github Pages"})," e fa esclusivamente uso di cookie tecnici: non traccia n\xe9 profila in alcun modo gli utenti."]}),Object(a.jsxs)(T.a,{children:["Puoi sostenere l'attivit\xe0 di onData in molti modi, ",Object(a.jsx)("a",{href:"https://sostieni.ondata.it/",target:"_blank",rel:"noreferrer",children:"dai un'occhiata"}),"!"]})]}),Object(a.jsxs)(I.a,{justifyContent:"flex-start",children:[Object(a.jsx)(A.a,{color:"primary",href:"https://datibenecomune.it/",target:"_blank",rel:"noreferrer",children:"Sottoscrivi la campagna #datiBeneComune"}),Object(a.jsx)(A.a,{onClick:Tn,color:"secondary",variant:"contained",autoFocus:!0,children:"Ho capito, grazie!"})]})]})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},H=Object(d.a)({palette:{primary:{main:"rgba(0, 0, 0, 0.87)"},secondary:{main:"#e82f7d"}},typography:{fontFamily:['"Titillium Web"',"sans-serif"]},overrides:{MuiInput:{root:{padding:"0 .5em",backgroundColor:"#e82f7d",color:"white"}},MuiInputAdornment:{root:{"& > *":{color:"white !important",fontSize:"1.5rem"}}},MuiDialogActions:{root:{justifyContent:"flex-start","& > *:last-child":{marginLeft:"auto !important"}}}}});o.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(l.c,{ReactRouterRoute:s.a,children:Object(a.jsx)(u.a,{theme:H,children:Object(a.jsx)(W,{})})})}),document.getElementById("root")),$()}},[[127,1,2]]]);
//# sourceMappingURL=main.f07ac4d8.chunk.js.map