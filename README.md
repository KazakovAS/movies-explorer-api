[![linting](https://github.com/KazakovAS/movies-explorer-api/actions/workflows/linting.yml/badge.svg)](https://github.com/KazakovAS/movies-explorer-api/actions/workflows/linting.yml)
[![deploy](https://github.com/KazakovAS/movies-explorer-api/actions/workflows/deploy.yml/badge.svg)](https://github.com/KazakovAS/movies-explorer-api/actions/workflows/deploy.yml)

# Movies Explorer

Бэкенд SPA-приложения Movie Explorer.

## Ссылки:

-   [Демо](https://api.lerush.nomoredomains.sbs).
-   [Movies Explorer Frontend](https://github.com/KazakovAS/movies-explorer-frontend).

## Окружение и инструменты:

-   [Node.js](https://nodejs.org/en/) `16.17.0` и версия npm идущая в комплекте, если у вас установлена другая версия Node.js, вы можете использовать [nvm](https://github.com/nvm-sh/nvm) для переключения на нужную.
-   [Express](https://expressjs.com/ru/)
-   [jest](https://jestjs.io/ru/) - Unit-тесты.
-   [SuperTest](https://github.com/visionmedia/supertest) - Тестирование запросов.
-   [MongoDB](https://www.mongodb.com/docs/) `4.4.5` - База данных.
-   [Mongoose](https://mongoosejs.com/) - Создание схем и моделей.
-   [celebrate](https://github.com/arb/celebrate) - Валидация запроса.
-   [validator](https://github.com/validatorjs/validator.js) - Валидация схемы.
-   [winston](https://github.com/winstonjs/winston) - Логи.
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Для работы с JWT.
-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Для хеширования.
-   [dotenv](https://github.com/motdotla/dotenv) - Для работы с переменными окружения.
-   [cors](https://github.com/expressjs/cors) - Мидлвар для CORS.
-   [body-parser](https://www.npmjs.com/package/body-parser) - Мидлвар для работы с телом запроса.
-   [helmet](https://www.npmjs.com/package/helmet) - Мидлвар установки безопасных HTTP-заголовков.
-   [express-rate-limit](https://github.com/nfriedly/express-rate-limit) - Мидлвар защиты от брутфорса.

## Как запустить локально:

1. Клонировать репозиторий.
2. Сделать копию файла `.env.example`, переименовать его в `.env` и задать в нём переменные окружения:
    - `NODE_ENV` - окружение;
    - `JWT_SECRET` - секретный ключ верификации.
3. Установить [MongoDB](https://www.mongodb.com/docs/) версии `4.4.5` и запустить командой `mongod`.
4. Установить зависимости командой `npm i`.
5. Запустить локальный веб-сервер командой `npm run dev`.

## Команды:

`npm run dev` - Запуск локальной разработки с hot-reload на 3000 порту.

`npm run deploy` - Деплой на прод.

`npm run editorconfig` - Линтинг файлов согласно editorconfig.

`npm run eslint` - Линтинг javascript.

`npm run lint` - Линтинг всех видов.

`npm run test` - Прогнать unit-тесты.

## API

| Запрос | Роут        | Защищен | Описание                                                                                                                                |
| :----- | :---------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /users/me   | Да      | Возвращает информацию о текущем пользователе (email и имя)                                                                              |
| PATCH  | /users/me   | Да      | Обновляет информацию текущего пользователя (email и имя)                                                                                |
| DELETE | /movies/:id | Да      | Удаляет сохранённый фильм по id                                                                                                         |
| GET    | /movies     | Да      | Возвращает все сохранённые текущим пользователем фильмы                                                                                 |
| POST   | /movies     | Да      | Создаёт фильм с переданными в теле: country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail и movieId |
| POST   | /signup     | Нет     | Создаёт пользователя с переданными в теле: email, password и name                                                                       |
| POST   | /signin     | Нет     | Проверяет переданные в теле почту и пароль, возвращает JWT и авторизирует пользователя                                                  |

## Файловая структура:

-   `controllers` - Бизнес-логика.
-   `errors` - Классы ошибок.
-   `middlewares` - Промежуточные обработчики.
-   `models` - Описание схем.
-   `routes` - Роуты проекта.
-   `utils` - Утилитарные функции и глобальные константы.
-   `app.js` - Точка входа.

## Соглашения:

-   [JS Style Guide](https://github.com/airbnb/javascript)
