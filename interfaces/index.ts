export interface IFeature {
  name: string;
  description: string;
  icon: string;
}

export interface ITag {
  id: number;
  tag: string;
}

export interface IPosts {
  posts: IPost[];
}

export interface IPost {
  id: number;
  title: string;
  createdAt: string;
  content?: string;
  author?: string;
  image?: string;
  urlSlug?: string;
  tags?: ITag[];
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
