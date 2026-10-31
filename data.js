/* Single source for establishment facts and all translated information.
   Official address facts: Ajuntament de Barcelona, Open Data BCN (CC BY 4.0).
   https://opendata-ajuntament.barcelona.cat/data/ca/dataset/taula-direle
   https://opendata-ajuntament.barcelona.cat/data/ca/dataset/nomenclator-bcn
   https://opendata-ajuntament.barcelona.cat/data/ca/dataset/20170706-districtes-barris
   Blau's postal code remains unconfirmed and is omitted. */
window.WC_BARCELONA = {
  places: [
    { id: 'nou-somni', name: 'Nou Somni', address: "Carrer d’Àvila, 164, el Parc i la Llacuna del Poblenou, 08018", officialNeighborhood: "el Parc i la Llacuna del Poblenou", maps: 'https://maps.app.goo.gl/rZBiNVGQBseikL2VA', access: 'easyAccess', interior: 'adaptedInterior', warning: false },
    { id: 'blau', name: 'Blau', address: "Carrer de Bac de Roda, 126–127, Provençals del Poblenou", officialNeighborhood: "Provençals del Poblenou", maps: 'https://maps.app.goo.gl/fawPUnv1DJmWFVbv6', access: 'easyAccess', interior: 'adaptedInterior', warning: false },
    { id: 'bar-nuri', name: 'Bar Nuri', address: "Rambla del Poblenou, 34, el Poblenou, 08005", officialNeighborhood: "el Poblenou", maps: 'https://www.google.com/maps/search/?api=1&query=Bar%20Nuri%20Rambla%20del%20Poblenou%2034%20Barcelona', access: 'stepAccess', interior: 'nuriInterior', warning: true },
    {"id":"despacito","name":"Despacito","address":"Carrer de Lope de Vega, 94, el Poblenou, 08005","access":"despacitoAccess","interior":"despacitoInterior","warning":"narrowDoorWarning","officialNeighborhood":"el Poblenou","maps":"https://www.google.com/maps/search/?api=1&query=DESPACITO%20Carrer%20de%20Lope%20de%20Vega%2C%2094%2C%20Barcelona","conditions":"unknownConditions","source":"despacitoSource"},
    {"id":"ovella-negra-marina","name":"L’Ovella Negra Marina","address":"Carrer de Zamora, 78, el Parc i la Llacuna del Poblenou, 08018","access":"ovellaAccess","interior":"ovellaInterior","officialNeighborhood":"el Parc i la Llacuna del Poblenou","maps":"https://www.google.com/maps/search/?api=1&query=L%E2%80%99OVELLA%20NEGRA%20MARINA%20Carrer%20de%20Zamora%2C%2078%2C%20Barcelona","conditions":"unknownConditions","source":"newSource"},
    {"id":"beercelona-bar","name":"Beercelona Bar","address":"Rambla del Poblenou, 118, el Poblenou, 08005","access":"beercelonaAccess","interior":"beercelonaInterior","officialNeighborhood":"el Poblenou","maps":"https://www.google.com/maps/search/?api=1&query=BEERCELONA%20BAR%20Rambla%20del%20Poblenou%2C%20118%2C%20Barcelona","conditions":"unknownConditions","source":"newSource"},
    {"id":"bitacora-poblenou","name":"Bitàcora Poblenou","address":"Plaça de la Unió, 24, el Poblenou, 08005","access":"bitacoraAccess","interior":"bitacoraInterior","conditions":"keyConditions","usageNote":"keyRequired","officialNeighborhood":"el Poblenou","maps":"https://www.google.com/maps/search/?api=1&query=BIT%C3%80CORA%20POBLENOU%20Pla%C3%A7a%20de%20la%20Uni%C3%B3%2C%2024%2C%20Barcelona","source":"newSource"},
    {"id":"bar-trebol","name":"Bar Trèbol","address":"Carrer de Pujades, 225, el Poblenou, 08005","access":"trebolAccess","interior":"trebolInterior","officialNeighborhood":"el Poblenou","maps":"https://www.google.com/maps/search/?api=1&query=BAR%20TR%C3%88BOL%20Carrer%20de%20Pujades%2C%20225%2C%20Sant%20Mart%C3%AD%2C%2008005%20Barcelona","conditions":"unknownConditions","source":"newSource"},
    { id: 'sala-beckett', name: 'Sala Beckett', address: "Carrer de Pere IV, 228–232, el Poblenou, 08005", officialNeighborhood: "el Poblenou", maps: 'https://www.google.com/maps/search/?api=1&query=Sala%20Beckett%20Pere%20IV%20228%E2%80%93232%20Barcelona', access: 'positiveAccess', interior: 'positiveInterior', conditions: 'unknownConditions', source: 'newSource' },
    { id: 'la-higuera', name: 'La Higuera', address: "Carrer de Sicília, 101, el Fort Pienc, 08013", officialNeighborhood: "el Fort Pienc", maps: 'https://www.google.com/maps/search/?api=1&query=La%20Higuera%20Sic%C3%ADlia%20101%20Barcelona', access: 'positiveAccess', interior: 'positiveInterior', conditions: 'unknownConditions', source: 'newSource' },
    { id: 'restaurant-muc', name: 'Restaurant MUC · Hotel SB Glow', address: "Carrer de Badajoz, 148–154, el Parc i la Llacuna del Poblenou, 08018", officialNeighborhood: "el Parc i la Llacuna del Poblenou", maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant%20MUC%20Hotel%20SB%20Glow%20Badajoz%20148%E2%80%93154%20Barcelona', access: 'positiveAccess', interior: 'positiveInterior', conditions: 'mucConditions', source: 'october25Source' },
    { id: 'bar-andrea', name: 'Bar Andrea', address: "Carrer de la Ciutat de Granada, 163, el Parc i la Llacuna del Poblenou, 08018", officialNeighborhood: "el Parc i la Llacuna del Poblenou", maps: 'https://www.google.com/maps/search/?api=1&query=Bar%20Andrea%20Ciutat%20de%20Granada%20163%20Barcelona', access: 'andreaAccess', interior: 'andreaInterior', warning: 'andreaWarning', conditions: 'unknownConditions', source: 'october25Source' },
    {"id":"minyam-poblenou","name":"Minyam Poblenou","address":"Carrer de Pujades, 187, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Minyam%20Poblenou%20Carrer%20de%20Pujades%2C%20187%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"balius-poblenou","name":"Balius Poblenou","address":"Carrer de Pujades, 196, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Balius%20Poblenou%20Carrer%20de%20Pujades%2C%20196%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"la-yaya-del-poblenou","name":"La Yaya del Poblenou","address":"Rambla del Poblenou, 142, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=La%20Yaya%20del%20Poblenou%20Rambla%20del%20Poblenou%2C%20142%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"chocolat-box","name":"Chocolat Box","address":"Rambla del Poblenou, 80, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Chocolat%20Box%20Rambla%20del%20Poblenou%2C%2080%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"4uatre-lounge","name":"4uatre Lounge","address":"Rambla del Poblenou, 63, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=4uatre%20Lounge%20Rambla%20del%20Poblenou%2C%2063%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"ramen-house","name":"Ramen House","address":"Rambla del Poblenou, 65, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Ramen%20House%20Rambla%20del%20Poblenou%2C%2065%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"soco-poblenou","name":"Soco Poblenou","address":"Carrer de Bilbao, 31, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Soco%20Poblenou%20Carrer%20de%20Bilbao%2C%2031%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"bar-bilbao","name":"Bar Bilbao","address":"Carrer de Bilbao, 18, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Bar%20Bilbao%20Carrer%20de%20Bilbao%2C%2018%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"},
    {"id":"bar-cafeteria-panes","name":"Bar · Cafeteria Panes","address":"Gran Via de les Corts Catalanes, 1037, Barcelona","officialNeighborhood":null,"maps":"https://www.google.com/maps/search/?api=1&query=Bar%20%C2%B7%20Cafeteria%20Panes%20Gran%20Via%20de%20les%20Corts%20Catalanes%2C%201037%20Barcelona","access":"candidateAccess","interior":"candidateInterior","conditions":"unknownConditions","source":"candidateSource"}
  ],
  translations: {
    ca: {
      candidateAccess: "Segons l’experiència personal amb la cadira utilitzada: entrada al local, recorregut i entrada al WC possibles, sense problemes significatius amb les portes. No és una verificació independent ni garanteix l’adequació per a altres cadires o necessitats.",
      candidateInterior: "Aproximació a l’inodor possible segons l’experiència personal amb la cadira utilitzada. Barres de suport i dimensions desconegudes. Les transferències no s’han documentat.",
      candidateSource: "Aportació personal comunicada el 29–30/10/2026. Data exacta de la visita desconeguda.",
      despacitoSource: "Experiència personal: informació inicial comunicada el 20/10/2026; nova visita el 29/10/2026, amb almenys una barra de suport confirmada. La porta estreta i la maniobra difícil continuen sent barreres importants.",
      positiveAccess: 'Segons l’experiència personal: accés al local i recorregut fins a l’inodor sense dificultats durant la visita.',
      positiveInterior: 'Experiència positiva fins a l’inodor amb la cadira utilitzada. Barres de suport i dimensions desconegudes; les transferències no s’han documentat.',
      mucConditions: 'Condicions d’ús desconegudes: no s’ha confirmat si cal consumir, demanar una clau o obtenir permís. L’accés de persones no allotjades a l’hotel o no clientes del restaurant no està confirmat.',
      andreaWarning: 'Maniobra considerable per entrar al WC · potencialment molt justa amb cadira elèctrica',
      andreaAccess: 'Accés al local i interior valorats positivament segons l’experiència personal. Entrar al WC requereix una maniobra considerable, potencialment molt justa amb una cadira elèctrica. No hi ha mesures verificades ni compatibilitat universal confirmada.',
      andreaInterior: 'Aproximació a l’inodor possible segons l’experiència amb la cadira utilitzada. Això no garanteix totes les transferències. Barres de suport i dimensions desconegudes.',
      october25Source: 'Experiència personal comunicada el 25/10/2026. Data exacta de la visita desconeguda.',
      bannerIntro: 'Troba WC accessibles i coneix les barreres abans d’anar-hi.',
      title: 'WC Barcelona · Experiències d’accés', description: "Informació pràctica sobre l’accés i els WC de Barcelona, basada en experiències personals, amb barreres conegudes i dubtes pendents.",
      skip: 'Salta al contingut', languageLabel: 'Idioma', eyebrow: 'BARCELONA · EXPERIÈNCIES PERSONALS', heading: 'Abans d’anar-hi,\nuna mica més d’informació.', intro: "Informació pràctica basada en experiències reals: com entrar, arribar al WC i acostar-se a l’inodor. Amb les barreres conegudes i els dubtes pendents, perquè cada persona pugui valorar si li serveix.",
      noticeTitle: 'Una experiència, no una garantia', notice: 'L’experiència d’una persona no garanteix l’adequació per a tothom ni l’estat actual de l’establiment. Són observacions personals, no una certificació d’accessibilitat. Les dades desconegudes s’indiquen explícitament.',
      suggest: 'Proposa un WC', suggestionNote: 'Les propostes es revisen abans de publicar-se.',
      listHeading: 'Els establiments', count: "{count} fitxes", access: 'Accés', interior: 'Interior i WC', conditions: 'Condicions d’ús', source: 'Font i dates',
      easyAccess: 'Segons l’experiència personal: recorregut fàcil, sense graons ni haver-se d’aixecar de la cadira de rodes.', adaptedInterior: 'Interior valorat com a molt ben adaptat per la persona que el va visitar. Mides i detalls concrets desconeguts.',
      stepWarning: 'Esglaó a l’entrada · cal ajuda', stepAccess: 'Segons l’experiència aportada, cal ajuda per entrar amb cadira de rodes a causa de l’esglaó a l’entrada.', nuriInterior: 'WC reformat, molt espaiós, amb barres i net segons l’experiència aportada. Recorregut interior exacte i mides desconeguts.',
      conditionsText: 'Es va consumir durant la visita. No se sap si era obligatori consumir ni si cal clau o permís per utilitzar el WC.', sourceText: 'Experiència personal. Visita aproximada: estiu de 2026. Informació comunicada: octubre de 2026.', maps: 'Obre a Google Maps', newTab: 's’obre en una pestanya nova', closing: "Les necessitats d’accés són diferents per a cada persona. Distingim entre complir uns criteris d’accessibilitat i ser adequat per a les necessitats concretes d’una persona: no sempre és el mateix. Una experiència amb una cadira no serveix necessàriament per a totes. Acostar-se a l’inodor no garanteix totes les transferències. Si necessites un detall que aquí no consta, confirma’l amb l’establiment abans d’anar-hi.", version: 'v0.3 · Pilot públic', footer: 'Pilot públic · Informació comunicada l’octubre de 2026', credit: 'Desenvolupat per Monferrer Lab', languageChanged: 'Idioma canviat a català.',
      narrowDoorWarning: "Porta del WC molt estreta · entrada i maniobra difícils · altres cadires poden no entrar",
      despacitoAccess: "Rampa d’entrada al bar utilitzada sense problemes. La porta del WC és molt estreta i la maniobra d’entrada va ser difícil: la cadira utilitzada va passar al mil·límetre. L’experiència aportada alerta de possibles dificultats amb altres cadires, manuals o elèctriques. No hi ha amplades verificades ni compatibilitat confirmada segons el tipus de cadira.",
      despacitoInterior: "Un cop dins, lavabo molt espaiós i aproximació a l’inodor molt fàcil amb la cadira utilitzada. Hi ha almenys una barra de suport per agafar-se. Tipus, posició i nombre total de barres desconeguts. Dimensions exactes desconegudes; les transferències no s’han documentat.",
      ovellaAccess: "Experiència personal molt positiva: accés al local i al WC sense dificultats conegudes en aquella visita.",
      ovellaInterior: "Experiència d’ús molt positiva. Les maniobres d’aproximació a l’inodor no s’han documentat per separat. Barres de suport i dimensions desconegudes.",
      beercelonaAccess: "Segons l’experiència personal: accés al local sense dificultats, recorregut fins al WC fàcil i entrada al WC sense problemes.",
      beercelonaInterior: "Aproximació a l’inodor valorada com a perfecta segons l’experiència personal. Barres de suport i dimensions desconegudes.",
      bitacoraAccess: "Accés al local molt fàcil i recorregut fins al WC molt accessible segons l’experiència aportada; no és una certificació.",
      bitacoraInterior: "Experiència molt positiva. L’aproximació concreta a l’inodor no s’ha documentat per separat. Barres de suport i dimensions desconegudes.",
      keyRequired: "Cal demanar la clau del WC",
      keyConditions: "Cal demanar la clau del WC. Consumició obligatòria no confirmada. És una condició d’ús, no una barrera física d’accés.",
      trebolAccess: "Segons l’experiència personal: accés al local i recorregut fins al WC molt fàcils; entrada al WC sense dificultats.",
      trebolInterior: "Lavabo gran i espaiós. Aproximació a l’inodor ideal amb la cadira utilitzada. Barres de suport i dimensions exactes desconegudes.",
      unknownConditions: "Condicions d’ús desconegudes: no s’ha confirmat si cal consumir, demanar una clau o obtenir permís.",
      newSource: "Experiència personal comunicada el 20/10/2026. Data exacta de la visita desconeguda."
    },
    es: {
      candidateAccess: "Según la experiencia personal con la silla utilizada: fue posible entrar al local, llegar y entrar al baño, sin problemas significativos con las puertas. No es una verificación independiente ni garantiza la adecuación para otras sillas o necesidades.",
      candidateInterior: "Aproximación al inodoro posible según la experiencia personal con la silla utilizada. Barras de apoyo y dimensiones desconocidas. Las transferencias no se han documentado.",
      candidateSource: "Aportación personal comunicada el 29–30/10/2026. Fecha exacta de la visita desconocida.",
      despacitoSource: "Experiencia personal: información inicial comunicada el 20/10/2026; nueva visita el 29/10/2026, con al menos una barra de apoyo confirmada. La puerta estrecha y la maniobra difícil siguen siendo barreras importantes.",
      positiveAccess: 'Según la experiencia personal: acceso al local y recorrido hasta el inodoro sin dificultades durante la visita.',
      positiveInterior: 'Experiencia positiva hasta el inodoro con la silla utilizada. Barras de apoyo y dimensiones desconocidas; las transferencias no se han documentado.',
      mucConditions: 'Condiciones de uso desconocidas: no se ha confirmado si es necesario consumir, pedir una llave u obtener permiso. El acceso de personas no alojadas en el hotel o que no sean clientes del restaurante no está confirmado.',
      andreaWarning: 'Maniobra considerable para entrar al baño · potencialmente muy justa con silla eléctrica',
      andreaAccess: 'Acceso al local e interior valorados positivamente según la experiencia personal. Entrar al baño requiere una maniobra considerable, potencialmente muy justa con una silla eléctrica. No hay medidas verificadas ni compatibilidad universal confirmada.',
      andreaInterior: 'Aproximación al inodoro posible según la experiencia con la silla utilizada. Esto no garantiza todas las transferencias. Barras de apoyo y dimensiones desconocidas.',
      october25Source: 'Experiencia personal comunicada el 25/10/2026. Fecha exacta de la visita desconocida.',
      bannerIntro: 'Encuentra WC accesibles y conoce las barreras antes de ir.',
      title: 'WC Barcelona · Experiencias de acceso', description: "Información práctica sobre el acceso y los baños de Barcelona, basada en experiencias personales, con barreras conocidas y dudas pendientes.",
      skip: 'Saltar al contenido', languageLabel: 'Idioma', eyebrow: 'BARCELONA · EXPERIENCIAS PERSONALES', heading: 'Antes de ir,\nun poco más de información.', intro: "Información práctica basada en experiencias reales: cómo entrar, llegar al baño y acercarse al inodoro. Con las barreras conocidas y las dudas pendientes, para que cada persona pueda valorar si le sirve.",
      noticeTitle: 'Una experiencia, no una garantía', notice: 'La experiencia de una persona no garantiza la adecuación para todo el mundo ni el estado actual del establecimiento. Son observaciones personales, no una certificación de accesibilidad. Los datos desconocidos se indican explícitamente.',
      suggest: 'Propón un baño', suggestionNote: 'Las propuestas se revisan antes de publicarse.',
      listHeading: 'Los establecimientos', count: "{count} fichas", access: 'Acceso', interior: 'Interior y aseo', conditions: 'Condiciones de uso', source: 'Fuente y fechas',
      easyAccess: 'Según la experiencia personal: recorrido fácil, sin escalones ni necesidad de levantarse de la silla de ruedas.', adaptedInterior: 'La persona que lo visitó valoró el interior como muy bien adaptado. Medidas y detalles concretos desconocidos.',
      stepWarning: 'Escalón en la entrada · se necesita ayuda', stepAccess: 'Según la experiencia aportada, se necesita ayuda para entrar con silla de ruedas debido al escalón en la entrada.', nuriInterior: 'Aseo reformado, muy espacioso, con barras y limpio según la experiencia aportada. Recorrido interior exacto y medidas desconocidos.',
      conditionsText: 'Se consumió durante la visita. No se sabe si era obligatorio consumir ni si se necesita llave o permiso para utilizar el aseo.', sourceText: 'Experiencia personal. Visita aproximada: verano de 2026. Información comunicada: octubre de 2026.', maps: 'Abrir en Google Maps', newTab: 'se abre en una pestaña nueva', closing: "Las necesidades de acceso son diferentes para cada persona. Distinguimos entre cumplir unos criterios de accesibilidad y ser adecuado para las necesidades concretas de una persona: no siempre es lo mismo. Una experiencia con una silla no sirve necesariamente para todas. Acercarse al inodoro no garantiza todas las transferencias. Si necesitas un detalle que aquí no figura, confírmalo con el establecimiento antes de ir.", version: 'v0.3 · Piloto público', footer: 'Piloto público · Información comunicada en octubre de 2026', credit: 'Desarrollado por Monferrer Lab', languageChanged: 'Idioma cambiado a castellano.',
      narrowDoorWarning: "Puerta del baño muy estrecha · entrada y maniobra difíciles · otras sillas pueden no entrar",
      despacitoAccess: "Rampa de entrada al bar utilizada sin problemas. La puerta del baño es muy estrecha y la maniobra de entrada fue difícil: la silla utilizada pasó al milímetro. La experiencia aportada advierte de posibles dificultades con otras sillas, manuales o eléctricas. No hay anchuras verificadas ni compatibilidad confirmada según el tipo de silla.",
      despacitoInterior: "Una vez dentro, baño muy espacioso y aproximación al inodoro muy fácil con la silla utilizada. Hay al menos una barra de apoyo para agarrarse. Tipo, posición y número total de barras desconocidos. Dimensiones exactas desconocidas; las transferencias no se han documentado.",
      ovellaAccess: "Experiencia personal muy positiva: acceso al local y al baño sin dificultades conocidas durante aquella visita.",
      ovellaInterior: "Experiencia de uso muy positiva. Las maniobras de aproximación al inodoro no se han documentado por separado. Barras de apoyo y dimensiones desconocidas.",
      beercelonaAccess: "Según la experiencia personal: acceso al local sin dificultades, recorrido hasta el baño fácil y entrada al baño sin problemas.",
      beercelonaInterior: "Aproximación al inodoro valorada como perfecta según la experiencia personal. Barras de apoyo y dimensiones desconocidas.",
      bitacoraAccess: "Acceso al local muy fácil y recorrido hasta el baño muy accesible según la experiencia aportada; no es una certificación.",
      bitacoraInterior: "Experiencia muy positiva. La aproximación concreta al inodoro no se ha documentado por separado. Barras de apoyo y dimensiones desconocidas.",
      keyRequired: "Hay que pedir la llave del baño",
      keyConditions: "Hay que pedir la llave del baño. Consumición obligatoria no confirmada. Es una condición de uso, no una barrera física de acceso.",
      trebolAccess: "Según la experiencia personal: acceso al local y recorrido hasta el baño muy fáciles; entrada al baño sin dificultades.",
      trebolInterior: "Baño grande y espacioso. Aproximación al inodoro ideal con la silla utilizada. Barras de apoyo y dimensiones exactas desconocidas.",
      unknownConditions: "Condiciones de uso desconocidas: no se ha confirmado si es necesario consumir, pedir una llave u obtener permiso.",
      newSource: "Experiencia personal comunicada el 20/10/2026. Fecha exacta de la visita desconocida."
    },
    en: {
      candidateAccess: "According to the personal experience with the wheelchair used: entry to the venue, the route to the toilet and entry to the toilet room were possible, with no significant problems with doors. This is not independent verification or a guarantee of suitability for other wheelchairs or needs.",
      candidateInterior: "Approaching the toilet bowl was possible according to the personal experience with the wheelchair used. Grab bars and dimensions are unknown. Transfers have not been documented.",
      candidateSource: "Personal account shared on 29–30 October 2026. The exact visit date is unknown.",
      despacitoSource: "Personal experience: initial information shared on 20 October 2026; a new visit on 29 October 2026 confirmed at least one grab bar. The narrow doorway and difficult manoeuvring remain significant barriers.",
      positiveAccess: 'According to the personal experience: no difficulty entering the venue or reaching the toilet bowl during the visit.',
      positiveInterior: 'A positive experience reaching the toilet bowl with the wheelchair used. Grab bars and dimensions are unknown; transfers have not been documented.',
      mucConditions: 'Conditions of use are unknown: a purchase, key or permission requirement has not been confirmed. Access for people who are not hotel guests or restaurant customers has not been confirmed.',
      andreaWarning: 'Considerable manoeuvring to enter the toilet room · potentially very tight with a powered wheelchair',
      andreaAccess: 'Entry to the venue and the interior were rated positively in the personal experience. Entering the toilet room requires considerable manoeuvring and may be very tight with a powered wheelchair. No measurements have been verified and universal compatibility is unconfirmed.',
      andreaInterior: 'Approaching the toilet bowl was possible in the experience with the wheelchair used. This does not guarantee every transfer. Grab bars and dimensions are unknown.',
      october25Source: 'Personal experience shared on 25 October 2026. The exact visit date is unknown.',
      bannerIntro: 'Find accessible toilets and know the barriers before you go.',
      title: 'WC Barcelona · Access experiences', description: "Practical information about access and toilets in Barcelona, based on personal experiences, with known barriers and unanswered questions.",
      skip: 'Skip to content', languageLabel: 'Language', eyebrow: 'BARCELONA · PERSONAL EXPERIENCES', heading: 'A little more information\nbefore you go.', intro: "Practical information based on real experiences: how to enter, reach the toilet and approach the toilet bowl. Known barriers and unanswered questions help each person decide whether a place meets their needs.",
      noticeTitle: 'One experience, not a guarantee', notice: 'One person’s experience does not guarantee suitability for everyone or the establishment’s current condition. These are personal observations, not an accessibility certification. Unknown details are explicitly identified.',
      suggest: 'Suggest a toilet', suggestionNote: 'Suggestions are reviewed before publication.',
      listHeading: 'The establishments', count: "{count} listings", access: 'Access', interior: 'Interior and toilet', conditions: 'Conditions of use', source: 'Source and dates',
      easyAccess: 'According to the personal experience: an easy route, with no steps and no need to get out of the wheelchair.', adaptedInterior: 'The visitor considered the interior very well adapted. Measurements and specific details are unknown.',
      stepWarning: 'Step at the entrance · assistance needed', stepAccess: 'According to the experience shared, assistance is needed to enter with a wheelchair because of the step at the entrance.', nuriInterior: 'A renovated, very spacious toilet with grab bars, reported as clean during the visit. The exact interior route and measurements are unknown.',
      conditionsText: 'A purchase was made during the visit. It is unknown whether a purchase was required or whether a key or permission is needed to use the toilet.', sourceText: 'Personal experience. Approximate visit: summer 2026. Information shared: October 2026.', maps: 'Open in Google Maps', newTab: 'opens in a new tab', closing: "Access needs differ from person to person. Meeting accessibility criteria and meeting a particular person’s needs are not always the same thing. An experience with one wheelchair does not necessarily apply to others. Being able to approach the toilet does not guarantee every transfer. If you need a detail that is not listed here, confirm it with the establishment before visiting.", version: 'v0.3 · Public pilot', footer: 'Public pilot · Information shared in October 2026', credit: 'Developed by Monferrer Lab', languageChanged: 'Language changed to English.',
      narrowDoorWarning: "Very narrow toilet doorway · difficult entry and manoeuvring · other wheelchairs may not fit",
      despacitoAccess: "The ramp into the bar was used without problems. The toilet doorway is very narrow and entry required difficult manoeuvring: the wheelchair used only just fitted. The experience shared raises concerns about other wheelchairs, whether manual or powered. No doorway widths have been verified and compatibility with any wheelchair type is unconfirmed.",
      despacitoInterior: "Once inside, the toilet room was very spacious and approaching the toilet was very easy with the wheelchair used. There is at least one grab bar to hold onto. Its type, position and the total number of bars are unknown. Exact dimensions are unknown; transfers have not been documented.",
      ovellaAccess: "A very positive personal experience: no known difficulties entering the venue or reaching the toilet during that visit.",
      ovellaInterior: "A very positive experience using the toilet. Manoeuvres to approach the toilet have not been documented separately. Grab bars and dimensions are unknown.",
      beercelonaAccess: "According to the personal experience: no difficulty entering the venue, an easy route to the toilet and no problems entering the toilet room.",
      beercelonaInterior: "Approaching the toilet was described as perfect in the personal experience shared. Grab bars and dimensions are unknown.",
      bitacoraAccess: "Very easy entry to the venue and a very accessible route to the toilet according to the experience shared; this is not a certification.",
      bitacoraInterior: "A very positive experience. The specific approach to the toilet has not been documented separately. Grab bars and dimensions are unknown.",
      keyRequired: "Ask for the toilet key",
      keyConditions: "You need to ask for the toilet key. A purchase requirement has not been confirmed. This is a condition of use, not a physical access barrier.",
      trebolAccess: "According to the personal experience: very easy entry to the venue and route to the toilet; no difficulty entering the toilet room.",
      trebolInterior: "A large, spacious toilet room. An ideal approach to the toilet with the wheelchair used. Grab bars and exact dimensions are unknown.",
      unknownConditions: "Conditions of use are unknown: a purchase, key or permission requirement has not been confirmed.",
      newSource: "Personal experience shared on 20 October 2026. The exact visit date is unknown."
    }
  }
};

// Compact presentation is separate from the complete original information above.
window.WC_BARCELONA.compact = {
  "preparedOn": "2026-10-31",
  "note": "Visible summaries and normalized addresses. The original places and translations above retain complete observations, conditions, visit dates, contribution dates and source text unchanged. Summary warnings use the original warning keys.",
  "summaries": {
    "nou-somni": {
      "access": "cEasyPartial",
      "bars": "cUnknown",
      "interior": "cAdapted",
      "usageNote": "cConsumed"
    },
    "blau": {
      "access": "cEasyPartial",
      "bars": "cUnknown",
      "interior": "cAdapted",
      "usageNote": "cConsumed"
    },
    "bar-nuri": {
      "access": "cStep",
      "bars": "cYes",
      "interior": "cNuri",
      "usageNote": "cConsumed"
    },
    "despacito": {
      "access": "cDespacitoAccess",
      "bars": "cAtLeastOne",
      "interior": "cDespacitoInterior"
    },
    "ovella-negra-marina": {
      "access": "cWcAccess",
      "bars": "cUnknown",
      "interior": "cApproachUnknown"
    },
    "beercelona-bar": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cEasyApproach"
    },
    "bitacora-poblenou": {
      "access": "cRouteToWc",
      "bars": "cUnknown",
      "interior": "cApproachUnknown"
    },
    "bar-trebol": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cSpacious"
    },
    "sala-beckett": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "la-higuera": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "restaurant-muc": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach",
      "usageNote": "cHotelUse"
    },
    "bar-andrea": {
      "access": "cAndreaAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "minyam-poblenou": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "balius-poblenou": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "la-yaya-del-poblenou": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "chocolat-box": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "4uatre-lounge": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "ramen-house": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "soco-poblenou": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "bar-bilbao": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    },
    "bar-cafeteria-panes": {
      "access": "cClearAccess",
      "bars": "cUnknown",
      "interior": "cPossibleApproach"
    }
  },
  "addresses": {
    "nou-somni": {
      "street": "Carrer d’Àvila, 164",
      "neighborhood": "el Parc i la Llacuna del Poblenou",
      "postalCode": "08018",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A29206%2C%22numpost%22%3A%5B164%5D%7D"
      ],
      "pending": []
    },
    "blau": {
      "street": "Carrer de Bac de Roda, 126–127",
      "neighborhood": "Provençals del Poblenou",
      "postalCode": null,
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A30409%2C%22numpost%22%3A%5B126%2C127%5D%7D"
      ],
      "pending": [
        "Confirmar el portal real de Blau: el 126 té 08020 i el 127 té 08018. Es conserva 126–127; cap codi postal únic publicat."
      ]
    },
    "bar-nuri": {
      "street": "Rambla del Poblenou, 34",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A346800%2C%22numpost%22%3A%5B34%5D%7D"
      ],
      "pending": []
    },
    "despacito": {
      "street": "Carrer de Lope de Vega, 94",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A180401%2C%22numpost%22%3A%5B94%5D%7D"
      ],
      "pending": []
    },
    "ovella-negra-marina": {
      "street": "Carrer de Zamora, 78",
      "neighborhood": "el Parc i la Llacuna del Poblenou",
      "postalCode": "08018",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A369204%2C%22numpost%22%3A%5B78%5D%7D"
      ],
      "pending": []
    },
    "beercelona-bar": {
      "street": "Rambla del Poblenou, 118",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A346800%2C%22numpost%22%3A%5B118%5D%7D"
      ],
      "pending": []
    },
    "bitacora-poblenou": {
      "street": "Plaça de la Unió, 24",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A349003%2C%22numpost%22%3A%5B24%5D%7D"
      ],
      "pending": []
    },
    "bar-trebol": {
      "street": "Carrer de Pujades, 225",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A270901%2C%22numpost%22%3A%5B225%5D%7D"
      ],
      "pending": []
    },
    "sala-beckett": {
      "street": "Carrer de Pere IV, 228–232",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A249304%2C%22numpost%22%3A%5B228%2C230%2C232%5D%7D"
      ],
      "pending": []
    },
    "la-higuera": {
      "street": "Carrer de Sicília, 101",
      "neighborhood": "el Fort Pienc",
      "postalCode": "08013",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A325005%2C%22numpost%22%3A%5B101%5D%7D"
      ],
      "pending": []
    },
    "restaurant-muc": {
      "street": "Carrer de Badajoz, 148–154",
      "neighborhood": "el Parc i la Llacuna del Poblenou",
      "postalCode": "08018",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A30500%2C%22numpost%22%3A%5B148%2C150%2C152%2C154%5D%7D"
      ],
      "pending": []
    },
    "bar-andrea": {
      "street": "Carrer de la Ciutat de Granada, 163",
      "neighborhood": "el Parc i la Llacuna del Poblenou",
      "postalCode": "08018",
      "verifiedOn": "2026-10-26",
      "sources": [
        "https://opendata-ajuntament.barcelona.cat/data/api/3/action/datastore_search?resource_id=50c9b17f-d297-4668-bad4-e1c217580747&filters=%7B%22codi_carrer%22%3A148704%2C%22numpost%22%3A%5B163%5D%7D"
      ],
      "pending": []
    },
    "minyam-poblenou": {
      "street": "Carrer de Pujades, 187",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Minyam%20Poblenou%20Carrer%20de%20Pujades%2C%20187%20Barcelona",
        "https://www.paginasamarillas.es/f/barcelona/minyam_224699868_000000001.html"
      ],
      "pending": []
    },
    "balius-poblenou": {
      "street": "Carrer de Pujades, 196",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Balius%20Poblenou%20Carrer%20de%20Pujades%2C%20196%20Barcelona",
        "https://www.timeout.es/barcelona/es/bares-y-pubs/balius"
      ],
      "pending": []
    },
    "la-yaya-del-poblenou": {
      "street": "Rambla del Poblenou, 142",
      "neighborhood": null,
      "postalCode": "08018",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=La%20Yaya%20del%20Poblenou%20Rambla%20del%20Poblenou%2C%20142%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    },
    "chocolat-box": {
      "street": "Rambla del Poblenou, 80",
      "neighborhood": null,
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Chocolat%20Box%20Rambla%20del%20Poblenou%2C%2080%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    },
    "4uatre-lounge": {
      "street": "Rambla del Poblenou, 63",
      "neighborhood": null,
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=4uatre%20Lounge%20Rambla%20del%20Poblenou%2C%2063%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    },
    "ramen-house": {
      "street": "Rambla del Poblenou, 65",
      "neighborhood": null,
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Ramen%20House%20Rambla%20del%20Poblenou%2C%2065%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    },
    "soco-poblenou": {
      "street": "Carrer de Bilbao, 31",
      "neighborhood": "el Poblenou",
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Soco%20Poblenou%20Carrer%20de%20Bilbao%2C%2031%20Barcelona",
        "https://guia.barcelona.cat/en/detall/restaurant-soco-poblenou_99400604338.html"
      ],
      "pending": []
    },
    "bar-bilbao": {
      "street": "Carrer de Bilbao, 18",
      "neighborhood": null,
      "postalCode": "08005",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Bar%20Bilbao%20Carrer%20de%20Bilbao%2C%2018%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    },
    "bar-cafeteria-panes": {
      "street": "Gran Via de les Corts Catalanes, 1037",
      "neighborhood": null,
      "postalCode": "08020",
      "verifiedOn": "2026-10-31",
      "sources": [
        "https://www.google.com/maps/search/?api=1&query=Bar%20%C2%B7%20Cafeteria%20Panes%20Gran%20Via%20de%20les%20Corts%20Catalanes%2C%201037%20Barcelona"
      ],
      "pending": [
        "Administrative neighborhood not verified. Municipal address API unavailable (502/timeout); district is not used as neighborhood."
      ]
    }
  },
  "translations": {
    "ca": {
      "compactAccess": "Accés carrer → inodor",
      "bars": "Barres",
      "notice": "Experiències personals amb una cadira concreta, no una certificació ni una garantia per a tothom. Les condicions d’ús no indicades (clau, consumició o permís) són desconegudes.",
      "cUnknown": "Desconegudes.",
      "cYes": "Sí.",
      "cAtLeastOne": "Sí, almenys una.",
      "cNo": "No.",
      "cEasyPartial": "Recorregut fàcil, sense graons; aproximació no detallada.",
      "cAdapted": "Molt ben adaptat segons la visita; detalls no documentats.",
      "cStep": "Cal ajuda a l’esglaó; recorregut interior no detallat.",
      "cNuri": "Reformat, molt espaiós i net.",
      "cDespacitoAccess": "Rampa fàcil; porta del WC amb dificultats.",
      "cDespacitoInterior": "Espaiós; aproximació fàcil un cop dins.",
      "cWcAccess": "Accés al local i al WC sense dificultats observades.",
      "cApproachUnknown": "Aproximació a l’inodor no documentada.",
      "cClearAccess": "Sense dificultats observades.",
      "cEasyApproach": "Aproximació a l’inodor fàcil.",
      "cRouteToWc": "Entrada i recorregut fins al WC fàcils.",
      "cSpacious": "Gran i espaiós; aproximació fàcil.",
      "cPossibleApproach": "Aproximació a l’inodor possible.",
      "cAndreaAccess": "Entrada al WC amb maniobra considerable.",
      "cConsumed": "Es va consumir durant la visita; obligatorietat desconeguda.",
      "cHotelUse": "Accés de persones no allotjades o no clientes sense confirmar."
    },
    "es": {
      "compactAccess": "Acceso calle → inodoro",
      "bars": "Barras",
      "notice": "Experiencias personales con una silla concreta, no una certificación ni una garantía para todo el mundo. Las condiciones de uso no indicadas (llave, consumición o permiso) son desconocidas.",
      "cUnknown": "Desconocidas.",
      "cYes": "Sí.",
      "cAtLeastOne": "Sí, al menos una.",
      "cNo": "No.",
      "cEasyPartial": "Recorrido fácil, sin escalones; aproximación no detallada.",
      "cAdapted": "Muy bien adaptado según la visita; detalles no documentados.",
      "cStep": "Se necesita ayuda en el escalón; recorrido interior no detallado.",
      "cNuri": "Reformado, muy espacioso y limpio.",
      "cDespacitoAccess": "Rampa fácil; puerta del baño con dificultades.",
      "cDespacitoInterior": "Espacioso; aproximación fácil una vez dentro.",
      "cWcAccess": "Acceso al local y al baño sin dificultades observadas.",
      "cApproachUnknown": "Aproximación al inodoro no documentada.",
      "cClearAccess": "Sin dificultades observadas.",
      "cEasyApproach": "Aproximación al inodoro fácil.",
      "cRouteToWc": "Entrada y recorrido hasta el baño fáciles.",
      "cSpacious": "Grande y espacioso; aproximación fácil.",
      "cPossibleApproach": "Aproximación al inodoro posible.",
      "cAndreaAccess": "Entrada al baño con maniobra considerable.",
      "cConsumed": "Se consumió durante la visita; obligatoriedad desconocida.",
      "cHotelUse": "Acceso de personas no alojadas o no clientes sin confirmar."
    },
    "en": {
      "compactAccess": "Street → toilet bowl access",
      "bars": "Grab bars",
      "notice": "Personal experiences with a particular wheelchair, not a certification or a guarantee for everyone. Unstated conditions of use (key, purchase or permission) are unknown.",
      "cUnknown": "Unknown.",
      "cYes": "Yes.",
      "cAtLeastOne": "Yes, at least one.",
      "cNo": "No.",
      "cEasyPartial": "Easy route, no steps; approach not detailed.",
      "cAdapted": "Very well adapted according to the visit; details not documented.",
      "cStep": "Help needed at the step; interior route not detailed.",
      "cNuri": "Renovated, very spacious and clean.",
      "cDespacitoAccess": "Easy ramp; difficulty at the toilet doorway.",
      "cDespacitoInterior": "Spacious; easy approach once inside.",
      "cWcAccess": "No observed difficulty entering the venue or accessing the toilet room.",
      "cApproachUnknown": "Approach to the toilet bowl not documented.",
      "cClearAccess": "No difficulties observed.",
      "cEasyApproach": "Easy approach to the toilet bowl.",
      "cRouteToWc": "Easy entry and route to the toilet room.",
      "cSpacious": "Large and spacious; easy approach.",
      "cPossibleApproach": "Approaching the toilet bowl was possible.",
      "cAndreaAccess": "Considerable manoeuvring to enter the toilet room.",
      "cConsumed": "A purchase was made during the visit; requirement unknown.",
      "cHotelUse": "Access for non-guests or non-customers is unconfirmed."
    }
  }
};
