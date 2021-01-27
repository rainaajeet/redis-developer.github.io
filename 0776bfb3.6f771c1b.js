(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var r=i.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return i.a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||a;return t?i.a.createElement(f,o(o({ref:r},d),{},{components:t})):i.a.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<a;d++)c[d]=t[d];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},71:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),i=t(7),a=(t(0),t(120)),c={id:"index-docker",title:"Install and create Redis database using Docker",sidebar_label:"Docker",slug:"/create/docker"},o={unversionedId:"create/docker/index-docker",id:"create/docker/index-docker",isDocsHomePage:!1,title:"Install and create Redis database using Docker",description:"Pre-requisites:",source:"@site/docs/create/docker/index-docker.mdx",slug:"/create/docker",permalink:"/create/docker",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/index-docker.mdx",version:"current",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Create a database using Redis Enterprise Cloud",permalink:"/create/cloud"},next:{title:"Install and Create Redis database from Source",permalink:"/create/resoftware"}},s=[],d={toc:s};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"pre-requisites"},"Pre-requisites:"),Object(a.b)("p",null,"Ensure that Docker is installed in your system. Follow ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"https://docs.docker.com/engine/install/")," if you haven\u2019t installed yet."),Object(a.b)("h4",{id:"run-the-redis-instance"},"Run the Redis instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker run --name myredis -d redis\n")),Object(a.b)("h4",{id:"verify-if-redis-container-is-running-or-not"},"Verify if Redis container is running or not:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES\n241f2411637e   redis     "docker-entrypoint.s\u2026"   2 minutes ago   Up 2 minutes   6379/tcp   myredis\n')),Object(a.b)("h4",{id:"connecting-to-redis-server-using-redis-cli-client"},"Connecting to Redis Server using redis-cli client"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker exec -it 241 sh\n# redis-cli\n127.0.0.1:6379>ping\nPONG\n")),Object(a.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."),Object(a.b)("h4",{id:"running-redis-container-with-persistent-storage"},"Running Redis container with Persistent Storage"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker run --name some-redis -d redis redis-server --appendonly yes\n")),Object(a.b)("p",null,"If persistence is enabled, data is stored in the VOLUME /data, which can be used with --volumes-from some-volume-container or -v /docker/host/dir:/data "))}l.isMDXComponent=!0}}]);