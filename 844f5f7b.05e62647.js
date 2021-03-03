(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{125:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(122),s=n(131);n(123),n(55);t.a=function(e){var t=a.a.useState(!1),n=t[0],i=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!n)}})))),n&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(r.a,{components:s.a},e.children)))}},127:function(e,t,n){"use strict";var i=n(0),a=n(128);t.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)(void 0);t.a=a},129:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(127),s=n(124),o=n(56),c=n.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,u=e.groupId,b=e.className,h=Object(r.a)(),m=h.tabGroupChoices,v=h.setTabGroupChoices,y=Object(i.useState)(o),f=y[0],j=y[1],O=i.Children.toArray(e.children);if(null!=u){var g=m[u];null!=g&&g!==f&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=u&&v(u,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(i.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},130:function(e,t,n){"use strict";var i=n(3),a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(122)),s=n(129),o=n(130),c=(n(123),n(125)),l={id:"index-python",title:"Python and Redis",sidebar_label:"Python",slug:"/develop/python/"},d={unversionedId:"develop/python/index-python",id:"develop/python/index-python",isDocsHomePage:!1,title:"Python and Redis",description:"Find tutorials, Examples and Technical articles that will help you to develop with Redis and Python.",source:"@site/docs/develop/python/index-python.mdx",slug:"/develop/python/",permalink:"/develop/python/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/python/index-python.mdx",version:"current",sidebar_label:"Python",sidebar:"docs",previous:{title:"Java and Redis",permalink:"/develop/java/"},next:{title:"Node.js and Redis",permalink:"/develop/node/"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Getting Started with redis-py",id:"getting-started-with-redis-py",children:[]}]},{value:"Guides",id:"guides",children:[]},{value:"More developer resources",id:"more-developer-resources",children:[]},{value:"Redis University",id:"redis-university",children:[{value:"Redis for Python Developers",id:"redis-for-python-developers",children:[]}]}],u={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Find tutorials, Examples and Technical articles that will help you to develop with Redis and Python."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"The Python community has built many client libraries that you can find ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/clients#python"}),"here"),".\nFor your first steps with Python and Redis, this article will show how to use the recommended library: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/andymccurdy/redis-py"}),"redis-py"),"."),Object(r.b)(s.a,{defaultValue:"redis-py",values:[{label:"Redis Py",value:"redis-py"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"redis-py",mdxType:"TabItem"},Object(r.b)("h3",{id:"getting-started-with-redis-py"},"Getting Started with redis-py"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install the Redis library using ",Object(r.b)("inlineCode",{parentName:"p"},"pip")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"pip3 install redis\n")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Write your application code"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"import redis\n\nredis = redis.Redis(\n    host= 'localhost',\n    port= '6379')\n\nredis.set('mykey', 'Hello from Python!')\nvalue = redis.get('mykey') \nprint(value)\n\nredis.zadd('vehicles', {'car' : 0})\nredis.zadd('vehicles', {'bike' : 0})\nvehicles = redis.zrange('vehicles', 0, -1)\nprint(vehicles)\n")))),Object(r.b)("p",null,'Find more information about Redis & Redis connections in the "',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/python/redispy"}),"Redis Connect"),'".'))),"---",Object(r.b)("h2",{id:"guides"},"Guides"),Object(r.b)(c.a,{title:"How to Use SSL/TLS With Redis Enterprise",page:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",mdxType:"RedisCard"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"more-developer-resources"},"More developer resources"),Object(r.b)("div",{class:"row"},Object(r.b)("div",{class:"col"},Object(r.b)("h4",{id:"sample-code"},"Sample Code"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/redis-developer/basic-caching-demo-nodejs"}),"Flask Simple Rate limiting Example   ")),"\nApplication that shows how to do rate limiting using various Redis datastructure.")),Object(r.b)("div",{class:"col"},Object(r.b)("h4",{id:"technical-articles--videos"},"Technical Articles & Videos"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://redislabs.com/blog/beyond-the-cache-with-python/"}),"Beyond the Cache with Python"))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"redis-university"},"Redis University"),Object(r.b)("h3",{id:"redis-for-python-developers"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://university.redislabs.com/courses/ru102py/"}),"Redis for Python Developers")),Object(r.b)("p",null,"A complete introduction to Redis for Python developers."),Object(r.b)("div",{class:"text--center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BxRJRNt7Qwc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}b.isMDXComponent=!0}}]);