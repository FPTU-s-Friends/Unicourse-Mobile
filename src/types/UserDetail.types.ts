import { View } from "react-native";

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

export interface ListRenderFavoriteProps {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  rating: number;
  user: string;
  user_url: any;
  favorite_url: any;
}

export interface StartRatingCustomProps
  extends React.ComponentProps<typeof View> {
  rating: number;
}
