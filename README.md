# Blog App

🖥Demo de la aplicacion publicada aqui: [Vista previa](https://blog-app-azure-chi.vercel.app/)

Este proyecto fue creado con Next.js + TypeScript + TailwindCSS

### Inicio
- ✔️Ultimo post
- ✔️Pie de pagina
- ✔️Encabezado 
    - ✔️Opciones de menu
    - ✔️Login / Logout

### Pagina de Login
- ✔️Login -> Admin / usuario registrado

### Publicaciones
- ✔️Lista de publicaciones 
- ✔️Mostrar publicaciones
- ✔️Buscador de publicaciones
- ✔️Crear publicacion
- ✔️Actualizar publicaciones

### Acerca de mi / Informacion de contacto
- Resumen corto / Biografia

### Extras: 
- ✔️Responsive
- ✔️Despliegue con Vercel
- ✔️Base de datos con MongoDB usando Atlas (version gratuita)
#
### Comando para hacer el despliegue:

```bash
npm run dev
# or
yarn dev
```

Agregar archivo .env con las siguientes variables: 
```bash
MONGO_URL=
JWT_SECRET_SEED=

NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Providers:
GITHUB_ID=
GITHUB_SECRET=
```

Los usuarios se crean por defecto con rol "client", para poder actualizar posts se necesita que esten con el rol "admin" (a nivel de base de datos se puede hacer la modificacion)