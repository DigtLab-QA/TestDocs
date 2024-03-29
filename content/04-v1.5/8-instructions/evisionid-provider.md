---
slug: "/post10"
title: "Настройка авторизации через eVision.ID"
sort: "10"
---

Чтобы настроить авторизацию через провайдер eVision.ID, у Вас должна быть учетная запись администратора в установленном eVision (подробнее ознакомиться с продуктом можно на сайте https://evision.tech/).

## Настройка провайдера для авторизации через eVision.ID

1. Зарегистрируйтесь и/или авторизуйтесь на сервисе, где развернута система Trusted.Net (далее рассматривается сервис [Trusted.ID](https://id.trusted.plus)).  
2. Создайте провайдер типа OAuth2.0.   
3. Авторизуйтесь как администратор в eVision.  
4. Перейдите в  **Меню** — **Учетные записи** — **Переключиться на приложения**.
.   
      
   ![evision-app1](./images/evision-app1.jpg "Приложения")
   
5.  Нажмите кнопку **Добавить приложение**.  
   
      ![evision-app2](./images/evision-app2.jpg "Добавление приложения")   

7. Напишите любое название приложения.
8. Сгенерируйте **Client Id**  и **Client Secret** в соответствующих полях формы добавления приложения. Скопируйте значения этих поле.

      ![evision-app3](./images/evision-app3.jpg "Настройки приложения")  

9.  В поле **Адрес переадресации** введите URL вида https://id.trusted.plus/idp/sso/authorize?provider_id=0771150db1610768fa402bc9a694b255&auth_type=OAUTH2,
      где provider_id — это значение поля ProviderId в настройках созданного провайдера OAuth2.0 на сервисе.        
      ![provider](./images/providerid.jpg "ProviderID")  

      **Замените** домен на домен своего сайта.  
      **Сохраните** изменения.  
10.  Нажмите **Применить**.
    
11. Перейдите в настройки провайдера OAuth2.0 на сервисе.  
    
    ![evision-app5](./images/evision-app5.jpg "Настройки провайдера Trusted")  

12. Вставьте скопированные значения **Client Id**  и **Client Secret** в соответствующие поля в настройках провайдера  и нажмите **Сохранить**.  
    
    ![kloud-app6](./images/kloud-app6.jpg "Настройки авторизации провайдера")  

13. В настройках провайдера задайте параметры вида, заменив домен на домен вашей инсталляции eVision:   
      - user_authorization_uri — https://d.evision.tech/api/v1/EvisionApp/  
      - access_token_uri — https://d.evision.tech/api/v1/EvisionApp/Token  
      - user_info_uri — https://d.evision.tech/api/v1/EvisionApp/Profile  

      **Сохраните** изменения.    
      ![evision-app7](./images/evision-app7.jpg "Настройки авторизации провайдера")  
 
14. В настройках провайдера установите флаг **Настройки приватности** как **Публичный**, если хотите, чтобы данный провайдер был доступен всем при настройке авторизации в приложение.  
    
    ![external-provider](./images/external-provider.jpg "Настройки приватности")   


##  Добавление созданного eVision.ID провайдера в приложение
   
1.  Выберите раздел **Мои приложения** в личном кабинете.
   
      ![my-app-menu.png](./images/my-app-menu.png "Мои приложения")

2. В списке приложений выберите приложение, в которое будет добавлена авторизация через eVision.ID провайдер.
   
      ![view-new-app.png](./images/view-new-app.png "Список приложений")

3. В открывшемся окне настроек приложения в разделе **Список провайдеров** нажмите кнопку добавления нового провайдера.
    ![add-provider-btn-to-app](./images/add-provider-btn-to-app.png "Кнопка добавления провайдера") 
   
      ![add-provider-btn](./images/list-providers.png "Список подключенных провайдеров") 

4. Установите флаг напротив созданного провайдера в списке доступных провайдеров и нажмите кнопку **Сохранить**.
   
      ![select-evision](./images/select-evision.jpg "Список доступных провайдеров для добавления в приложение") 

5. Список провайдеров приложения обновится, и в нем отразится добавленный провайдер.

      ![add-ptovider-evision](./images/add-ptovider-evision.jpg "Список добавленных в приложение провайдеров")

6. В разделе **Способы авторизации** убедитесь, что переключатель **Провайдеры внешних аккаунтов** включен.

      ![flag-on.png](./images/flag-on.png "Включения флага авторизации через провайдеров внешних аккаунтов")

7. Теперь авторизация в приложение доступна через провайдер  eVision ID.
     
      ![app-login-e.png](./images/app-login-e.png "Форма авторизации в приложение")

**ИНСТРУКЦИИ ПО ТЕМЕ:**  

1. [Инструкция по созданию приложения.](https://docs.trusted.plus/04-v1.5/8-instructions/create-app)  
2. [Как создать провайдер.](https://docs.trusted.plus/04-v1.5/5-providers/providers)  