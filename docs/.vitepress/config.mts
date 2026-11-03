import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/manual-sostenibilidad',
  title: "Sostenibilidad",
  description: "Un manual sobre la asignatura Sostenibilidad de los Sectores Productivos de 1º de SMR - Altair",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "Escudo.jpg",
    siteTitle: "Sostenibilidad",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Unidades', link: '/unidades/ud1-fundamentos-asg-circular' },
      { text: 'Talleres', link: '/talleres-y-fichas/caso-pue-cpd' },
      { text: 'Evaluación', link: '/guia-docente/sistema-evaluacion' }
    ],

    sidebar: {
      '/unidades/': [
        {
          text: 'Bloques Temáticos',
          items: [
            { text: '1. Fundamentos ASG y Economía Circular', link: '/unidades/ud1-fundamentos-asg-circular' },
            { text: '2. Green IT y Eficiencia en CPDs (PUE)', link: '/unidades/ud2-green-it-pue' },
            { text: '3. Ciclo de Vida del Hardware y RAEE', link: '/unidades/ud3-hardware-raee-tierras-raras' },
            { text: '4. Huella Digital y Dark Data', link: '/unidades/ud4-huella-digital-dark-data' },
            { text: '5. El Plan de Sostenibilidad Empresarial', link: '/unidades/ud5-plan-sostenibilidad' }
          ]
        }
      ],
      '/talleres-y-fichas/': [
        {
          text: 'Recursos Prácticos',
          items: [
            { text: 'Caso Práctico PUE y CPD', link: '/talleres-y-fichas/caso-pue-cpd' },
            { text: 'Actividad Express Dark Data', link: '/talleres-y-fichas/actividad-dark-data' },
            { text: 'Matriz de Diagnóstico ASG', link: '/talleres-y-fichas/matriz-diagnostico-asg' },
            { text: 'Encargo del Trabajo Final', link: '/talleres-y-fichas/proyecto-final-encargo' }
          ]
        }
      ]
    }
  }
})
