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