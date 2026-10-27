# 🍕 Sistema de Gestión de Pizzería — Mi Primera App en Kotlin



Este repositorio contiene la **Actividad Formativa de la Semana 1** para la asignatura **Desarrollo de Aplicaciones Móviles I** en Duoc UC.

---

## 📌 ¿De qué trata este proyecto?

El objetivo principal de esta actividad fue construir la lógica base (a nivel de consola) para digitalizar la toma de pedidos de una pizzería. A través de este ejercicio, puse en práctica los conceptos fundamentales de Kotlin aprendidos durante la semana:

- **Tipado explícito y mutabilidad:** Uso adecuado de variables inmutables (`val`) y mutables (`var`).
- **Entrada y salida de datos (`I/O`):** Captura interactiva de información desde la consola.
- **Manejo de nulos (*Null Safety*):** Prevención de errores y caídas del programa mediante asignación de valores por defecto si el usuario no ingresa datos.
- **`if` como expresión:** Aplicación de condiciones para realizar cálculos de precios, descuentos y gestión de inventario.

---

## 💡 ¿Qué hace la aplicación?

1. **Registro del cliente:**
   Solicita por consola el nombre, dirección y teléfono. Si la persona presiona Enter sin ingresar datos o coloca espacios en blanco, el programa asigna respuestas predeterminadas (*"Cliente Anónimo"*, *"Sin Dirección"*, etc.) sin interrumpir la ejecución.

2. **Cálculo de pedidos y promociones:**
   Pide ingresar la cantidad de pizzas deseadas. Si la orden supera las **3 unidades**, aplica automáticamente un **10% de descuento** sobre el total e informa al usuario.

3. **Control de stock e inventario:**
   Valida si la cantidad de ingredientes disponibles (`ingredientesDisponibles`) alcanza para cumplir la orden.
   - **Si hay stock:** descuenta las unidades, asigna el estado `"En Preparación"` y muestra el saldo restante del inventario.
   - **Si no hay stock:** marca el pedido como `"Rechazado / Sin Stock"` sin modificar las existencias.

4. **Resumen de la orden:**
   Al finalizar, imprime una boleta o resumen detallado en consola con la información del cliente, el detalle de la compra, el costo final aplicado y el repartidor a cargo.

---

## 📁 Estructura del Proyecto

```text
MiPrimerProyectoAplicacionesMoviles/
├── .gitignore          # Archivos excluidos del control de versiones (out/, .idea/)
├── README.md           # Documentación del proyecto
├── src/
│   └── Main.kt         # Código fuente principal
└── MiPrimerProyectoAplicacionesMoviles.iml
```

---

## 📝 Código Fuente (`src/Main.kt`)

