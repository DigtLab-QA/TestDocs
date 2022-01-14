---
slug: "/post4"
title: "Настройка авторизации через Google"
sort: "04"
---

## Настройка провайдера для авторизации через Google

1. Зарегистрируйтесь и/или авторизуйтесь на сервисе, где развернута система Trusted Net (далее рассматривается сервис [TRUSTED.PLUS](https://id.trusted.plus)).  
2. Создайте провайдер типа OAuth2.0.  
3. Зарегистрируйтесь/авторизуйтесь в [Google](https://accounts.google.com/signin/v2/identifier?hl=ru&passive=true&continue=https%3A%2F%2Fwww.google.ru%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin).  
4. Откройте страницу https://code.google.com/apis/console#access.    
5. Создайте новый проект кнопкой **Создать проект**.  
   
   ![google-apps1](./images/google-apps1.jpg "Создать проект")  

6. Введите любое название и нажмите **Создать**.  
7. Перейдите к настройкам созданного проекта.  
   
   ![google-apps2](./images/google-apps2.jpg "Настройки проекта")  

8. Откройте раздел **API и сервисы** - **Окно запроса доступа OAuth**.  
   
   ![google-apps3](./images/google-apps3.jpg "Доступ к OAuth")  

9.  Выберите **User Type** - "Внешний" и нажмите **Создать**  
    
    ![google-apps4](./images/google-apps4.jpg "Доступ к OAuth")  

10. Введите название приложения. 
    
    ![google-apps5](./images/google-apps5.jpg "Название проекта")  

11. Внизу страницы введите доменное имя своего сайта в поле **Авторизованные домены**. 
    
    ![google-apps6](./images/google-apps6.jpg "Доменное имя")  

    Сохраните настройки.   
12. Откройте раздел **API и сервисы** - **Учетные данные** в настройках проекта Google. 
    
    ![google-apps7](./images/google-apps7.jpg "Учетные данные")  

13. Нажмите **Создать учётные данные** и выберите **Идентификатор клиента OAuth**. 
    
    ![google-apps8](./images/google-apps8.jpg "ДИдентификатор клиента OAuth")  

14. Выберите тип приложения **Веб-приложение**. 
    
    ![google-apps9](./images/google-apps9.jpg "Веб-приложение")  

15. В поле **Разрешенные URI перенаправления** вставьте строку типа  
https://domain.ru/idp/sso/authorize?provider_id=ddfc59194e5085a88b3361b2f480ce2&auth_type=OAUTH2,
      где provider_id - это значение поля ProviderId в настройках созданного провайдера OAuth2.0 на сервисе Trusted.  

      ![providerid](./images/providerid.jpg "ProviderID")   

      Замените domain.ru на домен своего сайта.

16. На форме редактирования **Клиента OAuth** скопируйте **Идентификатор клиента** и **Секрет клиента**. 
    
    ![google-apps10](./images/google-apps10.jpg "Client ID, Client Secret")  

17. Перейдите в настройки провайдера OAuth2.0 на сервисе Trusted.  
    
    ![google-prov1](./images/google-prov1.jpg "Настройки провайдера")  

18. Вставьте скопированные значения в соответствующие поля в настройках провайдера  и нажмите **Сохранить**.  
    
    ![clientid](./images/clientid.jpg "Настройки авторизации провайдера")  

19. В настройках провайдера установите флаг **Настройки приватности** как **Публичный**, если хотите, чтобы данный провайдер был доступен всем при настройке авторизации в приложение.  
    
   ![external-provider](./images/external-provider.jpg "Настройки приватности")   



##  Добавление созданного Google провайдера в приложение
   
1.  Выберите раздел **Мои приложения** в личном кабинете.
   
      ![my-app-menu.png](./images/my-app-menu.png "Мои приложения")

2. В списке приложений выберите приложение, в которое будет добавлена авторизация через Google провайдер.
   
      ![view-new-app.png](./images/view-new-app.png "Список приложений")

3. В открывшемся окне настроек приложения в разделе **Список провайдеров** нажмите кнопку добавления нового провайдера ![add-provider-btn-to-app](./images/add-provider-btn-to-app.png "Кнопка добавления провайдера"). 
   
      ![add-provider-btn](./images/list-providers.png "Список подключенных провайдеров") 

4. Установить флаг напротив созданного провайдера в списке доступных провайдеров и нажмите кнопку **Сохранить**.
   
      ![select-google](./images/select-google.jpg "Список провайдеров") 

5. Список провайдеров приложения обновиться и в нем отразится добавленный провайдер.

      ![add-ptovider-google](./images/add-ptovider-google.jpg "Список провайдеров")

6. В разделе **Способы авторизации** убедитесь, что переключатель **Провайдеры внешних аккаунтов** включен.

      ![flag-on.png](./images/flag-on.png "Включения флага авторизации через провайдеров внешних аккаунтов")

7. Теперь авторизация в приложение доступна через провайдер Google.
     
      ![app-login-g.png](./images/app-login-g.png "Форма авторизации в приложение")

**ИНСТРУКЦИИ ПО ТЕМЕ:**  

1. [Инструкция по созданию приложения.](https://docs.trusted.plus/03-v1.3/8-instructions/create-app)  
2. [Как создать провайдер.](https://docs.trusted.plus/03-v1.3/5-providers/providers)  