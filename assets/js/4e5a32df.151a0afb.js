"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4905],{2833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=t(5893),o=t(1151);const l={title:"Installation",description:"Various ways to install the plugin.",sidebar_position:1},s=void 0,r={id:"guide_docs/tutorial/installation",title:"Installation",description:"Various ways to install the plugin.",source:"@site/docs/guide_docs/tutorial/installation.md",sourceDirName:"guide_docs/tutorial",slug:"/guide_docs/tutorial/installation",permalink:"/docs/guide_docs/tutorial/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",description:"Various ways to install the plugin.",sidebar_position:1},sidebar:"GuideSidebar",previous:{title:"Tutorial",permalink:"/docs/category/tutorial"},next:{title:"Creating Your First Dialogue",permalink:"/docs/guide_docs/tutorial/creating-your-first-dialogue/"}},a={},u=[{value:"Installing the plugin on your engine",id:"installing-the-plugin-on-your-engine",level:3},{value:"Installing the plugin on your project",id:"installing-the-plugin-on-your-project",level:3},{value:"Installing the plugin on the project with unsupported engine version",id:"installing-the-plugin-on-the-project-with-unsupported-engine-version",level:3}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Installation of the Unreal engine and purchasing plugin have been skipped in this tutorial."})}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-plugin-on-your-engine",children:"Installing the plugin on your engine"}),"\n",(0,i.jsxs)(n.p,{children:["Here is the steps you have to follow to install ",(0,i.jsx)(n.strong,{children:"Simple Dialogue System"})," plugin on your Unreal Engine directory."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.strong,{children:"Epic Games Launcher"})," and go to the unreal engine section, go to the Library tab, and find ",(0,i.jsx)(n.strong,{children:"Simple Dialogue System"})," and install the plugin that matches for your engine version."]}),"\n",(0,i.jsxs)(n.li,{children:["Open your project, go to the plugin tab and enable ",(0,i.jsx)(n.strong,{children:"Simple Dialogue System"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Restart your project."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-plugin-on-your-project",children:"Installing the plugin on your project"}),"\n",(0,i.jsxs)(n.p,{children:["Here is the steps you have to follow to install ",(0,i.jsx)(n.strong,{children:"Simple Dialogue System"})," plugin on your project directory.\r\n",(0,i.jsx)(n.strong,{children:"You have to install the plugin on the engine first to get the plugin files."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the engine directory you've installed the plugin at and go to the path: ",(0,i.jsx)(n.em,{children:"Engine/Plugins/Marketplace"})," and copy the ",(0,i.jsx)(n.strong,{children:"SimpleDialogueSystemPlugin"})," folder."]}),"\n",(0,i.jsxs)(n.li,{children:["On the directory of the project you want to install the plugin, and paste the ",(0,i.jsx)(n.strong,{children:"SimpleDialogueSystemPlugin"}),' folder at there, (If there is no "Plugins" then make a new empty folder and rename it to "Plugins")']}),"\n",(0,i.jsxs)(n.li,{children:["Rename the pasted ",(0,i.jsx)(n.strong,{children:"SimpleDialogueSystemPlugin"}),' folder to "SimpleDialogueSystem"']}),"\n",(0,i.jsx)(n.li,{children:"Open the project and check out whether it has been installed properly."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-plugin-on-the-project-with-unsupported-engine-version",children:"Installing the plugin on the project with unsupported engine version"}),"\n",(0,i.jsx)(n.p,{children:"Our product supports only lastest 3 minor versions of the plugin, but our product has been designed to be compatiable at lowest with the 5.0 engine version internally.\r\nSo if you need the plugin for the previous versions, you can downgrade it yourself."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"But in this case, It works only when you install it on the project directory."})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the steps you have to follow to downgrade ",(0,i.jsx)(n.strong,{children:"Simple Dialogue System"})," plugin's engine support version."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"go to the 'SimpleDialogueSystem' on your plugins directory on the project and find SimpleDialogueSystem.uplugin"}),"\n",(0,i.jsx)(n.li,{children:"Open it up with notepad (or any other text editors.)"}),"\n",(0,i.jsx)(n.li,{children:'Modify the EngineVersion to as you want. (ex -> If you want to convert it to compatiable with 4.27.x versions of the engine -> "EngineVersion": "4.27.0" )'}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Now let's start to learn about the plugin! ",(0,i.jsx)(n.a,{href:"/docs/guide_docs/tutorial/creating-your-first-dialogue",children:"Creating your first dialogue"})," page will be a good starting point."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const o={},l=i.createContext(o);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);