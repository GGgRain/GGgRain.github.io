"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4343],{4221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=n(5893),i=n(1151);const o={title:"Formatting with Fragments",description:"Learn how to format the context text with Dialogue Fragments",sidebar_position:2},s=void 0,r={id:"guide_docs/tutorial-extras/formatting-with-fragment/formatting-with-fragment",title:"Formatting with Fragments",description:"Learn how to format the context text with Dialogue Fragments",source:"@site/docs/guide_docs/tutorial-extras/formatting-with-fragment/formatting-with-fragment.md",sourceDirName:"guide_docs/tutorial-extras/formatting-with-fragment",slug:"/guide_docs/tutorial-extras/formatting-with-fragment/",permalink:"/docs/guide_docs/tutorial-extras/formatting-with-fragment/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial-extras/formatting-with-fragment/formatting-with-fragment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Formatting with Fragments",description:"Learn how to format the context text with Dialogue Fragments",sidebar_position:2},sidebar:"GuideSidebar",previous:{title:"Useful Events and Delegates",permalink:"/docs/guide_docs/tutorial-extras/useful-events-and-delegates/"},next:{title:"Making A Custom Node Class",permalink:"/docs/guide_docs/tutorial-extras/make-custom-node/"}},d={},h=[{value:"Background of The Appearence of Fragment Formatting System",id:"background-of-the-appearence-of-fragment-formatting-system",level:2},{value:"Advantages over old formatting method",id:"advantages-over-old-formatting-method",level:3},{value:"Learning the Components of Formatting Fragments",id:"learning-the-components-of-formatting-fragments",level:2},{value:"Using Formatting Fragments",id:"using-formatting-fragments",level:2}];function m(e){const t={admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"background-of-the-appearence-of-fragment-formatting-system",children:"Background of The Appearence of Fragment Formatting System"}),"\n",(0,a.jsxs)(t.p,{children:["On the 1.16.0 update, we decided to remove the old formatting system, ",(0,a.jsx)(t.strong,{children:"Context text finalizer"}),", which helps users to easily create BP logic that can modify the final look of the context text due to its compatibility issue with the Redirection system of the Unreal Engine."]}),"\n",(0,a.jsx)(t.p,{children:"So we needed to use a different method to format our text and instead of implementing whole new system, we decided to use the fragment system on formatting."}),"\n",(0,a.jsx)(t.h3,{id:"advantages-over-old-formatting-method",children:"Advantages over old formatting method"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"...And it turned out very excellent decision!"})," Formatting with the dialogue fragments has following advantages compared to the old system :"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"It uses much smaller disk space. Compared to Context Finalizer, Fragments take up only as much space as a single class, and object instances do not consume much space."}),"\n",(0,a.jsx)(t.li,{children:"It is reusable. For commonly used formatters, such as item prices, creating a Fragment dedicated to formatting and reusing it each time makes it easy to use without the need to write a new formatter every time, not like we did when we use the Context Finalizer."}),"\n",(0,a.jsx)(t.li,{children:"It allows for combinations. It means that multiple formatters for one text are possible. For example, if you need to format both the item price and skill name within one text, you can create a formatter for handling item prices and a formatter for handling skill names. By attaching both, you can format the required parts, eliminating the need to combine the same formatting logic as a one formatter as in the previous Context Finalizer."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Please read this advantages even if you don't know the old method. Because it also describes about the new usages of the new formatting method."})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"learning-the-components-of-formatting-fragments",children:"Learning the Components of Formatting Fragments"}),"\n",(0,a.jsx)(t.p,{children:"Now, let's learn how to format the context text with the Dialogue fragments."}),"\n",(0,a.jsxs)(t.p,{children:["To understand the logic that we will use to format our text, let's take a look at the ",(0,a.jsx)(t.strong,{children:"DF_SimpleFormat"})," asset that is envoloped in the plugin as basic assets."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["It's located under ",(0,a.jsx)(t.strong,{children:"/SimpleDialogueSystem/Content/Basics/Fragments/"}),". It may be different by the plugin's installation location."]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(2992).Z+"",width:"750",height:"265"})})]}),"\n",(0,a.jsx)(t.p,{children:"Let's see the event graph first. You can see that the fragment is handling both case when the fragment has been attached to a node and a dialogue manager."}),"\n",(0,a.jsxs)(t.p,{children:["It allows you to ",(0,a.jsx)(t.strong,{children:"select whether to format specific node on the dialogue manager by attaching it to a dialogue node, or the whole node in the dialogue manager by attaching it to the dialogue manager."})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"This is one of the common technique with the fragment and we just wanted to introduce it to you here. You don't need to spam copy-paste the fragment to the whole node if you make the logic in this way."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(7702).Z+"",width:"1447",height:"830"})}),"\n",(0,a.jsxs)(t.p,{children:["Now let's take a look into the ",(0,a.jsx)(t.strong,{children:"Proceed Format"})," function. It's where the formatting is proceeded on the fragment."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(2407).Z+"",width:"1450",height:"441"})}),"\n",(0,a.jsxs)(t.p,{children:["Here, we are taking the ",(0,a.jsx)(t.strong,{children:"context"})," structure from the provided ",(0,a.jsx)(t.strong,{children:"Dialogue Node Base Context"}),", and break it changed its text, and feed it back to the node, and update the widget to reflect the changes."]}),"\n",(0,a.jsxs)(t.p,{children:["The important part is a function ",(0,a.jsx)(t.strong,{children:"Format Text with Map"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(2304).Z+"",width:"1051",height:"441"})}),"\n",(0,a.jsx)(t.p,{children:"This is a function that the plugin provide with blueprint library. it simply format the provided text with the provided text map."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(2770).Z+"",width:"486",height:"298"})}),"\n",(0,a.jsxs)(t.p,{children:["It does the exact same thing with the Unreal Engine's Format Text Node, but the difference is that it can ",(0,a.jsx)(t.strong,{children:"dynamically specify the argument's name to format."})," It can be very useful if you have to format something could be changed by nodes, such as name of the speakers of the nodes."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"DF_SimpleFormat"})," will be a great start point for the implemetation of new formatting fragment for your system."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"using-formatting-fragments",children:"Using Formatting Fragments"}),"\n",(0,a.jsx)(t.p,{children:"You can use the formatting fragments just like using the other fragments."}),"\n",(0,a.jsx)(t.p,{children:"if you made it work both case (node and manager)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(3595).Z+"",width:"797",height:"290"})}),"\n",(0,a.jsx)(t.p,{children:"You can format a specific node by attaching it to the node,"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(69).Z+"",width:"643",height:"238"})}),"\n",(0,a.jsx)(t.p,{children:"Or you can format the whole nodes in the dialogue manager by attaching it to the manager (root node)."}),"\n",(0,a.jsx)(t.p,{children:"One of the recommended usage is that making a formatting fragment that handles the formatting of the whole item name's on some specific category, and using it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(568).Z+"",width:"1016",height:"376"})}),"\n",(0,a.jsx)(t.p,{children:"It will allow you to easily maintain the logic and format the text."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt text",src:n(10).Z+"",width:"1006",height:"416"})}),"\n",(0,a.jsx)(t.p,{children:"And another recommended usage is that using multiple the formatting fragment on a node.\r\nIt will allow you to easily control and format the text."})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},7702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-1-53f0d463beba940d822a722fe9aec67d.png"},2407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-2-35c24a5c5ee8b51cf183ab75ee236d8c.png"},2304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-3-3e7d3d4718b20c3fa81383a640fee89b.png"},2770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-4-2246342dce509d01ef2249d5b7ce1f49.png"},3595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-5-9a1a6740335651453e4a24c3212f4ee4.png"},69:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-6-b7ca717407b517b833914885257529ce.png"},568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-7-4a3ee3cbcd77c1ad4d2f891a40162c34.png"},10:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-8-295910d50622b3829bbaf43312ab247e.png"},2992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-f18b15dc37bc988f23f24219d144eee4.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);