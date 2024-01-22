"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5698],{8598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(5893),a=n(1151);const s={title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",sidebar_position:5},o=void 0,d={id:"guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events",title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",source:"@site/docs/guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events.md",sourceDirName:"guide_docs/tutorial/trying-dialogue-events",slug:"/guide_docs/tutorial/trying-dialogue-events/",permalink:"/docs/guide_docs/tutorial/trying-dialogue-events/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",sidebar_position:5},sidebar:"GuideSidebar",previous:{title:"Trying Out Dialogue Conditions",permalink:"/docs/guide_docs/tutorial/trying-dialogue-conditions/"},next:{title:"Trying Out Dialogue Inline Commands",permalink:"/docs/guide_docs/tutorial/trying-dialogue-inline-commands/"}},r={},l=[{value:"Creating Dialogue Events",id:"creating-dialogue-events",level:2},{value:"Triggering Dialogue Events with a Dialogue Inline Command",id:"triggering-dialogue-events-with-a-dialogue-inline-command",level:2},{value:"Triggering Dialogue Events with a Execute Node",id:"triggering-dialogue-events-with-a-execute-node",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Dialogue events are blueprint logics that can be invoked within a dialogue. From simple cosmetic logic to deep game-related logic, you can freely write and use the logic you need. In this document, we'll learn how to create and use such dialogue events."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"creating-dialogue-events",children:"Creating Dialogue Events"}),"\n",(0,i.jsxs)(t.p,{children:["To use dialogue events, we need to create one first. Click on the ",(0,i.jsx)(t.strong,{children:"Create Custom Event"})," button in the toolbar of the Dialogue Manager editor."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(5768).Z+"",width:"906",height:"540"})}),"\n",(0,i.jsx)(t.p,{children:"Now, choose the type of event you want from the options presented."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Dialogue Event"}),(0,i.jsxs)(t.td,{children:["often called as ",(0,i.jsx)(t.strong,{children:"Instanced Dialogue Event"})," is a type of Dialogue Event that can be instanced on the dialogue nodes and due to that only available to the specific dialogue manager"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Level Dialogue Event"}),(0,i.jsx)(t.td,{children:"A type of Dialogue Event that derived from the AActor class and can be placed on a level. and due to this, it can be easily shared between multiple dialogue managers."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"In this example, let's choose Instanced Event to create an instance dialogue event."}),"\n",(0,i.jsxs)(t.p,{children:["And to make it easy to find, We'll rename it to ",(0,i.jsx)(t.strong,{children:'"DE_Tutorial"'})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["In the plugin, Dialogue Events usally use ",(0,i.jsx)(t.strong,{children:"DE_"})," as their prefix."]})}),"\n",(0,i.jsx)(t.p,{children:"After creating the dialogue event asset, writing the event logic for that asset begins by overriding the following function:"}),"\n",(0,i.jsx)(t.p,{children:"For C++ derived classes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"virtual void ReceiveEventTrigger(class UDialogueWidgetBase* Widget, const TMap<FName, UActorComponent*>& ConversationParticipants);\n"})}),"\n",(0,i.jsx)(t.p,{children:"For Blueprint assets:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4963).Z+"",width:"611",height:"302"})}),"\n",(0,i.jsx)(t.p,{children:"Insert the desired event logic here."}),"\n",(0,i.jsx)(t.p,{children:"As we have created a Blueprint asset, let's follow the second method."}),"\n",(0,i.jsx)(t.p,{children:"For a simple example, let's create logic to play a niagara effect at the location of a participant actor when triggered."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(9157).Z+"",width:"414",height:"294"})}),"\n",(0,i.jsxs)(t.p,{children:["To do so, we'll add properties on the dialogue event that will be used at specifying ",(0,i.jsx)(t.strong,{children:"the particle asset"})," and ",(0,i.jsx)(t.strong,{children:"participant's ID"}),". So let's add a Niagara System property and name property on the event and make these properties public to ",(0,i.jsx)(t.strong,{children:"display them in the Dialogue Manager editor."})]}),"\n",(0,i.jsxs)(t.p,{children:["And attach this logic to the overrided function ",(0,i.jsx)(t.strong,{children:"ReceiveEventTrigger"})," like this :"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(1434).Z+"",width:"1582",height:"443"})}),"\n",(0,i.jsx)(t.p,{children:"We find the reference to the dialogue handle component for the provided participant id, get the owner actor of the component and used the actor's transform on spawning the particle on the world."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Conversation Participants"})," map has the reference of the dialogue handle components (Usually it will be SpeechBubbleHandleComponent Since the basic dialogue handle component is superseded by this class.) on the dialogue and it is paired with its matching Participant Name (IDName) on this dialogue."]}),(0,i.jsx)(t.p,{children:"For example, if you use a dialogue participant that has NPC_1 as its IDName, and include the character in the dialogue, then if you feed the NPC_1 on the find function and you will get the reference to the handle component of NPC_1 IDName."})]}),"\n",(0,i.jsx)(t.p,{children:"Now, it's time to attach the created event to a node in the manager."}),"\n",(0,i.jsx)(t.p,{children:'Click on the node, add a new element to the Events property in the Events section. Let\'s name the event key "HappyParticle."'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(8476).Z+"",width:"1251",height:"415"})}),"\n",(0,i.jsx)(t.p,{children:"Now, select our event in the Instanced Events section."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(6146).Z+"",width:"1299",height:"544"})}),"\n",(0,i.jsx)(t.p,{children:"You can see that an event instance is attached to the node instance in this way. Now, set the desired particle and participant name for this event."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(666).Z+"",width:"1369",height:"347"})}),"\n",(0,i.jsx)(t.h2,{id:"triggering-dialogue-events-with-a-dialogue-inline-command",children:"Triggering Dialogue Events with a Dialogue Inline Command"}),"\n",(0,i.jsx)(t.p,{children:"But we're not done yet. Dialogue nodes do not automatically call the events attached to them."}),"\n",(0,i.jsx)(t.p,{children:"To call the attached event, we need some method. There are various ways to do this: you can use fragments or inline commands to call the event, or design one event to call another. Alternatively, you can access the event externally (another actor receiving the widget reference and accessing the node) or modify the node's operation to make the event run automatically (or using Execute Node provided by the plugin)."}),"\n",(0,i.jsx)(t.p,{children:"Here, let's explore the most common and frequently used method: using an inline command. We'll use the inline command to call the event when the text reaches a specific point. This method is accomplished using the DI_Event command provided by the plugin."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Don't panic! We are going to look into the Dialogue Inline Command in the next tutorial.\r\nJust for now, follow the step, and come back to this document when you finish learning the Dialogue Inline Command."})}),"\n",(0,i.jsx)(t.p,{children:"Click on the desired point in the text where you want to call the event, press the Bind Command button, and select Event."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(2142).Z+"",width:"1044",height:"584"})}),"\n",(0,i.jsxs)(t.p,{children:['Once the inline command is inserted, click on it and check the check box on the "Key" row, enter the event key we attached to this node, ',(0,i.jsx)(t.strong,{children:"HappyParticle"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4382).Z+"",width:"732",height:"433"})}),"\n",(0,i.jsx)(t.p,{children:"So, This is the final result of the Dialogue Manager. I recycled the Dialogue Manager we made on the previous tutorial to make it sound more convincing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(3868).Z+"",width:"1662",height:"737"})}),"\n",(0,i.jsx)(t.p,{children:"Let's test it on the PIE."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(3948).Z+"",width:"1097",height:"528"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(6744).Z+"",width:"1055",height:"513"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(6906).Z+"",width:"1102",height:"519"})}),"\n",(0,i.jsx)(t.p,{children:"You note that the event is properly triggered when the text update meets the part of the text with our event runs."}),"\n",(0,i.jsx)(t.h2,{id:"triggering-dialogue-events-with-a-execute-node",children:"Triggering Dialogue Events with a Execute Node"}),"\n",(0,i.jsx)(t.p,{children:"The most convienient way to trigger dialogue events is using the Execute node."}),"\n",(0,i.jsx)(t.p,{children:"Find and place a Execute Node on the graph on the new node context menu of the graph."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(3281).Z+"",width:"1120",height:"558"})}),"\n",(0,i.jsx)(t.p,{children:"Click the Execute Node and attach the events you want to trigger."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(6399).Z+"",width:"1017",height:"362"})}),"\n",(0,i.jsx)(t.p,{children:"then if the dialogue meets this execute node on the playback, It will trigger the events on the node automatically."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"It will execute the events by the order of the elements on the array."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4963:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-1-084c226c900235df977056449fa68e46.png"},3948:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-10-ffe2bf5f48f147fb3767bff7829c6638.png"},6744:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-11-72db387da4c48009b61ddac79c424508.png"},6906:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-12-6d584de88a8b6a66986bd8a519571af5.png"},3281:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-13-d9a9212027d3c254af21689e89c55850.png"},6399:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-14-0d25ae32247f69090645f45526b848e4.png"},9157:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-2-1539d41107b3b529c98399317aea813b.png"},1434:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-3-07a67fd1a31dfe7ae14a4ae4be6893ce.png"},8476:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-4-fc1322654a291181bc20d10c8b3de1cf.png"},6146:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-5-c994268f86221877edbbbacd3d53e14a.png"},666:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-6-a3851e6ce766798eabb77ca29d23740a.png"},2142:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-7-0898ec81ae05148f05125c226719ef7a.png"},4382:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-8-9bbb3529aca9d4b56d192edb3dcb89fc.png"},3868:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-9-7788af6319da3e9185a09fc434b25528.png"},5768:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-2c56a5e02ed7db849b74afc1efdfc5b6.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(7294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);