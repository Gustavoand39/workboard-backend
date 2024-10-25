# workboard-backend

Este proyecto es un backend para la aplicación Workboard, la cual es una aplicación de gestión de proyectos. Provee una API REST para la gestión de proyectos, tareas y usuarios.

El objetivo de este proyecto es aprender a usar Bun, Prisma, postgreSQL y Docker para la creación de aplicaciones web. Este proyecto se espera que sea complementado con un frontend construido con React en un futuro.

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
  - [Docker](#docker)
  - [Local](#local)
- [Documentación](#documentación)
- [Contribuciones](#contribuciones)

## Tecnologías

- [Bun](https://bun.sh/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalación

Para ejecutar el proyecto, puede ser posible mediante el uso de Docker o de manera local. A continuación se detallan los pasos para cada caso.

### Docker

1. Crear un archivo `.env` en la raíz del proyecto, puedes copiar el archivo `.env.example` y modificar los valores según sea necesario.
2. Ejecuta el comando `docker-compose up postgres -d` para levantar el contenedor de PostgreSQL.
3. Ahora ejecuta el script `bun prisma:deploy` para crear las tablas en la base de datos.
4. Por último, ejecuta el comando `docker-compose up backend -d` para levantar el contenedor de la aplicación.
5. El proyecto estará disponible en `http://localhost:3000`.

A través de Docker, lo único que necesitas es tener Docker instalado en tu máquina. Se recomienda usar [Docker Desktop](https://www.docker.com/products/docker-desktop/) para una mejor experiencia.

### Local

1. Crear un archivo `.env` en la raíz del proyecto, puedes copiar el archivo `.env.example` y modificar los valores según sea necesario.
2. Ejecuta el comando `bun install` para instalar las dependencias del proyecto.
3. Asegúrate de tener un servidor de PostgreSQL corriendo en tu máquina.
4. Ejecuta el script `bun prisma:deploy` para crear las tablas en la base de datos.
5. Por último, ejecuta el comando `bun dev` para levantar la aplicación o `bun dev:watch` para levantar la aplicación en modo "hot reload".
6. El proyecto estará disponible en `http://localhost:3000`.

Recuerda que necesitas tener instalado Bun y postgreSQL en tu máquina para poder ejecutar el proyecto de manera local.

## Documentación

La documentación de la API se desarrollará en un futuro en [Swagger](https://swagger.io/). Por ahora, puedes revisar los archivos en la carpeta `src/routes` para ver los endpoints disponibles.

## Contribuciones

Este proyecto es personal y no se espera que sea mantenido por un equipo de desarrollo, pero cualquier contribución es bienvenida. Si deseas contribuir, puedes hacer un fork del proyecto y enviar un pull request con tus cambios. Se revisarán y se aceptarán si cumplen con los estándares del proyecto.
