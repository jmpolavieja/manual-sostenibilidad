# Caso Práctico: Auditoría Energética y Cálculo del PUE en un CPD

## 📋 Ficha de Trabajo de Aula

* **Modulo:** Sostenibilidad Aplicada al Sistema Productivo (SMR)
* **Modalidad:** Equipos de Trabajo de Digitalización (3-4 alumnos)
* **Duración:** 45 - 50 minutos
* **Entregable:** Informe de cálculos y propuestas de mejora

---

## 🏢 Contexto de la Empresa

La empresa de servicios informáticos ***DataTech*** opera una sala de servidores (CPD) que da servicio a clientes locales. Tras recibir una auditoría de sostenibilidad dentro de su plan de cumplimiento **ASG**, la dirección encarga al departamento de sistemas (SMR) auditar el consumo energético anual y proponer medidas de mejora.

---

## 📊 Datos Anuales de Consumo (Lectura de Instalación)

| Concepto de Consumo | Valor Anual (kWh) |
| :--- | :--- |
| **Equipos TI** (servidores, cabinas SAN, *switches*, *routers*) | **100.000 kWh** |
| **Sistema de Climatización y Refrigeración** | **40.000 kWh** |
| **Pérdidas en Sistemas de Alimentación Ininterrumpida (SAI / UPS)** | **8.000 kWh** |
| **Iluminación y Servicios Auxiliares de la Sala** | **2.000 kWh** |

---

## ✏️ Ejercicios a Desarrollar

### Ejercicio 1: Auditoría del PUE Inicial
1. Calcula la **Energía Total Consumida** por la instalación.
2. Aplica la fórmula del **PUE** y determina el valor inicial del CPD de *DataTech*.
3. Explica qué porcentaje de la factura eléctrica total se destina a infraestructura de soporte y no a procesamiento de datos.

### Ejercicio 2: Propuestas de Reingeniería Green IT
Plantea **3 medidas técnicas concretas** que los técnicos de SMR puedan implementar en la instalación para reducir el consumo global sin reducir la capacidad de cómputo.

### Ejercicio 3: Simulación de Impacto y Recálculo
Tras implantar un plan de **virtualización de servidores** y reorganizar el flujo de aire (pasillo frío/caliente), se obtienen los siguientes resultados anuales:
* El consumo informático directo baja a **80.000 kWh** (al apagar servidores físicos infrautilizados).
* La necesidad de refrigeración se reduce a **16.000 kWh**.
* Las pérdidas en SAIs e iluminación se reducen a **8.000 kWh** globales.

1. Recalcula el **nuevo PUE** tras las mejoras.
2. Calcula el **porcentaje de ahorro energético anual global** en kWh conseguido por la empresa.

---

## 🔑 Solucionario (Uso Exclusivo del Docente)

::: collapse Ver Solución del Ejercicio 1
* **Energía Total:** $100.000 + 40.000 + 8.000 + 2.000 = 150.000\text{ kWh/año}$
* **PUE Inicial:** $\frac{150.000}{100.000} = \mathbf{1,50}$
* **Interpretación:** Por cada 1 kWh gastado en procesamiento útil, se consumen 0,5 kWh adicionales en soporte. El 33,3% de la energía total es consumida por la infraestructura de apoyo.
:::

::: collapse Ver Solución del Ejercicio 3
* **Nueva Energía Total:** $80.000 + 16.000 + 8.000 = 104.000\text{ kWh/año}$
* **Nuevo PUE:** $\frac{104.000}{80.000} = \mathbf{1,30}$
* **Ahorro Anual:** $\frac{150.000 - 104.000}{150.000} \times 100 = \mathbf{30,67\%}$ de reducción en la factura eléctrica global ($46.000\text{ kWh}$ ahorrados al año).
:::