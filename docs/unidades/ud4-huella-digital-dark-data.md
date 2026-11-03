# Unidad 4: Huella Digital, Dark Data y Green Coding

## 🎯 Objetivos Didácticos

* Evaluar el impacto ambiental inmaterial derivado del procesamiento, tráfico en red y almacenamiento de datos.
* Comprender el concepto de **Dark Data (Datos Oscuros)** y aplicar protocolos de purga digital corporativa.
* Introducir buenas prácticas de **Green Coding** y optimización de transferencias de datos.
* Integrar la gobernanza de datos (Criterio G) con la reducción del consumo energético en servidores y la nube.

---

## 1. La Huella de Carbono Inmaterial de la Nube

Existe la falsa percepción de que los datos digitalizados no consumen recursos. Sin embargo, cada archivo guardado en la nube, cada correo electrónico almacenado y cada consulta procesada requiere energia continua en servidores, redes de transporte y sistemas de almacenamiento redundante.

La huella de carbono digital proviene del consumo eléctrico de los Centros de Procesamiento de Datos (CPD) necesarios para mantener la disponibilidad 24/7 de la información.

---

## 2. El Problema del "Dark Data" (Datos Oscuros)

Se define como **Dark Data** a la masa de información digital acumulada por empresas y usuarios que se almacena y procesa, pero que nunca se vuelve a utilizar para ningún fin operativo o analítico.

### 2.1 Fuentes Habituales de Datos Oscuros en SMR
* **Imágenes de sistemas y backups obsoletos:** Copias de seguridad completas de servidores antiguos que ya no están en producción.
* **Logs de red desatendidos:** Archivos de registro de tráfico o eventos guardados indefinidamente sin políticas de rotación.
* **Descargas y temporales duplicados:** Ficheros `.iso`, instaladores `.exe`/`.deb` duplicados en múltiples estaciones de trabajo o carpetas compartidas.
* **Correos y adjuntos masivos:** Buzones corporativos saturados con archivos adjuntos sin comprimir.

### 2.2 Coste Energético y de Gobernanza
El *Dark Data* no solo incrementa la factura eléctrica y el PUE del almacenamiento en la nube, sino que dificulta la gobernanza de datos y aumenta la superficie de ataque ante incidentes de ciberseguridad.

---

## 3. Principios de Green Coding y Ecodiseño de Redes

En el ámbito de la administración de sistemas y scripting (Bash, PowerShell, Python), se aplican criterios de eficiencia de software:

1. **Optimización de Scripts:** Evitar bucles ineficientes y consultas redundantes a bases de datos o servicios API.
2. **Políticas de Retención de Logs:** Configurar herramientas como `logrotate` para comprimir y purgar registros automáticamente.
3. **Compresión y Deduplicación:** Activar la deduplicación de datos a nivel de sistema de archivos (ZFS, Btrfs) para evitar almacenar bloques de datos idénticos.

---

## 🛠️ Dinámica Express de Aula: "Protocolo de Purga Digital" (15 min)

* **Desarrollo:** Cada equipo auditará la estación de trabajo asignada en el taller de SMR y sus cuentas corporativas, aplicando el protocolo de limpieza en cuatro áreas: *Descargas*, *Papelera*, *Adjuntos* y *Archivos de registro*.
* **Resultado:** Cálculo del gigabytaje liberado y estimación de los kWh de consumo de servidor reducidos anualmente.