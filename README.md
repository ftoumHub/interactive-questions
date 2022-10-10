# interactive-questions

mvn spring-boot:run

# dev

Les fichiers statiques sont rechargés à chaque changement grâce à la conf :

```
spring.web.resources.static-locations[0]=file:src/main/resources/static/
spring.web.resources.static-locations[1]=classpath:/static/
```