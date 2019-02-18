# Rock, paper or scissors

Este proyecto es creado con la finalidad de mostrar los conocimientos obtenidos en tecnologías frontend como react.js, redux.js y socket.io, es un pequeño demo del famoso juego piedra, papel o tijeras, que incluye dos modos de juegos `"player vs computer"` y `"player vs player"` (En esta primera versión solo se acepta la conexión de 2 jugadores).


# Started Kit

La estructura inicial del proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app), ya que ofrece 0 fatiga de configuración javascript y una serie de comandos muy útiles para la gestión del proyecto.

# Get Started

* `git clone https://github.com/jmoguelruiz/react-rock-paper-scissors.git`
* `cd react-rock-paper-scissors`
* `yarn install`
* `node server`
* `yarn start`

# Structure Folder

Se utiliza la metodologia llamada _"Structure By Features"_ para la organización de carpetas ya que por lo personal es la mejor estructura con la que he adaptado los proyectos para ser escalables y mantenibles. 

[Mas información aqui.](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

```bash
.
├── src                       # Código principal.
│   ├── common                # Código reutilizable.
│       ├── components        # Componentes reutilizables de react.
├── pages                     # Cada módulo de la aplicación. Es comunmente definida por la direccion de react/router.
│   ├── game                  # Página principal. Es definida por la url por ejemplo "http://miweb.com/game".
│       ├── actions           # Acciones de redux. Listado de las diferentes acciones que pueden ocurrir en la aplicación.
│           ├── index.js      # Punto de entrada para exponer todas las acciones.
│       ├── api               # Acciones que llaman algún servicio api.
│           ├── index.js      # Punto de entrada para exponer todas las acciones api.
│       ├── components        # Componentes del módulo.
│           ├── index.js      # Punto de entrada para exponer todos los componentes.
│       ├── actionTypes.js    # Constantes que identifican las acciones a realizar.
│       ├── constants.js      # Constantes generales del módulo.
│       ├── Container.js      # Componente inteligente que interactua con redux.
│       ├── index.js          # Punto de entrada para exponer el contenido de la página (acciones, reducer, Container, etc).
│       ├── reducer.js        # Reducer de redux. El estado es alterado aqui dependiendo de las acciones.
│       ├── selectors.js      # Getters para el state de redux.
│   ├── configureStore        # Configuración del store de redux.
│   ├── index.js              # Punto de entrada para la aplicación.
```

# Librerias utilizadas

Estas son las librerias que fueron utilizadas.

|               |               |              
| ------------- | ------------- 
| [react](https://reactjs.org/) | Libreria javascript para crear interfaces robustas.
| [redux](https://es.redux.js.org/) | Contenedor predecible del estado de aplicaciónes javascript.
| [react-redux](https://github.com/reduxjs/react-redux) | Conexión de react con redux.
| [react-router](https://github.com/ReactTraining/react-router) | Enrutador para aplicaciónes con react.
| [connected-react-router](https://github.com/supasate/connected-react-router) | Un enlace Redux para React Router v4
| [reselect](https://github.com/reduxjs/reselect) | Eficiente selector del estado de redux.
| [glamor](https://github.com/threepointone/glamor) | css en tu javascript.
| [redux-thunk](https://github.com/reduxjs/redux-thunk) | Thunk middleware para Redux.
| [prop-types](https://github.com/facebook/prop-types) | Checa los props pasados a los componentes de react.
| [immutability-helper](https://github.com/kolodny/immutability-helper) | Libreria de ayuda con la immutabilidad del reducer.
| [socket.io](https://socket.io/) | Socket para interactuar en tiempo real con los jugadores.

#Preview

[video](https://www.youtube.com/watch?v=vdlN9Rp6xqw)



