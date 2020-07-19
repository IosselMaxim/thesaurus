export interface Training {
  _id: string;
  img: string;
  title: string; // Тренинг
  subTitle: string; // "Как начать спать по ночам"
  audience: {
    text: string;
    img: 'management' | 'b2b' | 'b2c' | 't&d' | any;
  };
  description: string[];
  preview: string[];
  text: string[];
  info: {
    online: boolean;
    format: string;
    duration: string;

    date: {
      from: string;
      to: string;
    };
  };
  cost: {
    company?: CostItem;
    people?: CostItem;
  };
}


export interface CostItem {
  consistTitle: string;
  consist: string[];
  sum: number;
}
