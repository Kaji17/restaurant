FROM maven as builder
LABEL authors="Katina"
WORKDIR /Restaurentms
COPY pom.xml ./
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-oracle
WORKDIR /Restaurentms
RUN mkdir -p /Restaurentms/bin /Restaurentmsms/conf /Restaurentms/log /Restaurentms/images/
COPY --from=builder /Restaurentms/target/*.jar bin/restaurentms.jar
COPY src/main/resources/log4j2-spring.xml conf/
COPY src/main/resources/log4j2-appenders.xml conf/
COPY src/main/resources/log4j2-loggers.xml conf/
EXPOSE 9090

ENTRYPOINT ["java", "-jar", "/Restaurentms/bin/restaurentms.jar"]