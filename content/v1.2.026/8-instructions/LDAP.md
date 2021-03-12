---
slug: "/post2"
title: "Создание провайдера LDAP"
sort: "1"
---

## LDAP


![ldap-image](./images/ldap-image.png "LDAP")
<!--<img src="./images/ldap-image.png" width="256" height="256" alt="LDAP">-->

Провайдер LDAP предназначен для авторизации пользователя через настроенный Active Directory.
Что такое Active Directory?

***Active Directory*** - служба каталогов корпорации Microsoft, предназначена для хранения и организации объектов в сети в иерархическую защищенную логическую структуру, например пользователей, компьютеров или других физических ресурсов. 
Более подробно можно ознакомиться с следующих источниках:
* [Википедия](https://ru.wikipedia.org/wiki/Active_Directory)
* [1cloud](https://1cloud.ru/help/windows/struktura-hranilischa-active-directory)
----

## Инструкция по созданию приложения LDAP

Прежде чем приступить к непосредственной работе с протоколом LDAP, нужно создать аккаунт/авторизоваться на сервисе [TRUSTED.PLUS](https://id.trusted.plus), и только после этого, перейти к созданию приложения, по следующим **шагам**:

<!--1. [Добавление провайдера типа LDAP](#-шаг-1-добавить-провайдера-типа-ldap).
2. [Создание приложения API](#шаг-2-создать-приложение-типа-api).
3. [Добавление виджета входа в своем проекте](#шаг-3-добавить-виджет-логинации).

Рассмотрим каждый шаг по подробнее.-->

## Шаг 1. Добавление провайдера типа LDAP

  1. В личном кабинете в меню пользователя кликните модуль ***"Мои провайдеры"***:
   
   ![my-provider](./images/my-provider.png "Мои провайдеры")
   
  2. Наведите курсор на кнопку **"+"** (добавление нового провайдера) в правом нижнем углу:
   
   ![add-provider-btn](./images/add-provider-btn.png "Кнопка 'Добавить нового провайдера'")

  3. Там появиться список разрешенных провайдеров, выберете ***LDAP***:
   
   ![list-providers](./images/list-providers.png "Список типов провайдеров")

  4. Введите в поля ***Название, Описание*** - текст и числа и нажмите кнопку ***"Создать"***:
   
   ![create-provider](./images/create-provider.png "LDAP провайдер")
   
  провайдер сразу появиться в вашем списке:

   ![view-new-provider](./images/view-new-provider.png "Список провайдеров")
----
## Шаг 2. Создание приложение типа API
  1. В личном кабинете в меню пользователя кликните модуль ***"Мои приложения"***:
   
   ![my-apps](./images/my-apps.png "Мои приложения")
<!--<img src="./images/my-apps.png" width="30%" height="auto" alt="Мои приложения">-->
  2. Наведите курсор на кнопку **"+"** (добавления нового приложения) в правом нижнем углу:
   
   ![add-provider-btn](./images/add-provider-btn.png "Кнопка 'Добавить новое приложение'") 
   <!--<img src="images/add-provider-btn.png" width="30%" height="auto" alt="Кнопка 'Добавить новое приложение'">-->
   
  3. Там появиться список разрешенных приложений, выберете ***API***:
   
   ![list-apps](./images/list-apps.png "Список типов приложений")
   <!--<img src="./images/list-apps.png" width="30%" height="auto" alt="Список типов приложений">-->
   
  4. Введите в поля ***Название*** - текст и числа, ***URL сайта, URL контроллера авторизации*** - адрес вашего сайта в форме создания приложения и нажмите кнопку ***"Создать"***:
   ![create-app-api](./images/create-app-api.png "Форма создания приложения")
   <!--<img src="./images/create-app-api.png" width="90%" height="auto" alt="Форма создания приложения">-->
   приложение сразу появиться в вашем списке, далее кликаете по вкладке нового приложения:

   ![list-apps](./images/view-new-app.png "Спиcок приложений")
   <!--<img src="./images/view-new-app.png" width="100%" height="auto" alt="Спиcок приложений">-->
   
  5. В открывшейся странице в ***"Способах авторизации"*** переключатель, в случаи отключения, измените на состояние "включить" в блоке *"Провайдеры внешних аккаунтов"*. То есть перевести переключатель из данного состояния:
   
  ![flag-on](images/flag-off.png "Переключатель выключен")

   в это:

   ![flag-on](images/flag-on.png "Переключатель включен")

   <!--![menu-settings-app](./images/menu-settings-app.png "Настройка виджета")
   <img src="./images/menu-settings-app.png" width="100%" height="auto" alt="Настройка виджета">-->

  Результат:

   ![empty-to-access-app](./images/empty-to-access-app.png "Пустой список провайдеров") 
   <!--<img src="./images/paths-to-access-app.png" width="88%" height="auto" alt="Провайдеры внешних аккаунтов">-->
   
   Теперь переходите в пункт ***"Список провайдеров"***, нажимаете на кнопку **"+"** для добавления провайдера LDAP: 

   ![add-provider-btn](./images/add-provider-btn-to-app.png "Кнопка 'Добавить провайдера'") 
   <!--<img src="./images/add-provider-btn-to-app.png" width="8%" height="auto" alt="Кнопка 'Добавить провайдера'">-->
   
   из списка:   

   ![new-provider-in-path-to-access-app](./images/new-provider-in-path-to-access-app.png "Список провайдеров") 
   <!--<img src="./images/new-provider-in-path-to-access-app.png" width="90%" height="auto" alt="Список провайдеров">-->

   Итог:

   ![paths-to-access-app](./images/paths-to-access-app.png "Провайдеры внешних аккаунтов") 
   <!--<img src="./images/paths-to-access-app.png" width="88%" height="auto" alt="Провайдеры внешних аккаунтов">-->

## Шаг 3. Откройте форму входа в приложении
  1. Переходите по **URL** вашего приложения, и выберете способ авторизации через [TRUSTED.PLUS](https://id.trusted.plus), и окажитесь на форме входа, где представлен провайдер ***LDAP***:
  
  ![app-login](./images/app-login.png "Авторизация с помощью Trusted.Id")

  2. После нажатия на иконку **LDAP**, переходите на форму входа, с помощью провайдера ***LDAP***:

  ![ldap-auth](./images/ldap-auth.png)