export interface IFeature {
  name: string;
  description: string;
  icon: string;
}

interface ITag {
  id: number;
  tag: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ITag[];
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
