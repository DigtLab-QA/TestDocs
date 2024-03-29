---
slug: "/post7"
title: "Настройка авторизации через Yandex"
sort: "07"
---

## Настройка провайдера для авторизации через Yandex

1. Зарегистрируйтесь и/или авторизуйтесь на сервисе, где развернута система Trusted.Net (далее рассматривается сервис [Trusted.ID](https://id.trusted.plus)).  
2. Создайте провайдер типа OAuth2.0.  
3. Зарегистрируйтесь/авторизуйтесь в [Яндекс](https://passport.yandex.ru/registration/).  
4. Перейдите на страницу добавления приложения https://oauth.yandex.ru/client/new.  
       
   ![yandex-app11](./images/yandex-app11.jpg "Создание приложения")

5. Напишите любое название приложения.
6. В секции **Платформы** выберите **Веб-сервисы**. 
   В поле **Callback URL** впишите адрес вида https://id.trusted.plus/idp/sso/authorize. Замените домен на домен своего сайта.
   
   ![yandex-app12](./images/yandex-app12.jpg "Настройка приложения")  
 
7. Включите право доступа **API Яндекс ID** — **Доступ к адресу электронной почты**.
   
      ![yandex-app13](./images/yandex-app13.jpg "Настройка приложения")  

8. Создайте приложение.
9. Скопируйте значения **ID** и **Пароль**.  
   
      ![yandex-app14](./images/yandex-app14.jpg "Настройки авторизации")

10. Перейдите в настройки провайдера OAuth2.0 на сервисе.  
    
    ![yandex-app15](./images/yandex-app15.jpg "Настройки провайдера Trusted")  

11. Вставьте скопированные значения **ID** и **Пароль** в соответствующие поля в настройках провайдера  и нажмите **Сохранить**.  
    
    ![yandex-app1](./images/yandex-app1.jpg "Настройки авторизации провайдера")  

12. В настройках провайдера установите:  
    - user_authorization_uri - https://oauth.yandex.ru/authorize
    - access_token_uri - https://oauth.yandex.ru/token
    - user_info_uri - https://login.yandex.ru/info
  **Сохраните** изменения.  
    
    ![yandex-app2](./images/yandex-app2.jpg "Настройки авторизации провайдера")
 
13. В настройках провайдера установите флаг **Настройки приватности** как **Публичный**, если хотите, чтобы данный провайдер был доступен всем при настройке авторизации в приложение.  
    
    ![external-provider](./images/external-provider.jpg "Настройки приватности")   


##  Добавление созданного Yandex провайдера в приложение
   
1.  Выберите раздел **Мои приложения** в личном кабинете.
   
      ![my-app-menu.png](./images/my-app-menu.png "Мои приложения")

2. В списке приложений выберите приложение, в которое будет добавлена авторизация через Yandex провайдер.
   
      ![view-new-app.png](./images/view-new-app.png "Список приложений")

3. В открывшемся окне настроек приложения в разделе **Список провайдеров** нажмите кнопку добавления нового провайдера.
 
    ![add-provider-btn-to-app](./images/add-provider-btn-to-app.png "Кнопка добавления провайдера") 
   
      ![add-provider-btn](./images/list-providers.png "Список подключенных провайдеров") 

1. Установите флаг напротив созданного провайдера в списке доступных провайдеров и нажмите кнопку **Сохранить**.
   
      ![select-yandex](./images/select-yandex.jpg "Список доступных провайдеров для добавления в приложение") 

2. Список провайдеров приложения обновится, и в нем отразится добавленный провайдер.

      ![add-ptovider-yandex](./images/add-ptovider-yandex.jpg "Список добавленных в приложение провайдеров")

3. В разделе **Способы авторизации** убедитесь, что переключатель **Провайдеры внешних аккаунтов** включен.

      ![flag-on.png](./images/flag-on.png "Включения флага авторизации через провайдеров внешних аккаунтов")

4. Теперь авторизация в приложение доступна через провайдер Yandex.
     
      ![app-login-yandex.png](./images/app-login-yandex.png "Форма авторизации в приложение")

**ИНСТРУКЦИИ ПО ТЕМЕ:**  

1. [Инструкция по созданию приложения.](https://docs.trusted.plus/03-v1.3/8-instructions/create-app)  
2. [Как создать провайдер.](https://docs.trusted.plus/03-v1.3/5-providers/providers)  