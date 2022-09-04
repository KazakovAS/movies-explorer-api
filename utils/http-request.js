module.exports = {
  created: {
    status: 201,
    defaultMessage: '',
  },
  badRequest: {
    status: 400,
    defaultMessage: 'Невалидные данные',
    userData: 'Невалидные данные пользователя.',
    userId: 'Невалидный идентификатор пользователя.',
  },
  unauthorized: {
    status: 401,
    defaultMessage: 'Необходима авторизация.',
    userDoesNotExist: 'Пользователь не существует.',
    incorrectAuthData: 'Не правильный email или пароль.',
  },
  forbidden: {
    status: 403,
    defaultMessage: 'Доступ запрещен.',
  },
  notFound: {
    status: 404,
    pageMessage: 'Страница не найдена',
    defaultMessage: 'Необходима авторизация.',
    user: 'Пользователь не существует.',
    movie: 'Фильм не существует',
  },
  conflict: {
    status: 409,
    defaultMessage: '',
    emailIsUsed: 'Email занят.',
  },
  server: {
    status: 500,
    defaultMessage: 'Что-то пошло не так',
  },
  invalidId: 'Невалидный id',
  invalidLink: 'Невалидная ссылка',
};
