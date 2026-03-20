Challenge Mariano J. Muzas Roa.
Angular CLI       : 21.2.2
Node.js           : 24.14.0
Package Manager   : npm 11.9.0
Operating System  : win32 x64
Boottsrap: 5.3

Metodología BEM cuando ha sido necesario. Por ejemplo en el aside, cards, title, footer.
Hay algunas variables que tienen el mismo color, no las he unificado pensando que en un proyecto real alguno de estos colores podría cambiar. Pero esto en un contexto profesional tendría que ser confirmado antes de unificar variables o no.
HTML5, SASS, 100% responsive.
He usado PX y rem para mostrar el manejo de ambos.
No he podido terminar el desplegable de las cards y el mockeo de datos.

Ramas usadas:
17-03-header-nav |
18-03-footer |
18-03-carousel |
18-03-title |
18-03-aside |
20-03-grid-cards |
develope |

Se puede ver el proyecto completo en rama: develope

Pasos para la visualización dle proyecto en local:

    Clonar el repositorio
    Descarga el proyecto en la terminal:
    Bash

    git clone https://github.com/MuzasMariano/challenge-mariano-j-muzas.git

    Entrar al directorio usando la terminal.
    Muévete a la carpeta que se acaba de crear:

    cd challenge-mariano-j-muzas

    Instalar dependencias
    npm install

    Levantar el servidor local

    npm start

    (O también puedes usar ng serve si tienes el CLI instalado globalmente).

    Ver el proyecto:
    Una vez que la terminal indique que la compilación fue exitosa, abre http://localhost:4200

# ChallengeMarianoJMuzas

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
