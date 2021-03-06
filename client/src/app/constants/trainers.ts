import {Trainer} from '../interfaces/trainer';

export const TRAINERS: Trainer[] = [{
  _id: '1',
  img: 'solovova',
  isMan: false,
  name: {
    firstName: 'Светлана',
    lastName: 'Соловова',
    middleName: ''
  },
  grade: 'Сертифицированный бизнес-тренер',
  expertise: 'Эксперт в области управления персоналом, построения системы обучения и развития персонала в организации',
  experience: 15,
  experienceDetail: {
    trainingsSum: 900,
    studentsSum: 6000,
    hours: 10000,
  },
  skills: ['Построение системы обучения в организации', 'Подбор, обучение и оценка персонала', 'Проектирование и запуск бизнес-процессов', 'Управление персоналом в организации', 'Разработка и проведение тренингов по развитию управленческих компетенций', 'Разработка и проведение тренингов по развитию личностных и коммуникативных компетенций', 'Разработка и внедрение корпоративных стандартов', 'Разработка и проведение тренинов по сервису в сегменте “Люкс”', 'Управленческий опыт в различных сферах бизнеса'],
  text: ['Бизнес-тренер, эксперт-практик в области подбора, обучения и оценки персонала, разработки и внедрения корпоративных стандартов. Более 15 лет управленческой практики, разработки и проведения тренингов по развитию личностных, коммуникативных и управленческих компетенций. Опыт в различных сферах бизнеса.'],
  upperEducation: ['“Академия Практической Психологии” на базе Психологического факультета МГУ им. М. В. Ломоносова (диплом по професcии “Бизнес-тренер”)', 'Группа компаний «Основы Вашего Бизнеса», Курс «Современные технологии оценки и аттестации персонала»', 'Психологический ф-т МГУ им. М.В. Ломоносова, спецкурс Ю. Б. Гиппенрейтер «Практик нейро-лингвистического программирования»', 'АНО «Учебный центр маркетинга, менеджмента, инжиниринга», курс «Современные требования к деятельности отдела персонала»', 'НП «Международная ассоциация непрерывного образования», курс «Школа Директора по персоналу»'],
  education: ['Практическая психология менеджмента и организационного развития (МГУ им. М. В. Ломоносова)'],
  clientsText: 'Лично обучала сотрудников Компаний:',
  clients: ['taganka', 'inrover', 'tehnosila', 'puratos', 'pego', 'unisail', 'braas', 'detmir', 'teboil', 'aeros', 'salon']
},
  {
    _id: '2',
    img: 'chugunov',
    isMan: true,
    name: {
      firstName: 'Вадим',
      lastName: 'Чугунов',
      middleName: ''
    },
    grade: 'Сертифицированный бизнес-тренер',
    expertise: 'Эксперт в области разработки тренинговых программ и решения бизнес-задач через обучение',
    experience: 11,
    experienceDetail: {
      trainingsSum: 700,
      studentsSum: 5000,
      hours: 8000,
    },
    skills: ['Построение системы обучения в организации', 'Разработка комплексных обучающих программ', 'Проектирование и запуск бизнес-процессов', 'Диагностика эффективности обучения', 'Разработка и проведение тренингов по развитию управленческих компетенций', 'Разработка и проведение тренингов по развитию личностных и коммуникативных компетенций', 'Разработка и проведение тренингов по продажам в сегментах B2B и B2C', 'Разработка и внедрение корпоративных стандартов'],
    text: ['Бизнес-тренер, эксперт-практик в области разработки обучающих программ под конкретные задачи бизнеса. Более 10 лет опыта решения комплексных задач в области обучения, начиная с диагностики и выбора обучающей стратегии, заканчивая оценкой полученных результатов. Опыт разработки и проведения тренингов как для руководителей различного уровня, так и для непосредственных исполнителей.'],
    upperEducation: ['Moscow Business School (программа “Построение системы обучения в компании”, государственное удостоверение о повышении квалификации)', 'European Trainers School “Queen Media”, (Trainer’s program, certificate “Business-trainer”)', 'Moscow Business School (семинар “Директор по обучению и развитию персонала”, сертификат)', 'Moscow Business School (семинар “Коучинг”, сертификат)', 'Moscow Business School (программа “Технологии проведения бизнес-тренингов”, государственное удостоверение о повышении квалификации)', 'НОУ ДО “Институт “Гармония” (программа профессиональной подготовки “Школа тренеров”, 400 ак. часов, диплом по профессии “Бизнес-тренер”)'],
    education: ['Психология управления и менеджмента (РГПУ им. А. И. Герцена)'],
    clientsText: 'Лично обучал сотрудников Компаний:',
    clients: ['spb', 'konsul', 'life', 'js', 'planet', 'defo', 'kodex', 'guess', 'adamas']
  },
  {
    _id: '3',
    img: 'modin',
    isMan: true,
    name: {
      firstName: 'Дмитрий',
      lastName: 'Модин',
      middleName: ''
    },
    grade: 'Сертифицированный бизнес-тренер',
    expertise: 'Эксперт в области развития персонала и применения современных технологий в бизнес-обучении',
    experience: 10,
    experienceDetail: {
      trainingsSum: 600,
      studentsSum: 5000,
      hours: 7000,
    },
    skills: ['Построение системы обучения в организации', 'Разработка групповых и индивидуальных обучающих программ', 'Проектирование и запуск бизнес-процессов', 'Повышение индивидуальной эффективности сотрудников', 'Разработка и проведение тренингов по развитию управленческих компетенций', 'Разработка и проведение тренингов по развитию личностных и коммуникативных компетенций', 'Разработка и проведение тренингов по продажам в сегментах B2B и B2C', 'Разработка и проведение тренингов по сервису в различных сегментах'],
    text: ['Бизнес-тренер, эксперт-практик в области применения современных методик обучения и развития персонала. Более 10 лет опыта групповой и индивидуальной работы с сотрудниками различного уровня во многих сферах бизнеса. Опыт разработки групповых и индивидуальных обучающих программ с учетом наиболее актуальных тенденций в области T&D.'],
    upperEducation: ['International Consortium for Agile (программа “Agile”, сертификат)', 'Insight Group (тренинг “Мастерство визуализации”, сертификат)', 'Global Headway (программа "Мастерство тренера. Продвинутый уровень", сертификат)', 'Академия Брайана Трейси (тренинг Эффективные продажи", сертификат)', 'Михаил Молоканов (тренинг ”Применение типологии DISC в тренинге”, сертификат)', 'Высшая школа психологии при ИП РАН г. Москва (Программа обучения "Подготовка бизнес-тренеров", 200 ак. часов, диплом по профессии “Бизнес-тренер”)'],
    education: ['Психология (МУПОЧ "Дубна")'],
    clientsText: 'Лично обучал сотрудников Компаний:',
    clients: ['avangard', 'gazprom', 'alfa', 'uralsib', 'amatis', 'sbc', 'dino', 'cep', 'volga']
  }
];
