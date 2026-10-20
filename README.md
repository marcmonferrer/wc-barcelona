## V0.2 — Publicació autoritzada el 20 d’octubre de 2026

Estat actual: formulari publicat per a qualsevol persona amb l’enllaç. Prova real sense sessió de Google enviada amb dades exclusivament sintètiques i registrada al full privat. La web està publicada amb el botó Proposa un WC / Propón un baño / Suggest a toilet. Les seccions de preparació següents són evidències històriques i no descriuen l’estat actual.

Web: https://marcmonferrer.github.io/wc-barcelona/
Formulari públic: https://docs.google.com/forms/d/e/1FAIpQLSfUGNTH0-uSvMNLMz-HDgap_zpu2E-MTdMvb1rgTUKcA_JWTQ/viewform

Autorització final expressa de Marc per obrir la recollida i publicar v0.2. No s’afirma compliment legal certificat ni verificació independent de tots els rols i garanties de Google. Avís breu i detallat en CA/ES/EN visibles abans d’enviar. El text d’esborrany tancat s’ha retirat; les limitacions es mantenen explicades.

Conservació: supressió MANUAL de dades identificatives sis mesos després de resoldre cada proposta, separadament a Forms i Sheets; incloure correus d’aclariment si n’hi ha. No hi ha automatització ni garantia d’esborrat immediat de l’historial/còpies internes de Google. Revisió humana i publicació manual de qualsevol establiment: cap connexió automàtica entre el full i la web.

QA final pública PASS: GitHub Pages desplegat i URL visitada al navegador; commit de producte c733e640d0763aec615d48d5eaa3d73cdf0214ed, amb correcció de recursos ba3e52089f07f439712abdd8e6900e0171126bd0 (desplegament 39401459832 completat correctament). La correcció afegeix ?v=0.2 a data.js i styles.css per evitar barrejar HTML nou amb textos i estils antics de la memòria cau.

PASS: CA/ES/EN, els tres textos del botó i de revisió, Nou Somni/BLAU/Bar Nuri, dotze definicions per idioma, tres Maps i un advertiment d’esglaó traduït. Crèdit Monferrer Lab visible en tres idiomes i enllaç conservat. Destinacions de Maps obertes: NOU SOMNI a Àvila 164, BLAU a Bac de Roda 126–127 i Bar Nuri a Rambla del Poblenou 34. Botó públic activat: arriba al formulari amb avís complet CA/ES/EN abans d’Envia, sense sessió obligatòria. Prova anònima acceptada i registrada al full privat; notificació nativa rebuda a Marc. Resum públic de respostes desactivat. Prova marcada «DESCARTAR», només dades sintètiques i cap proposta real publicada automàticament.

PASS: a 1280 px observats, sense desbordament en tres idiomes i botó de 44 px. Cap error de consola observat a la regressió pública. Sintaxi app.js/data.js i git diff --check correctes; comparació amb la base: dades i textos originals intactes, excepte etiqueta de versió. No hi ha lint/typecheck/build local configurats; el build de Pages ha passat. Modificats index.html, data.js, styles.css i aquest README; cap fitxer nou ni dependència.

NO COMPROVAT: telèfon físic, zoom real al 200%, lector de pantalla, revisió visual completa i adequació jurídica independent de tots els fluxos de Google. No s’ha executat el qüestionari complet de Facilita RGPD. Cap certificació de compliment ni d’accessibilitat.

# WC Barcelona v0.1 — pilot públic

URL pública verificada: https://marcmonferrer.github.io/wc-barcelona/

Repositori públic: https://github.com/marcmonferrer/wc-barcelona

Commit dels quatre fitxers del producte verificats: `1c755f2784ee71a0cd381a89d40c60c52d7dda23`. Aquest README s’incorpora en un commit posterior de documentació, sense canvis al producte.

## Publicació i verificació — 20 d’octubre de 2026

