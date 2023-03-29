# Проект «[MOVIES](https://movies.voitekhovich.nomoredomains.club/)» (frontend)

Дипломный проект [Яндекс.Практикум](https://practicum.yandex.ru/) по курсу "Web-разработчик".\
Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

https://user-images.githubusercontent.com/30049720/228648047-0b5c3594-a0c4-4466-b7a8-fadeb4d0894a.mp4

## 🕹 Функционал

* Раздел с описанием проекта и о разработчике
* Регистрация и авторизация пользователей
* Загрузка информации о фильмах по API запросу из стороннего сервиса
* Фильтрация фильмов по имени и продолжительности
* Сохранение/удаление фильма из раздела Избранное
* Редактирование профиля

## 🙄 Используемые технологии

* React
* HTML CSS JS
* Fetch API
* Адаптивная вёрстка по [макету в Figma](https://disk.yandex.ru/d/3kZ7wbwTR-twVg)
* Структура кода по [методолотгии БЭМ](https://ru.bem.info/methodology/)

## 📺 Посмотреть вживую
https://movies.voitekhovich.nomoredomains.club/

## 🛠 Запуск локально

**Зависимости:**
* Backend: https://github.com/voitekhovich/movies-explorer-api
* Node.js - 16.18.0

```
git clone https://github.com/voitekhovich/movies-explorer-frontend.git
cd movies-explorer-frontend/
npm i
echo PORT=3001 > .env
npm run start
```

## 🛠 Запуск на сервере

**Зависимости:**
* Backend: https://github.com/voitekhovich/movies-explorer-api
* Node.js - 16.18.0
* Nginx

```
git clone https://github.com/voitekhovich/movies-explorer-frontend.git

echo PORT=3001 >> ~/movies-explorer-frontend/.env
echo REACT_APP_BASE_URL='https://[YOUR_BACKEND_URL]' >> ~/movies-explorer-frontend/.env

cd ~/movies-explorer-frontend
npm i
npm run build
chmod +x ~/movies-explorer-frontend/build/
```
Настройка nginx `/etc/nginx/sites-available/default`
```
server {
      listen 80;
      server_name [YOUR_FRONT_DOMAIN];
      root /home/[YOUR_USER]/movies-explorer-frontend/build;
      location / {
                try_files $uri $uri/ /index.html;
      }
}
```
