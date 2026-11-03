# Unidad 2: Green IT y Eficiencia en Centros de Datos (PUE)

## 🎯 Objetivos Didácticos

* Comprender el impacto del consumo energético y la huella de carbono de las infraestructuras informáticas operativas 24/7.
* Dominar la métrica estándar **PUE (*Power Usage Effectiveness*)** para auditar la eficiencia energética de un CPD o sala de servidores.
* Identificar y proponer soluciones técnicas de *Green IT* (virtualización, climatización inteligente y gestión de energía).
* Conectar la optimización de infraestructuras TIC con la dimensión Ambiental (A) de los Criterios ASG.

---

## 1. El Impacto Energético de la Infraestructura Informática

La tecnología no es inmaterial. Detrás de los servicios en la nube, la gestión de redes y las bases de datos existen infraestructuras físicas formadas por servidores, armarios rack, conmutadores (*switches*) y sistemas de almacenamiento que consumen energía continuamente.

En el perfil técnico de **Sistemas Microinformáticos y Redes (SMR)**, la eficiencia energética es la principal palanca de la **Green IT (Informática Verde)** en la fase operativa.

---

## 2. La Métrica Estándar: PUE (*Power Usage Effectiveness*)

El indicador internacional utilizado para medir la eficiencia energética de un centro de datos es el **PUE**.

### 2.1 Fórmula de Cálculo

$$\text{PUE} = \frac{\text{Energía Total Consumida por la Instalación}}{\text{Energía Consumida únicamente por los Equipos TI}}$$

### 2.2 Desglose de Consumos

* **Energía Total de la Instalación:** Incluye los equipos informáticos más toda la infraestructura de soporte (climatización/refrigeración, pérdidas en SAIs/UPS, iluminación y sistemas auxiliares).
* **Energía de Equipos TI:** Consumo exclusivo de los servidores, almacenamiento, *routers*, *switches* y estaciones informáticas de proceso.

### 2.3 Interpretación de Valores

| Valor PUE | Nivel de Eficiencia | Interpretación |
| :--- | :--- | :--- |
| **1.0** | Ideal | El 100% de la energía gastada se destina directamente al procesamiento informático. |
| **1.2 – 1.4** | Muy Eficiente | Centros modernos con climatización optimizada (*free cooling*, pasillos fríos/calientes). |
| **1.5 – 1.9** | Eficiencia Media | CPDs estándar con oportunidades claras de reingeniería energética. |
| **2.0 o superior** | Ineficiente | La mitad (o más) de la factura eléctrica se desperdicia en refrigeración e infraestructura. |

---

## 3. Estrategias Operativas de Green IT en SMR

Para reducir el PUE y la huella de carbono de una instalación informática se aplican tres estrategias técnicas fundamentales:

### 3.1 Consolación por Virtualización
Reemplazar múltiples servidores físicos dedicados e infrautilizados por máquinas virtuales ejecutadas sobre hipervisores (como VMware ESXi, Proxmox o Hyper-V) permite reducir el parque de hardware activo, reduciendo el consumo eléctrico y las necesidades de disipación térmica.

### 3.2 Arquitectura Térmica y Climatización
* **Pasillos Fríos y Calientes:** Separación física del flujo de aire de admisión y expulsión en las cabinas rack para evitar la mezcla de temperaturas.
* **Enfriamiento Gratuito (*Free Cooling*):** Aprovechamiento del aire exterior cuando la temperatura ambiental lo permite, reduciendo el uso de compresores.

### 3.3 Políticas de Gestión de Energía
Configuración automatizada de estados de suspensión en parques informáticos corporativos y apagado programado de servidores o conmutadores no críticos fuera del horario laboral.