- GitHub Pages configurat amb `Deploy from a branch`, branca `main`, carpeta `/ (root)`, HTTPS obligatori. Build i deploy finalitzats correctament: https://github.com/marcmonferrer/wc-barcelona/actions/runs/39388498142
- URL pública visitada a Chrome: càrrega funcional, CA/ES/EN, tres fitxes Nou Somni, BLAU i Bar Nuri, dotze definicions no buides per idioma, avís de l’esglaó exclusiu de Bar Nuri, font personal de l’estiu de 2026 i desconeguts explícits preservats.
- Tres URL de Maps presents al lloc públic i destinacions obertes prèviament: noms i adreces coincideixen amb les tres fitxes. Cap certificació ni comprovació presencial d’accessibilitat.
- Crèdit discret al footer: «Desenvolupat per Monferrer Lab», «Desarrollado por Monferrer Lab» i «Developed by Monferrer Lab», amb enllaç HTTPS a https://monferrerlab.com, visitat i funcional. Enllaç natiu a la mateixa pestanya, accessible amb Tab i focus visible. Sense logos ni funcionalitats addicionals.
- Sense desbordament horitzontal en CA/ES/EN a amplades CSS realment observades de 320, 356, 600, 853 i 1422 px; crèdit dins de l’amplada disponible. Restablert el viewport inicial. Aquests resultats no acrediten zoom real al 200%.
- Consola pública sense errors ni avisos durant aquestes comprovacions. `node --check app.js` i `node --check data.js`: correctes. No hi ha lint, typecheck ni build local configurats.
- Els quatre fitxers públics del producte coincideixen amb els locals, normalitzant només finals de línia i línies buides finals. Únics canvis de producte: enllaç del crèdit a `index.html`, tres textos a `data.js` i `flex-wrap: wrap` al footer de `styles.css`; `app.js` intacte.
- Cinc fitxers revisats abans de publicar, sense secrets ni dades personals innecessàries detectats. Cap fitxer privat dels directoris pare inclòs. Metadades dels commits amb el correu professional públic aprovat. X-Ray i Porra no modificats.
- NO COMPROVAT: zoom real al 200%, lector de pantalla real i revisió visual completa de totes les fitxes. Les proves del DOM i d’amplada no substitueixen aquestes comprovacions.

La interfície identifica ara el lloc com a «Pilot públic / Piloto público / Public pilot», tant a la marca com al peu de pàgina, amb el sistema de traduccions existent. L’històric següent descriu el treball anterior a la publicació i no l’estat actual.

## Històric de preparació local

### WC Barcelona v0.1 — prototip local (històric)

Obre `index.html` amb un doble clic o arrossega’l a un navegador. No cal instal·lar res, compilar ni iniciar un servidor. La pàgina necessita JavaScript activat. No s’ha fet cap publicació, deploy ni push, ni s’ha instal·lat cap dependència o servei. Per a la QA s’ha utilitzat un servidor localhost temporal, ja aturat.

## Fitxers

- `index.html`: estructura semàntica, selector CA/ES/EN, enllaç per saltar al contingut i referència al favicon SVG.
- `favicon.svg`: cercle verd fosc amb «WC» en blanc, dibuixat amb traçats vectorials i sense fonts ni recursos externs.
- `styles.css`: presentació responsive, focus visible i colors.
- `data.js`: única font de dades i textos traduïts. Els noms i les adreces es conserven en els tres idiomes. `officialNeighborhood: null` reserva el barri oficial sense inventar-lo ni mostrar cap filtre.
- `app.js`: renderització de les tres fitxes i canvi d’idioma, incloent-hi el títol, la descripció, les etiquetes accessibles i l’avís de canvi d’idioma.

Les observacions provenen exclusivament de la informació aportada. No s’ha fet cap comprovació presencial ni s’han inferit condicions d’ús, mides o accessibilitat certificada. L’obertura de Google Maps és una acció externa explícita de la persona usuària; la pàgina no carrega recursos externs.

## Validació executada

