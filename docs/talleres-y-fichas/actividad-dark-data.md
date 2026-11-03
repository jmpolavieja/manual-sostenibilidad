# Actividad Express: Auditoría de Dark Data y Limpieza Digital

## 📋 Ficha de Trabajo de Aula

* **Módulo:** Sostenibilidad Aplicada al Sistema Productivo (SMR)
* **Modalidad:** Equipos de Trabajo de Digitalización (3-4 alumnos)
* **Duración:** 10 – 15 minutos
* **Entregable:** Ficha de registro de gigabytaje liberado y cálculo de ahorro energético

---

## 🎯 Objetivo de la Actividad

Tomar conciencia del impacto ambiental inmaterial derivado del almacenamiento masivo de datos no estructurados (**Dark Data**) y aplicar un protocolo de purga digital en las estaciones de trabajo del taller de SMR y en las cuentas corporativas.

---

## 🛠️ Paso 1: Auditoría y Purga Local (7 min)

Cada equipo revisará la estación de trabajo asignada y la cuenta corporativa del centro, completando la siguiente tabla con los gigabytes (GB) o megabytes (MB) liberados tras ejecutar la limpieza:

| Área de Revisión | Acciones de Limpieza Realizadas | Espacio Liberado (MB / GB) |
| :--- | :--- | :--- |
| **1. Descargas y Temporales** | Eliminación de imágenes ISO antiguas, ejecutables `.exe` / `.deb` y vaciado de la carpeta de archivos temporales. | |
| **2. Papelera de Reciclaje** | Vaciado completo de la papelera local de la estación informática y de discos secundarios. | |
| **3. Correo y Nube Corporativa** | Borrado de borradores, correos de notificación masiva y archivos adjuntos duplicados en la nube. | |
| **4. Archivos de Log y Caché** | Depuración de ficheros de registro (`.log`) caducados y vaciado de caché de navegadores/herramientas. | |
| **TOTAL LIBERADO** | **Suma total del espacio recuperado en la estación de trabajo** | **_______ GB** |

---

## 🧮 Paso 2: Estimación de Impacto Energético (5 min)

Teniendo en cuenta que el mantenimiento de 1 GB de almacenamiento en servidores de la nube/CPDs genera un consumo estimado de **0,015 kWh/año**:

1. **Cálculo de Ahorro del Equipo:**
   $$\text{Ahorro Anual (kWh)} = \text{GB Liberados} \times 0{,}015 \text{ kWh/GB/año}$$
   * **Resultado del equipo:** `_______ kWh/año ahorrados`

2. **Proyección para el Aula (20 PCs):**
   $$\text{Ahorro Total Aula} = \text{Ahorro del Equipo} \times 20 \text{ equipos}$$
   * **Resultado global:** `_______ kWh/año ahorrados en el aula`

---

## 📜 Paso 3: Regla de Gobernanza de Datos (Criterio G)

Redactad en una frase una **política interna de mantenimiento** que evite volver a acumular *Dark Data* en el equipo informático (p. ej., programación de tareas automatizadas con `logrotate`, vaciado semanal de descargas, etc.):

> **Política propuesta:** ________________________________________________________________________________________________________________________