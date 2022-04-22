export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IFeature {
  name: string;
  description: string;
  icon: string;
}

export interface IPosts {
  posts: IPost[];
}

export interface IPost {
  _id: string;
  title: string;
  createdAt: string;
  content: string;
  author: string;
  image: string;
  slug: string;
  tags: string[];
}

export interface INavigation {
  menu: string;
  href: string;
  current: boolean;
}

export interface IDateFormat {
  year?: 'numeric' | '2-digit' | undefined;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
  weekday?: 'long' | 'short' | 'narrow' | undefined;
}

export interface IComponentProps {
  children: JSX.Element[] | JSX.Element;
}
