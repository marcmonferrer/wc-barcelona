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

- `index.html`: estructura semàntica, selector CA/ES/EN, enllaç per saltar al contingut i favicon buit explícit (`data:,`) per evitar la petició automàtica de `/favicon.ico`.
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
