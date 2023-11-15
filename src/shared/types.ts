// Create ENUM
export enum SelectedPage {
  Home = "home",
  Tours = "tours",
  CultureAndFood = "cultureandfood",
  ContactUs = "contactus",
}

export interface TourType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface CultureAndFoodType {
  name: string;
  image: string;
  description?: string;
}