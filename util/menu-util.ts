interface IFeature {
  name: string;
  description: string;
  icon: string;
}

export const features: IFeature[] = [
  {
    name: 'Aprovechando al maximo las ultimas especificaciones de HTML5',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: '/images/html.webp',
  },
  {
    name: 'Hojas de estilo con CSS3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: '/images/css.webp',
  },
  {
    name: 'Lo ultimo en ECMAScript 2022+',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

    icon: '/images/javascript.webp',
  },
  {
    name: 'Futuro de React en 2022',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

    icon: '/images/react.webp',
  },
];
