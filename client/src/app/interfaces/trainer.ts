export interface Trainer {
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
    Hours: number;
  };
  skills: string[];
  text: string[];
  upperEducation: string[];
  education: string[];
}
