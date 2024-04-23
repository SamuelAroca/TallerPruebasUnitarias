# README:

## Nombre integrante 1:
Samuel Aroca

## Nombre integrante 2:
Jim Díaz del Castillo

# Test Documentation

### Pasos para compilar el proyecto

1. Ejecutar en la terminal el comando npm update

### Pasos para lanzar las pruebas unitarias

1. Ejecutar en la terminal comando npm run test o npx jest

## Explicación pruebas unitarias

### **Archivo array.ts:**

- Prueba de arrayContainsValue - Contiene valor: value1:
    Esta prueba verifica si un array contiene el valor "value1" utilizando la función arrayContainsValue. Se espera que la función devuelva true si el valor está presente en el array.

- Prueba de arrayContainsValue - Contiene valor: value3:
    Esta prueba verifica si un array contiene el valor "value3" utilizando la función arrayContainsValue. Se espera que la función devuelva true si el valor está presente en el array.

- Prueba de arrayNotContainsValue - No contiene valor: UNAC:
    Esta prueba verifica si un array no contiene el valor "UNAC" utilizando la función arrayNotContainsValue. Se espera que la función devuelva true si el valor no está presente en el array.

### **Archivo div.ts:**

- Prueba de división correcta:
    Esta prueba verifica si la función div realiza una división correcta de dos números. Se proporcionan dos números válidos y se espera que la función devuelva el resultado de la división.

- Prueba controlada del error - División por cero:
    Esta prueba verifica si la función div maneja correctamente la división por cero. Se proporciona un segundo número como cero y se espera que la función arroje un error controlado.

### **Archivo multi.ts:**

- Prueba de 'n' es null:
    Esta prueba verifica si la variable n es null.

- Prueba de 'n' está definido (no es undefined):
    Esta prueba verifica si la variable n está definida y no es undefined.

- Prueba de 'number' es igual a 0:
    Esta prueba verifica si la variable number es igual a 0.

- Prueba de 'notTrue' es false:
    Esta prueba verifica si la variable notTrue es false.

-  Prueba de 'notFalse' es true:
    Esta prueba verifica si la variable notFalse es true.

### **Archivo string.ts:**

- Prueba de 'anything' contiene "UN":
    Esta prueba verifica si la variable anything contiene la subcadena "UN".

- Prueba de 'anything' no contiene "P":
    Esta prueba verifica si la variable anything no contiene la letra "P".

- Prueba de 'anything1' contiene la letra 'n':
    Esta prueba verifica si la variable anything1 contiene la letra "n".

### **Archivo sum.ts:**

- Prueba de una suma de dos valores es mayor a 10:
    Esta prueba verifica si la suma de dos valores es mayor a 10.

- Prueba de una suma de dos valores es mayor o igual a 20:
    Esta prueba verifica si la suma de dos valores es mayor o igual a 20.

- Prueba de una suma de dos valores es menor o igual a 8:
    Esta prueba verifica si la suma de dos valores es menor o igual a 8.

- Prueba de una suma de dos valores es menor a 12:
    Esta prueba verifica si la suma de dos valores es menor a 12.

- Prueba de una suma de dos valores es igual a 9:
    Esta prueba verifica si la suma de dos valores es igual a 9.
