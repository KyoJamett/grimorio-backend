const formatos = {
  furia: {
    name: "Bloque Furia",
    slug: "bloque-furia",
    intro:
      "Bloque furia abarca las primeras 3 ediciones de nueva era con sus respectivas extensiones.",
    details:
      "El formato posee un ritmo de batalla bastante ameno, con turnos relativamente tranquilos y una base de anulaciones acotada. Recomendado para jugadores novatos.",
    ediciones: [
      { ed: "furia", edImg: "furia" },
      {
        ed: "furia-extension",
        edImg: "furiaext",
      },
      { ed: "sumeria", edImg: "sumeria" },
      { ed: "rebelion", edImg: "rebelion" },
      { ed: "asgard", edImg: "asgard" },
      { ed: "midgard", edImg: "midgard" },
      /*{ ed: "camelot", edImg: "camelot" },
      { ed: "templarios", edImg: "templarios" },*/
    ],
    folder: "furia",
  },

  escuelas: {
    name: "Escuelas Elementales",
    slug: "escuelas-elementales",
    intro:
      "Escuelas Elementales es un formato de nueva era, compuesto inicialmente por las ediciones Dominio, Contraataque, Águila Imperial, Steampunk, Axis Mundi, Hijos del Sol y Legado Gótico.",
    details:
      "El formato al ser actualmente sólo de comunidad, ha sido sometido a cambios, siendo el más aceptado por las comunidades la inclusión de las ediciones Bushido y Sol Naciente, a fin de dar algo de soporte extra a ciertas razas débiles. Adicionalmente se creó una edición recopilatoria también llamada Escuelas Elementales.",

    ediciones: [
      { ed: "bushido", edImg: "bushido" },
      {
        ed: "sol-naciente",
        edImg: "sol_naciente",
      },
      { ed: "dominio", edImg: "dominio" },
      {
        ed: "contraataque",
        edImg: "contraataque",
      },
      {
        ed: "aguila-imperial",
        edImg: "aguila_imperial",
      },
      { ed: "steampunk", edImg: "steampunk" },
      { ed: "axis-mundi", edImg: "axis-mundi" },
      {
        ed: "hijos-del-sol",
        edImg: "hijos_del_sol",
      },
      {
        ed: "legado-gotico",
        edImg: "legado-gotico",
      },
      {
        ed: "escuelas-elementales",
        edImg: "escuelas_elementales",
      },
    ],
    folder: "ee",
  },

  civilizaciones: {
    name: "Civilizaciones",
    slug: "civilizaciones",
    intro:
      "Civilizaciones es un formato de nueva era que comprende las ediciones de Kemet, Dharma, Olimpia, Calavera y la edición recopilatoria Arsenal.",
    details:
      "En la línea de tiempo de nueva era, corresponden a las ediciones posteriores al formato Escuelas Elementales hasta la llegada de la edicion Kilimanjaro, donde aumentó considerablemente la escala de poder de las cartas. Adicionalmente aquí se utilizan las cartas SP (llamadas set paralelo por la comunidad) que salieron en diversos productos durante el formato imperio de la época de estas ediciones. Dichas cartas se pueden hallar dentro de las ediciones del formato.",
    ediciones: [
      { ed: "kemet", edImg: "kemet" },
      { ed: "dharma", edImg: "dharma" },
      { ed: "olimpia", edImg: "olimpia" },
      { ed: "calavera", edImg: "calavera" },
      { ed: "arsenal", edImg: "logo_arsenal" },
    ],
    folder: "civi",
  },

  expediciones: {
    name: "Expediciones",
    slug: "expediciones",
    intro:
      "Expediciones abarca las ediciones desde Kilimanjaro hasta Conjuros y en la linea de tiempo de nueva era, corresponde a las ediciones posteriores al formato Civilizaciones.",
    details:
      "El formato posee un ritmo de juego, escala de poder y cantidad de habilidades por turno notoriamente más elevadas que en formatos previos.",

    ediciones: [
      { ed: "kilimanjaro", edImg: "kilimanjaro" },
      { ed: "arsenal", edImg: "logo_arsenal" },
      {
        ed: "terrores-nocturnos",
        edImg: "terrores_nocturnos",
      },
      {
        ed: "invasion-oscura",
        edImg: "invasion_oscura",
      },
      {
        ed: "dinastia-del-dragon",
        edImg: "dinastialogo",
      },
      { ed: "keltoi", edImg: "keltoi" },
      {
        ed: "cuentos-de-ultratumba",
        edImg: "cuentos-de-ultratumba",
      },
      {
        ed: "tierra-austral",
        edImg: "tierra-austral",
      },
      { ed: "conjuros", edImg: "conjuros" },
    ],
    folder: "expe",
  },

  pe: {
    name: "Primera Era",
    slug: "primera-era",
    intro:
      "Este es el formato compuesto por las primeras ediciones de Mitos y Leyendas, hasta la llegada de Espada Sagrada, donde comenzaría la llamada Segunda Era.",
    details:
      "El formato abarca las ediciones desde El Reto hasta Espíritu de Dragon. Ediciones lanzadas entre junio del año 2000 hasta julio del año 2002.",
    ediciones: [
      { ed: "el-reto", edImg: "el_reto" },
      { ed: "mundo-gotico", edImg: "logos/mundo-gotico.png" },
      { ed: "ira-del-nahual", edImg: "logos/la-ira-del-nahual.png" },
      { ed: "ragnarok", edImg: "logos/ragnarok.png" },
      { ed: "cofradia", edImg: "logos/la-cofradia.png" },
      { ed: "espiritu-del-dragon", edImg: "logos/espiritu-del-dragon.png" },
    ],
    folder: "pe",
  },

  pb: {
    name: "Primer Bloque",
    slug: "primer-bloque",
    intro:
      "Primer bloque es un formato perteneciente a la segunda Era de la época Salo y abarca las primeras cuatro ediciones de dicha era, junto a sus respectivas extensiones.",
    details:
      "El formato clásico se juega en base al DAR de Abril del 2005, donde se aclararon varias dudas respecto a ciertas cartas con dudosa redacción. Aún así, hay varios consensos de comunidad por lo que se recomienda consultar a jugadores experimentados de ser necesario.",
    ediciones: [
      {
        ed: "espada-sagrada",
        edImg: "espada_sagrada",
      },
      { ed: "cruzadas", edImg: "cruzadas" },
      { ed: "helenica", edImg: "helenica" },
      { ed: "imperio", edImg: "imperio" },
      {
        ed: "hijos-de-daana",
        edImg: "hijos_de_daana",
      },
      {
        ed: "tierras-altas",
        edImg: "tierras_altas",
      },
      {
        ed: "dominios-de-ra",
        edImg: "dominios_de_ra",
      },
      { ed: "encrucijada", edImg: "encrucijada" },
    ],
    folder: "pb",
  },
};

// Definición de documentos agrupados en categorías
const documentos = [
  {
    categoria: "ee",
    documentos: [
      {
        id: "1",
        name: "Banlist El Reino de los Duelos",
        file: "ee_formato_reino.pdf",
      },
    ],
  },
  {
    categoria: "civi",
    documentos: [
      { id: "1", name: "Banlist Julio 2024", file: "civi_banlist_2024.pdf" },
      {
        id: "2",
        name: "Banlist Enero 2022",
        file: "civi_banlist_enero_2022.pdf",
      },
    ],
  },
  {
    categoria: "expe",
    documentos: [
      {
        id: "2",
        name: "Banlist Agosto 2024",
        file: "expe_banlist_agosto_2024.pdf",
      },
      {
        id: "1",
        name: "Banlist Julio 2023",
        file: "expe_banlist_julio_2023.pdf",
      },
    ],
  },
  {
    categoria: "pb",
    documentos: [
      { id: "1", name: "Dar Abril 2005", file: "dar_abril_2005.pdf" },
    ],
  },
];

export {
    formatos,
    documentos,
};
