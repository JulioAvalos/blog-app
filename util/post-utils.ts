import { IPost } from '../interfaces';

export const posts: IPost[] = [
  {
    id: 1,
    title: 'AngularJS cierra para siempre en 2022',
    image: '/images/placeholders/angular.jpg',
    author: 'Julio Avalos',
    createdAt: 'Marzo 29, 2022',
    content:
      'AngularJS es un framework altamente estable para crear aplicaciones WEB y ha sido utilizado por millones de desarrolladores. Su sucesor Angular utiliza la misma filosofía como las platillas declarativas y la inyección de dependencias. La última versión de AngularJS se lanzó el 1 de julio de 2018 entrando a un periodo de soporte de 3 años, los cuales concluyen este próximo 31 de diciembre. Google te invitan a migrar tus aplicaciones a la plataforma de Angular',
    urlSlug: 'angular-cierra-para-siempre-en-2022',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'angular',
      },
    ],
  },
  {
    id: 7,
    title: 'TypeScript 4.7 agregar soporte a modulos de ECMAScript (ESM)',
    image: '/images/placeholders/nodejs.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 5, 2022',
    content:
      'TypeScript 4.7 en fase beta ahora ofrece soporte para manejar modulos de ECMAScript en las versions de node 12+, asi como tambien mejoras considerables a nivel de codigo. Lanzado el 8 de abril, una mejora considerable que se tenia previsto en la version 4.5 el anio pasado, pero que fue demorada. Se espera que su version de release candidate salga el 10 de mayo y su version final el 24 de mayo. para acceder a esta version se puede hacer ejecutando el comando npm install typescript@beta',
    urlSlug: 'typescript-4.7-agregar-soporte-a-modulos-de-ecmascript-(ESM)',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'nodejs',
      },
    ],
  },
  {
    id: 3,
    title:
      'Java 18 introduce nuevas caracteristicas para accelerar su desarrollo',
    image: '/images/placeholders/java.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 9, 2022',
    content:
      'Con Java 18, Oracle espera introducir varias caracteristicas que permitan facilitar el desarrollo de aplicaciones empresariales. La version 18 se hizo disponible a todo publico el 22 de marzo. Esta version sigue a Java 17, la cual es de soporte a largo plazo (LTS), con la diferencia que cada seis meses van agregando mas optimizaciones y actualizaciones a las librerias de codigo, asi como vistas previas de tecnologias que estan en desarrollo pero no listas aun para estar puestas en produccion. "Tomamos como orgullo el avance que tiene este ecosistema" Afirma Chad Arimura, vice presidente de relaciones en Oracle para desarrolladores Java. Este lenguaje tiene 10 millones de desarrolladores sin importar como lo veamos, demostrando que ha sido una de las tecnologias existosas en la historia. La nueva version agrega un servidor web simple e integrado para probar aplicaciones, antes de esta version era necesario otro servidor web aparte como ngnix o apache para correr el codigo. Con esta nueva integracion solo se pretende hacer pruebas rapidas, pero el suplantar las anteriores, ya que con esto permite que se desarrolle mas facilmente, afirma Arimura. Otra mejora que incluye es a nivel de documentacion, ahora agregando Scripts o fragmentos de codigo para que cada desarrollador tenga mas claro la funcion que hace cada libreria en el core de Java ',
    urlSlug:
      'java-18-introduce-nuevas-caracteristicas-para-accelerar-su-desarrollo',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'java',
      },
    ],
  },
  {
    id: 4,
    title: 'Como cambiar de color de la fuente usando CSS',
    image: '/images/placeholders/tag.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 9, 2022',
    content:
      'Buscas agregar estilos de colores diferentes a tu sitio? estas de suerte! puedes hacer esto haciendo uso de las hojas de estilo en cascada (CSS). Hay tres formas de aplicarlo. Metodo uno: CSS en linea. Este metodo indica que defines el estilo a cambiar usando la propiedad style, lo aplicas de la siguiente forma: <p style="color: red;">Hola mundo</p>. Metodo dos: Hojas CSS embebidas. defines el estilo en la misma pagina html solo que aparte en etiquetas <style></style>. De la siguiente forma: <head> <style> p { color: blue } </style></head>. Metodo tres: Hoja CSS Externa: defines un archivo con extension .css, una practica es llamarlo como styles.css, pero el nombre siempre queda a discrecion del programador, defines el archivo y pegas esta linea p { color: blue }. luego en tu hoja de estilo lo importas haciendo uso de este codigo: <html><head> <link rel="stylesheet" href="stylesheet.css"> </head> <body> <p>Paragraph of text</p> </body> </html>. y eso seria todo!',
    urlSlug: 'como-cambiar-de-color-de-la-fuente-usando-css',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'css',
      },
    ],
  },
  {
    id: 5,
    title: 'Fundador de Docker lanza nueva plataforma DevOps',
    image: '/images/placeholders/code.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 12, 2022',
    content:
      'Fue hace cuatro anios cuando Solomon Hykes, fundador de Docker se fue de la compania que revolucion la industria de la contenerizacion para empezar otro negocio. El Fundador ha estado trabajando en nueva startup, Dagger, la cual espera lanza al publico 30 de marzo 2022, anunciando una ronda de investion de $20 millones. "Dagger sera una plataforma hibrida, ya que habra su parte opensource la cual esperamos lanzar pronto y otra opcional con servicio de cloud que estara bien integrada con esta plataforma. de igual manera consideramos que siempre mantendriamos la parte open source para siempre estar en comunicacion con la comunidad y sientan que esta tecnologia los puede apoyar y hacer mas facil sus procesos de DevOps" explica Hykes. Por ahora el equipo se enfoca en lanzar primeramente el nucleo del sistema open source para ver cuales son los puntos de mejora que podrian tener.',
    urlSlug: 'fundador-de-docker-lanza-nueva-plataforma-devops',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'docker',
      },
    ],
  },
  {
    id: 6,
    title: 'React 18 ahora disponible en npm',
    image: '/images/placeholders/react.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 14, 2022',
    content:
      'Esta version tiene mejoras en uso de concurrencia, uso de Suspense para manejo de carga condicionada, los framework como Relay, Next.js o Remix ya tienen habilitada esta opcion en su ultima version por defecto. Actualizacion de estados por lotes evitando refrescamientos innecesarios, optimizando mas nuestras aplicaciones Frontend, y un nuevo directorio raiz para renderizar la interfaz. Para migrar las aplicaciones se debe hacer uso de la api createRoot para que utilice las nuevas capacidades de la version 18. Se puede instalar React 18 con el comando npm install react@latest. ',
    urlSlug: 'react-18-ahora-disponible-en-npm',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'react',
      },
    ],
  },
  {
    id: 7,
    title: 'JavaScript esta en todos lados',
    image: '/images/placeholders/javascript.jpg',
    author: 'Julio Avalos',
    createdAt: 'Abril 16, 2022',
    content:
      'Similar a Java "Escribe una vez y corre en cualquiera lado" ha logrado posicionarse en el mercado gracias a la proliferacion de los navegadores. Incluso con la ventaja de desarrollar aplicaciones backend con Node.js o incluso con Electron para hacer aplicaciones de esctritorio, lo ha hecho un lenguaje que poco a poco va ganando mas traccion a medida pasa el tiempo',
    urlSlug: 'javascript-esta-en-todos-lados-incluso-en-msdos',
    tags: [
      {
        id: 1,
        tag: 'programacion',
      },
      {
        id: 2,
        tag: 'tecnologia',
      },
      {
        id: 3,
        tag: 'javascript',
      },
    ],
  },
];
