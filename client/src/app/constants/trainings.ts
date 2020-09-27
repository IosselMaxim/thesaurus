import {Training} from '../interfaces/training';

export const TRAININGS: Training[] = [
  {
    _id: '1',
    img: '1',
    title: 'Тренинг',
    subTitle: '«Основные управленческие навыки»',
    audience: {
      text: 'Для руководителей',
      img: 'manager'
    },
    description: [
      'Руководители начального и среднего звена (отделов, допофисов, торговых точек, подразделений, групп подразделений)'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Определять роль руководителя в отделе и организации; Организовывать свое рабочее время и рабочее время подчиненных; Эффективно ставить задачи подчиненным; Правильно делегировать полномочия; Мотивировать своих подчиненных; Использовать эффективные инструменты контроля\n' +
      '</p>',
    text: '<p>\n' +
    '  40% времени тренинга: теоретический материал<br>60% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
    '</p>\n' +
    '<p>За время тренинга участники научатся:</p>\n' +
    '<p>Определять роль руководителя в отделе и организации<br>\n' +
    '  Организовывать свое рабочее время и рабочее время подчиненных<br>\n' +
    '  Эффективно ставить задачи подчиненным<br>\n' +
    '  Правильно делегировать полномочия<br>\n' +
    '  Мотивировать своих подчиненных<br>\n' +
    '  Использовать эффективные инструменты контроля<br>\n' +
    '</p>\n' +
    '<p>Структура тренинга:</p>\n' +
    '<p>1. Роль руководителя</p>\n' +
    '<ul>\n' +
    '  <li>Основные функции руководителя\n' +
    '  <li>Управление и исполнение\n' +
    '</ul>\n' +
    '<p>2. Анализ и планирование</p>\n' +
    '<ul>\n' +
    '  <li>Анализ ситуации\n' +
    '  <li>Планирование времени\n' +
    '  <li>Выбор и расстановка приоритетов\n' +
    '</ul>\n' +
    '<p>3. Постановка задач</p>\n' +
    '<ul>\n' +
    '  <li>Организационные, функциональные и персональные цели и задачи\n' +
    '  <li>Критерии постановки задач высокого качества\n' +
    '  <li>Правильное использование методики SMART\n' +
    '  <li>Управление через постановку задач\n' +
    '</ul>\n' +
    '<p>4. Делегирование полномочий</p>\n' +
    '<ul>\n' +
    '  <li>Что такое делегирование?\n' +
    '  <li>Плюсы для руководителя и плюсы для подчиненного\n' +
    '  <li>Кому делегировать полномочия?\n' +
    '  <li>Алгоритм делегирования\n' +
    '</ul>\n' +
    '<p>5. Основы мотивации персонала</p>\n' +
    '<ul>\n' +
    '  <li>Что такое мотивация?\n' +
    '  <li>Связь мотивации с потребностями людей\n' +
    '  <li>Классический подход к мотивации\n' +
    '  <li>Современный подход к мотивации: различные мотивационные теории, их анализ и возможности применения на рабочем месте\n' +
    '  <li>Применение знаний о принципах мотивации для построения системы мотивации в подразделении\n' +
    '</ul>\n' +
    '<p>6. Процесс контроля</p>\n' +
    '<ul>\n' +
    '  <li>Виды контроля\n' +
    '  <li>Контроль выполнения задач\n' +
    '  <li>Установление стандартов эффективности\n' +
    '  <li>Корректирующие мероприятия неофициального и официального характера\n' +
    '</ul>\n',
    info: {
      online: false,
      format: 'Очный аудиторный тренинг',
      duration: 'Длительность тренинга два полных тренинговых дня с 10.00 до 18.00 с перерывами на обед и кофе-брейками'
    },
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения двухдневного тренинга “Основные управленческие навыки” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },
      people:
        {
          consistTitle: 'В стоимость участия в открытом двухдневном тренинге “Основные управленческие навыки” для частных лиц входит:',
          consist: ['Участие в двухдневном тренинге, проводимом на площадке компании “Тезаурус”', 'Сертификат о прохождении тренинга', 'Полный комплект информационных материалов по теме тренинга'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },
    }
  },
  {
    _id: '2',
    img: '2',
    title: 'Тренинг',
    subTitle: '«Активный поиск клиентов по телефону»',
    audience: {
      text: 'Для сегмента B2B',
      img: 'b2b'
    },
    description: [
      'Менеджеры по продажам, руководители отделов активных продаж, телемаркетологи, руководители отделов телемаркетинга'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Правильно понимать структуру процесса поиска Клиентов по телефону; Ставить корректные задачи на каждом этапе поиска; Проводить подготовительную работу перед звонками; Выбирать стратегию прохождения секретаря; Использовать различные техники выхода на лицо, принимающее решения (ЛПР); Правильно строить общение с ЛПР; Подводить диалог к назначению встречи\n' +
      '</p>',
    text: '<p>\n' +
    '  30% времени тренинга: теоретический материал<br>70% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
    '</p>\n' +
    '<p>За время тренинга участники научатся:</p>\n' +
    '<p>Правильно понимать структуру процесса поиска Клиентов по телефону<br>\n' +
    '  Ставить корректные задачи на каждом этапе поиска<br>\n' +
    '  Проводить подготовительную работу перед звонками<br>\n' +
    '  Выбирать стратегию прохождения секретаря<br>\n' +
    '  Использовать различные техники выхода на лицо, принимающее решения (ЛПР)<br>\n' +
    '  Правильно строить общение с ЛПР<br>\n' +
    '  Подводить диалог к назначению встречи<br>\n' +
    '</p>\n' +
    '<p>Структура тренинга:</p>\n' +
    '<p>1. Процесс поиска Клиентов по телефону</p>\n' +
    '<ul>\n' +
    '  <li>Структура процесса\n' +
    '  <li>Цели и особенности каждого этапа процесса\n' +
    '</ul>\n' +
    '<p>2. Подготовка к звонку</p>\n' +
    '<ul>\n' +
    '  <li>Психологическая подготовка\n' +
    '  <li>Сбор необходимой информации\n' +
    '  <li>Организационная подготовка\n' +
    '</ul>\n' +
    '<p>3. Прохождение секретаря</p>\n' +
    '<ul>\n' +
    '  <li>Типы секретарей\n' +
    '  <li>Выбор стратегии прохождения секретаря в зависимости от его типа\n' +
    '  <li>Приемы прохождения секретаря в рамках выбранной стратегии\n' +
    '  <li>Отработка возражений секретаря\n' +
    '  <li>Выявление «Лже-ЛПР»\n' +
    '</ul>\n' +
    '<p>4. Разговор с ЛПР</p>\n' +
    '<ul>\n' +
    '  <li>Структура разговора с ЛПР\n' +
    '  <li>Расстановка приоритетов в разговоре с ЛПР\n' +
    '  <li>Работа с возражениями и отговорками ЛПР\n' +
    '  <li>Приемы привлечения внимания и создания интереса у ЛПР\n' +
    '  <li>Подведение диалога к назначению встречи\n' +
    '</ul>\n' +
    '<p>5. Назначение встречи</p>\n' +
    '<ul>\n' +
    '  <li>Основная цель разговора с ЛПР\n' +
    '  <li>Договоренность о дальнейших действиях\n' +
    '  <li>Типичные ошибки при назначении встречи\n' +
    '  <li>Подготовка к встрече\n' +
    '</ul>',
    info: {
      online: false,
      format: 'Очный аудиторный тренинг',
      duration: 'Длительность тренинга один полный тренинговый день с 10.00 до 18.00 с перерывом на обед и кофе-брейками'
      },
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения тренинга “Активный поиск клиентов по телефону” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },

    }
  },
  {
    _id: '3',
    img: '3',
    title: 'Тренинг',
    subTitle: '«Технологии продаж в торговом зале»',
    audience: {
      text: 'Для сегмента B2C',
      img: 'b2c'
    },
    description: [
      'Розничные сотрудники ритейл-компаний, персонал торгового зала, продавцы - консультанты, сотрудники, непосредственно работающие с покупателями'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Осознавать свою роль во взаимодействии с Клиентом; Устанавливать и поддерживать контакт с Клиентом; Понимать способы и необходимость использования различных видов вопросов на разных этапах общения; Задавать правильные вопросы для выявления потребностей Клиента; Влиять на результат продажи, профессионально строя презентацию; Справляться с возражениями Клиентов; Чувствовать уверенность в своих силах\n' +
      '</p>',
    text: '<p>\n' +
      '  20% времени тренинга: теоретический материал<br>80% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
      '</p>\n' +
      '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Осознавать свою роль во взаимодействии с Клиентом<br>\n' +
      '  Устанавливать и поддерживать контакт с Клиентом<br>\n' +
      '  Понимать способы и необходимость использования различных видов вопросов на разных этапах общения<br>\n' +
      '  Задавать правильные вопросы для выявления потребностей Клиента<br>\n' +
      '  Влиять на результат продажи, профессионально строя презентацию<br>\n' +
      '  Справляться с возражениями Клиентов<br>\n' +
      '  Чувствовать уверенность в своих силах<br>\n' +
      '</p>\n' +
      '<p>Структура тренинга:</p>\n' +
      '<p>1. Процесс продажи</p>\n' +
      '<ul>\n' +
      '  <li>Подготовка и последующие этапы продажи\n' +
      '  <li>Продажи, ориентированные на Клиента\n' +
      '  <li>Аспекты подготовки. Информационная, организационно–техническая и психологическая подготовка\n' +
      '</ul>\n' +
      '<p>2. Искусство коммуникации</p>\n' +
      '<ul>\n' +
      '  <li>Установление и поддержание контакта с Клиентом\n' +
      '  <li>Вербальные характеристики: слова-паразиты, слова-раздражители, позитивность\n' +
      '  <li>Паравербальные характеристики: особенности относительных и абсолютных голосовых характеристик\n' +
      '  <li>Невербальные характеристики: зоны комфорта, язык жестов\n' +
      '  <li>Мини-презентация\n' +
      '</ul>\n' +
      '<p>3. Выявление и подтверждение потребностей Клиента</p>\n' +
      '<ul>\n' +
      '  <li>Вопросы на этапах продажи: для чего нужно задавать вопросы\n' +
      '  <li>Виды вопросов\n' +
      '  <li>Вопросы, которые не следует задавать Клиенту\n' +
      '  <li>Какую информацию необходимо собрать при выявлении потребностей\n' +
      '</ul>\n' +
      '<p>4. Формулирование и презентация предложения</p>\n' +
      '<ul>\n' +
      '  <li>Преимущество и ценность в процессе убеждения Клиента\n' +
      '  <li>Связующие фразы и использование местоимений "Вы", "Вам"\n' +
      '  <li>Правила презентации\n' +
      '  <li>Приемы усиления презентации: вовлеченность, демонстрация\n' +
      '</ul>\n' +
      '<p>5. Работа с возражениями</p>\n' +
      '<ul>\n' +
      '  <li>Возражения в процессе продажи\n' +
      '  <li>Виды возражений\n' +
      '  <li>Методы работы с возражениями\n' +
      '  <li>Эффективная работа с возражениями по цене\n' +
      '</ul>\n' +
      '<p>6. Завершение сделки</p>\n' +
      '<ul>\n' +
      '  <li>Признаки готовности Клиента к заключению сделки\n' +
      '  <li>Приемы завершения сделки\n' +
      '  <li>Создание основы для долговременных отношений с Клиентом\n' +
      '</ul>',
    info:
      {
        online: false,
        format: 'Очный аудиторный тренинг',
        duration: 'Длительность тренинга два полных тренинговых дня с 10.00 до 18.00 с перерывами на обед и кофе-брейками'
      }
    ,
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения двухдневного тренинга “Технологии продаж в торговом зале” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        }
    }
  },
  {
    _id: '4',
    img: '4',
    title: 'Тренинг',
    subTitle: '«Подбор персонала: Как подобрать себе сильных сотрудников»',
    audience: {
      text: 'Для руководителей',
      img: 'manager'
    },
    description: [
      'Собственники бизнеса, руководители подразделений, все, кто заинтересован в результате работы нанимаемых сотрудников'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Составлять профили необходимых Компании должностей; Определять компетенции нужных Компании сотрудников; Правильно анализировать резюме; Создавать алгоритм структурированного интервью; Проводить интервью по компетенциям; Определять истинную мотивацию кандидатов; Грамотно презентовать Компанию и вакантную должность; Принимать правильные решения по итогам собеседований; Обходиться без помощи профессиональных рекрутеров при найме сотрудников\n' +
      '</p>',
    text: '<p>\n' +
      '  20% времени тренинга: теоретический материал<br>80% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
      '</p>\n' +
      '<p>Преимущества тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Разносторонняя отработка навыков в практических упражнениях (деловая игра, бизнес-кейсы, дискуссия, мозговой штурм)\n' +
      '  <li>Полная информационная и методическая поддержка для выработки навыка проведения профессионального интервью\n' +
      '  <li>Проверка знаний в моделируемой ситуации из сферы Вашего бизнеса с использованием видеоанализа\n' +
      '</ul>\n' +
      '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Составлять профили необходимых Компании должностей<br>\n' +
      '  Определять компетенции нужных Компании сотрудников<br>\n' +
      '  Правильно анализировать резюме<br>\n' +
      '  Создавать алгоритм структурированного интервью<br>\n' +
      '  Проводить интервью по компетенциям<br>\n' +
      '  Определять истинную мотивацию кандидатов<br>\n' +
      '  Грамотно презентовать Компанию и вакантную должность<br>\n' +
      '  Принимать правильные решения по итогам собеседований <br>\n' +
      '  Обходиться без помощи профессиональных рекрутеров при найме сотрудников<br>\n' +
      '</p>\n' +
      '<p>Структура тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Проведение игры «Интервью с кандидатом» с целью получения рабочего материала для тренинга\n' +
      '  <li>Как грамотно составить профиль должности\n' +
      '  <li>Какие параметры важны при анализе резюме\n' +
      '  <li>6 этапов структурированного интервью\n' +
      '  <li>Что и как оценивать в интервью по компетенциям\n' +
      '  <li>Виды мотивации кандидатов\n' +
      '  <li>Как заинтересовать понравившегося вам кандидата\n' +
      '  <li>Чек-лист по итогам собеседования\n' +
      '  <li>Воронка отбора кандидатов. Как принять правильное решение\n' +
      '  <li>Проверка и закрепление полученных знаний в бизнес-кейсах\n' +
      '</ul>',
    info: {
      online: false,
      format: 'Очный аудиторный тренинг',
      duration: 'Длительность тренинга один полный тренинговый день с 10.00 до 18.00 с перерывом на обед и кофе-брейками'
    }
    ,
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения тренинга “Подбор персонала: Как подобрать себе сильных сотрудников” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },
      people: {
        consistTitle: 'В стоимость участия в открытом тренинге “Подбор персонала: Как подобрать себе сильных сотрудников” для частных лиц входит:',
        consist: ['Участие в двухдневном тренинге, проводимом на площадке компании “Тезаурус”', 'Сертификат о прохождении тренинга', 'Полный комплект информационных материалов по теме тренинга'],
        sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
      },
    }
  },
  {
    _id: '5',
    img: '5',
    title: 'Тренинг',
    subTitle: '«Эффективные переговоры»',
    audience: {
      text: 'Для сегмента B2B',
      img: 'b2b'
    },
    description: [
      'Все те, кто в силу своей профессиональной деятельности участвует в переговорах различного уровня, начиная от менеджеров по продажам и закупкам, заканчивая руководителями.'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Грамотно готовиться к переговорам и деловым встречам; Определять свои сильные и слабые стороны и использовать эти знания для влияния на собеседника; Эффективно презентовать себя и свои идеи; «Читать» собеседника и быстро менять тактику по ходу переговорного процесса; Распознавать и нейтрализовывать психологические уловки собеседника; Использовать более 15 приемов, известных в дипломатии; Достигать поставленной перед переговорами цели за минимально возможное время\n' +
      '</p>',
    text: '<p>\n' +
      '  15% времени тренинга: теоретический материал<br>85% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
      '</p>\n' +
      '<p>Преимущества тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Разносторонняя отработка навыков в практических упражнениях (деловая игра, бизнес-кейсы, дискуссия, мозговой штурм)\n' +
      '  <li>Отработка каждой детали алгоритма для формирования комплексного навыка ведения деловых переговоров\n' +
      '  <li>Проверка знаний в моделируемой стрессовой ситуации с использованием видеоанализа\n' +
      '</ul>\n' +
      '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Грамотно готовиться к переговорам и деловым встречам<br>\n' +
      '  Определять свои сильные и слабые стороны и использовать эти знания для влияния на собеседника<br>\n' +
      '  Эффективно презентовать себя и свои идеи<br>\n' +
      '  «Читать» собеседника и быстро менять тактику по ходу переговорного процесса <br>\n' +
      '  Распознавать и нейтрализовывать психологические уловки собеседника<br>\n' +
      '  Использовать более 15 приемов, известных в дипломатии<br>\n' +
      '  Достигать поставленной перед переговорами цели за минимально возможное время<br>\n' +
      '</p>\n' +
      '<p>Структура тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Проведение игры «Деловая беседа» с целью получения рабочего материала для тренинга\n' +
      '  <li>Этапы переговорного процесса, 9 правил ведения деловой беседы\n' +
      '  <li>Стратегия и тактика переговоров. Виды стратегий\n' +
      '  <li>Психотехнические приемы установления и поддержания контакта\n' +
      '  <li>«Сильная» и «слабая» позиции в переговорах. Превращение своей позиции в «сильную»\n' +
      '  <li>Грамотное построение аргументации при работе с возражениями оппонента\n' +
      '  <li>Позиции и интересы обеих сторон. Способы поведения при конфликте позиций\n' +
      '  <li>Манипулятивные техники в переговорах, психологические уловки\n' +
      '  <li>Принципы ведения конструктивных переговоров\n' +
      '  <li>Проверка и закрепление полученных знаний в деловой игре с использованием видеоанализа\n' +
      '</ul>',
    info: {
      online: false,
      format: 'Очный аудиторный тренинг',
      duration: 'Длительность тренинга два полных тренинговых дня с 10.00 до 18.00 с перерывами на обед и кофе-брейками'
    },
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения двухдневного тренинга “Эффективные переговоры” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },
      people:
        {
          consistTitle: 'В стоимость участия в открытом двухдневном тренинге “Эффективные переговоры” для частных лиц входит:',
          consist: ['Участие в двухдневном тренинге, проводимом на площадке компании “Тезаурус”', 'Сертификат о прохождении тренинга', 'Полный комплект информационных материалов по теме тренинга'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        },
    }
  },
  {
    _id: '6',
    img: '6',
    title: 'Тренинг',
    subTitle: '«Как сделать сервис клиентоориентированным»',
    audience: {
      text: 'Для сегмента B2C',
      img: 'b2c'
    },
    description: [
      'Руководители и собственники бизнеса, руководители и сотрудники подразделений и организаций, непосредственно работающих с Клиентом и оказывающих клиентский сервис'
    ],
    preview: '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Ориентироваться в способах оценки клиентской удовлетворенности; Вносить коррективы в собственную модель поведения и строить с Клиентом диалог, который будет способствовать росту клиентской удовлетворенности; Выгодно представлять услуги и сервис с учетом потребностей и психологических особенностей Клиента; Эффективно обрабатывать реальные возражения Клиентов на примерах из практики\n' +
      '</p>',
    text: '<p>\n' +
      '  20% времени тренинга: теоретический материал<br>80% времени тренинга: практические упражнения, направленные на отработку навыков обучающихся\n' +
      '</p>\n' +
      '<p>Преимущества тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Разносторонняя отработка навыков в практических упражнениях (деловая игра, бизнес-кейсы, дискуссия, мозговой штурм)\n' +
      '  <li>Возможность провести аудит качества сервисного обслуживания в своей Компании и понять, с помощью чего можно заработать больше\n' +
      '  <li>Отработка стандартов корпоративного обслуживания, которые дают возможность повышения клиентской удовлетворенности и доходности бизнеса\n' +
      '</ul>\n' +
      '<p>За время тренинга участники научатся:</p>\n' +
      '<p>Ориентироваться в способах оценки клиентской удовлетворенности<br>\n' +
      '  Вносить коррективы в собственную модель поведения и строить с Клиентом диалог, который будет способствовать росту клиентской удовлетворенности<br>\n' +
      '  Выгодно представлять услуги и сервис с учетом потребностей и психологических особенностей Клиента<br>\n' +
      '  Эффективно обрабатывать реальные возражения Клиентов на примерах из практики<br>\n' +
      '</p>\n' +
      '<p>Структура тренинга:</p>\n' +
      '<ul>\n' +
      '  <li>Качество сервисного обслуживания как одно из основных конкурентных преимуществ на рынке\n' +
      '  <li>Разбор типичных ошибок в работе с Клиентами. Что не нравится нашим Клиентам в нашем сервисе?\n' +
      '  <li>«Новые правила игры» с Вашими Клиентами. Алгоритм эффективного ведения Клиента с первых секунд общения до прощания с ним\n' +
      '  <li>Анализ качества сервиса и уровня клиентской удовлетворенности на каждом этапе\n' +
      '  <li>Продажа товара/услуг с точки зрения сервиса, отработка подачи информации как УКП (Уникального Коммерческого Предложения)\n' +
      '  <li>Отработка конкретных примеров возражений Клиентов, возникающих на разных этапах взаимодействия\n' +
      '</ul>',
    info:
      {
        online: false,
        format: 'Очный аудиторный тренинг',
        duration: 'Длительность тренинга два полных тренинговых дня с 10.00 до 18.00 с перерывами на обед и кофе-брейками'
      }
    ,
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения двухдневного тренинга «Как сделать сервис клиентоориентированным» для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов тренинга под специфику бизнеса Клиента', 'Проведение тренинга двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения тренинга', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме тренинга для каждого участника'],
          sum: 'Для уточнения стоимости тренинга свяжитесь с нашим консультантом'
        }
    }
  },
  {
    _id: '7',
    img: '7',
    title: 'Курс онлайн-тренингов',
    subTitle: '«Основные управленческие навыки»',
    audience: {
      text: 'Для руководителей',
      img: 'manager'
    },
    description: [
      'Руководители начального и среднего звена (отделов, допофисов, торговых точек, подразделений, групп подразделений)'
    ],
    preview: '<p>За время прохождения курса онлайн-тренингов участники научатся:</p>\n' +
      '<p>Определять роль руководителя в отделе и организации; Организовывать свое рабочее время и рабочее время подчиненных; Эффективно ставить задачи подчиненным; Правильно делегировать полномочия; Мотивировать своих подчиненных; Использовать эффективные инструменты контроля\n' +
      '</p>',
    text: '<p>\n' +
      '  Материал курса онлайн-тренингов "Основные управленческие навыки" соответствует материалу очного двухдневного тренинга "Основные управленческие навыки". Методика подачи материала адаптирована под онлайн-формат с максимальным сохранением эффективности относительно очного формата проведения.\n' +
      '</p>\n' +
      '<p>За время прохождения курса онлайн-тренингов участники научатся:</p>\n' +
      '<p>Определять роль руководителя в отделе и организации<br>\n' +
      '  Организовывать свое рабочее время и рабочее время подчиненных<br>\n' +
      '  Эффективно ставить задачи подчиненным<br>\n' +
      '  Правильно делегировать полномочия<br>\n' +
      '  Мотивировать своих подчиненных<br>\n' +
      '  Использовать эффективные инструменты контроля<br>\n' +
      '</p>\n' +
      '<p>Структура материала курса онлайн-тренингов:</p>\n' +
      '<p>1. Роль руководителя</p>\n' +
      '<ul>\n' +
      '  <li>Основные функции руководителя\n' +
      '  <li>Управление и исполнение\n' +
      '</ul>\n' +
      '<p>2. Анализ и планирование</p>\n' +
      '<ul>\n' +
      '  <li>Анализ ситуации\n' +
      '  <li>Планирование времени\n' +
      '  <li>Выбор и расстановка приоритетов\n' +
      '</ul>\n' +
      '<p>3. Постановка задач</p>\n' +
      '<ul>\n' +
      '  <li>Организационные, функциональные и персональные цели и задачи\n' +
      '  <li>Критерии постановки задач высокого качества\n' +
      '  <li>Правильное использование методики SMART\n' +
      '  <li>Управление через постановку задач\n' +
      '</ul>\n' +
      '<p>4. Делегирование полномочий</p>\n' +
      '<ul>\n' +
      '  <li>Что такое делегирование?\n' +
      '  <li>Плюсы для руководителя и плюсы для подчиненного\n' +
      '  <li>Кому делегировать полномочия?\n' +
      '  <li>Алгоритм делегирования\n' +
      '</ul>\n' +
      '<p>5. Основы мотивации персонала</p>\n' +
      '<ul>\n' +
      '  <li>Что такое мотивация?\n' +
      '  <li>Связь мотивации с потребностями людей\n' +
      '  <li>Классический подход к мотивации\n' +
      '  <li>Современный подход к мотивации: различные мотивационные теории, их анализ и возможности применения на рабочем месте\n' +
      '  <li>Применение знаний о принципах мотивации для построения системы мотивации в подразделении\n' +
      '</ul>\n' +
      '<p>6. Процесс контроля</p>\n' +
      '<ul>\n' +
      '  <li>Виды контроля\n' +
      '  <li>Контроль выполнения задач\n' +
      '  <li>Установление стандартов эффективности\n' +
      '  <li>Корректирующие мероприятия неофициального и официального характера\n' +
      '</ul>\n',
    info: {
      online: true,
      format: 'Онлайн-тренинг',
      duration: 'Тренинг состоит из пяти блоков длительностью по два часа'
    },
    cost: {
      company:
        {
          consistTitle: 'В стоимость проведения курса онлайн-тренингов “Основные управленческие навыки” для корпоративных Клиентов входит:',
          consist: ['Ряд мероприятий предтренинговой диагностики', 'Адаптация программы и материалов курса под специфику бизнеса Клиента', 'Проведение курса двумя бизнес-тренерами, работающими в паре', 'Предоставление отчетности и обратной связи по итогам проведения курса', 'Ряд посттренинговых мероприятий', 'Комплект информационных материалов по теме курса для каждого участника'],
          sum: 'Для уточнения стоимости курса свяжитесь с нашим консультантом'
        },
      people:
        {
          consistTitle: 'В стоимость участия в курсе онлайн-тренингов “Основные управленческие навыки” для частных лиц входит:',
          consist: ['Участие в двухдневном тренинге, проводимом на площадке компании “Тезаурус”', 'Сертификат о прохождении тренинга', 'Полный комплект информационных материалов по теме тренинга'],
          sum: 'Для уточнения стоимости участия в курсе свяжитесь с нашим консультантом'
        },
    }
  }
];

