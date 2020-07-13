export interface Training {
  title: string;
  audience: {
    text: string;
    img: 'management' | 'b2b' | 'b2c' | 't&d';
  };
  description: string[];
  text: string[];
  info: {
    online: boolean;
    format: string;
    duration: string;
  };
  cost: {
    company?: CostItem;
    people?: CostItem;
  };
  date: {
    from: string;
    to: string;
  };
}


export interface CostItem {
  consistTitle: string;
  consist: string[];
  sum: number;
}