- `node --check app.js` i `node --check data.js`: correctes.
- Execució del JavaScript real amb Node i una simulació mínima del DOM: canvi CA → ES → EN → CA mitjançant els esdeveniments del selector; traduccions completes, idioma del document, títol, descripció, etiquetes accessibles, estat del selector i anunci de canvi verificats.
- En els tres idiomes: exactament tres fitxes, noms i adreces conservats, quatre apartats per fitxa, textos de font i dates i condicions d’ús presents, avís d’esglaó exclusiu de Bar Nuri i barri oficial nul.
- Enllaços generats: coincideixen amb els tres URL aportats, són HTTPS i tenen `target="_blank"`, `rel="noopener noreferrer"` i avís accessible de pestanya nova. No s’han obert ni s’ha comprovat la destinació o les redireccions.
- Contrast calculat amb luminància relativa sRGB: totes les combinacions de text i fons utilitzades superen 4,5:1; el mínim és 5,63:1. Focus blau sobre els fons adjacents també per sobre de 4,5:1.
- Revisió estàtica del teclat: botons i enllaços natius, ordre del document sense índexs positius, enllaç de salt, destinació enfocables i focus visible. CSS amb una columna per sota de 900 px i ajustos per sota de 540 px.

La simulació del DOM no comprova el comportament d’un navegador real. No hi ha eines de lint, typecheck o build configurades: és JavaScript sense dependències ni compilació.

## QA final i regressió — 20 d’octubre de 2026

Les proves de navegador s’han executat a Chrome sobre localhost. El bloqueig inicial de `file://` no ha impedit aquestes proves HTTP. Els resultats del navegador són independents de la simulació del DOM descrita abans.

| Estat | Comprovació i evidència |
| --- | --- |
| PASS | Favicon: després de la correcció d’una línia, càrrega a un origen localhost nou. El registre del servidor mostra només `/`, `styles.css`, `data.js` i `app.js`, tots amb HTTP 200; cap petició a `/favicon.ico` ni cap 404. La consola de Chrome no mostra errors ni avisos durant la regressió. |
| PASS | Selector CA/ES/EN: clics en els tres idiomes al navegador; canvien els textos, el títol, l’idioma del document, l’estat seleccionat i l’avís de l’esglaó. Es conserven noms i adreces, tres fitxes, dotze definicions no buides i tres enllaços a Maps. Repetit després de corregir el favicon. |
| PASS | Teclat en la QA anterior: Tab recorre salt, marca, CA, ES, EN i els tres enllaços de Maps; Shift+Tab retrocedeix. Focus visible als vuit controls i als enllaços en mòbil; Espai i Retorn activen el selector. Retorn al salt enfoca `main`. La regressió posterior repeteix Espai, Shift+Tab, focus visible i activació del salt amb Retorn. |
| PASS | Mesures de disposició: en la QA anterior, amplades CSS observades de 320, 376, 768 i 1280 px, en els tres idiomes, sense desbordament horitzontal ni elements informatius fora de l’amplada disponible. Regresió posterior repetida a 320 i 1280 px en CA/ES/EN: `scrollWidth === clientWidth` (303 i 1263 px, respectivament, descomptant la barra vertical). |
| NO COMPROVAT | Zoom real al 200% i llegibilitat a aquesta escala. Els intents amb dreceres de zoom no han alterat les mesures del navegador. En l’últim intent, `devicePixelRatio` es manté en 1,125 i `innerWidth` en 1653 abans i després de `Control_L+equal`. Això no acredita un zoom del 200%; no s’ha substituït per zoom CSS ni per una reducció de viewport. |
| NO COMPROVAT | Revisió visual completa de totes les fitxes. Hi ha captures parcials de la capçalera mòbil, però les captures completes o després de desplaçar-se fallen intermitentment per temps d’espera. Les mesures del DOM no substitueixen aquesta revisió visual. |
| NO COMPROVAT | Lector de pantalla real: no s’ha provat. La inspecció del DOM i de l’arbre d’accessibilitat no equival a aquesta prova. |
| NO COMPROVAT | Destinacions i redireccions de Google Maps: URL verificats al codi i al DOM, però no s’han obert les destinacions externes. |

El favicon buit evita la petició automàtica; no crea un recurs HTTP a `/favicon.ico`. L’obertura manual d’aquesta ruta no forma part de la correcció.

La regressió també ha repetit `node --check app.js` i `node --check data.js`, tots dos correctes. Els SHA-256 de `styles.css`, `app.js` i `data.js` coincideixen amb els previs al tancament: no s’han modificat. Només s’han canviat `index.html` (favicon) i aquest README. No hi ha lint, typecheck o build configurats que es puguin executar sense afegir eines.

