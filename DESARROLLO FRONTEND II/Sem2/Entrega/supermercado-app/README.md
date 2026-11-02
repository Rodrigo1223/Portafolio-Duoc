# SuperMarket Pro - Panel de Stock (Semana 2)

Aplicación Web Single Page Application (SPA) desarrollada en React con Vite para la Evaluación Formativa 2 de la asignatura Desarrollo Frontend II en Duoc UC. El proyecto evoluciona la entrega de la semana uno incorporando una arquitectura centralizada para el manejo de flujos de datos globales y la adopción estructural de Tailwind CSS.

## 📌 Nuevos Requerimientos Implementados
- **Gestión de Estado Global (Context API):** Implementación de un proveedor centralizado (`InventarioContext`) que administra y persiste la lista de productos del supermercado en tiempo real sin pérdida de datos al navegar.
- **Navegación Interactiva SPA:** Barra de menú superior que gestiona el renderizado dinámico de vistas de forma fluida y sin recargas de página, adaptada bajo las directrices disciplinares de la sesión sincrónica.
- **Formulario de Registro Validado:** Módulo controlado (`IngresarArticulo`) con validaciones nativas para capturar Nombre, Marca y Categoría de artículos, incorporando limpieza automática de campos tras el guardado.
- **Tabla de Stock Estructurada:** Componente de consulta semántica (`VerInventario`) que procesa e itera el estado del stock general mediante mapeos lógicos.
- **Diseño con Tailwind CSS:** Migración total de estilos embebidos a clases de utilidad responsivas y modulares, garantizando la eliminación de código CSS muerto o Bootstrap heredado.

## 🛠️ Tecnologías Utilizadas
- **Frontend:** React, JavaScript (ES6+), Context API
- **Estilos:** Tailwind CSS, PostCSS, Autoprefixer
- **Tooling:** Vite, ESLint
- **Control de Versiones:** Git & GitHub

## 📁 Estructura del Proyecto Modificada
```text
supermercado-app/
├── src/
│   ├── assets/       # Recursos gráficos e imágenes locales
│   ├── components/   # Tarjetas modulares y barras de navegación
│   ├── context/      # Proveedor del estado global (InventarioContext.jsx)
│   ├── pages/        # Vistas de la SPA (Inicio, Nosotros, Contacto, Inventario, Añadir)
│   ├── App.jsx       # Orquestador estructural de pantallas
│   └── main.jsx      # Inicializador limpio de React
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Instrucciones para Ejecutar Localmente

1. Ingresar al directorio correspondiente de la semana dos:
```bash
cd "Desarrollo-Frontend-2/Sem2/Entrega/supermercado-app"
```

2. Instalar el árbol de dependencias indexado de Tailwind CSS:
```bash
npm install
```

3. Iniciar el entorno de desarrollo local:
```bash
npm run dev
```

4. Compilar y desplegar hacia producción en GitHub Pages:
```bash
npm run deploy