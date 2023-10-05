--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: tpl1122_1
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    img character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.posts OWNER TO tpl1122_1;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_1
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO tpl1122_1;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_1
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: tpl1122_1
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: tpl1122_1
--

COPY public.posts (id, title, content, img, created_at) FROM stdin;
8	The Wonders of Nature	<p>Nature has always fascinated mankind with its beauty and complexity. From the vast expanses of lush forests to the depths of the oceans, the wonders of the natural world never cease to amaze us. In this blog post, we'll explore some of the incredible aspects of nature that make our planet so extraordinary.</p><p><br></p><p>One of the most awe-inspiring features of nature is the grandeur of mountains. These towering giants seem to touch the sky, and their snow-capped peaks glisten in the sunlight. Mountains offer breathtaking views and challenge adventurers with their steep slopes. They also play a crucial role in shaping our planet's climate and geography.</p><p><br></p><p>Our world is teeming with an astonishing variety of wildlife. From the majestic lions of the African savannah to the tiny hummingbirds that flit about in our gardens, every species has its unique charm. The study of wildlife biology continues to reveal new and fascinating insights into the behaviors and adaptations of these creatures.</p><p><br></p><p>Lakes provide a sense of tranquility and serenity like no other. Their calm waters mirror the surrounding landscapes, creating picture-perfect reflections. Many lakes are home to diverse ecosystems and are essential sources of freshwater for both humans and wildlife. Spending a peaceful day by the lakeside can be a rejuvenating experience.</p><p><br></p><p>Waterfalls are nature's spectacle, showcasing the sheer power of water as it cascades over rocky cliffs. The roar of a waterfall and the mist in the air create a sensory experience that leaves a lasting impression. Some of the world's most famous waterfalls, such as Niagara Falls and Victoria Falls, draw visitors from all over the globe.</p><p><br></p><p>Beneath the ocean's surface lies a world of mystery and enchantment. Coral reefs teem with colorful marine life, and deep-sea trenches hide bizarre and undiscovered species. Ocean exploration has led to astonishing discoveries, yet much of the ocean remains uncharted and unexplored, holding secrets waiting to be unveiled.</p><p><br></p><p>In conclusion, the wonders of nature are boundless and continue to captivate us. Whether you're an adventurer exploring remote landscapes or simply enjoying a walk in the local park, nature has something extraordinary to offer. Let us cherish and protect the natural world that enriches our lives in countless ways.</p>	1696317705306nature.avif	2023-10-03 00:21:05.011653-07
9	Exploring the Mysteries of the Cosmos	<p>The universe has always fascinated humanity with its vastness and complexity. From the twinkling stars in the night sky to the enigmatic black holes that lurk in the depths of space, the cosmos holds endless mysteries waiting to be unraveled. In this blog post, we embark on a journey to explore some of the most intriguing aspects of our universe.</p><p>The sheer size of the universe is mind-boggling. It spans billions of light-years and contains billions of galaxies, each with billions of stars. Our own Milky Way galaxy is just one tiny speck in this cosmic tapestry. The enormity of space challenges our understanding of scale and leaves us in awe of the sheer magnitude of the cosmos.</p><p>One of the most captivating phenomena in the universe is the birth and death of stars. Stars are born from clouds of gas and dust, and they spend billions of years fusing hydrogen into helium, releasing immense energy in the process. When a star exhausts its nuclear fuel, it can undergo a spectacular explosion known as a supernova, leaving behind remnants like neutron stars or black holes.</p><p>Speaking of black holes, these cosmic enigmas are among the most mysterious objects in the universe. They are regions where gravity is so intense that nothing, not even light, can escape their grasp. Black holes can result from the collapse of massive stars or through other cosmic processes. They challenge our understanding of the laws of physics and continue to be a subject of intense research.</p><p>The search for extraterrestrial life is another exciting frontier of cosmic exploration. While we have yet to find definitive evidence of aliens, the discovery of exoplanets in the habitable zone of distant stars raises the possibility of life beyond Earth. Scientists are using advanced telescopes and instruments to scan the skies for signs of life, and the quest for extraterrestrial intelligence is ongoing.</p><p>The cosmos is not just a source of scientific wonder but also a wellspring of inspiration for art, literature, and philosophy. The beauty of the night sky has inspired countless poets and artists throughout history, and it continues to fuel our curiosity and imagination.</p><p>In conclusion, the universe is a vast and mysterious realm that invites us to explore its secrets. Whether we gaze at the stars through a telescope or ponder the mysteries of black holes, the cosmos reminds us of the boundless possibilities of human exploration and discovery. As we continue to unlock the secrets of the universe, we gain a deeper appreciation for the wonder and complexity of our cosmic home.</p>	1696358038377cosmo.jpg	2023-10-03 00:31:52.598605-07
11	Autumn is here!	<p><em>Autumn, the year's last, loveliest smile.</em></p><p>Fall, also known as autumn, is a season of transformation that captivates our senses and leaves an indelible mark on our hearts. The iconic changing foliage, with its vibrant shades of red, orange, and yellow, paints the landscape in a mesmerizing display of colors. The rustling of fallen leaves beneath our feet and the gentle breeze carrying a kaleidoscope of colors make fall the perfect season for outdoor exploration.</p><p>Fall is synonymous with harvest time, a period of abundance when farmers reap the rewards of their hard work throughout the year. Fields of golden wheat, plump pumpkins, and ripe apples adorn the countryside. Farmers' markets brim with fresh produce, and families gather to celebrate the bountiful harvest with feasts and festivals. There's a sense of satisfaction in savoring the fruits of the season, from apple pies to warm soups.</p><p>As the temperatures drop, fall invites us to embrace cozy comforts. Sweaters, scarves, and boots make their way back into our wardrobes, and evenings are spent wrapped in blankets, sipping hot cocoa, and enjoying the warmth of a crackling fire. Fall encourages us to slow down, unwind, and find solace in simple pleasures. It's a season that beckons us to read a good book, share stories with loved ones, and relish the comfort of home.</p><p>In conclusion, fall enchants us with its vibrant colors, abundant harvests, and cozy comforts. It's a season that reminds us of the beauty in change and encourages introspection as we witness nature's transformation. As we sip our cider and watch the leaves dance in the breeze, let us savor the fleeting moments of this magical season. Embrace the second spring of autumn, for it is a gift to be cherished.</p><p><br></p>	1696364398484fall.jpg	2023-10-03 13:19:58.501186-07
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_1
--

SELECT pg_catalog.setval('public.posts_id_seq', 11, true);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_1
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

