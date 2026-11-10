export default {
  global: {
    Name: 'Evaluación y manejo ambiental de ecosistemas',
    Description:
      'El diagnóstico, monitoreo y evaluación de la calidad ambiental del paisaje permiten identificar alteraciones en los ecosistemas mediante indicadores de degradación, parámetros ambientales y análisis de cambios territoriales. Estos procesos orientan la formulación de planes de manejo, estrategias de restauración ecológica y acciones de participación comunitaria para conservar la biodiversidad y promover la gestión ambiental sostenible.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Diagnóstico, monitoreo y evaluación de la calidad ambiental del paisaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Indicadores de degradación	',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Parámetros de calidad ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Dinámicas temporales del paisaje	',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión de información analítica',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Instrumentos de planificación, intervención ecosistémica y educación ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Plan de Manejo Ambiental (PMA)	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias de intervención ecosistémica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Política ambiental',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bioindicador',
      significado:
        'organismo cuya presencia o respuesta permite evaluar las condiciones ambientales de un ecosistema.',
    },
    {
      termino: 'Capacidad de carga biológica',
      significado:
        'límite de población o uso que un ecosistema puede sostener sin degradarse.',
    },
    {
      termino: 'Cartografía multitemporal',
      significado:
        'comparación de información cartográfica de diferentes fechas para identificar cambios territoriales.',
    },
    {
      termino: 'Conductividad eléctrica',
      significado:
        'capacidad de una solución para conducir corriente eléctrica mediante los iones disueltos.',
    },
    {
      termino: 'Degradación ecosistémica',
      significado:
        'deterioro de las condiciones naturales y de la capacidad funcional de un ecosistema.',
    },
    {
      termino: 'Diálogo de saberes',
      significado:
        'integración equitativa de conocimientos técnicos, científicos, locales y ancestrales.',
    },
    {
      termino: 'Efecto de borde',
      significado:
        'alteración de condiciones ambientales en los límites de un hábitat fragmentado.',
    },
    {
      termino: 'Especie exótica',
      significado:
        'organismo introducido fuera de su área natural de distribución.',
    },
    {
      termino: 'Fragmentación de hábitats',
      significado:
        'división de ecosistemas continuos en áreas más pequeñas y aisladas.',
    },
    {
      termino: 'Índice EPT',
      significado:
        'indicador biológico basado en organismos de los órdenes Ephemeroptera, Plecoptera y Trichoptera.',
    },
    {
      termino: 'Matriz de Leopold',
      significado:
        'herramienta que relaciona actividades de un proyecto con factores ambientales potencialmente afectados.',
    },
    {
      termino: 'POMCA',
      significado:
        'instrumento de ordenación y manejo que orienta el uso sostenible de los recursos de una cuenca.',
    },
    {
      termino: 'Restauración activa',
      significado:
        'recuperación de ecosistemas mediante intervenciones directas, como siembra de especies nativas.',
    },
    {
      termino: 'Restauración pasiva',
      significado:
        'recuperación de ecosistemas mediante eliminación de factores de degradación y regeneración natural.',
    },
    {
      termino: 'Tasa de deforestación',
      significado:
        'indicador que cuantifica la pérdida de superficie forestal durante un periodo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acunzo, M., Pafumi, M., Torres, C., y Tirol, M. S. (2014). Communication for rural development sourcebook. Food and Agriculture Organization of the United Nations.',
      link: 'https://www.fao.org/family-farming/detail/en/c/449432/',
    },
    {
      referencia:
        'Agricultural Research Service. (s. f.). RUSLE. U.S. Department of Agriculture.',
      link: 'https://www.ars.usda.gov/midwest-area/west-lafayette-in/national-soil-erosion-research/docs/rusle/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993, 22 de diciembre). Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones.',
      link: 'https://www.secretariasenado.gov.co/senado/basedoc/ley_0099_1993.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1994, 8 de febrero). Ley 115 de 1994. Por la cual se expide la ley general de educación.',
      link: 'https://www.secretariasenado.gov.co/senado/basedoc/ley_0115_1994.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1997, 18 de julio). Ley 388 de 1997. Por la cual se modifica la Ley 9.ª de 1989 y la Ley 3.ª de 1991 y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012, 5 de julio). Ley 1549 de 2012. Por medio de la cual se fortalece la institucionalización de la Política Nacional de Educación Ambiental y su incorporación efectiva en el desarrollo territorial.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48262',
    },
    {
      referencia:
        'Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare (Cornare). (2025). Actualización del plan de manejo del Distrito Regional de Manejo Integrado El Capiro.',
      link: 'https://www.cornare.gov.co/Aviso/participacion-ciudadana/Actualizacion_PM_DRMI_Capiro.pdf',
    },
    {
      referencia:
        'Correa Quiñones, D. (2020, mayo). Pasos de fauna en infraestructura lineal: Cartilla de referencia para la toma de decisiones. Patrimonio Natural.',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2022/07/18.-Cartilla-pasos-de-fauna-en-infraestructura-lineal.pdf',
    },
    {
      referencia: 'Darwin Core Maintenance Group. (s. f.). Darwin Core.',
      link: 'https://dwc.tdwg.org/',
    },
    {
      referencia:
        'Gómez Giraldo, J. C. (2013). Manual de prácticas de campo y del laboratorio de suelos. Servicio Nacional de Aprendizaje.',
      link: 'https://repositorio.sena.edu.co/handle/11404/2785',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2025, 2 de julio). Instructivo de ensayo: Demanda química de oxígeno por reflujo cerrado y volumetría (SLC-I016, versión 06).',
      link: 'https://www.ideam.gov.co/sites/default/files/mapa-de-procesos/slc-i016_instructivo_de_ensayo_demanda_quimica_de_oxigeno_por_reflujo_cerrado_y_volumetria_0.pdf',
    },
    {
      referencia:
        'Leopold, L. B., Clarke, F. E., Hanshaw, B. B., y Balsley, J. R. (1971). A procedure for evaluating environmental impact (U.S. Geological Survey Circular 645). U.S. Geological Survey.',
      link: 'https://doi.org/10.3133/cir645',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Estructura ecológica en áreas urbanas.',
      link: 'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/estructura-ecologica-en-areas-urbanas/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015, 17 de marzo). Resolución 631 de 2015. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/documento-normativa/resolucion-631-de-2015/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017, 1 de noviembre). Resolución 2254 de 2017. Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/documento-normativa/resolucion-2254-de-2017/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021, 6 de julio). Resolución 699 de 2021. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales de aguas residuales domésticas tratadas al suelo, y se dictan otras disposiciones.',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-0699-de-2021.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2023, 20 de noviembre). Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA). Portal SIRH.',
      link: 'https://portalsirh.minambiente.gov.co/planes-de-ordenacion-y-manejo-de-cuencas-hidrograficas-pomca/',
    },
    {
      referencia:
        'Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007, 22 de junio). Resolución 2115 de 2007. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.',
      link: 'https://normas.cra.gov.co/gestor/docs/resolucion_minproteccion_2115_2007.htm',
    },
    {
      referencia:
        'Morales, P. A., Cardona, D., Álvarez, C. M., y Corredor, D. R. (2020). Estructura ecológica principal para el ordenamiento territorial. En L. A. Moreno y G. I. Andrade (Eds.), Biodiversidad 2019: Estado y tendencias de la biodiversidad continental de Colombia. Instituto de Investigación de Recursos Biológicos Alexander von Humboldt.',
      link: 'https://reporte.humboldt.org.co/biodiversidad/2019/cap4/404/',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994, 3 de agosto). Decreto 1743 de 1994. Por el cual se instituye el Proyecto de Educación Ambiental para todos los niveles de educación formal, se fijan criterios para la promoción de la educación ambiental no formal e informal y se establecen los mecanismos de coordinación entre el Ministerio de Educación Nacional y el Ministerio del Medio Ambiente.',
      link: 'https://www.mineducacion.gov.co/normatividad/1753/w3-article-104167.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      link: 'https://www.minambiente.gov.co/documento-normativa/decreto-1076-de-2015/',
    },
    {
      referencia:
        'Salas Oquendo, D. A. (2022). Aproximación conceptual y metodológica para identificar la estructura ecológica en el ordenamiento ambiental, referencia cuenca río Sucio Alto [Trabajo de grado de maestría, Universidad Nacional de Colombia]. Repositorio Institucional UNAL.',
      link: 'https://repositorio.unal.edu.co/handle/unal/82369',
    },
    {
      referencia:
        'U.S. Geological Survey. (2021, 19 de agosto). Landsat Enhanced Vegetation Index.',
      link: 'https://www.usgs.gov/landsat-missions/landsat-enhanced-vegetation-index',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
