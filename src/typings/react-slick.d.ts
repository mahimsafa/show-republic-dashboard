declare module 'react-slick' {
    import * as React from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      nextArrow?: React.ReactElement;
      prevArrow?: React.ReactElement;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  