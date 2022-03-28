interface ITag {
  id: number;
  tag: string;
}

interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ITag[];
}

export const posts: IPost[] = [
  {
    id: 1,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
  {
    id: 2,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
  {
    id: 3,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
  {
    id: 4,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
  {
    id: 5,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
  {
    id: 6,
    title: 'Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    tags: [
      {
        id: 1,
        tag: 'photography',
      },
      {
        id: 2,
        tag: 'travel',
      },
      {
        id: 3,
        tag: 'winter',
      },
    ],
  },
];
