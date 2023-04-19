# Rattus

Состоит из двух модулей:
  - *rattus-core*  
    Отвечает за серверную часть приложения(Java)
  - *rattus-webapp*  
    Отвечает за фронт часть приложения(Vue + typescript) 
  
# Сборка проекта в WAR
  
Проект собирается в WAR файл для деплоя в томкат. Чтобы собрать корректный WAR необходимо:
1) *Очистить ресурсы*  
   Перейти в директорию `/rattus`  
   Выполнить команду `mvn clean`  
   Проверить существует ли папка `/rattus/rattus-core/src/main/resources/public`, если такая существует, то её необходимо удалить(это старые ресурсы которые обновятся при следующих шагах)
2) *Собрать webapp*:  
   Перейти в директорию `/rattus-webapp`  
   Выполнить команду `yarn install`  
   Выполнить команду `yarn build`  
2) *Создать .jar файл rattus-core и упаковать в WAR файл*:  
   Перейти в родительскую директорию `/rattus`  
   Выполнить команду `mvn install`  
     
   Сбилженный WAR будет лежать в `rattus/rattus-webapp/target`
  
# Functionality overview: 
Home page URL: `"../Rattus"`  
  
### Models:  
```
ListOfSpecification {
  name: String, cannot be null or empty,
	specifications: Specification[], can be empty
},
Specification {
	title: String, cannot be null or empty,
	done: boolean, default = false,
	comment: String, can be null or empty
}
```
### Endpoints:  
List of spesifications:  
  
`GET /rest/lists`  
Return all lists of specifications.  
   
`GET /rest/lists/{listId}`  
Path variable required.  
Return list ob specifications by the id from the request.  
 
`POST /rest/lists/save`  
Request body required, example:  
```
{
  "name": "list1",
  "specifications": [
    {
       "title": "spec1",
       "done": true,
       "comment": "Great!"
    },
    {
       "title": "spec2",
       "done": false,
       "comment": "Bad"
    }
  ]
}
```
Required fields: `name` and `title` of each specification, if the list of specifications is not empty.  
Return saved list of specifications.  
 
`PUT /rest/lists/{listId}`  
Request body and path variable required, example as in `POST /rest/lists/save`  
Return updated list of specifications.  
 
`DELETE /rest/lists/{listId}`  
Path variable required.  
Return nothing.  
