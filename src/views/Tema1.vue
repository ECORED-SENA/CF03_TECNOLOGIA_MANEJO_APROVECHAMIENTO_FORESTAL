<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Diagnóstico, monitoreo y evaluación de la calidad ambiental del paisaje
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-1(data-aos="fade-right")
            p.mb-0 El diagnóstico, monitoreo y evaluación de la calidad ambiental del paisaje constituyen procesos complementarios para caracterizar las condiciones de los ecosistemas, identificar cambios en sus componentes y orientar decisiones de conservación y restauración. Su desarrollo integra información biofísica, estructural y paisajística, obtenida mediante técnicas de campo, herramientas geoespaciales e indicadores ambientales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 El análisis de la calidad ambiental del paisaje comprende tres grupos de componentes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img2.png', alt="" ).m-auto
              h4.text-center Componentes ecológicos y biofísicos
              .caja-3_p
                p.mb-0.text-center Comprenden las características naturales del territorio, como la cobertura vegetal, la geomorfología, las redes hídricas, los usos del suelo y la fauna asociada. Su análisis permite establecer las condiciones ambientales existentes e identificar factores que influyen en el funcionamiento de los ecosistemas.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
              h4.text-center Componentes estructurales
              .caja-3_p
                p.mb-0.text-center Se relacionan con la configuración espacial del paisaje. Para caracterizarla, se analizan los mosaicos paisajísticos, el tamaño de los parches de hábitat, la conectividad ecológica, los bordes y la fragmentación. Estos elementos permiten determinar el grado de continuidad o aislamiento entre las áreas naturales.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
              h4.text-center Componentes visuales y estéticos
              .caja-3_p
                p.mb-0.text-center Comprenden la fragilidad visual, la visibilidad, la calidad estética y las cuencas visuales del territorio. Su caracterización permite establecer las condiciones paisajísticas y evaluar la sensibilidad de determinadas áreas frente a posibles transformaciones ocasionadas por las intervenciones humanas.
      .bg-1
        .px-5
          p.mb-5 Para desarrollar el diagnóstico se emplean metodologías que integran información espacial, mediciones de campo y valoración paisajística:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img5.png", alt="" style="width: 350px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Teledetección y sistemas de información geográfica (SIG)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 La teledetección permite obtener información territorial mediante imágenes satelitales de programas como Landsat y Sentinel, así como fotografías aéreas capturadas con drones. Estas fuentes se procesan mediante sistemas de información geográfica (SIG) para clasificar coberturas vegetales, identificar patrones espaciales y evaluar cambios históricos en el paisaje.
                .row(titulo="Trabajo de campo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprende la recolección de datos in situ, la validación de unidades del paisaje y los muestreos de biodiversidad para contrastar los resultados geoespaciales con las condiciones del territorio. Las prácticas de campo y laboratorio complementan la caracterización de las propiedades del suelo (Gómez Giraldo, 2013).
                .row(titulo="Inventarios visuales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Consisten en la aplicación de matrices de calidad visual para caracterizar las condiciones estéticas del paisaje. Incluyen métodos directos o cualitativos, basados en la valoración de sus características visuales, e indirectos o cuantitativos, que emplean criterios y parámetros para establecer su calidad paisajística.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img6.png', alt=''  style="width: 300px").m-auto
            .col-xl
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 El monitoreo de la calidad ambiental comprende la recolección sistemática de datos para identificar perturbaciones y tendencias y evaluar la efectividad de las medidas de manejo.
              p.mb-0 Para el seguimiento de la vegetación se emplean el índice de vegetación de diferencia normalizada (NDVI) y el índice de vegetación mejorado (EVI) (U.S. #[i Geological Survey], 2021). La ecuación universal revisada de pérdida de suelo (RUSLE, por sus siglas en inglés) permite estimar la erosión hídrica (#[i Agricultural Research Service], s. f.).
      p.mb-5 Para ello, se emplean los siguientes indicadores:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Indicadores clave para el monitoreo de la calidad ambiental del paisaje
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo de indicador
              th.ajuste-border-tabla.texto-left Métrica o parámetro
              th.texto-left Propósito
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Ecológico y estructural
              td.ajuste-border-tabla.texto-left NDVI, EVI, índice de borde y conectividad de parches
              td.texto-left Medir el estado de la vegetación y el grado de fragmentación del hábitat.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Calidad del agua y del suelo
              td.ajuste-border-tabla.texto-left pH, turbidez, pérdida de suelo mediante RUSLE y nutrientes
              td.texto-left Evaluar la degradación biofísica en la cuenca o el paisaje.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Diversidad
              td.ajuste-border-tabla.texto-left Índices de Shannon y Simpson, y presencia de especies clave
              td.texto-left Monitorear el estado de la biodiversidad en el mosaico paisajístico.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Socioecológico
              td.ajuste-border-tabla.texto-left Tasa de cambio de uso del suelo y presión urbana
              td.texto-left Medir la presión humana sobre las unidades del paisaje.
      p.mb-5 El seguimiento ambiental se complementa con herramientas tecnológicas y mecanismos de participación comunitaria:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100.color-1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
              h4 Sensores remotos
              .caja-3_p
                p.mb-0 Permiten realizar el monitoreo continuo de la cobertura vegetal e identificar transformaciones del paisaje.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100.color-2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
              h4 Monitoreo participativo
              .caja-3_p
                p.mb-0 Integra la participación de las comunidades locales para evaluar su percepción sobre las condiciones y transformaciones del entorno.
      p.mb-5 La evaluación de la información recopilada durante el diagnóstico y el monitoreo comprende tres procesos que fundamentan la toma de decisiones:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparación con la línea base
                  p.mb-0 Consiste en contrastar los resultados del monitoreo con las condiciones ambientales registradas inicialmente. Permite cuantificar las pérdidas o ganancias de calidad ambiental, identificar cambios en los componentes del paisaje y establecer tendencias relacionadas con su conservación o degradación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valoración del impacto ambiental (VIA)
                  p.mb-0 Permite evaluar la capacidad de acogida del territorio y la sensibilidad de las unidades del paisaje frente a determinadas actividades o intervenciones. Su aplicación contribuye a identificar posibles afectaciones y establecer criterios para orientar el manejo ambiental.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evaluación de servicios ecosistémicos
                  p.mb-0 Comprende la valoración de los efectos ambientales sobre los servicios que proporcionan los ecosistemas. Considera aspectos como la regulación hídrica, la captura de carbono, el control de la erosión y el valor recreativo del paisaje.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Los resultados del diagnóstico, monitoreo y evaluación orientan la formulación de instrumentos y acciones para la gestión sostenible del territorio:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
              h4.text-center Zonificación y ordenamiento territorial
              .caja-3_p
                p.mb-0.text-center Formulación de planes para organizar los usos del territorio según sus condiciones ambientales y necesidades de conservación (Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare [Cornare], 2025).
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
              h4.text-center Conectividad y conservación
              .caja-3_p
                p.mb-0.text-center Diseño de corredores biológicos y delimitación de áreas de conservación para favorecer la continuidad ecológica (Ministerio de Ambiente y Desarrollo Sostenible [MADS], s. f.).
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
              h4.text-center Restauración del paisaje
              .caja-3_p
                p.mb-0.text-center Formulación de planes de restauración ecológica y regeneración paisajística para recuperar las condiciones de los ecosistemas degradados.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Indicadores de degradación	
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3.ajuste-2(data-aos="fade-right")
            p.mb-0 Los indicadores de degradación son variables cuantitativas o cualitativas que permiten determinar la pérdida de capacidad de un ecosistema para mantener su biodiversidad, conservar la productividad del suelo y proporcionar servicios ambientales. Su análisis facilita la identificación de perturbaciones naturales o antrópicas y la evaluación de sus efectos sobre la estructura y el funcionamiento del paisaje.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 350px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y tipos de perturbación
      p Una perturbación es un acontecimiento o proceso que modifica la estructura, composición o funcionamiento de una comunidad biológica. Los indicadores de degradación permiten evaluar sus efectos sobre los ecosistemas, considerando el origen, la intensidad y la frecuencia de las alteraciones que afectan las condiciones ambientales del territorio.
      p.mb-5 Las perturbaciones se diferencian por su origen y por la intensidad o frecuencia con que afectan los ecosistemas:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img18.png', alt="" ).m-auto
              h4.text-center Perturbaciones naturales
              .caja-3_p
                p.mb-0.text-center Son alteraciones ocasionadas por fenómenos naturales, sin intervención humana directa. Pueden presentarse de manera periódica o impredecible e incluyen incendios originados por rayos, huracanes, sequías extremas y deslizamientos de tierra. Sus efectos dependen de las características del ecosistema y de su capacidad de recuperación.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img19.png', alt="" ).m-auto
              h4.text-center Perturbaciones antrópicas
              .caja-3_p
                p.mb-0.text-center Son modificaciones derivadas de las actividades humanas que afectan las condiciones naturales de los ecosistemas. Incluyen cambios en el uso del suelo, contaminación y deforestación. Cuando su intensidad supera la capacidad de resiliencia del ecosistema, pueden ocasionar pérdidas de biodiversidad, deterioro ambiental y alteraciones prolongadas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
              h4.text-center Perturbaciones según intensidad y frecuencia
              .caja-3_p
                p.mb-0.text-center Se clasifican en agudas y crónicas. Las primeras generan impactos intensos en periodos cortos, como ocurre durante un incendio forestal. Las segundas corresponden a presiones continuas de intensidad baja o media, como el sobrepastoreo, que pueden provocar degradación progresiva.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales indicadores de degradación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3.ajuste-3(data-aos="fade-right")
            p.mb-0 La evaluación de la degradación ecosistémica requiere identificar alteraciones en el suelo, la cobertura vegetal, la composición de especies y la configuración espacial del paisaje. Estos indicadores permiten reconocer las presiones que afectan los recursos naturales y establecer parámetros de seguimiento para valorar sus cambios a lo largo del tiempo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 Los principales indicadores se relacionan con sus características y parámetros de medición:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 2.
        span Indicadores de degradación ecosistémica
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Indicador
              th.ajuste-border-tabla.texto-left Descripción
              th.texto-left Métricas o parámetros de medición
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Erosión del suelo
              td.ajuste-border-tabla.texto-left Desprendimiento, transporte y pérdida de la capa arable por acción hídrica o eólica.
              td.texto-left Pérdida de carbono orgánico, compactación, pérdida de suelo (t/ha/año) y presencia de cárcavas o regueros
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Pérdida de cobertura vegetal
              td.ajuste-border-tabla.texto-left Disminución de la biomasa o densidad vegetal que protege el suelo y proporciona hábitat a distintas especies.
              td.texto-left Tasa de deforestación, disminución del NDVI y porcentaje de dosel abierto
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Invasión de especies exóticas
              td.ajuste-border-tabla.texto-left Establecimiento y predominio de especies no nativas que desplazan a la flora y fauna locales.
              td.texto-left Proporción de biomasa de especies exóticas frente a nativas, expansión de especies invasoras y reducción de la riqueza de especies nativas
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Presiones antrópicas
              td.ajuste-border-tabla.texto-left Actividades humanas que afectan la capacidad de carga y las condiciones ambientales del territorio.
              td.texto-left Densidad poblacional, huellas de carbono e hídrica, intensidad del uso agropecuario y densidad de vías e infraestructura
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fragmentación de hábitats
              td.ajuste-border-tabla.texto-left División de ecosistemas continuos en parches de menor tamaño y mayor aislamiento.
              td.texto-left Tamaño medio de parches, distancia al vecino más cercano, relación perímetro/área, efecto de borde y conectividad paisajística
      .bg-1
        .px-5
          p.mb-0 La interpretación conjunta de estos indicadores contribuye a identificar áreas degradadas, establecer prioridades de intervención y definir medidas de conservación o restauración acordes con las condiciones del paisaje.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 Parámetros de calidad ambiental
          p.mb-5 Los parámetros de calidad ambiental permiten determinar el estado de conservación o alteración del agua y del suelo mediante mediciones fisicoquímicas y biológicas. En los sistemas agroforestales, su evaluación considera la interacción suelo-agua-planta, la normativa ambiental y posibles fuentes de contaminación, como el procesamiento de cosechas y el lavado de equipos de fumigación.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Vertimientos hídricos y límites permisibles
          p.mb-5 La evaluación de vertimientos hídricos permite determinar la carga contaminante de las descargas líquidas procedentes de actividades industriales, domésticas y agropecuarias. La Resolución 631 de 2015 establece parámetros y límites permisibles según la actividad económica. Entre los principales parámetros utilizados para caracterizar los vertimientos se encuentran:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img22.png", alt="" style="width: 380px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Demanda química de oxígeno (DQO)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Cuantifica el oxígeno equivalente necesario para oxidar químicamente la materia orgánica y las sustancias inorgánicas oxidables presentes en el agua (Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM], 2025). Permite evaluar la carga de sustancias oxidables presentes en el agua.
                .row(titulo="Demanda bioquímica de oxígeno (DBO₅)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Determina el oxígeno consumido por los microorganismos durante cinco días para degradar materia orgánica biodegradable, permitiendo evaluar la contaminación orgánica del agua.
                .row(titulo="Sólidos suspendidos totales (SST)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Miden las partículas retenidas mediante filtración, asociadas con la turbidez, el transporte de contaminantes y los procesos de sedimentación.
                .row(titulo="Grasas y aceites").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Este parámetro permite determinar la presencia de sustancias grasas e hidrocarburos que pueden formar películas superficiales y dificultar el intercambio gaseoso en el agua.
                .row(titulo="pH y temperatura").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El pH indica la acidez o alcalinidad del agua, mientras que la temperatura influye en sus procesos físicos, químicos y biológicos. Sus valores extremos afectan los organismos acuáticos.
      p.mb-5 La Resolución 699 de 2021 establece límites para vertimientos puntuales de aguas residuales domésticas tratadas al suelo. Para los usuarios equiparables a vivienda rural dispersa, los valores se clasifican según la velocidad de infiltración básica:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 3.
        span Parámetros para usuarios equiparables a usuarios de vivienda rural dispersa
      .tabla-a(data-aos="zoom-in").mb-5
        table
          caption Nota. Tomada de la Resolución 699 de 2021, artículo 4, tabla 1, del Ministerio de Ambiente y Desarrollo Sostenible.
          thead
            tr
              th.ajuste-border-tabla.texto-left Parámetros
              th.ajuste-border-tabla.texto-left Unidad de medida
              th.ajuste-border-tabla.texto-left Categoría I
              th.ajuste-border-tabla.texto-left Categoría II
              th.texto-left Categoría III
          tbody
            tr.ajuste-color-tabla-1
              td.ajuste-border-tabla.texto-left.text-weight-bold Generales
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.texto-left —
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
              td.ajuste-border-tabla.texto-left Grados centígrados
              td.ajuste-border-tabla.texto-left ± 5 °C que el rango de temperatura media anual multianual del lugar
              td.ajuste-border-tabla.texto-left Igual
              td.texto-left Igual
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold pH
              td.ajuste-border-tabla.texto-left Unidades de pH
              td.ajuste-border-tabla.texto-left 6,5 a 8,5
              td.ajuste-border-tabla.texto-left 6,5 a 8,5
              td.texto-left 6,5 a 8,5
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Demanda química de oxígeno (DQO)
              td.ajuste-border-tabla.texto-left mg/L O₂
              td.ajuste-border-tabla.texto-left 200,0
              td.ajuste-border-tabla.texto-left 200,0
              td.texto-left 200,0
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Sólidos suspendidos totales (SST)
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 100,0
              td.ajuste-border-tabla.texto-left 70,0
              td.texto-left 50,0
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Sólidos sedimentables (SSED)
              td.ajuste-border-tabla.texto-left mL/L
              td.ajuste-border-tabla.texto-left 3,5
              td.ajuste-border-tabla.texto-left 2,5
              td.texto-left 1,5
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Grasas y aceites
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 20,0
              td.ajuste-border-tabla.texto-left 20,0
              td.texto-left 20,0
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Sustancias activas al azul de metileno (SAAM)
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 0,5
              td.ajuste-border-tabla.texto-left 0,5
              td.texto-left 0,5
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Conductividad eléctrica
              td.ajuste-border-tabla.texto-left μS/cm
              td.ajuste-border-tabla.texto-left 1.000,0
              td.ajuste-border-tabla.texto-left 700,0
              td.texto-left 700,0
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fósforo total (P)
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 5,0
              td.ajuste-border-tabla.texto-left 5,0
              td.texto-left 2,0
            tr.ajuste-color-tabla-1
              td.ajuste-border-tabla.texto-left.text-weight-bold Compuestos de nitrógeno
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.texto-left —
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Nitrógeno total (N)
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 30,0
              td.ajuste-border-tabla.texto-left 20,0
              td.texto-left 20,0
            tr.ajuste-color-tabla-1
              td.ajuste-border-tabla.texto-left.text-weight-bold Iones
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.ajuste-border-tabla.texto-left —
              td.texto-left —
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Cloruros (Cl⁻)
              td.ajuste-border-tabla.texto-left mg/L
              td.ajuste-border-tabla.texto-left 250,0
              td.ajuste-border-tabla.texto-left 250,0
              td.texto-left 140,0
      p.mb-5 La aplicación de estos valores debe considerar el tipo de usuario, las características del vertimiento y la categoría de infiltración del suelo establecidas en la resolución.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Contaminación edáfica (suelo)
      p La contaminación edáfica comprende la acumulación de sustancias que alteran la fertilidad y los microorganismos del suelo. Su monitoreo permite identificar metales pesados, hidrocarburos, residuos de plaguicidas y condiciones de salinidad que afectan la calidad ambiental y la productividad agroforestal.
      p.mb-5Los principales factores de contaminación del suelo incluyen:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Metales pesados
                  p.mb-0 Comprenden cadmio (Cd), plomo (Pb), arsénico (As), cromo (Cr) y mercurio (Hg), cuya presencia puede relacionarse con actividades mineras, fertilizantes o disposición inadecuada de residuos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hidrocarburos totales del petróleo (TPH)
                  p.mb-0 Proceden de derrames de crudo o combustibles que pueden reducir la porosidad del suelo y afectar su capacidad de retención de agua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Plaguicidas y agroquímicos
                  p.mb-0 Incluyen residuos organoclorados y organofosforados que pueden ocasionar lixiviación y alteraciones en la disponibilidad de nutrientes del suelo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Salinidad y conductividad eléctrica (CE)
                  p.mb-0 La acumulación de sales solubles, asociada con prácticas inadecuadas de riego, puede ocasionar degradación del suelo y afectar su fertilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img26.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Aunque están relacionadas, la conductividad eléctrica y la salinidad representan propiedades diferentes:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100.color-1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img27.png', alt="" ).m-auto
              h4 Conductividad eléctrica (CE)
              .caja-3_p
                p.mb-0 Mide la capacidad de conducción eléctrica asociada con iones disueltos, como sodio, calcio, cloruro y magnesio. Se determina mediante sensores o sondas y se expresa en μS/cm, mS/cm o dS/m.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100.color-2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
              h4 Salinidad
              .caja-3_p
                p.mb-0 Representa la concentración de sales presentes en una solución. Puede expresarse en gramos por litro (g/L) o partes por mil (‰), y estimarse indirectamente mediante la conductividad eléctrica y la temperatura.
      p.mb-5 La relación entre ambas variables depende de la concentración de iones, la temperatura y la composición química:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img29.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Correlación entre sales e iones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una mayor concentración de sales disueltas generalmente incrementa la cantidad de iones disponibles y, por tanto, la conductividad eléctrica.
            .row(titulo="Efecto de la temperatura").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La conductividad eléctrica del agua aumenta aproximadamente un 2 % por cada grado Celsius de incremento. Por ello, los equipos pueden incorporar compensación automática de temperatura.
            .row(titulo="Composición iónica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Dos muestras con igual concentración total de sales pueden presentar conductividades diferentes, debido a la distinta capacidad de conducción eléctrica de los iones.
      p.mb-5 Estas variables permiten evaluar condiciones ambientales que afectan la producción agroforestal y los ecosistemas acuáticos:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100.color-1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
              h4 Agricultura y suelos
              .caja-3_p
                p.mb-0 La conductividad eléctrica indica posibles problemas de salinidad que ocasionan estrés osmótico, dificultan la absorción de agua y nutrientes y reducen la productividad.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100.color-2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
              h4 Acuicultura y ecosistemas
              .caja-3_p
                p.mb-0 La salinidad permite evaluar las condiciones de los hábitats acuáticos, considerando los rangos de tolerancia de las especies presentes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Bioindicadores e índices de macroinvertebrados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3.ajuste-3(data-aos="fade-right")
            p.mb-0 Los bioindicadores permiten evaluar la calidad ambiental mediante la presencia y respuesta de determinados organismos. Los macroinvertebrados acuáticos reflejan condiciones hídricas a mediano y largo plazo, complementando las mediciones fisicoquímicas puntuales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img32.png', alt='' style="max-width: 350px").m-auto
      p.mb-5 Entre los principales índices utilizados para evaluar la calidad biológica del agua se encuentran:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice BMWP (#[i Biological Monitoring Working Party])
                  p.mb-0 Asigna puntuaciones de tolerancia a la contaminación, entre 1 y 10, a familias de macroinvertebrados bentónicos. Su suma permite clasificar la calidad del agua desde muy buena hasta muy crítica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice EPT (#[i Ephemeroptera, Plecoptera y Trichoptera])
                  p.mb-0 Evalúa la representación de estos grupos de macroinvertebrados, generalmente asociados con aguas bien oxigenadas y bajos niveles de contaminación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Índice ABI (#[i Andean Biotic Index])
                  p.mb-0 Es una adaptación del BMWP para ríos de alta montaña de la región andina, utilizada para evaluar la calidad biológica del agua mediante macroinvertebrados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Marco normativo ambiental nacional (Colombia)
      p La evaluación de la calidad ambiental se fundamenta en disposiciones que regulan los vertimientos, el agua potable, la calidad del aire y el aprovechamiento del recurso hídrico.
      p.mb-5 Las principales disposiciones normativas relacionadas con estos ámbitos son:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 4.
        span Marco normativo ambiental nacional
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Ámbito
              th.ajuste-border-tabla.texto-left Normativa
              th.texto-left Aspecto regulado
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Vertimientos
              td.ajuste-border-tabla.texto-left Resolución 631 de 2015
              td.texto-left Parámetros y límites máximos permisibles para vertimientos puntuales a aguas superficiales y alcantarillado público.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Vertimientos al suelo
              td.ajuste-border-tabla.texto-left Resolución 699 de 2021
              td.texto-left Parámetros y límites para vertimientos puntuales de aguas residuales domésticas tratadas al suelo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Agua potable
              td.ajuste-border-tabla.texto-left Resolución 2115 de 2007
              td.texto-left Características fisicoquímicas y microbiológicas del agua para consumo humano e instrumentos de control y vigilancia.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Calidad del aire
              td.ajuste-border-tabla.texto-left Resolución 2254 de 2017
              td.texto-left Niveles máximos permisibles de contaminantes como PM₁₀, PM₂,₅, SO₂ y NO₂.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Uso del recurso hídrico
              td.ajuste-border-tabla.texto-left Decreto 1076 de 2015
              td.texto-left Disposiciones sobre preservación, uso y manejo del recurso hídrico.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Dinámicas temporales del paisaje	
      p.mb-5 El estudio de las dinámicas temporales del paisaje permite identificar cambios en la cobertura del suelo ocasionados por factores naturales y actividades humanas. Para comprender estas transformaciones se emplean registros históricos, tasas de deforestación y cartografía multitemporal:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img36.png', alt="" ).m-auto
              h4.text-center Registros históricos
              .caja-3_p
                p.mb-0.text-center Comprenden documentos, fotografías aéreas antiguas, relatos locales y cartografía histórica que permiten establecer una línea base para reconstruir la composición y configuración del paisaje antes de sus principales transformaciones.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img37.png', alt="" ).m-auto
              h4.text-center Tasas de deforestación
              .caja-3_p
                p.mb-0.text-center Son indicadores que cuantifican la pérdida de cobertura forestal durante un periodo determinado. Se expresan en hectáreas por año (ha/año) o como porcentaje anual.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img38.png', alt="" ).m-auto
              h4.text-center Cartografía multitemporal
              .caja-3_p
                p.mb-0.text-center Consiste en comparar imágenes satelitales de distintas fechas, obtenidas mediante Landsat, Sentinel o Planet, para identificar cambios en la cobertura del suelo.
      p.mb-5 Se invita a reproducir el siguiente video para comprender cómo el análisis multitemporal identifica y proyecta cambios en la cobertura del paisaje:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Análisis multitemporal de los cambios en el paisaje agroforestal”
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo de la tasa anual de cambio forestal
      p.mb-5 La tasa anual de cambio forestal permite cuantificar las variaciones de superficie boscosa durante un periodo determinado. Su cálculo utiliza las áreas registradas en dos momentos y los años transcurridos entre ellos:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-5.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.ajuste-4
            .caja-5.mb-3(data-aos="fade-right")   
              h4.mb-0 Fórmula:
            .caja-7.text-center(data-aos="fade-right")
              .formula
                i q
                |  =
                span.bracket [
                span.expression
                  | (
                  span.fraction
                    span
                      i A
                      sub 2
                    span
                      i A
                      sub 1
                  | )
                  sup.exponent
                    span 1
                    span
                      i t
                      sub 2
                      |  −
                      i t
                      sub 1
                  |  − 1
                span.bracket ]
                |  × 100
        .col-xl-7
          .caja-1.color-3(data-aos="fade-left")
            h5 Donde:
            ol.lista-ol--cuadro.mb-0.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span q:
                | 
                p.mb-0 tasa anual de cambio forestal (%).
              li 
                .lista-ol--cuadro__vineta
                  span A₁:
                | 
                p.mb-0 área forestal inicial.
              li 
                .lista-ol--cuadro__vineta
                  span A₂: 
                | 
                p.mb-0 área forestal final.
              li 
                .lista-ol--cuadro__vineta
                  span t₁: 
                | 
                p.mb-0 año inicial.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span t₂: 
                | 
                p.mb-0 año final.
      .bg-1
        .px-5
          p.mb-5 Un resultado negativo indica pérdida de superficie forestal, mientras que uno positivo representa un aumento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capacidad de carga biológica
          p.mb-0 La capacidad de carga biológica corresponde al límite máximo de población o intensidad de uso que un ecosistema puede sostener continuamente sin degradar sus recursos ni alterar su estabilidad ecológica. En el análisis del paisaje, permite evaluar los efectos de la fragmentación y la pérdida de hábitat sobre la biodiversidad.
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Gestión de información analítica
          p.mb-5 La gestión de información analítica permite organizar, validar e interpretar datos ambientales para evaluar impactos y orientar decisiones de manejo territorial. Este proceso comprende técnicas de registro, herramientas de análisis, elaboración de informes y documentación institucional que contribuyen al cumplimiento normativo y a la trazabilidad de la información.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de registro de datos
          p.mb-5 El registro de datos ambientales comprende la recopilación, validación y almacenamiento de información cualitativa y cuantitativa mediante procedimientos que garantizan su calidad y disponibilidad:
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Registro directo en campo
                      p.mb-0 Comprende el uso de fichas georreferenciadas mediante QGIS o ArcGIS Field Maps y bitácoras estructuradas para recopilar datos ambientales cualitativos y cuantitativos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img40.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Sistematización y validación
                      p.mb-0 Incluye la depuración de datos, el aseguramiento y el control de la calidad (QA/QC: #[i quality assurance/quality control]) y la estandarización de la información sobre biodiversidad mediante estándares como Darwin Core (Darwin Core Maintenance Group, s. f.).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img41.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Almacenamiento
                      p.mb-0 Consiste en organizar la información en bases de datos relacionales, como PostgreSQL/PostGIS, o repositorios estructurados que garanticen su integridad y trazabilidad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img42.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Matriz de Leopold
      p.mb-5 La matriz de Leopold es un método cualitativo de evaluación de impacto ambiental que relaciona las acciones de un proyecto con los factores ambientales potencialmente afectados (Leopold et al., 1971). Su estructura comprende los siguientes componentes:
      .row.justify-content-center.mb-4
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img43.png', alt="" ).m-auto
              h4.text-center Eje horizontal: acciones
              .caja-3_p
                p.mb-0.text-center Contiene las actividades del proyecto que pueden generar impactos ambientales, como excavación, transporte y disposición de residuos.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img44.png', alt="" ).m-auto
              h4.text-center Eje vertical: factores
              .caja-3_p
                p.mb-0.text-center Agrupa los componentes ambientales susceptibles de afectación, como calidad del aire, suelo, flora y aspectos socioeconómicos.
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img45.png', alt="" ).m-auto
              h4.text-center Magnitud (M)
              .caja-3_p
                p.mb-0.text-center Representa la intensidad del impacto mediante una escala de 1 a 10, con signo positivo (+) o negativo (−), según su efecto.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img46.png', alt="" ).m-auto
              h4.text-center Importancia (I)
              .caja-3_p
                p.mb-0.text-center Expresa el peso relativo del impacto sobre el entorno mediante una escala de valoración de 1 a 10.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Índices de vulnerabilidad ecosistémica
      p.mb-5 Los índices de vulnerabilidad ecosistémica permiten evaluar el riesgo de degradación ambiental mediante la relación entre exposición, sensibilidad y capacidad adaptativa. Estas variables se expresan mediante una función que representa su interacción:
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-5.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-4.ajuste-5
                .caja-5.mb-3(data-aos="fade-right")   
                  h4.mb-0 Fórmula:
                .caja-7.text-center(data-aos="fade-right")  
                  h2.mb-0 V = f (E, S, CA)
            .col-xl-7
              .caja-1.color-3(data-aos="fade-left")
                h5 Donde:
                ol.lista-ol--cuadro.mb-0.lista-ol--separador
                  li
                    .lista-ol--cuadro__vineta
                      span V: 
                    | 
                    p.mb-0 vulnerabilidad ecosistémica.
                  li 
                    .lista-ol--cuadro__vineta
                      span E: 
                    | 
                    p.mb-0 exposición a presiones o amenazas, como cambio climático y deforestación.
                  li 
                    .lista-ol--cuadro__vineta
                      span S: 
                    | 
                    p.mb-0 sensibilidad del ecosistema frente a las perturbaciones.
                  li 
                    .lista-ol--cuadro__vineta
                      span CA: 
                    | 
                    p.mb-0 capacidad adaptativa para ajustarse, absorber impactos y recuperarse.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Presentación de informes
          p.mb-5 Los informes ambientales permiten comunicar los resultados del análisis mediante una estructura técnica, herramientas de representación de datos y un lenguaje adecuado para las diferentes audiencias:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img48.png", alt="" style="width: 250px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Estructura del informe").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprende resumen ejecutivo, metodología, resultados analíticos mediante gráficos, mapas temáticos y tablas, discusión y conclusiones orientadas a la toma de decisiones.
                .row(titulo="Representación de datos").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Integra tableros de control, mediante herramientas como Power BI o R Shiny, y cartografía temática para facilitar la interpretación técnica y gerencial.
                .row(titulo="Lenguaje y audiencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Adapta la información según las necesidades de autoridades ambientales, comunidades y equipos de dirección, considerando el nivel técnico de cada audiencia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Documentación institucional
      p.mb-5 La documentación institucional permite conservar, transferir y consultar la información ambiental mediante procedimientos que garantizan su organización, trazabilidad y disponibilidad:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Custodia y archivo
                  p.mb-0 Comprende la catalogación de metadatos mediante estándares internacionales para garantizar la organización, conservación y consulta histórica de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img49.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protocolos de transferencia
                  p.mb-0 Establecen procedimientos para entregar informes técnicos a entidades gubernamentales y organismos multilaterales, mediante manuales y criterios institucionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img50.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad y auditoría
                  p.mb-0 Incluye control de versiones, firmas de responsabilidad técnica y medidas de confidencialidad que permiten verificar la integridad de la documentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img51.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