Cap FAIL funcional confirmat en la regressió. Les comprovacions NO COMPROVAT continuen pendents; el prototip queda preparat per a revisió local.


## Preparació de publicació a GitHub Pages — 20 d’octubre de 2026

Publicació autoritzada per Marc. Encara NO PUBLICAT: la credencial de GitHub CLI és invàlida i el navegador demana iniciar sessió. No s’ha creat cap repositori, commit, push ni desplegament. URL pública i commit: pendents de publicació i verificació; no s’han de donar per confirmats.

- Revisats íntegrament els cinc fitxers existents, inclosos els ocults de la carpeta: només `index.html`, `styles.css`, `data.js`, `app.js` i `README.md`. No s’hi han detectat secrets, credencials, dades personals innecessàries ni fitxers locals privats. La publicació ha de limitar-se a aquests cinc fitxers, sense incloure directoris pare.
- Revisió editorial: preservades Nou Somni, BLAU i Bar Nuri; CA/ES/EN; advertiment de l’esglaó de Bar Nuri; font d’experiència personal, visita aproximada a l’estiu de 2026 i informació comunicada l’octubre de 2026; desconeguts explícits i advertiment que no és una certificació ni garantia actual.
- Google Maps: oberts els tres URL originals a Chrome. Nou Somni resol a NOU SOMNI, carrer d’Àvila 164; BLAU resol a BLAU, carrer de Bac de Roda 126, 127; la cerca de Bar Nuri resol a Bar Nuri, Rambla del Poblenou 34. Les destinacions i adreces coincideixen. Això no verifica presencialment les condicions d’accessibilitat ni substitueix la font personal.
- Repetits `node --check app.js` i `node --check data.js`: correctes. No hi ha lint, typecheck ni build configurats.
- NO COMPROVAT: desplegament i funcionament de l’URL pública, zoom real al 200%, lector de pantalla i revisió visual completa de totes les fitxes.

En aquesta preparació només s’ha ampliat aquest README; els quatre fitxers del producte es conserven. No s’ha modificat cap repositori d’X-Ray ni de Porra.

## V0.2 — Proposa un WC (preparació privada, NO PUBLICADA)

Preparada el 20 d’octubre de 2026 a la branca local `v0.2-proposa-wc`, des de `6a01506b450d32bf87edc2e5d56a71cddbe8a589`. No s’ha fet push, merge a main, deploy ni obertura pública del formulari. La v0.1 pública continua amb HTTP 200 i sense el botó nou; main públic conserva el commit base.

### Un formulari i un full privat

Compte verificat al navegador i al connector abans de crear res: `marcmonferrer.ai@gmail.com`. Els permisos de Drive dels dos fitxers mostren només aquest compte com a propietari i `shared: false`.

- Formulari, edició privada: https://docs.google.com/forms/d/1SDCsaIkNDF9yQPKGGiG2zvEXvsOVyfRpYaWgMu4LoB4/edit
- Vista prèvia del propietari: https://docs.google.com/forms/d/1SDCsaIkNDF9yQPKGGiG2zvEXvsOVyfRpYaWgMu4LoB4/preview
- Enllaç preparat al botó: https://docs.google.com/forms/d/e/1FAIpQLSfUGNTH0-uSvMNLMz-HDgap_zpu2E-MTdMvb1rgTUKcA_JWTQ/viewform — actualment informa que el document no s’ha publicat; no és una recollida oberta. Cal repetir la prova del destí definitiu quan s’autoritzi publicar.
- Full de respostes privat: https://docs.google.com/spreadsheets/d/11tHzXIguBjPvYZ6PBl5hrngtBMDYm0OfWiD6flUJocA/edit

El formulari és únic, titulat «♿ WC Barcelona · Proposa un WC», amb preguntes i avisos en CA/ES/EN. Té exactament cinc camps: correu, nom del local i ubicació obligatoris; accés i comentaris opcionals. El correu té validació de format Email i un error traduït; no és recollida de correu verificat de Google. L’accés té només dues opcions i deixar-lo buit significa desconegut. Els comentaris demanen no incloure dades personals ni de salut. No es demanen noms de persones, telèfons, fitxers ni comptes de Google.

