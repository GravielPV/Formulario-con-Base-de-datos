# 📋 Formulario con Base de Datos

Un formulario de contacto moderno y animado que guarda datos en Back4App.

## 🚀 Características

- ✨ Diseño moderno con animaciones fluidas
- 🎨 Paleta de colores vibrante
- 📱 Totalmente responsive
- 🔒 Integración segura con Back4App
- 🌟 Efectos visuales profesionales

## ⚙️ Configuración

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd <nombre-del-proyecto>
```

### 2. Configurar Back4App
1. Ve a [Back4App](https://www.back4app.com/) y crea una cuenta
2. Crea una nueva aplicación
3. Ve a **Settings → Security & Keys**
4. Copia el **Application ID** y **JavaScript Key**

### 3. Configurar las claves de API
1. Crea un archivo llamado `config.js` en la carpeta del proyecto
2. Agrega el siguiente contenido y reemplaza con tus claves reales:
   ```javascript
   const CONFIG = {
     PARSE_APP_ID: "tu_application_id_aqui",
     PARSE_JS_KEY: "tu_javascript_key_aqui", 
     PARSE_SERVER_URL: "https://parseapi.back4app.com"
   };
   
   window.CONFIG = CONFIG;
   ```

### 4. Ejecutar el proyecto
Simplemente abre `index.html` en tu navegador.

## 🔒 Seguridad

- ❌ **NUNCA** subas `config.js` a GitHub
- ✅ El archivo está incluido en `.gitignore`
- ✅ Otros desarrolladores crearán su propio `config.js`
- 🔑 Usa solo **JavaScript Key**, nunca **Master Key** en el frontend

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── App.js             # Lógica del formulario
├── config.js          # Configuración real (NO SUBIR)
├── .gitignore         # Archivos a ignorar
└── README.md          # Esta documentación
```

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Backend**: Back4App (Parse Server)
- **Base de Datos**: MongoDB (via Back4App)

## 📝 Licencia

MIT License - puedes usar este código libremente.

---

⚠️ **Importante**: Antes de subir a GitHub, asegúrate de que `config.js` esté en el `.gitignore` y no se suba accidentalmente.
