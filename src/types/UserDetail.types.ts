export interface UserInfoTypes {
  name: string;
  avatar: any;
}

export interface DataNavigation {
  icon: string;
  title: string;
  object?: Array<ExtraInformation>;
}

export interface ExtraInformation {
  title: string;
  thumb: string;
  backgroundColor: string;
}

export interface ProgressRenderingProps {
  icon: string;
  title: string;
  description: string;
}
