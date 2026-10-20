/* Single source for establishment facts and all translated information.
   officialNeighborhood stays null until an official neighborhood is supplied. */
window.WC_BARCELONA = {
  places: [
    { id: 'nou-somni', name: 'Nou Somni', address: "carrer d’Àvila 164, Barcelona", officialNeighborhood: null, maps: 'https://maps.app.goo.gl/rZBiNVGQBseikL2VA', access: 'easyAccess', interior: 'adaptedInterior', warning: false },
    { id: 'blau', name: 'BLAU', address: 'carrer de Bac de Roda 126–127, Barcelona', officialNeighborhood: null, maps: 'https://maps.app.goo.gl/fawPUnv1DJmWFVbv6', access: 'easyAccess', interior: 'adaptedInterior', warning: false },
    { id: 'bar-nuri', name: 'Bar Nuri', address: 'Rambla del Poblenou 34, Barcelona', officialNeighborhood: null, maps: 'https://www.google.com/maps/search/?api=1&query=Bar%20Nuri%20Rambla%20del%20Poblenou%2034%20Barcelona', access: 'stepAccess', interior: 'nuriInterior', warning: true }
  ],
  translations: {
    ca: {
      title: 'WC Barcelona · Experiències d’accés', description: 'Observacions personals sobre l’accés i els WC de tres establiments de Barcelona.',
      skip: 'Salta al contingut', languageLabel: 'Idioma', eyebrow: 'BARCELONA · EXPERIÈNCIES PERSONALS', heading: 'Abans d’anar-hi,\nuna mica més d’informació.', intro: 'Tres establiments, explicats a partir d’una visita personal. Informació sobre l’accés i el WC per ajudar-te a preparar la visita.',
      noticeTitle: 'Una experiència, no una garantia', notice: 'L’experiència d’una persona no garanteix l’adequació per a tothom ni l’estat actual de l’establiment. Són observacions personals, no una certificació d’accessibilitat. Les dades desconegudes s’indiquen explícitament.',
      suggest: 'Proposa un WC', suggestionNote: 'Les propostes es revisen abans de publicar-se.',
      listHeading: 'Els establiments', count: '3 fitxes', access: 'Accés', interior: 'Interior i WC', conditions: 'Condicions d’ús', source: 'Font i dates',
      easyAccess: 'Segons l’experiència personal: recorregut fàcil, sense graons ni haver-se d’aixecar de la cadira de rodes.', adaptedInterior: 'Interior valorat com a molt ben adaptat per la persona que el va visitar. Mides i detalls concrets desconeguts.',
      stepWarning: 'Esglaó a l’entrada · cal ajuda', stepAccess: 'Segons l’experiència aportada, cal ajuda per entrar amb cadira de rodes a causa de l’esglaó a l’entrada.', nuriInterior: 'WC reformat, molt espaiós, amb barres i net segons l’experiència aportada. Recorregut interior exacte i mides desconeguts.',
      conditionsText: 'Es va consumir durant la visita. No se sap si era obligatori consumir ni si cal clau o permís per utilitzar el WC.', sourceText: 'Experiència personal. Visita aproximada: estiu de 2026. Informació comunicada: octubre de 2026.', maps: 'Obre a Google Maps', newTab: 's’obre en una pestanya nova', closing: 'Les necessitats d’accés són diferents per a cada persona. Si necessites un detall que aquí no consta, confirma’l amb l’establiment abans d’anar-hi.', version: 'v0.2 · Pilot públic', footer: 'Pilot públic · Informació comunicada l’octubre de 2026', credit: 'Desenvolupat per Monferrer Lab', languageChanged: 'Idioma canviat a català.'
    },
    es: {
      title: 'WC Barcelona · Experiencias de acceso', description: 'Observaciones personales sobre el acceso y los aseos de tres establecimientos de Barcelona.',
      skip: 'Saltar al contenido', languageLabel: 'Idioma', eyebrow: 'BARCELONA · EXPERIENCIAS PERSONALES', heading: 'Antes de ir,\nun poco más de información.', intro: 'Tres establecimientos, descritos a partir de una visita personal. Información sobre el acceso y el aseo para ayudarte a preparar la visita.',
      noticeTitle: 'Una experiencia, no una garantía', notice: 'La experiencia de una persona no garantiza la adecuación para todo el mundo ni el estado actual del establecimiento. Son observaciones personales, no una certificación de accesibilidad. Los datos desconocidos se indican explícitamente.',
      suggest: 'Propón un baño', suggestionNote: 'Las propuestas se revisan antes de publicarse.',
      listHeading: 'Los establecimientos', count: '3 fichas', access: 'Acceso', interior: 'Interior y aseo', conditions: 'Condiciones de uso', source: 'Fuente y fechas',
      easyAccess: 'Según la experiencia personal: recorrido fácil, sin escalones ni necesidad de levantarse de la silla de ruedas.', adaptedInterior: 'La persona que lo visitó valoró el interior como muy bien adaptado. Medidas y detalles concretos desconocidos.',
      stepWarning: 'Escalón en la entrada · se necesita ayuda', stepAccess: 'Según la experiencia aportada, se necesita ayuda para entrar con silla de ruedas debido al escalón en la entrada.', nuriInterior: 'Aseo reformado, muy espacioso, con barras y limpio según la experiencia aportada. Recorrido interior exacto y medidas desconocidos.',
      conditionsText: 'Se consumió durante la visita. No se sabe si era obligatorio consumir ni si se necesita llave o permiso para utilizar el aseo.', sourceText: 'Experiencia personal. Visita aproximada: verano de 2026. Información comunicada: octubre de 2026.', maps: 'Abrir en Google Maps', newTab: 'se abre en una pestaña nueva', closing: 'Las necesidades de acceso son diferentes para cada persona. Si necesitas un detalle que aquí no figura, confírmalo con el establecimiento antes de ir.', version: 'v0.2 · Piloto público', footer: 'Piloto público · Información comunicada en octubre de 2026', credit: 'Desarrollado por Monferrer Lab', languageChanged: 'Idioma cambiado a castellano.'
    },
    en: {
      title: 'WC Barcelona · Access experiences', description: 'Personal observations about access and toilets at three establishments in Barcelona.',
      skip: 'Skip to content', languageLabel: 'Language', eyebrow: 'BARCELONA · PERSONAL EXPERIENCES', heading: 'A little more information\nbefore you go.', intro: 'Three establishments, described from a personal visit. Information about access and toilets to help you prepare for your visit.',
      noticeTitle: 'One experience, not a guarantee', notice: 'One person’s experience does not guarantee suitability for everyone or the establishment’s current condition. These are personal observations, not an accessibility certification. Unknown details are explicitly identified.',
      suggest: 'Suggest a toilet', suggestionNote: 'Suggestions are reviewed before publication.',
      listHeading: 'The establishments', count: '3 listings', access: 'Access', interior: 'Interior and toilet', conditions: 'Conditions of use', source: 'Source and dates',
      easyAccess: 'According to the personal experience: an easy route, with no steps and no need to get out of the wheelchair.', adaptedInterior: 'The visitor considered the interior very well adapted. Measurements and specific details are unknown.',
      stepWarning: 'Step at the entrance · assistance needed', stepAccess: 'According to the experience shared, assistance is needed to enter with a wheelchair because of the step at the entrance.', nuriInterior: 'A renovated, very spacious toilet with grab bars, reported as clean during the visit. The exact interior route and measurements are unknown.',
      conditionsText: 'A purchase was made during the visit. It is unknown whether a purchase was required or whether a key or permission is needed to use the toilet.', sourceText: 'Personal experience. Approximate visit: summer 2026. Information shared: October 2026.', maps: 'Open in Google Maps', newTab: 'opens in a new tab', closing: 'Access needs differ from person to person. If you need a detail that is not listed here, confirm it with the establishment before visiting.', version: 'v0.2 · Public pilot', footer: 'Public pilot · Information shared in October 2026', credit: 'Developed by Monferrer Lab', languageChanged: 'Language changed to English.'
    }
  }
};
