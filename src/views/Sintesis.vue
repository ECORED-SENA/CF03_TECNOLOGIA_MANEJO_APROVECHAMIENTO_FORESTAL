<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta la síntesis: 
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La evaluación y el manejo ambiental de ecosistemas integran el diagnóstico, el monitoreo y el análisis de indicadores de degradación, parámetros ambientales y cambios del paisaje. La gestión de la información orienta la planificación de medidas de prevención, mitigación, corrección y compensación, junto con estrategias de restauración, reforestación y conectividad ecológica. La comunicación participativa y la educación ambiental fortalecen el diálogo de saberes, la participación comunitaria y el mejoramiento continuo.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