El formulari segueix «Not Published / This form isn’t accepting responses». La limitació a una resposta i la recollida de correus verificats estan desactivades; no hi ha resum públic de resultats ni edició de respostes. La confirmació trilingüe explica la revisió humana. S’ha activat «Get email notifications for new responses» per al compte professional; no s’ha enviat cap missatge ni resposta de prova.

La vinculació nativa mostra «View in Sheets». El full només conté la pestanya `Form Responses 1`, amb capçaleres A1:F1: Timestamp i els cinc camps. A2:F2 és buit; zero respostes. No s’ha publicat ni compartit amb participants, ni s’hi han afegit bases de dades o serveis.

### Integració local i circuit humà

Canvi mínim: un enllaç amb aspecte de botó abans de la llista, a `index.html`; sis textos nous a `data.js` (botó i explicació per idioma), i tres regles a `styles.css`. Es reutilitza el renderitzador existent. `app.js`, `favicon.svg`, les dades de les tres fitxes, Maps, avisos, dates, fonts i crèdit Monferrer Lab romanen intactes. La versió pública continua sent v0.1 fins que s’autoritzi el canvi.

Circuit obligatori: proposta al full privat → revisió humana de les dades i els desconeguts → si s’aprova, edició i publicació manual de la fitxa i les traduccions. No hi ha connexió entre el full i `data.js`, ni importació automàtica. Abans de publicar una proposta cal retirar correus i altres dades personals dels comentaris; no convertir «no conec barreres» en una garantia d’accessibilitat. Una resposta d’accés en blanc continua sent desconeguda. Cap contacte amb participants o establiments s’ha executat en aquesta preparació.

### QA executada i límits

- PASS: compte professional verificat; un formulari i un full, privats i amb propietari correcte; notificació de noves respostes activada.
- PASS: vista prèvia amb cinc preguntes, tres marques d’obligatori, dos radis opcionals d’accés i comentaris de paràgraf opcionals; textos CA/ES/EN. Prova de correu mal format amb text fictici, sense enviar: apareix l’error trilingüe.
- PASS: vista prèvia de Forms amb amplada CSS observada de 320 px, clientWidth = scrollWidth = 305 px, sense desbordament horitzontal. És una prova en navegador d’escriptori amb viewport mòbil, no en un telèfon físic ni amb lector de pantalla.
- PASS: web local en CA/ES/EN a 320 i 356 px observats, sense desbordament; tres fitxes, tres Maps, un únic advertiment d’esglaó i crèdit traduït. Botó de 44 px d’alt, amb focus visible per Tab i explicació associada amb `aria-describedby`.
- PASS: comparació del contingut amb HEAD: totes les dades d’establiments i totes les traduccions preexistents són idèntiques. `node --check app.js`, `node --check data.js` i `git diff --check` correctes. No hi ha lint, typecheck ni build local configurats.
- PASS: URL de resposta preparada comprovada; informa «aquest document no s’ha publicat». L’enllaç local apunta a aquesta destinació. Activació amb Retorn des de la web local verificada: arriba a aquest URL i Google informa que el document no s’ha publicat. No s’ha habilitat la recollida.
- PASS: main públic conserva `6a01506b450d32bf87edc2e5d56a71cddbe8a589`; web v0.1 HTTP 200, sense el botó v0.2. No s’ha modificat cap altre projecte.
- NO COMPROVAT: enviament efectiu sense sessió, registre d’una resposta al full i recepció de la notificació. No s’ha publicat ni obert el formulari per provar-ho. Configuració preparada sense requeriments de login, però pendent de prova anònima quan s’autoritzi.
- NO COMPROVAT: prova amb telèfon físic, zoom real 200%, lector de pantalla i revisió visual completa. Les mesures del DOM no equivalen a aquestes proves.

### Tancament de privacitat — 20 d’octubre de 2026

Aquesta secció actualitza les evidències inicials de v0.2 descrites més amunt. La prova privada posterior sí que ha verificat recepció, vinculació i notificació; no acredita accés anònim públic.

