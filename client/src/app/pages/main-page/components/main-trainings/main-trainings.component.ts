import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-trainings',
  templateUrl: './main-trainings.component.html',
  styleUrls: ['./main-trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainTrainingsComponent {

  trainings = [
    {
      title: 'ТРЕНИНГИ ДЛЯ РУКОВОДИТЕЛЕЙ',
      img: 'managers',
      trainingsList: [
        {
          name: '«Основные управленческие навыки»'
        },
        {
          name: '«Стратегическое управленческое решение»'
        }
      ]
    },
    {
      title: 'ТРЕНИНГИ ДЛЯ СЕГМЕНТА B2B',
      img: 'b2b',
      trainingsList: [
        {
          name: '«Активный поиск клиентов по телефону»'
        },
        {
          name: '«Технологии ведения деловых переговоров»'
        }
      ]
    },
    {
      title: 'ТРЕНИНГИ ДЛЯ СЕГМЕНТА B2C',
      img: 'b2c',
      trainingsList: [
        {
          name: '«Технологии продаж в торговом зале»'
        },
        {
          name: '«Как сделать сервис клиентоориентированным»'
        }
      ]
    },
  ];

}
