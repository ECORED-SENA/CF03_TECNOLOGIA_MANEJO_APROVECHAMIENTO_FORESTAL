<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué procedimiento permite determinar pérdidas o ganancias de calidad ambiental durante el monitoreo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar los resultados mediante la calidad paisajística de un área elegida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar los datos del monitoreo con las condiciones ambientales iniciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Organizar los datos obtenidos según las actividades previstas del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar los datos obtenidos por el origen de cada fuente de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes situaciones corresponde a una perturbación crónica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un incendio por rayos que transforma el ecosistema en un periodo breve.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un huracán que altera una cobertura vegetal durante un intervalo breve.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un deslizamiento que remueve el suelo del ecosistema en un breve lapso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sobrepastoreo constante que deteriora progresivamente el ecosistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica permite identificar la fragmentación de hábitats?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'División del hábitat en parches más pequeños y con mayor aislamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Disminución de vegetación que reduce la protección natural del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Predominio de especies exóticas que desplazan a las especies locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pérdida de suelo superficial por la acción de la lluvia y del viento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué determina la demanda bioquímica de oxígeno durante cinco días (DBO₅)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La materia susceptible de oxidación por medio de una reacción química.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las partículas sólidas que quedan retenidas en la filtración del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El oxígeno consumido por microorganismos al degradar materia orgánica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las sales disueltas que se encuentran presentes en la muestra de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Un equipo determina la conductividad eléctrica de una muestra de agua. ¿Qué propiedad está midiendo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de conducir corriente eléctrica mediante iones disueltos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La concentración total de sales presentes en una solución determinada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El oxígeno que consumen los microorganismos existentes en una muestra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de partículas retenidas al filtrarse esta muestra de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Con qué condición del agua se asocia generalmente una mayor representación de los grupos incluidos en el índice EPT?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escasa oxigenación y muy alta acumulación de materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Muy alta salinidad y predominio de contaminantes industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Buena oxigenación y bajos niveles de contaminación en el agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Alta turbidez y presencia de sólidos suspendidos en las aguas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la finalidad de la cartografía multitemporal en el análisis del paisaje?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar una imagen reciente para establecer las categorías de vegetación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar un recorrido de campo para localizar todos los puntos de muestreo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representar una medición de agua para establecer su distribución geográfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comparar imágenes de distintas fechas para identificar cambios de cobertura.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué indica un resultado negativo en la tasa anual de cambio forestal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incremento de la superficie forestal durante el periodo evaluado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducción de la superficie forestal durante el periodo analizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Permanencia de la cobertura forestal durante el periodo evaluado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recuperación de superficie forestal durante el periodo analizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Después del registro directo en campo, ¿qué procedimiento permite mejorar la calidad de los datos antes de almacenarlos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pasar los datos al informe sin revisar los registros del terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar permisos de consulta sin comprobar los datos recopilados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Depurar los registros y aplicar controles de calidad a los datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar los resultados antes de ordenar los registros de campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué relación se establece mediante la matriz de Leopold?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acciones del proyecto con factores ambientales susceptibles de afectación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Periodos de captura satelital con tasas de cambio de la cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Familias de macroinvertebrados con puntajes de tolerancia a contaminantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Categorías de infiltración con límites máximos permisibles de vertimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué variables se relacionan para analizar la vulnerabilidad ecosistémica?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exposición, conectividad y capacidad productiva del ecosistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exposición, sensibilidad y capacidad adaptativa del ecosistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sensibilidad, salinidad y presencia de especies del ecosistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conectividad, infiltración y cobertura forestal del ecosistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En el Plan de Manejo Ambiental, ¿qué finalidad cumple el diseño de rutas alternativas para evitar áreas ambientalmente sensibles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mitigar la magnitud de impactos ambientales no evitables en el área.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Corregir todas las condiciones ambientales ya alteradas en esa área.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compensar esos impactos ambientales residuales generados en el área.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Prevenir la generación de impactos ambientales negativos en el área.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Por qué el humedecimiento de vías para disminuir el material particulado es una medida de mitigación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evita que se produzca cualquier impacto en los recursos del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recupera las condiciones ecológicas que ya fueron alteradas en el área.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compensa los impactos residuales en áreas similares a las intervenidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reduce la magnitud de un impacto que no puede evitarse en su totalidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la función de los Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar las versiones de los informes técnicos producidos en la cuenca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planificar el uso coordinado de los recursos naturales de toda la cuenca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer los puntajes de tolerancia de familias presentes en la cuenca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular las emisiones de material particulado en las vías de una cuenca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué actuación corresponde a la restauración pasiva?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sembrar especies nativas a fin de recuperar espacios sin bancos de semillas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estabilizar directamente los suelos de ese ecosistema severamente degradado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cercar un área para excluir el pastoreo y favorecer la regeneración natural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Recuperar funciones hídricas sin restituir la composición original del área.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué propósito distingue a la rehabilitación ecológica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recuperar funciones esenciales sin restituir toda la composición original del área.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar presiones para que la regeneración restablezca naturalmente el ecosistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sembrar especies nativas a fin de recuperar ecosistemas que perdieron sus semillas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Resarcir impactos residuales por medio de conservación en ecosistemas equivalentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué finalidad tiene incorporar plantas con flores o productoras de frutos en los corredores biológicos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuantificar las partículas suspendidas para evaluar la contaminación de las aguas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Favorecer a polinizadores y dispersores para fortalecer la conectividad funcional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Determinar límites de vertimiento a través de la clasificación de la infiltración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar los puntajes de tolerancia a las familias de macroinvertebrados acuáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué actuación corresponde al diálogo de saberes en la gestión ambiental del territorio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transmitir disposiciones técnicas por medio de un intercambio de carácter unilateral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Difundir servicios institucionales sin pactar decisiones con las comunidades rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presentar resultados técnicos para que las comunidades adopten decisiones ya tomadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar en condiciones de equidad los conocimientos técnicos, locales y ancestrales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué función cumplen los Proyectos Ciudadanos de Educación Ambiental (PROCEDA)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promover iniciativas comunitarias de desarrollo sostenible en barrios y zonas rurales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Articular investigación, docencia y proyección social en instituciones universitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Coordinar políticas y estrategias ambientales usando los comités interinstitucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar proyectos ambientales escolares en los procesos de formación de los colegios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué acción permite evaluar el resultado de las estrategias de educación ambiental dentro del mejoramiento continuo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Medir únicamente el número de informes producidos durante la ejecución de los proyectos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contabilizar únicamente los recursos recibidos para financiar las actividades previstas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar indicadores periódicos sobre impacto social, participación y cambios de hábitos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente los contenidos publicados en medios de comunicación sobre ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