Responsable confirmat per Marc: Marc Monferrer, persona física, amb marca personal Monferrer Lab. Contacte i exercici de drets: marcmonferrer.ai@gmail.com. Finalitat: revisar propostes de WC, aclarir dubtes i agrair la col·laboració; sense màrqueting ni publicació de dades personals.

Avís breu i informació addicional CA/ES/EN incorporats i rellegits a la vista prèvia del formulari. La informació addicional és un bloc informatiu abans d’Envia; es mantenen només cinc preguntes. Base jurídica preparada: consentiment, art. 6.1.a RGPD, mitjançant l’acció afirmativa d’enviar amb informació prèvia; sense casella addicional. S’expliquen voluntarietat, camps necessaris, retirada sense afectar la licitud anterior, drets d’accés, rectificació, supressió, limitació, oposició quan correspongui i portabilitat, i reclamació davant l’AEPD. No hi ha perfils ni decisions automatitzades.

Conservació confirmada: eliminar dades identificatives de Forms i Sheets sis mesos després de resoldre cada proposta, o abans quan correspongui per retirada o supressió. Procediment manual: anotar a la cel·la de data la resolució i el venciment de sis mesos; revisar els venciments i suprimir separadament a Forms i Sheets. Abans de conservar informació del local, retirar qualsevol dada personal dels comentaris. No s’ha configurat cap automatisme de supressió, ni s’afirma haver executat venciments futurs. Si després hi ha correus d’aclariment, també cal incloure’n les dades identificatives en la revisió de conservació.

Destinataris descrits: responsable i serveis de Google que allotgen i gestionen Forms/Sheets; altres cessions només per obligació legal. Les condicions generals a l’EEE identifiquen Google Ireland Limited; Google descriu possibles tractaments internacionals. Avís CA/ES/EN revisat: Google declara que no actua com a encarregat ni ofereix DPA per als serveis de consum. No s’exigeix un DPA inexistent ni es pressuposa compliment automàtic. **Pendent de revisió jurídica especialitzada abans d’obrir:** determinar els rols reals de Google per als continguts del formulari i la licitud i garanties de comunicar-hi aquestes dades, incloses transferències, drets i conservació. Segons el CEPD els rols depenen de les activitats efectives; una denominació contractual no és decisiva. Si l’operació concreta és un encàrrec, caldrà resoldre les exigències de l’art. 28 RGPD; el consentiment del proposant no les substitueix. Aquesta és una qüestió pendent, no una declaració d’il·legalitat acreditada d’aquest pilot. No s’ha contractat Workspace ni creat serveis o acceptat acords. No es promet allotjament exclusiu a la UE ni esborrat immediat de còpies de seguretat o historial de Google.

### Prova controlada i estat final privat

- PASS: publicació de prova restringida només al propietari; accés de participants restringit, sense notificacions a tercers ni recollida pública.
- PASS: enviada una única resposta sintètica identificada com «PROVA TÈCNICA V0.2 — NO PUBLICAR», amb correu fictici del domini reservat example.invalid, local i ubicació ficticis; cap dada personal real de participant.
- PASS: recepció efectiva a Forms i A2:F2 del full vinculat; accés deixat en blanc i conservat com a desconegut. Assajat el circuit de revisió amb resolució de prova «descartar, no publicar» en una nota privada; això no és aprovació humana d’un establiment real.
- PASS: rebuda i llegida la notificació nativa de Google Forms a marcmonferrer.ai@gmail.com. No s’ha enviat cap correu manual ni cap correu a participants o establiments.
- PASS: després de la prova, recepció desactivada i formulari despublicat. Vista prèvia final: «Not Published / This form isn’t accepting responses». Permisos de Forms i Sheets tornats a consultar: shared:false i únicament el propietari professional.
- PASS: amb confirmació expressa de Marc, eliminada només la resposta sintètica restant de Forms; verificat «0 responses / No responses. Publish your form to start accepting responses». Formulari conservat. La còpia de Sheets ja havia estat eliminada per Marc; rellegit A1:F3, amb només capçaleres i sense resposta ni nota de prova. Full existent conservat.
- PASS: botó local corregit amb l’enllaç canònic de resposta que proporciona Google: https://docs.google.com/forms/d/e/1FAIpQLSfUGNTH0-uSvMNLMz-HDgap_zpu2E-MTdMvb1rgTUKcA_JWTQ/viewform. Sense push, merge ni desplegament. Les tres fitxes i la v0.1 pública es conserven.
- PASS: avís legal complet comprovat a 320 px: clientWidth i scrollWidth de 305 px, cinc preguntes, tres obligatòries, dos radis i formulari tancat.
- NO COMPROVAT: enviament sense sessió i accés anònim de principi a fi; cal provar-los quan s’autoritzi l’obertura. La prova restringida no els substitueix.
- NO COMPROVAT: telèfon físic, zoom real al 200%, lector de pantalla i revisió visual completa. Tampoc s’acredita la purga de l’historial o les còpies internes de Google.

