-- Database: db_turistApp

-- DROP DATABASE IF EXISTS "db_turistApp";

-- CREATE DATABASE "db_turistApp"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Spanish_Colombia.1252'
--     LC_CTYPE = 'Spanish_Colombia.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE IF NOT EXISTS public.accounts_verified (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "fk_users" integer UNIQUE
);

CREATE TABLE IF NOT EXISTS public.users (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "img_perfil" varchar(255),
  "firstname" varchar(255),
  "lastname" varchar(255),
  "username" varchar(255),
  "email" varchar(255),
  "country" varchar(255),
  "birthDate" date,
  "phone" real,
  "userVerified" boolean,
  "fk_post_favorites" integer UNIQUE
);

CREATE TABLE IF NOT EXISTS public.post_favorites (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "fk_users" integer UNIQUE,
  "fk_publications" integer UNIQUE,
  "myFavorites" boolean
);

CREATE TABLE IF NOT EXISTS public.publications (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "fk_usersVerified" integer UNIQUE,
  "imageurl" varchar(255),
  "categories" varchar(255),
  "title" varchar(255),
  "description" varchar(255),
  "prices" varchar(255),
  "fk_creator" integer UNIQUE,
  "fk_commentsUsers" integer UNIQUE
);

CREATE TABLE IF NOT EXISTS public.comments_users (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "fk_users" integer UNIQUE,
  "user_comment" varchar(255),
  "ratings" varchar(255)
);

ALTER TABLE "publications" ADD FOREIGN KEY ("fk_creator") REFERENCES "accounts_verified" ("id");

ALTER TABLE "accounts_verified" ADD FOREIGN KEY ("fk_users") REFERENCES "users" ("id");

ALTER TABLE "comments_users" ADD FOREIGN KEY ("fk_users") REFERENCES "users" ("id");

ALTER TABLE "comments_users" ADD FOREIGN KEY ("id") REFERENCES "publications" ("fk_commentsUsers");

ALTER TABLE "post_favorites" ADD FOREIGN KEY ("fk_publications") REFERENCES "publications" ("id");

ALTER TABLE "post_favorites" ADD FOREIGN KEY ("fk_users") REFERENCES "users" ("fk_post_favorites");
