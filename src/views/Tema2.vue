<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Instrumentos de planificación, intervención ecosistémica y educación ambiental
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-6(data-aos="fade-right")
            p.mb-0 Los instrumentos de planificación, intervención ecosistémica y educación ambiental integran herramientas normativas, técnicas, operativas y pedagógicas para gestionar sosteniblemente los recursos naturales. Su aplicación permite orientar acciones de conservación y restauración, recuperar las funciones ecológicas de los ecosistemas y fortalecer la participación comunitaria en la protección ambiental del territorio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 350px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Plan de Manejo Ambiental (PMA)	
      p.mb-5 El Plan de Manejo Ambiental (PMA) es un instrumento de gestión que establece acciones, medidas y proyectos para prevenir, mitigar, corregir y compensar los impactos ambientales negativos ocasionados por una obra, proyecto o actividad. Estas medidas se diferencian según su finalidad:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención
                  p.mb-0 Busca evitar la generación de impactos ambientales negativos mediante acciones como el diseño de rutas alternativas o el aislamiento de áreas ambientalmente sensibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mitigación
                  p.mb-0 Reduce la magnitud o severidad de impactos que no pueden evitarse. Incluye medidas como el humedecimiento de vías para disminuir las emisiones de material particulado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Corrección
                  p.mb-0 Comprende acciones para restaurar, recuperar o reparar las condiciones ambientales alteradas, como la revegetalización de taludes y la reconformación morfológica del terreno.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compensación
                  p.mb-0 Busca resarcir los impactos ambientales residuales que no pueden mitigarse, mediante acciones como la reforestación protectora de áreas ecológicamente equivalentes a las afectadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normativa ambiental aplicable
      p.mb-5 En Colombia, la formulación y la aplicación de los planes de manejo ambiental se fundamentan en disposiciones legales y lineamientos institucionales que establecen sus requisitos y condiciones de implementación:
      .bg-1
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img6.png", alt="" style="width: 320px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Decreto 1076 de 2015").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Compila las disposiciones relacionadas con la gestión ambiental, incluidos los casos que requieren licencia ambiental y las medidas de manejo correspondientes.
                .row(titulo="Ley 99 de 1993").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Crea el Ministerio del Medio Ambiente, reorganiza el sector público encargado de la gestión ambiental y establece las bases del licenciamiento y la planificación ambiental.
                .row(titulo="Términos de referencia institucionales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son lineamientos expedidos por autoridades como la Autoridad Nacional de Licencias Ambientales (ANLA) y las Corporaciones Autónomas Regionales (CAR), que establecen requisitos técnicos, estructura y escalas de información para la evaluación de proyectos y sus instrumentos ambientales.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de ordenamiento territorial
          p.mb-5 Las herramientas de ordenamiento territorial permiten planificar el uso del suelo y los recursos naturales a partir de la estructura ecológica y las condiciones ambientales del territorio (Salas Oquendo, 2022). Entre los principales instrumentos se encuentran:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img7.png", alt="" style="width: 320px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Planifican el uso coordinado del suelo, el agua, la flora y la fauna, y el manejo sostenible de las cuencas (MADS, 2023). Constituyen instrumentos de superior jerarquía para el ordenamiento territorial en los aspectos definidos como determinantes ambientales.
                .row(titulo="Planes de Ordenamiento Territorial (POT)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son instrumentos establecidos por la Ley 388 de 1997 para orientar el uso y la ocupación del suelo, así como el desarrollo urbano y rural de los municipios y distritos.
                .row(titulo="Determinantes ambientales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Son normas, directrices y regulaciones expedidas por las autoridades ambientales que condicionan el ordenamiento territorial. Comprenden las áreas protegidas del Sistema Nacional de Áreas Protegidas (SINAP), la zonificación ambiental de los POMCA, las rondas hídricas, los suelos de protección y las áreas de gestión del riesgo (Morales et al., 2020).
      p.mb-5 Los instrumentos de ordenamiento territorial se clasifican según la población municipal, conforme a la Ley 388 de 1997:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img8.png', alt="" ).m-auto
              h4.text-center Plan de Ordenamiento Territorial (POT)
              .caja-3_p
                p.mb-0.text-center Aplicable a distritos y municipios con población superior a 100.000 habitantes.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img9.png', alt="" ).m-auto
              h4.text-center Plan Básico de Ordenamiento Territorial (PBOT)
              .caja-3_p
                p.mb-0.text-center Aplicable a municipios con población entre 30.000 y 100.000 habitantes.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img10.png', alt="" ).m-auto
              h4.text-center Esquema de Ordenamiento Territorial (EOT)
              .caja-3_p
                p.mb-0.text-center Aplicable a municipios con población inferior a 30.000 habitantes.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Estrategias de intervención ecosistémica	
      p.mb-5 Las estrategias de intervención ecosistémica comprenden acciones planificadas para prevenir, reducir, reparar o compensar la pérdida de biodiversidad y la degradación de las funciones ecológicas del paisaje. Entre las principales medidas utilizadas en proyectos e infraestructura se encuentran:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100.color-1.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
              h4 Mitigación
              .caja-3_p
                p.mb-0 Comprende acciones para reducir la magnitud, intensidad o duración de los impactos ambientales inevitables. Incluye pasos de fauna, control de sedimentación y tecnologías para disminuir el ruido y las emisiones.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .caja-3.h-100.color-2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
              h4 Compensación ambiental
              .caja-3_p
                p.mb-0 Busca contrarrestar impactos residuales negativos significativos mediante acciones de conservación en ecosistemas equivalentes. Se fundamenta en el principio de pérdida neta cero de biodiversidad o ganancia neta.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Prácticas de restauración ecológica
      p.mb-5 La restauración ecológica comprende procesos asistidos para recuperar la estructura, las funciones y la capacidad de recuperación de los ecosistemas degradados o destruidos. Según las condiciones del territorio, se aplican los siguientes enfoques:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Restauración pasiva
                  p.mb-0 Consiste en eliminar factores de degradación para favorecer la regeneración natural. Por ejemplo, se cerca un área para excluir el pastoreo. Se aplica en áreas con suelos conservados y alto potencial de recuperación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Restauración activa
                  p.mb-0 Comprende intervenciones directas, como siembra de especies nativas, estabilización de suelos y control de especies invasoras. Se utiliza en ecosistemas severamente degradados que han perdido sus bancos de semillas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Rehabilitación ecológica
                  p.mb-0 Busca recuperar funciones ecosistémicas esenciales, como la retención hídrica, sin restablecer necesariamente la composición original de especies. Se aplica en áreas altamente transformadas, como minas a cielo abierto y canteras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Reforestación protectora
      p.mb-5 La reforestación protectora consiste en establecer cobertura arbórea permanente para conservar recursos naturales estratégicos, priorizando la protección ambiental sobre el aprovechamiento maderero. Sus principales funciones y características son:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
              h4.text-center Protección del suelo
              .caja-3_p
                p.mb-0.text-center Contribuye al control de la erosión laminar y a la prevención de deslizamientos en terrenos con pendiente.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
              h4.text-center Regulación hídrica
              .caja-3_p
                p.mb-0.text-center Favorece la infiltración y reduce la sedimentación mediante cobertura forestal en rondas hídricas, nacientes y microcuencas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
              h4.text-center Composición vegetal
              .caja-3_p
                p.mb-0.text-center Prioriza especies nativas con sistemas radiculares profundos y adaptadas a las condiciones ambientales del territorio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Enriquecimiento de corredores biológicos
      p.mb-5 El enriquecimiento de corredores biológicos permite conectar fragmentos de hábitat para favorecer el movimiento de especies, la dispersión de semillas y el flujo genético. Esta estrategia comprende distintas herramientas de conectividad ecológica:
      .bg-1
        .px-5
          .row.align-items-center.mb-0
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img19.png", alt="" style="width: 250px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Pasos de fauna y corredores riparios").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Los pasos de fauna facilitan el cruce de barreras generadas por la infraestructura (Correa Quiñones, 2020). Los corredores riparios favorecen el desplazamiento de especies mediante la conservación y restauración de los bosques ribereños.
                .row(titulo="Enriquecimiento florístico").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Consiste en incorporar especies vegetales clave, como plantas con flores para polinizadores o especies productoras de frutos para dispersores, fortaleciendo la conectividad funcional.
                .row(titulo="Paisajes matriz").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Integran sistemas silvopastoriles y cercas vivas en predios productivos para reducir las barreras entre los bosques conservados y las áreas intervenidas.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Comunicación
          p.mb-5 La comunicación participativa rural promueve el diálogo horizontal, el aprendizaje mutuo y la construcción colectiva entre las comunidades y los equipos técnicos o de investigación. Este enfoque reconoce los saberes locales y fortalece la participación comunitaria en las decisiones relacionadas con el territorio y la gestión ambiental (Acunzo et al., 2014).
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conceptos fundamentales
          p La comunicación participativa se fundamenta en principios que favorecen el reconocimiento de los conocimientos comunitarios y la participación en el desarrollo local.
          p.mb-5 Estos principios contribuyen a establecer relaciones de colaboración entre los actores del territorio:
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Enfoque horizontal
                      p.mb-0 Reconoce que todos los participantes poseen conocimientos valiosos, superando la relación jerárquica entre el experto y la comunidad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Empoderamiento comunitario
                      p.mb-0 Promueve la participación de las comunidades en la identificación de sus problemáticas y la toma de decisiones para resolverlas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Interculturalidad
                      p.mb-0 Reconoce y respeta las diferencias culturales, de género, lingüísticas y generacionales presentes en las comunidades rurales.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipologías de comunicación rural
      p La comunicación rural comprende diferentes modalidades para transmitir información, fortalecer la participación y promover iniciativas comunitarias. Estas se diferencian según sus propósitos y formas de interacción.
      p.mb-5 Las principales modalidades de comunicación rural son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación informativa o monológica
                  p.mb-0 Consiste en transmitir información de manera unidireccional, como datos técnicos, alertas tempranas y disposiciones normativas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación institucional
                  p.mb-0 Comprende la difusión de programas, proyectos, servicios y resultados de entidades públicas o privadas dirigidos a las comunidades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación participativa o dialógica
                  p.mb-0 Promueve el intercambio de conocimientos y experiencias para facilitar la reflexión colectiva, la concertación y la acción comunitaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación popular o promocional
                  p.mb-0 Utiliza medios comunitarios, como radio local, perifoneo, murales y teatro, para fortalecer la expresión y participación de las comunidades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diálogo de saberes
      p El diálogo de saberes es un proceso pedagógico e intercultural que integra conocimientos técnicos y científicos con saberes locales y ancestrales en condiciones de equidad. Se fundamenta en el reconocimiento de las experiencias comunitarias y la adaptación de las innovaciones a las condiciones socioambientales del territorio.
      p.mb-5 Se invita a reproducir el siguiente pódcast con el objetivo de comprender cómo el reconocimiento mutuo y la integración de saberes técnicos, locales y ancestrales fortalecen la participación comunitaria en la gestión ambiental del territorio:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img27.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Diálogo de saberes y participación comunitaria en la gestión ambiental&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img28.png" style="max-width: 510px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Política ambiental	
      p.mb-5 La política ambiental comprende principios, objetivos, leyes y acciones orientados a proteger los recursos naturales y promover el desarrollo sostenible. En Colombia, la Política Nacional de Educación Ambiental articula instituciones, sectores educativos y comunidades mediante diferentes contextos de aplicación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
              h4.text-center Educación formal
              .caja-3_p
                p.mb-0.text-center Integra la educación ambiental en los currículos de preescolar, básica, media y educación superior, promoviendo conocimientos y prácticas para la protección del entorno.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img30.png', alt="" ).m-auto
              h4.text-center Educación no formal e informal
              .caja-3_p
                p.mb-0.text-center Fortalece la participación de organizaciones comunitarias, empresas privadas y medios de comunicación en la divulgación de conocimientos y prácticas ambientales sostenibles.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img31.png', alt="" ).m-auto
              h4.text-center Gestión territorial
              .caja-3_p
                p.mb-0.text-center Promueve la planificación ambiental conjunta entre autoridades, como las Corporaciones Autónomas Regionales (CAR), y entidades territoriales para fortalecer la gestión sostenible de los recursos naturales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normativa nacional de educación ambiental
      p.mb-5 La educación ambiental en Colombia se fundamenta en disposiciones que orientan su incorporación en los procesos formativos y en la gestión territorial:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img6.png", alt="" style="width: 380px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ley 99 de 1993").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Crea el Sistema Nacional Ambiental (SINA) y establece responsabilidades relacionadas con la educación ambiental y la articulación institucional.
            .row(titulo="Ley 115 de 1994").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la enseñanza de la protección del ambiente, la ecología y la preservación de los recursos naturales en la educación formal.
            .row(titulo="Decreto 1743 de 1994").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Institucionaliza los Proyectos Ambientales Escolares (PRAE) como estrategias pedagógicas para abordar problemáticas ambientales en las instituciones educativas.
            .row(titulo="Ley 1549 de 2012").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fortalece la institucionalización de la Política Nacional de Educación Ambiental y su incorporación en los procesos de desarrollo territorial.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructuras programáticas
      p.mb-5 La educación ambiental se desarrolla mediante programas e instancias que articulan instituciones educativas, comunidades y autoridades territoriales para atender problemáticas ambientales:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proyectos Ambientales Escolares (PRAE)
                  p.mb-0 Integran la dimensión ambiental en los proyectos educativos institucionales de preescolar, básica y media mediante el estudio de problemáticas ambientales del contexto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proyectos Ciudadanos de Educación Ambiental (PROCEDA)
                  p.mb-0 Promueven iniciativas comunitarias orientadas al desarrollo local sostenible en barrios y zonas rurales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proyectos Ambientales Universitarios (PRAU)
                  p.mb-0 Articulan investigación, docencia y proyección social para fortalecer la educación ambiental en instituciones de educación superior.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comités Interinstitucionales de Educación Ambiental (CIDEA)
                  p.mb-0 Son instancias departamentales y municipales que coordinan la planificación e implementación de políticas y estrategias de educación ambiental.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias de concienciación ciudadana
      p.mb-5 Las estrategias de concienciación ciudadana promueven la participación social y la adopción de prácticas sostenibles mediante diferentes mecanismos de comunicación y formación ambiental:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img35.png', alt="" ).m-auto
              h4.text-center Campañas ambientales
              .caja-3_p
                p.mb-0.text-center Promueven el consumo responsable, la separación de residuos en la fuente y el uso eficiente de la energía.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img36.png', alt="" ).m-auto
              h4.text-center Voluntariado ambiental
              .caja-3_p
                p.mb-0.text-center Impulsa redes de voluntariado y grupos juveniles para fortalecer la formación de líderes y la participación comunitaria.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img37.png', alt="" ).m-auto
              h4.text-center Alianzas con medios digitales
              .caja-3_p
                p.mb-0.text-center Facilitan la divulgación de información científica sobre biodiversidad y cambio climático mediante contenidos accesibles para la ciudadanía.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img17.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Planes de mejoramiento continuo
      p.mb-5 Los planes de mejoramiento continuo permiten evaluar y fortalecer las estrategias de educación ambiental mediante el seguimiento de resultados, la actualización de contenidos y la gestión de recursos:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img7.png", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Monitoreo y evaluación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Emplea indicadores periódicos para evaluar el impacto social, la participación y los cambios de hábitos de las comunidades involucradas.
            .row(titulo="Actualización curricular").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisa las problemáticas ambientales priorizadas en los PRAE y CIDEA, considerando las nuevas dinámicas del cambio climático.
            .row(titulo="Fortalecimiento financiero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Articula fuentes de financiación públicas y privadas para garantizar la sostenibilidad operativa de los proyectos ambientales a largo plazo.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
