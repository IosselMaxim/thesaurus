# Настройка Google Tag Manager в Angular приложении

## Что уже настроено

1. **GTM код добавлен в `index.html`**:
   - Скрипт GTM в `<head>`
   - Noscript код в `<body>`

2. **Создан сервис `GtmService`** (`src/app/services/gtm.service.ts`):
   - Автоматическое отслеживание навигации между страницами
   - Методы для отправки пользовательских событий
   - Методы для отслеживания кликов, форм, загрузок файлов

3. **Создана директива `GtmClickDirective`** (`src/app/directives/gtm-click.directive.ts`):
   - Автоматическое отслеживание кликов по кнопкам
   - Определение расположения кнопки

## Как использовать

### 1. Автоматическое отслеживание

Сервис автоматически отслеживает:
- Переходы между страницами (событие `page_view`)
- URL и заголовок страницы

### 2. Отслеживание кликов по кнопкам

Добавьте директиву к любой кнопке:

```html
<!-- Простое отслеживание -->
<button appGtmClick>Кнопка</button>

<!-- С пользовательскими данными -->
<button 
  appGtmClick 
  gtmEventName="cta_click"
  [gtmEventData]="{button_name: 'Заказать звонок', category: 'contact'}">
  Заказать звонок
</button>
```

### 3. Программное отслеживание событий

В компонентах используйте `GtmService`:

```typescript
import { GtmService } from '../services/gtm.service';

constructor(private gtmService: GtmService) {}

// Отслеживание клика
onButtonClick() {
  this.gtmService.pushButtonClick('Заказать звонок', 'main_page');
}

// Отслеживание отправки формы
onFormSubmit(formData: any) {
  this.gtmService.pushFormSubmit('contact_form', {
    form_type: 'contact',
    user_email: formData.email
  });
}

// Отслеживание загрузки файла
onFileDownload() {
  this.gtmService.pushFileDownload('price_list.pdf', 'pdf');
}

// Пользовательское событие
onCustomEvent() {
  this.gtmService.pushEvent('video_play', {
    video_name: 'company_presentation',
    video_duration: 120
  });
}
```

## Настройка в Google Tag Manager

### 1. Создайте триггеры для событий:

- **Page View**: `event equals page_view`
- **Button Click**: `event equals button_click`
- **Form Submit**: `event equals form_submit`
- **File Download**: `event equals file_download`

### 2. Создайте переменные для данных:

- `{{Event}}` - название события
- `{{Event - button_name}}` - название кнопки
- `{{Event - button_location}}` - расположение кнопки
- `{{Event - page_path}}` - путь страницы
- `{{Event - page_title}}` - заголовок страницы

### 3. Настройте теги:

Создайте теги Google Analytics 4 или Universal Analytics, используя созданные триггеры и переменные.

## Примеры событий

### Автоматически отслеживаемые:
```javascript
// При переходе на страницу
{
  event: 'page_view',
  page_path: '/trainings',
  page_title: 'Тренинги - Тезаурус'
}
```

### При клике на кнопку:
```javascript
{
  event: 'button_click',
  button_name: 'Заказать звонок',
  button_location: 'main_page'
}
```

### При отправке формы:
```javascript
{
  event: 'form_submit',
  form_name: 'contact_form',
  form_type: 'contact',
  user_email: 'user@example.com'
}
```

## Проверка работы

1. Откройте DevTools (F12)
2. Перейдите на вкладку Console
3. Введите: `window.dataLayer`
4. Вы должны увидеть массив с событиями GTM

## Важные замечания

- GTM ID: `GTM-W9GVNGD9`
- Сервис автоматически инициализируется при запуске приложения
- Все события отправляются в `window.dataLayer`
- Проверьте, что в GTM настроены соответствующие триггеры и теги 