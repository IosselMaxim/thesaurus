# Тестирование Google Tag Manager

## Как проверить, что GTM работает

### 1. Проверка загрузки GTM

1. Откройте сайт в браузере
2. Нажмите F12 для открытия DevTools
3. Перейдите на вкладку **Console**
4. Введите команду: `window.dataLayer`
5. Вы должны увидеть массив с данными GTM

### 2. Проверка событий навигации

1. Перейдите на любую страницу сайта
2. В консоли введите: `window.dataLayer`
3. Найдите событие с `event: 'page_view'`
4. Проверьте, что `page_path` соответствует URL страницы

### 3. Проверка кликов по кнопкам

1. Перейдите на главную страницу
2. Нажмите на кнопку "КАТАЛОГ ТРЕНИНГОВ"
3. В консоли проверьте новое событие:
   ```javascript
   {
     event: 'cta_click',
     button_name: 'Каталог тренингов',
     category: 'main_cta',
     location: 'hero_section'
   }
   ```

### 4. Проверка кликов по навигации

1. На главной странице нажмите на любую кнопку в верхнем меню
2. Проверьте событие:
   ```javascript
   {
     event: 'navigation_click',
     button_name: 'Название кнопки',
     category: 'main_navigation',
     location: 'top_menu'
   }
   ```

### 5. Проверка клика по email

1. Перейдите на страницу контактов
2. Нажмите на email адрес
3. Проверьте событие:
   ```javascript
   {
     event: 'email_click',
     email_type: 'contact',
     email_address: 'welcome@thesaurus-trainings.ru',
     page_location: 'contact_page'
   }
   ```

## Использование Google Tag Manager Preview

### 1. Включение режима предварительного просмотра

1. Зайдите в Google Tag Manager
2. Нажмите кнопку **Preview** в правом верхнем углу
3. Введите URL вашего сайта
4. Нажмите **Start**

### 2. Тестирование на сайте

1. Откройте сайт в новом окне
2. Вы увидите панель GTM Preview внизу экрана
3. Выполните действия на сайте (клики, переходы)
4. В панели будут отображаться все события

### 3. Проверка триггеров

В панели Preview вы увидите:
- **Tags Fired** - сработавшие теги
- **Variables** - значения переменных
- **Data Layer** - данные, отправленные в dataLayer

## Настройка триггеров в GTM

### 1. Триггер для просмотра страниц

```
Тип: Custom Event
Событие: page_view
```

### 2. Триггер для кликов по кнопкам

```
Тип: Custom Event
Событие: cta_click
```

### 3. Триггер для навигации

```
Тип: Custom Event
Событие: navigation_click
```

### 4. Триггер для email кликов

```
Тип: Custom Event
Событие: email_click
```

## Переменные для использования

### 1. Основные переменные

- `{{Event}}` - название события
- `{{Event - page_path}}` - путь страницы
- `{{Event - page_title}}` - заголовок страницы

### 2. Переменные для кнопок

- `{{Event - button_name}}` - название кнопки
- `{{Event - button_location}}` - расположение кнопки
- `{{Event - category}}` - категория кнопки

### 3. Переменные для email

- `{{Event - email_type}}` - тип email
- `{{Event - email_address}}` - адрес email
- `{{Event - page_location}}` - расположение на странице

## Примеры тегов

### 1. Google Analytics 4 - Page Views

```
Тип: Google Analytics: GA4 Configuration
Триггер: page_view
Измерение ID: G-XXXXXXXXXX
```

### 2. Google Analytics 4 - Button Clicks

```
Тип: Google Analytics: GA4 Event
Триггер: cta_click
Измерение ID: G-XXXXXXXXXX
Параметры:
- event_name: button_click
- button_name: {{Event - button_name}}
- button_category: {{Event - category}}
```

### 3. Google Analytics 4 - Email Clicks

```
Тип: Google Analytics: GA4 Event
Триггер: email_click
Измерение ID: G-XXXXXXXXXX
Параметры:
- event_name: email_click
- email_type: {{Event - email_type}}
- email_address: {{Event - email_address}}
```

## Устранение неполадок

### 1. GTM не загружается

- Проверьте, что код GTM добавлен в `index.html`
- Проверьте ID контейнера: `GTM-W9GVNGD9`
- Проверьте консоль на ошибки JavaScript

### 2. События не отправляются

- Проверьте, что `window.dataLayer` существует
- Проверьте, что сервис `GtmService` инициализирован
- Проверьте консоль на ошибки TypeScript

### 3. События не видны в GTM

- Проверьте настройки триггеров
- Используйте режим Preview для отладки
- Проверьте, что теги правильно настроены

## Полезные команды для отладки

```javascript
// Проверить dataLayer
console.log(window.dataLayer);

// Проверить последнее событие
console.log(window.dataLayer[window.dataLayer.length - 1]);

// Очистить dataLayer (для тестирования)
window.dataLayer = [];

// Проверить, что GTM загружен
console.log(window.google_tag_manager);
``` 