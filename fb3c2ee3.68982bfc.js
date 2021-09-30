(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var i=a(3),r=a(7),s=(a(0),a(252)),n=(a(257),a(258),a(253),a(254),{id:"index-redismod",title:"Redis Modules in a Docker Container",sidebar_label:"RedisMod",slug:"/explore/redismod"}),o={unversionedId:"explore/redismod/index-redismod",id:"explore/redismod/index-redismod",isDocsHomePage:!1,title:"Redis Modules in a Docker Container",description:"Author: Ajeet Singh Raina",source:"@site/docs/explore/redismod/index-redismod.mdx",slug:"/explore/redismod",permalink:"/explore/redismod",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redismod/index-redismod.mdx",version:"current",sidebar_label:"RedisMod",sidebar:"docs",previous:{title:"How to create Grafana Dashboards for Redis Enterprise cluster  in 5 Minutes",permalink:"/explore/redisexplorer"},next:{title:"RIOT",permalink:"/explore/riot"}},l=[{value:"Modules included in the container",id:"modules-included-in-the-container",children:[]},{value:"Step 1. Install Docker",id:"step-1-install-docker",children:[]},{value:"Step 2. Running Redismod Docker container",id:"step-2-running-redismod-docker-container",children:[]},{value:"Step 3. Connect to Redis database",id:"step-3-connect-to-redis-database",children:[]},{value:"Step 4. Verify if all the Redis modules are getting loaded",id:"step-4-verify-if-all-the-redis-modules-are-getting-loaded",children:[]},{value:"Step 5. Testing Redis Modules",id:"step-5-testing-redis-modules",children:[]},{value:"References",id:"references",children:[]}],d={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Author: ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/ajeetsraina"}),"Ajeet Singh Raina")),Object(s.b)("p",null,"This simple container image bundles together the latest stable releases of Redis and select Redis modules from Redis Labs.\nThis image is based on the official image of Redis from Docker. By default, the container starts with Redis' default configuration and all included modules loaded."),Object(s.b)("h3",{id:"modules-included-in-the-container"},"Modules included in the container"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-search/"}),"RediSearch"),": a full-featured search engine"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-graph/"}),"RedisGraph"),": a graph database"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-timeseries/"}),"RedisTimeSeries"),": a timeseries database"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-ai/"}),"RedisAI"),": a tensor and deep learning model server"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-json/"}),"RedisJSON"),": a native JSON data type"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-bloom/"}),"RedisBloom"),": native Bloom and Cuckoo Filter data types"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-gears/"}),"RedisGears"),": a dynamic execution framework")),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The latest redismod:preview Docker image holds RedisJSON 2.0 and RediSearch 2.2 Private Preview Release. This Private Preview Releases delivers real-time document capabilities with active-active support. The ability to index, query, and use full-text search on JSON documents using RediSearch is the coolest new feature of this release. Try it out today -"),Object(s.b)("p",{parentName:"div"},"docker run -p 6379:6379 redislabs/redismod:preview"),Object(s.b)("p",{parentName:"div"},"Refer to the link provided in the References section for further details."))),Object(s.b)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker"),Object(s.b)("p",null,"To use RedisMod on a local Mac, the first step is to install Docker for your operating system.\nRun the docker version command in a terminal window to make sure that docker is installed correctly."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker version\n")),Object(s.b)("p",null,"It should display Docker Engine Server and Client version successfully."),Object(s.b)("h3",{id:"step-2-running-redismod-docker-container"},"Step 2. Running Redismod Docker container"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(s.b)("h3",{id:"step-3-connect-to-redis-database"},"Step 3. Connect to Redis database"),Object(s.b)("p",null,"You can either use ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/create/homebrew"}),"redis-cli")," or use ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"RedisInsight")," to connect to Redis database.\nLet's try using redis-cli as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli\n")),Object(s.b)("h3",{id:"step-4-verify-if-all-the-redis-modules-are-getting-loaded"},"Step 4. Verify if all the Redis modules are getting loaded"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," $ redis-cli \n 127.0.0.1:6379> info modules\n # Modules\n module:name=rg,ver=10006,api=1,filters=0,usedby=[],using=[ai],options=[]\n module:name=ai,ver=10002,api=1,filters=0,usedby=[rg],using=[],options=[]\n module:name=timeseries,ver=10408,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=graph,ver=20402,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ReJSON,ver=10007,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=search,ver=20006,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(s.b)("h3",{id:"step-5-testing-redis-modules"},"Step 5. Testing Redis Modules"),Object(s.b)("p",null,"Let us test drive RediSearch modules as discussed below in detail."),Object(s.b)("h4",{id:"insert-data-into-redisearch"},"Insert data into RediSearch"),Object(s.b)("p",null,"We are now ready to insert some data. This example uses movies data stored as Redis Hashes, so let\u2019s insert a couple of movies:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'  HSET movies:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "Luke Skywalker begins Jedi training with Yoda." release_year 1980 genre "Action"   \n rating 8.7 votes 1127635\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' HSET movies:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his empire to his son." release_year 1972     \n genre "Drama" rating 9.2 votes 1563839 \n')),Object(s.b)("p",null,"Your Redis database now contains two Hashes. It is simple to retrieve information using the HMGET command, if you know the key of the movies (movies:11002):"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{})," HMGET movies:11002 title rating\n")),Object(s.b)("h4",{id:"create-an-index-in-redisearch"},"Create an index in RediSearch"),Object(s.b)("p",null,"To be able to query the hashes on the field for title, say, or genre, you must first create an index. To create an index, you must define a schema to list the fields and their types that are indexed, and that you can use in your queries."),Object(s.b)("p",null,"Use the FT.CREATE command to create an index, as shown here:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),' FT.CREATE idx:movies ON hash PREFIX 1 "movies:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n')),Object(s.b)("h4",{id:"search-the-movies-in-the-redisearch-index"},"Search the movies in the RediSearch index"),Object(s.b)("p",null,"You can now use the FT.SEARCH to search your database, for example, to search all movies sorted by release year:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH idx:movies * SORTBY release_year ASC RETURN 2 title release_year\n")),Object(s.b)("p",null,'To test drive rest of Redis modules, please visit the links mentioned under "References" section.'),Object(s.b)("h3",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/blog/index-and-query-json-docs-with-redis/"}),"Indexing, Querying, and Full-Text Search of JSON Documents with Redis")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/RedisLabsModules/redismod"}),"Redismod GITHUB repository")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisjson"}),"RedisJSON Tutorial")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redistimeseries"}),"RedisTimeSeries Tutorial")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisgraph"}),"RedisGraph Tutorial")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisbloom"}),"RedisBloom Tutorial")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisgears"}),"RedisGears Tutorial"))))}c.isMDXComponent=!0},254:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(252),n=a(260);a(253),a(55);t.a=function(e){var t=r.a.useState(!1),a=t[0],i=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(s.a,{components:n.a},e.children)))}},255:function(e,t,a){"use strict";var i=a(0),r=a(256);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},256:function(e,t,a){"use strict";var i=a(0),r=Object(i.createContext)(void 0);t.a=r},257:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(255),n=a(259),o=a(56),l=a.n(o),d=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,m=e.className,p=Object(s.a)(),h=p.tabGroupChoices,O=p.setTabGroupChoices,j=Object(i.useState)(o),f=j[0],v=j[1],g=i.Children.toArray(e.children);if(null!=u){var N=h[u];null!=N&&N!==f&&b.some((function(e){return e.value===N}))&&v(N)}var R=function(e){v(e),null!=u&&O(u,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(n.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case c:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},a)}))),t?Object(i.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},258:function(e,t,a){"use strict";var i=a(3),r=a(0),s=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return s.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);