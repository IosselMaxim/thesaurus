export interface Training {
  img: string;
  title: string; // Тренинг
  subTitle: string; // "Как начать спать по ночам"
  audience: {
    text: string;
    img: 'management' | 'b2b' | 'b2c' | 't&d';
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
