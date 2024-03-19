--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appeal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appeal (
    id integer NOT NULL,
    title character varying,
    slug text NOT NULL,
    "thumbnailUrl" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.appeal OWNER TO postgres;

--
-- Name: appeal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.appeal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.appeal_id_seq OWNER TO postgres;

--
-- Name: appeal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.appeal_id_seq OWNED BY public.appeal.id;


--
-- Name: language; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.language (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.language OWNER TO postgres;

--
-- Name: language_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.language_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.language_id_seq OWNER TO postgres;

--
-- Name: language_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.language_id_seq OWNED BY public.language.id;


--
-- Name: language_news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.language_news (
    id integer NOT NULL,
    "translatedTitle" text NOT NULL,
    "translatedDescription" text NOT NULL,
    "languageId" integer,
    "newsId" uuid
);


ALTER TABLE public.language_news OWNER TO postgres;

--
-- Name: language_news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.language_news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.language_news_id_seq OWNER TO postgres;

--
-- Name: language_news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.language_news_id_seq OWNED BY public.language_news.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "isPublished" boolean DEFAULT false NOT NULL,
    "publishedAt" timestamp with time zone,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.news OWNER TO postgres;

--
-- Name: appeal id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appeal ALTER COLUMN id SET DEFAULT nextval('public.appeal_id_seq'::regclass);


--
-- Name: language id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language ALTER COLUMN id SET DEFAULT nextval('public.language_id_seq'::regclass);


--
-- Name: language_news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language_news ALTER COLUMN id SET DEFAULT nextval('public.language_news_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: appeal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.appeal (id, title, slug, "thumbnailUrl", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: language; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.language (id, name) FROM stdin;
1       German
2       Ukrainian
3       Spanish
4       Polish
5       French
\.


--
-- Data for Name: language_news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.language_news (id, "translatedTitle", "translatedDescription", "languageId", "newsId") FROM stdin;
1       Titel 1 Beschreibung 1  1       7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2
2       Назва 1 Опис 1  2       7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2
3       Título 1        Descripción 1   3       7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2
4       Tytuł 1 Opis 1  4       7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2
5       Título 1        Description 1   5       7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
6       1710845863119   Migration1710845863119
7       1710845895463   Migration1710845895463
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (id, title, description, "isPublished", "publishedAt", "createdAt", "updatedAt") FROM stdin;
7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2    Title 1 Description 1   t       2024-03-18 00:00:00+00      2024-03-18 00:00:00     2024-03-18 00:00:00
4b75be14-ba8d-4be8-9ceb-d075152fe677    Title 2 Description 2   f       \N 2024-03-18 00:00:00      2024-03-18 00:00:00
66d3bf59-4601-43d1-a416-723f8bda89d8    Title 3 Description 3   t       2024-03-18 00:00:00+00      2024-03-18 00:00:00     2024-03-18 00:00:00
dc6575dc-9dcb-4a6c-8445-58998545a7c5    Title 4 Description 4   f       \N 2024-03-18 00:00:00      2024-03-18 00:00:00
d72ac4ee-0613-48bb-bc15-dad13ec5999c    Title 5 Description 5   t       2024-03-18 00:00:00+00      2024-03-18 00:00:00     2024-03-18 00:00:00
\.


--
-- Name: appeal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appeal_id_seq', 1, false);


--
-- Name: language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.language_id_seq', 5, true);


--
-- Name: language_news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.language_news_id_seq', 5, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 7, true);


--
-- Name: news PK_39a43dfcb6007180f04aff2357e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: language PK_cc0a99e710eb3733f6fb42b1d4c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language
    ADD CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY (id);


--
-- Name: appeal PK_f644a99d2dfcff9facb08bd1697; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appeal
    ADD CONSTRAINT "PK_f644a99d2dfcff9facb08bd1697" PRIMARY KEY (id);


--
-- Name: language_news PK_fc39478a58686970efe60ff8a47; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language_news
    ADD CONSTRAINT "PK_fc39478a58686970efe60ff8a47" PRIMARY KEY (id);


--
-- Name: language_news FK_4c730f214a3f96950154ac6baf7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language_news
    ADD CONSTRAINT "FK_4c730f214a3f96950154ac6baf7" FOREIGN KEY ("languageId") REFERENCES public.language(id);


--
-- Name: language_news FK_9ba02dc26a9c78012c95e6f919e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.language_news
    ADD CONSTRAINT "FK_9ba02dc26a9c78012c95e6f919e" FOREIGN KEY ("newsId") REFERENCES public.news(id);


--
-- PostgreSQL database dump complete
--