# 🛒 Aplicación Web de Gestión de Inventario - Supermercado Pro

Aplicación de Single Page Application (SPA) desarrollada en **React (Vite)** y estilizada con **Tailwind CSS**, orientada a la gestión dinámica de stock, navegación estructurada mediante rutas reales y control de carrito de compras para un entorno de supermercado.

---

## 🚀 Tecnologías Utilizadas
- **React (Vite)** como framework de interfaz de usuario.
- **React Router v7** para la gestión de rutas y navegación modular.
- **Tailwind CSS** para el diseño responsivo y componentes visuales.
- **Context API** para la administración centralizada del estado global (inventario, stock y carrito).

---

## 📂 Estructura de Directorios y Arquitectura del Proyecto

```text
supermercado-app/
├── public/
├── src/
│   ├── assets/              # Recursos gráficos e imágenes locales
│   ├── components/          # Componentes reutilizables (Navigation, etc.)
│   ├── context/             # Estado global (InventarioContext.jsx)
│   ├── pages/               # Vistas principales de la aplicación
│   │   ├── Inicio.jsx
│   │   ├── Inventario.jsx
│   │   ├── DetalleProducto.jsx
│   │   ├── IngresarArticulo.jsx
│   │   └── Carrito.jsx
│   ├── utils/               # Constantes y funciones de validación centralizadas
│   │   ├── constants.js
│   │   └── validators.js
│   ├── App.jsx              # Proveedores y Enrutador principal
│   ├── AppRoutes.jsx        # Definición de rutas (Routes / Route)
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
📋 Características y Requerimientos Implementados (Semana 3)
Navegación con React Router: Uso de enrutamiento moderno centralizado en AppRoutes.jsx, con enlaces activos mediante componentes y rutas dinámicas por parámetros (useParams) para acceder al detalle de cada producto.

Gestión de Estado Global (Context API): Sincronización en tiempo real entre el inventario general y el carrito de compras, asegurando la actualización bidireccional del stock en bodega.

Filtro Dinámico: Listado con selector de categorías que filtra los productos de manera dinámica sin alterar ni perder los datos originales del inventario.

Validaciones Seguras: Control estricto de tipos numéricos en formularios y operaciones de compra, previniendo valores nulos o errores de cálculo (NaN).

🛠️ Instrucciones de Instalación y Ejecución Local
Asegúrate de tener instalado Node.js (versión LTS recomendada) en tu equipo.

Clona o descarga este repositorio en tu computador.

Abre la terminal integrada en la carpeta raíz del proyecto (supermercado-app).

Instala las dependencias ejecutando:

Bash
npm install
Inicia el servidor de desarrollo local con Vite:

Bash
npm run dev
Haz clic en el enlace local generado en la terminal (ejemplo: http://localhost:5173) para abrir la aplicación en tu navegador web.