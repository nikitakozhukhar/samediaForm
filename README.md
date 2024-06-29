[![Build status](https://ci.appveyor.com/api/projects/status/fsotcys3bnhkew8l?svg=true)](https://ci.appveyor.com/project/nikitakozhukhar/samediaform)

https://nikitakozhukhar.github.io/samediaForm/ - посмотреть результат на GH-pages

# Тестовое задание для SAMEDIA. Создание формы авторизации

1. Требования БЭМ
для построения разметки, необходимо использовать методолгоию БЭМ

2. JS
Необходимо использовать чистый Js, без использования jquery и библиотек

Для отправки запросов на сервер используйте fetcth

3. API
   Для работы с API использовать:
* Api url:   https://test-works.pr-uni.ru/api/login
* Пример ответа с ошибкой: https://test-works.pr-uni.ru/upload/json/api/login/error.json
* Пример ответа с успехом: https://test-works.pr-uni.ru/upload/json/api/login/success.json

Корректные доступы для авторизации:

e-mail: hr@samedia.ru
телефон: +7 (863) 303-36-65
пароль: q10O57H25O82E40y95D12a85U96A4U34

Пример GET запроса:

https://test-works.pr-uni.ru/api/login/index.php?login=hr@samedia.ru&password=q10O57H25O46a85fU96A4U34

4. Обработка ошибок и валидация
Сервер может возвращать ошибки, нужно это обрабатывать и отображать в интерфейсе

5. Состояния ожидания
Нужно проработать состояние когда пользователь нажал на кнопку и ушел запрос на сервер.

Нужно сделать чтобы форма дизейблилась в момент отправки и добавить прелоадер на свое усмотрение.

6. Состояние успеха
После успешной авторизации нужно:

Сохранить токен в куки, скрыть форму и вместо нее вывести текст:

res.user.name, Вы успешно авторизованы!

7. Github
Результат работы нужно залить на github и прислать ссылку на репо с исходниками