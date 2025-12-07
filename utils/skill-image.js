import java from "/public/svg/skills/java.svg";
import html from "/public/svg/skills/html.svg";
import css from "/public/svg/skills/css.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import angular from "/public/svg/skills/angular.svg";
import spring from "/public/svg/skills/spring.svg";
import mysql from "/public/svg/skills/mysql.svg";
import mongodb from "/public/svg/skills/mongoDB.svg"; 
import postgresql from "/public/svg/skills/postgresql.svg";
import redis from "/public/svg/skills/redis.svg";
import git from "/public/svg/skills/git.svg";
import docker from "/public/svg/skills/docker.svg";
import kubernetes from "/public/svg/skills/kubernetes.svg";
import cicd from "/public/svg/skills/cicd.svg";
import postman from "/public/svg/skills/postman.svg";
import aws from "/public/svg/skills/aws.svg";
import restapis from "/public/svg/skills/restapis.svg";
import agileMethodologies from "/public/svg/skills/agileMethodologies.svg"; 

// MAIN FUNCTION
export const skillsImage = (skill) => {
  if (!skill) return null;

  const key = skill.toLowerCase();

  switch (key) {
    case "java":
      return java;
    case "html":
      return html;
    case "css":
      return css;
    case "bootstrap":
      return bootstrap;
    case "angular":
      return angular;
    case "spring boot":
      return spring;
    case "mysql":
      return mysql;
    case "mongodb":
      return mongodb;
    case "postgresql":
      return postgresql;
    case "redis":
      return redis;
    case "git":
      return git;
    case "docker":
      return docker;
    case "kubernetes":
      return kubernetes;
    case "ci/cd":
      return cicd;
    case "postman":
      return postman;
    case "aws":
      return aws;
    case "rest apis":
      return restapis;
    case "microservices":

    case "agile methodologies":
      return agileMethodologies;

    default:
      return null;
  }
};
