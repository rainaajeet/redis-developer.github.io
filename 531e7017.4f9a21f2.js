(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{126:function(e,n,t){"use strict";var a=t(0),r=t(129);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},127:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(121),o=t(131);t(123),t(55);n.a=function(e){var n=r.a.useState(!1),t=n[0],a=n[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!t)}})))),t&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:o.a},e.children)))}},129:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},133:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(126),o=t(122),l=t(60),c=t.n(l),s=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,u=e.values,p=e.groupId,m=e.className,b=Object(i.a)(),g=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(a.useState)(l),v=h[0],O=h[1],j=a.Children.toArray(e.children);if(null!=p){var N=g[p];null!=N&&N!==v&&u.some((function(e){return e.value===N}))&&O(N)}var w=function(e){O(e),null!=p&&f(p,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},134:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(121)),o=t(133),l=t(134),c=(t(123),t(127),{id:"index-golang",title:"Go and Redis",sidebar_label:"Go",slug:"/develop/golang/"}),s={unversionedId:"develop/golang/index-golang",id:"develop/golang/index-golang",isDocsHomePage:!1,title:"Go and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang.",source:"@site/docs/develop/golang/index-golang.mdx",slug:"/develop/golang/",permalink:"/develop/golang/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/golang/index-golang.mdx",version:"current",sidebar_label:"Go",sidebar:"docs",previous:{title:"Node.js and Redis",permalink:"/develop/node/"},next:{title:"Explore Data",permalink:"/explore"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Getting Started with redigo",id:"getting-started-with-redigo",children:[]}]}],u={toc:d};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Golang community has built many client libraries that you can find ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/clients#go"}),"here"),".\nFor your first steps with Golang and Redis, this article will show how to use the recommended library: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gomodule/redigo"}),"redigo"),"."),Object(i.b)(o.a,{defaultValue:"redigo",values:[{label:"Redigo",value:"redigo"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"redigo",mdxType:"TabItem"},Object(i.b)("h3",{id:"getting-started-with-redigo"},"Getting Started with redigo"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redigo")," library is located in the ",Object(i.b)("inlineCode",{parentName:"p"},"https://github.com/gomodule/redigo")," that you must import in your application."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Import the ",Object(i.b)("inlineCode",{parentName:"p"},"redigo")," module"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," go get github.com/gomodule/redigo/redis\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'import (\n    "fmt"\n    "context"\n    "github.com/gomodule/redigo/redis"\n)\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a connection pool"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'func newPool() *redis.Pool {\n    return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n            c, err := redis.Dial("tcp", ":6379")\n            if err != nil {\n                panic(err.Error())\n            }\n            return c, err\n        },\n    }\n}\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write your application code"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n\n    "github.com/gomodule/redigo/redis"\n)\n\nvar pool = newPool()\n\nfunc main() {\n\n    client := pool.Get()\n    defer client.Close()\n\n    _, err := client.Do("SET", "mykey", "Hello from redigo!")\n    if err != nil {\n        panic(err)\n    }\n\n    value, err := client.Do("GET", "mykey")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("%s \\n", value)\n\n    _, err = client.Do("ZADD", "vehicles", 4, "car")\n    if err != nil {\n        panic(err)\n    }\n    _, err = client.Do("ZADD", "vehicles", 2, "bike")\n    if err != nil {\n        panic(err)\n    }\n\n    vehicles, err := client.Do("ZRANGE", "vehicles", 0, -1, "WITHSCORES")\n    if err != nil {\n        panic(err)\n    }   \n    fmt.Printf("%s \\n", vehicles)\n\n    \n}\n\nfunc newPool() *redis.Pool {\n    return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n            c, err := redis.Dial("tcp", ":6379")\n            if err != nil {\n                panic(err.Error())\n            }\n            return c, err\n        },\n    }\n}    \n')))),Object(i.b)("p",null,'Find more information about Golang & Redis connections in the "',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/golang/redigo"}),"Redis Connect"),'".'))))}p.isMDXComponent=!0}}]);