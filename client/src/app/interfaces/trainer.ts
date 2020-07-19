export interface Trainer {
  _id: string;
  img: string;
  isMan: boolean;
  name: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  grade: string;
  expertise: string;
  experience: number;
  experienceDetail: {
    trainingsSum: number;
    studentsSum: number;
    hours: number;
  };
  skills: string[];
  text: string[];
  upperEducation: string[];
  education: string[];
}