```kotlin
fun main() {
    // Paso 1: Declaración de variables iniciales de la Pizzería
    val nombrePizza = "Pepperoni"
    val precioUnitario = 8500.0
    var ingredientesDisponibles = 15 
    val idPedido = 501
    val repartidorAsignado = "Carlos Pérez"
    var estadoPedido = "Pendiente"

    println("=== SISTEMA DE GESTION DE PEDIDOS - PIZZERIA ===")

    // Paso 2: Entrada de datos del cliente con manejo de nulos (I/O moderno)
    println("\n--- Registro de Cliente ---")
    println("Ingrese el nombre del cliente:")
    val nombreCliente = readlnOrNull()?.takeIf { !it.isBlank() } ?: "Cliente Anonimo"

    println("Ingrese la direccion de entrega:")
    val direccionCliente = readlnOrNull()?.takeIf { !it.isBlank() } ?: "Sin Direccion"

    println("Ingrese el telefono de contacto:")
    val telefonoCliente = readlnOrNull()?.takeIf { !it.isBlank() } ?: "Sin Telefono"

    // Paso 3: Ingreso de cantidad y cálculo de totales con descuento (If como expresión)
    println("\n--- Datos del Pedido ---")
    println("Pizza seleccionada: $nombrePizza ($ $precioUnitario c/u)")
    println("Ingrese la cantidad de pizzas que desea pedir:")
    val entradaCantidad = readlnOrNull()?.toIntOrNull()
    val cantidadPizzas = if (entradaCantidad != null && entradaCantidad > 0) entradaCantidad else 1

    val subtotal = precioUnitario * cantidadPizzas

    // Aplicar 10% de descuento si supera 3 pizzas 
    val totalPedido = if (cantidadPizzas > 3) {
        println("¡Promocion aplicada! 10% de descuento por llevar mas de 3 pizzas.")
        subtotal * 0.90
    } else {
        subtotal
    }

    // Paso 4: Verificación de Stock (If como expresión)
    println("\n--- Verificacion de Inventario ---")
    val stockSuficiente = ingredientesDisponibles >= cantidadPizzas

    val mensajeStock = if (stockSuficiente) {
        ingredientesDisponibles -= cantidadPizzas // Actualiza el inventario
        estadoPedido = "En Preparacion"
        "Ingredientes suficientes. Stock actualizado. Restan: $ingredientesDisponibles unidades."
    } else {
        estadoPedido = "Rechazado / Sin Stock"
        "Lo sentimos, no hay suficientes ingredientes disponibles para preparar $cantidadPizzas pizzas."
    }
    println(mensajeStock)

    // Paso 6 y 7: Resumen Final del Pedido
    println("\n==========================================")
    println("           RESUMEN FINAL DE PEDIDO        ")
    println("==========================================")
    println(" ID de Pedido        : #$idPedido")
    println(" Estado del Pedido   : $estadoPedido")
    println("------------------------------------------")
    println(" DATOS DEL CLIENTE:")
    println(" - Nombre            : $nombreCliente")
    println(" - Direccion         : $direccionCliente")
    println(" - Telefono          : $telefonoCliente")
    println("------------------------------------------")
    println(" DETALLE DE LA COMPRA:")
    println(" - Producto          : $nombrePizza")
    println(" - Precio Unitario   : $$precioUnitario")
    println(" - Cantidad          : $cantidadPizzas")
    println(" - Total a Pagar     : $$totalPedido")
    if (stockSuficiente) {
        println(" - Repartidor Asig.  : $repartidorAsignado")
    }
    println("==========================================")
    println("¡Gracias por preferir nuestra Pizzeria!")
}
```

---

## 💻 Ejemplo de Ejecución en Consola

Así se ve la interacción de la consola cuando se realiza un pedido exitoso:

```text
=== SISTEMA DE GESTION DE PEDIDOS - PIZZERIA ===

--- Registro de Cliente ---
Ingrese el nombre del cliente:
Luis
Ingrese la direccion de entrega:
Los Sauces 1056, Cerrillos
Ingrese el telefono de contacto:
+56912345678

--- Datos del Pedido ---
Pizza seleccionada: Pepperoni ($ 8500.0 c/u)
Ingrese la cantidad de pizzas que desea pedir:
2

--- Verificacion de Inventario ---
Ingredientes suficientes. Stock actualizado. Restan: 13 unidades.

==========================================
           RESUMEN FINAL DE PEDIDO        
==========================================
 ID de Pedido        : #501
 Estado del Pedido   : En Preparacion
------------------------------------------
 DATOS DEL CLIENTE:
 - Nombre            : Luis
 - Direccion         : Los Sauces 1056, Cerrillos
 - Telefono          : +56912345678
------------------------------------------
 DETALLE DE LA COMPRA:
 - Producto          : Pepperoni
 - Precio Unitario   : $8500.0
 - Cantidad          : 2
 - Total a Pagar     : $17000.0
 - Repartidor Asig.  : Carlos Pérez
==========================================
¡Gracias por preferir nuestra Pizzeria!
```

---

## ⚙️ Requisitos del Entorno

- **Lenguaje:** Kotlin 1.9+ / 2.0+
- **JDK:** OpenJDK 21 o posterior
- **IDE recomendado:** IntelliJ IDEA Community / Ultimate Edition

---

## 📦 Instrucciones para la Entrega

1. Limpiar el proyecto eliminando las carpetas autogeneradas por el IDE (`out/`, `.idea/`).
2. Comprimir el directorio del proyecto en formato `.zip` o `.rar`.
3. Subir el archivo resultante a la plataforma de Duoc UC.