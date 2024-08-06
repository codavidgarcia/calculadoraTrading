# Calculadora de Trading Conversacional

Bienvenido a la Calculadora de Trading Conversacional. Esta herramienta ha sido diseñada para ayudar a los traders a calcular el margen requerido, el tamaño de la posición y otros detalles importantes antes de realizar una operación. La calculadora es amigable y fácil de usar, permitiendo introducir parámetros de manera conversacional.

## Desarrollador

**Juan David Garcia (@codavidgarcia)**

## Funcionalidades

- **Cálculo del Margen Requerido:** Calcula el margen necesario para una operación teniendo en cuenta el apalancamiento.
- **Cálculo del Tamaño de la Posición:** Calcula el valor total de la posición basada en el apalancamiento.
- **Cálculo de la Cantidad de Monedas:** Determina la cantidad de monedas involucradas en la operación.
- **Determinación del Tipo de Operación:** Identifica si la operación es long o short basado en los precios de entrada y take profit.
- **Estimación de Ganancia/Pérdida:** Calcula la ganancia o pérdida potencial en USD si el precio alcanza el stop loss (SL) o take profit (TP).
- **Copiado Fácil:** Permite copiar los resultados calculados al portapapeles para una fácil transferencia a una plataforma de trading.

## Uso

1. **Si tengo:** Introduce el balance de tu cuenta en USD.
2. **con un apalancamiento de:** Introduce el apalancamiento que utilizarás para la operación.
3. **y quiero ganar:** Introduce la ganancia deseada en USD.
4. **es decir el:** Introduce el porcentaje del balance que corresponde a la ganancia deseada.
5. **con un riesgo de distancia (%):** Si eliges esta opción, introduce la distancia al stop loss en porcentaje.
6. **con precios de entrada / SL / TP:** Si eliges esta opción, introduce los precios de entrada, stop loss y take profit.

Finalmente, presiona el botón "Calcular" para obtener los resultados.

## Fórmulas Utilizadas

### Margen Requerido (sin apalancamiento)

\[ \text{Trade Value} = \text{Trade Size} \times \text{Entry Price} \]

### Margen Requerido (con apalancamiento)

\[ \text{Margin Required} = \frac{\text{Trade Value}}{\text{Leverage}} \]

### Tamaño de la Posición

\[ \text{Position Size} = \text{Trade Value} \]

### Cantidad de Monedas

\[ \text{Trade Size} = \frac{\text{Profit}}{\text{Movement}} \]

### Ganancia/Pérdida en USD

- **Movimiento del precio:**

\[ \text{Movement} = \text{Entry Price} - \text{Take Profit} \]

- **Tamaño del Trade:**

\[ \text{Trade Size} = \frac{\text{Profit}}{\text{Movement}} \]

- **Valor Total del Trade:**

\[ \text{Trade Value} = \text{Trade Size} \times \text{Entry Price} \]

- **Margen Requerido con Apalancamiento:**

\[ \text{Margin Required} = \frac{\text{Trade Value}}{\text{Leverage}} \]

- **Pérdida en caso de SL:**

\[ \text{Loss Amount} = (\text{Entry Price} - \text{Stop Loss}) \times \text{Trade Size} \]

- **Ganancia en caso de TP:**

\[ \text{Profit Amount} = (\text{Entry Price} - \text{Take Profit}) \times \text{Trade Size} \]

## Ejemplo

Si tienes un balance de $1000 con un apalancamiento de 25x y quieres ganar $50 (5% de tu cuenta) con un precio de entrada de $53000, SL a $55000 y TP a $52000:

- **Movimiento del precio:** 1000 (53000 - 52000)
- **Tamaño del Trade:** 0.05 BTC (50 / 1000)
- **Valor del Trade:** $2650 (0.05 BTC * 53000)
- **Margen Requerido:** $106 (2650 / 25)
- **Tamaño de la Posición:** $2650
- **Cantidad de Monedas:** 0.05 BTC
- **Pérdida en caso de SL:** $-100
- **Ganancia en caso de TP:** $50
- **Tipo de Operación:** Short

Esperamos que esta herramienta sea útil en tu proceso de trading y te ayude a gestionar mejor tus riesgos y ganancias.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles, solo te pido me dejes una estrella si te es de utilidad.

---

Desarrollado con 💙 por **Juan David Garcia (@codavidgarcia)**
