---
slug: "/post2"
title: "Создание приложения LDAP"
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

### Инструкция по созданию приложения LDAP

Прежде чем приступить к непосредственной работе с протоколом LDAP, нужно создать аккаунт/авторизоваться на сервисе [TRUSTED.PLUS](https://id.trusted.plus), и только после этого, перейти к созданию приложения, по следующим **шагам**:

1. [Добавление провайдера типа LDAP](#-шаг-1-добавить-провайдера-типа-ldap).
2. [Создание приложения API](#шаг-2-создать-приложение-типа-api).
3. [Добавление виджета входа в своем проекте](#шаг-3-добавить-виджет-логинации).

Рассмотрим каждый шаг по подробнее.

#### Шаг 1. Добавление провайдера типа LDAP
----
#### Шаг 2. Создание приложение типа API
  1. В личном кабинете в меню пользователя кликните модуль ***"Мои приложения"***:
   
   ![my-apps](./images/my-apps.png "Мои приложения")
<!--<img src="./images/my-apps.png" width="30%" height="auto" alt="Мои приложения">-->
  2. Навести курсор на кнопку **"+"** (добавления нового приложения) в правом нижнем углу:
   
   ![add-provider-btn](./images/add-provider-btn.png "Кнопка 'Добавить новое приложение'") 
   <!--<img src="images/add-provider-btn.png" width="30%" height="auto" alt="Кнопка 'Добавить новое приложение'">-->
   
  3. Там появиться список разрешенных приложений, выбрать ***API***:
   
   ![list-apps](./images/list-apps.png "Список типов приложений")
   <!--<img src="./images/list-apps.png" width="30%" height="auto" alt="Список типов приложений">-->
   
  4. Ввести в поля ***Название*** - текст и числа, ***URL сайта, URL контроллера авторизации*** - адрес вашего сайта в форме создания приложения и нажмите кнопку ***"Создать"***:
   ![create-app-api](./images/create-app-api.png "Форма создания приложения")
   <!--<img src="./images/create-app-api.png" width="90%" height="auto" alt="Форма создания приложения">-->
   оно сразу появиться в вашем списке, далее нажимаем на вкладку нового приложения:
   ![list-apps](./images/view-new-app.png "Спиcок приложений")
   <!--<img src="./images/view-new-app.png" width="100%" height="auto" alt="Спиcок приложений">-->
   
  5. Находим пункты ***"Способ авториизации"*** и ***"Список провайдеров"*** в меню настройки виджета. В ***"Способах авторизации"*** проверяем активированность флажка ***"Провайдеры внешних аккаунтов"***, в случаи отключения - переключить: 
   
   ![menu-settings-app](./images/menu-settings-app.png "Настройка виджета")
   <!--<img src="./images/menu-settings-app.png" width="100%" height="auto" alt="Настройка виджета">-->

   ![paths-to-access-app](./images/paths-to-access-app.png "Провайдеры внешних аккаунтов") 
   <!--<img src="./images/paths-to-access-app.png" width="88%" height="auto" alt="Провайдеры внешних аккаунтов">-->
   
   Теперь переходим в пункт ***"Список провайдеров"***, нажимаем на кнопку **"+"** для добавления провайдера LDAP: 

   ![add-provider-btn](./images/add-provider-btn-to-app.png "Кнопка 'Добавить провайдера'") 
   <!--<img src="./images/add-provider-btn-to-app.png" width="8%" height="auto" alt="Кнопка 'Добавить провайдера'">-->
   
   из списка:   

   ![new-provider-in-path-to-access-app](./images/new-provider-in-path-to-access-app.png "Список провайдеров") 
   <!--<img src="./images/new-provider-in-path-to-access-app.png" width="90%" height="auto" alt="Список провайдеров">-->

#### Шаг 3. Добавление виджет логинации


```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```