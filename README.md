# FE-MCGA

## 🚀 ¿Que es Redux? - Resumen.

Permite manejar el 'State' de una aplicacion, para que sea mas facil mantener conforme va creciendo.
Tambien te ayuda a manejar los datos, conforme el Usuario realiza diferentes acciones.

## Caracteristicas de Redux.

- Solo se tiene un State principal.
- El State cambia de acuerdo a lo que sucede en la interfaz de Usuario.
- Solo ciertas funciones cambian el State.
- El Usuario es el que utiliza estas funciones y cambia el state.
- Solo se realiza un cambio a la vez.

## Principios de Redux.

- Solo existe un Store con todo el State de la Aplicacion.
- Los Componentes / Vistas no modifican el State directamente.
- El State modifica por medio de funciones.
- Store: Contiene el State (Un State por Aplicacion).
- Dispatch: Ejecuta una Accion que actualizara el State.
- Action: Son Objetos (js), tienen un Tipo y un Payload (Datos).
- Subscribe: Similar a un Event Listener para el State.
- Reducers: Funciones, saben que hacer con las Acciones y el Payload.

![image](https://user-images.githubusercontent.com/24545141/140233398-09735dd7-71aa-4cc0-926b-3710d0b59045.png)

## ¿Como instalar la Aplicacion?

```sh

git clone git@github.com:bonino97/FE-MCGA.git

cd FE-MCGA

npm i
```

## ¿Como correr Localmente la Aplicacion?

```sh
npm start
```

---

## Desarrollo de Front-End

### Walter Alfonso: recurso `product`

- Acceso a los métodos CRUD - MongoDB:

![Dasboard](https://raw.githubusercontent.com/bonino97/FE-MCGA/products/src/assets/dashboard.png)

1.  _Productos - Obtener todos los productos_

`addProduct` -> _Productos - Agregar producto_ 2. `updateProduct` -> _Productos - Actualizar datos del producto_ 3. `deleteProduct` -> _Productos - Borrar producto por el Id_ 4. 5. `getProductById` -> _Productos - Obtener un producto por el Id_ 6. `getProductByCategory` -> _Productos - Obtener productos por Categoría_
