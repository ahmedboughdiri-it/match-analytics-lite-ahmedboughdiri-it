# Stage 1: Build the Spring Boot app
FROM maven:3.9.4-eclipse-temurin-20 AS build
WORKDIR /app

# Copy pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the JAR
RUN mvn clean package -DskipTests

# Stage 2: Run the JAR
FROM eclipse-temurin:20-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Expose backend port
EXPOSE 9090

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
