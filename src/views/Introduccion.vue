<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 El diagnóstico, monitoreo y evaluación de la calidad ambiental del paisaje permiten comprender el estado de los ecosistemas, identificar las transformaciones ocasionadas por factores naturales y actividades humanas, y establecer medidas para su conservación. Estos procesos integran el análisis de la biodiversidad, los recursos naturales y las condiciones del territorio, aportando información fundamental para la gestión ambiental sostenible.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="max-width: 350px").m-auto
      .caja-2(data-aos="zoom-in")
        p.mb-0 La aplicación de indicadores de degradación, parámetros de calidad ambiental y herramientas de análisis territorial facilita la identificación de alteraciones en el suelo, el agua y la cobertura vegetal. Asimismo, la interpretación de información ambiental contribuye a formular planes de manejo, seleccionar estrategias de restauración ecológica y fortalecer la participación comunitaria mediante acciones de comunicación y educación ambiental.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
