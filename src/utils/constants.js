const { REACT_APP_BASE_URL = "http://localhost:3000" } = process.env;

export const BEATFILM_API_URL = "https://api.nomoreparties.co";
export const MAIN_API_URL = REACT_APP_BASE_URL;

export const namePattern = {
  pattern: "^[A-Za-zА-Яа-яЁё\\s-]+$",
  title: "Поле содержит только латиницу, кириллицу, пробел или дефис",
};

export const DATA_NOT_FOUND = "Ничего не найдено";
export const NEED_KEY_WORD = "Нужно ввести ключевое слово";
export const GET_DATA_ERROR =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

export const MESSAGE_CONFLICT_EMAIL = "Такой e-mail уже существует";
export const MESSAGE_INCORRECT_USER_DATA =
  "Переданы некорректные данные пользователя";
export const MESSAGE_INCORRECT_EMAIL_OR_PASS = "Неправильный email или пароль";

export const LOGIN_FORM_TITLE = "Рады видеть!";
export const LOGIN_FORM_REGISTER_TITLE = "Ещё не зарегистрированы?";

export const REGISTR_FORM_TITLE = "Добро пожаловать!";
export const REGISTR_FORM_SUBMIT_TITLE = "Зарегистрироваться";
export const REGISTR_FORM_LOGIN_TITLE = "Уже зарегистрированы?";

export const PAGE_NOT_FOUND_TITLE = "404";
export const PAGE_NOT_FOUND_DESCRIPTION = "Страница не найдена";
export const PAGE_NOT_BACK_BUTTON_TITLE = "Назад";

export const PROFILE_WELCOM_TITLE = "Привет";
export const PROFILE_SUBMIT_TITLE = "Редактировать";

export const MOVIES_CARD_DURATION_HOURS = "ч";
export const MOVIES_CARD_DURATION_MINUTES = "м";

export const FORM_NAME_INPUT_PLACEHOLDER = "Имя";
export const FORM_EMAIL_INPUT_PLACEHOLDER = "E-mail";
export const FORM_PASSWD_INPUT_PLACEHOLDER = "Пароль";

export const LINK_MAIN_TITLE = "Главная";
export const LINK_MOVIES_TITLE = "Фильмы";
export const LINK_SAVED_MOVIES_TITLE = "Сохранённые фильмы";
export const LINK_PROFILE_TITLE = "Аккаунт";
export const LINK_SIGNUP_TITLE = "Регистрация";
export const LINK_SIGNIN_TITLE = "Войти";
export const LINK_SIGNOUT_TITLE = "Выйти из аккаунта";
export const MORE_CARDS_BUTTON__TITLE = "Ещё";

export const FILTER_CHECKBOX_TITLE = "Короткометражки";
