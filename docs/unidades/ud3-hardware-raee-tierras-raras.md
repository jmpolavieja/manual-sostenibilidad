# Unidad 3: Ciclo de Vida del Hardware, Minerales de Conflicto y RAEE

## 🎯 Objetivos Didácticos

* Comprender el impacto socioambiental de la fase de extracción de materias primas para la microelectrónica.
* Conocer la problemática ética y social ligada a los minerales de conflicto y tierras raras (coltán, litio, cobalto, cobre).
* Aplicar la normativa sobre **Residuos de Aparatos Eléctricos y Electrónicos (RAEE)** y conocer la red de gestores autorizados.
* Implementar protocolos de **ampliación modular** y **reacondicionamiento** para extender la vida útil del hardware en SMR.

---

## 1. La Fase de Extracción: Minerales de Conflicto y Tierras Raras

El análisis del ciclo de vida del hardware comienza antes de la fabricación. La producción de placas base, procesadores, memorias y baterías depende directamente de la minería de materias primas críticas:

* **Coltán (Tantalio):** Indispensable para la fabricación de condensadores de alta capacidad en dispositivos compactos.
* **Litio y Cobalto:** Esenciales para baterías de portátiles y sistemas de alimentación ininterrumpida (SAI).
* **Cobre y Tierras Raras (Neodimio, Disprosio):** Utilizados en cableado de red, motores de discos duros magnéticos y altavoces.

### 1.1 Impacto Social (Criterio S) y Ambiental (Criterio A)
La extracción de estos minerales a menudo implica conflictos geopolíticos, trabajo en condiciones de vulnerabilidad e intensos procesos de degradación del suelo y contaminación de acuíferos. Dentro del **Plan de Sostenibilidad**, el técnico debe priorizar proveedores que garanticen la trazabilidad de componentes libres de minerales de conflicto.

---

## 2. Gestión Legal de RAEE (Residuos de Aparatos Eléctricos y Electrónicos)

Cuando un equipo informático alcanza el final de su vida útil, su gestión inadecuada genera graves riesgos por la presencia de metales pesados (plomo, mercurio, cadmio).

### 2.1 Cadena de Tratamiento de RAEE
1. **Recogida Selectiva:** Separación en origen de los residuos informáticos de otros desechos urbanos.
2. **Transporte Autorizado:** Traslado mediante gestores registrados para evitar el vertido incontrolado.
3. **Desmontaje y Descontaminación:** Extracción de sustancias peligrosas (baterías, condensadores) previa fragmentación.
4. **Recuperación de Materiales:** Separación de plásticos, metales férreos y preciosos (oro, plata, cobre) para su reincorporación al proceso productivo.

---

## 3. Estrategias de Economía Circular en el Taller de SMR

Para mitigar el descarte prematuro, el departamento de sistemas debe aplicar el principio de las **3R de la informática**:

### 3.1 Ampliación Modular (Upgrade)
Sustitución selectiva de componentes clave en lugar de reemplazar equipos completos:
* Reemplazo de discos magnéticos HDD por unidades de estado sólido SSD.
* Ampliación de memoria RAM para soportar sistemas operativos actuales.
* Limpieza térmica y cambio de pasta disipadora para recuperar el rendimiento del procesador.

### 3.2 Reacondicionamiento y Segunda Vida
Los equipos retirados del uso corporativo principal pueden reacondicionarse mediante la instalación de distribuciones Linux ligeras o convertirse en servidores de pruebas, cortafuegos dedicados (pfSense) o sistemas de almacenamiento secundario (NAS).

---

## 🛠️ Dinámica de Aula: Auditoría de Componentes y Ficha de RAEE

* **Actividad:** Los alumnos desmontan un equipo de pruebas del taller, identifican los componentes con metales pesados o materiales críticos y completan la **Ficha de Canalización de RAEE** simulando el envío a un gestor autorizado local.