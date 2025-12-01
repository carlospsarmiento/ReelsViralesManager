# Reels Virales Manager

Este proyecto es una aplicación web construida con **Google Apps Script** que permite gestionar el flujo de trabajo de creación y aprobación de videos para Reels, conectándose directamente con una hoja de cálculo de Google Sheets.

## 📋 Descripción

La aplicación ofrece una interfaz moderna (Dark Mode) y responsiva para administrar ideas de videos. Permite a los usuarios:
1.  **Gestionar Pendientes**: Ver y eliminar ideas de videos que aún no han sido creados.
2.  **Revisar Videos Creados**: Visualizar los videos generados directamente en la aplicación, y aprobarlos o rechazarlos.

## ✨ Características Principales

*   **Interfaz Moderna**: Diseño oscuro ("Dark Mode") con colores vibrantes y transiciones suaves, optimizado para escritorio y móviles.
*   **Sincronización en Tiempo Real**: Los datos se leen y escriben directamente en Google Sheets.
*   **Reproductor de Video Integrado**: Soporte para reproducción nativa de archivos MP4 y visualización de enlaces de Google Drive/YouTube.
*   **Gestión de Estados**:
    *   **Eliminar**: Borra permanentemente la fila de la hoja de cálculo para videos pendientes.
    *   **Aprobar/Rechazar**: Actualiza el estado en la columna de aprobación sin borrar el registro.

## 🛠️ Configuración del Proyecto

### Requisitos Previos
*   Una cuenta de Google.
*   Una hoja de cálculo de Google Sheets con la estructura requerida.
*   Entorno de desarrollo para Google Apps Script (puede ser el editor en línea o local con `clasp`).

### Estructura de la Hoja de Cálculo
La aplicación espera una hoja llamada **"Reels"** (anteriormente "Hoja1") con las siguientes columnas clave:
*   **Columna A**: Idea del video.
*   **Columna D**: Status Creación (ej. "Pendiente", "Creado").
*   **Columna E**: Status Aprobación (donde se guardará "Aprobado" o "Rechazado").
*   **Columna G**: URL del video generado.

### Instalación y Despliegue

1.  **Clonar/Copiar Archivos**:
    *   `Codigo.js`: Contiene la lógica del servidor (backend).
    *   `Index.html`: Contiene la interfaz de usuario (frontend).

2.  **Configurar el ID de la Hoja**:
    *   Abre `Codigo.js`.
    *   Busca la función `SpreadsheetApp.openById('...')`.
    *   Asegúrate de que el ID coincida con el de tu hoja de cálculo (actualmente configurado como `148BDQffYq4O_RJFRBHRamIiUQoXESp17zQM3K-iBkXs`).

3.  **Desplegar como Aplicación Web**:
    *   En el editor de Apps Script, ve a **Implementar** > **Nueva implementación**.
    *   Selecciona el tipo **Aplicación web**.
    *   Configura:
        *   **Descripción**: (Opcional) ej. "Versión 1.0".
        *   **Ejecutar como**: "Yo" (tu cuenta de email).
        *   **Quién tiene acceso**: "Cualquiera" (o según tus necesidades de privacidad).
    *   Haz clic en **Implementar**.
    *   Copia la **URL de la aplicación web** proporcionada.

## 📂 Estructura del Código

*   **`Codigo.js`**:
    *   `doGet()`: Punto de entrada que sirve el HTML.
    *   `getVideos()`: Obtiene los datos de la hoja "Reels".
    *   `deleteVideo(rowIndex)`: Elimina una fila específica.
    *   `updateVideoStatus(rowIndex, status)`: Actualiza la celda de aprobación.

*   **`Index.html`**:
    *   Estructura HTML5 semántica.
    *   Estilos CSS3 (Variables CSS, Flexbox, Grid, Animaciones).
    *   Lógica JavaScript para manejar la UI, llamadas al backend (`google.script.run`) y el reproductor de video.

## 📱 Uso

1.  Abre la URL de la aplicación web.
2.  **Sección "Pendientes de Creación"**:
    *   Revisa las ideas listadas.
    *   Usa el botón 🗑️ para eliminar ideas descartadas.
3.  **Sección "Revisión de Videos"**:
    *   Haz clic en el botón ▶ ("Ver") de un video en la lista.
    *   El video se cargará en el reproductor superior.
    *   Usa los botones **✓ (Aprobar)** o **✕ (Rechazar)** para calificar el video.

## ⚠️ Notas Importantes
*   **Permisos**: La primera vez que ejecutes el script, Google te pedirá permisos para acceder a tu hoja de cálculo.
*   **URLs de Video**: El reproductor está optimizado para archivos directos (`.mp4`) y trata de adaptar enlaces de Drive/YouTube, pero la visualización depende de los permisos del archivo original.

---
Desarrollado con ❤️ y Google Apps Script.