Abans d’obrir: resoldre la revisió jurídica especialitzada de l’ús de Google de consum i ajustar l’avís a les garanties acreditades; obtenir autorització final per obrir el formulari i desplegar el botó. Neteja de prova completada. Cap proposta passa automàticament del full a la web: revisió humana i publicació manual obligatòries.

### Contrast final amb AEPD i Facilita RGPD

- Reconfirmat Forms amb zero respostes i sense publicar. No quedava cap altra resposta sintètica per eliminar; no s’ha eliminat el formulari ni el full.
- Contrast documental amb les orientacions de Facilita RGPD i el dret d’informació de l’AEPD. No s’ha executat el qüestionari complet de Facilita ni s’ha obtingut cap certificació; l’AEPD adverteix que els seus documents no impliquen compliment automàtic.
- Avís detallat CA/ES/EN: identitat i contacte, finalitat, consentiment i retirada, camps necessaris/opcionals, sis mesos després de resolució, drets i AEPD, destinataris Google i possibles transferències. Completada també la primera capa amb base jurídica, Google/transferències i referència als drets, sense afegir preguntes.
- Valoració preliminar: les dades previstes són correu i informació del local, sense categories especials sol·licitades ni perfilat. Això apunta a risc baix, però el text lliure pot rebre dades personals o de salut no demanades; cal retirar-les en la revisió. No s’afirma una avaluació formal de risc completada.
- Google de consum: no s’exigeix DPA si no hi ha encàrrec. Marc conserva les responsabilitats sobre la recollida, informació, ús, seguretat, drets i supressió de les seves còpies. La declaració de Google no determina per si sola els rols jurídics de totes les operacions. Pendent acreditar per a les respostes del pilot els rols, la licitud de la comunicació i el mecanisme de transferència aplicable; la política general enumera adequació/DPF/clàusules però no prova per si sola cada flux del pilot.
- Cap prohibició legal concreta d’aquest formulari acreditada amb les fonts consultades. Tampoc queda acreditat el compliment íntegre. No s’imposa contractar assessorament, Workspace o altres serveis; la qüestió pot aclarir-se amb recursos gratuïts de l’AEPD abans d’obrir. Recomanació: mantenir tancat fins a documentar aquesta adequació, concretar les garanties de l’avís i completar les comprovacions operatives pendents.
- Fonts: https://www.aepd.es/guias-y-herramientas/herramientas/facilita-rgpd ; https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion ; https://policies.google.com/privacy/frameworks?hl=es . No s’ha publicat cap canvi de la web ni obert el formulari.
Fonts oficials consultades:
- Informació de privacitat: https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion
- Consentiment: https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/5-bases-legitimadoras-del-tratamiento/FAQ-0211-segun-el-rgpd-como-debe-solicitarse-el-consentimiento-de-los-interesados-para-tratar-sus-datos-personales
- Serveis Google de consum i acord d’encàrrec: https://support.google.com/policies/answer/9581826?hl=en
- Rols efectius, CEPD 07/2020: https://www.edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf
- Política, supressió i transferències Google: https://policies.google.com/privacy i https://policies.google.com/privacy/frameworks
- Controls de publicació i respostes: https://support.google.com/docs/answer/2839588?hl=en i https://support.google.com/docs/answer/139706?hl=en
