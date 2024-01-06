"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5698],{8598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(5893),o=n(1151);const a={title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",sidebar_position:6},r=void 0,s={id:"guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events",title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",source:"@site/docs/guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events.md",sourceDirName:"guide_docs/tutorial/trying-dialogue-events",slug:"/guide_docs/tutorial/trying-dialogue-events/",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-events/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/trying-dialogue-events/trying-dialogue-events.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Trying Dialogue Events",description:"Explore dialogue events that allow executing gameplay logic during dialogues.",sidebar_position:6},sidebar:"GuideSidebar",previous:{title:"Trying Dialogue Conditions",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-conditions/"},next:{title:"Trying Dialogue Fragments",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-fragments/"}},l={},d=[{value:"Creating Dialogue Events",id:"creating-dialogue-events",level:2},{value:"Triggering Dialogue Events with a Dialogue Inline Command",id:"triggering-dialogue-events-with-a-dialogue-inline-command",level:2},{value:"Triggering Dialogue Events with a Execute Node",id:"triggering-dialogue-events-with-a-execute-node",level:2}];function c(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"This document focuses on the usage of functionality rather than the configuration of [[Dialogue Events]]. For detailed information about dialogue events, refer to the [[Dialogue Events]] document."})}),"\n",(0,i.jsx)(t.p,{children:"Dialogue events are blueprint logics that can be invoked within a dialogue. From simple cosmetic logic to deep game-related logic, you can freely write and use the logic you need. In this document, we'll learn how to create and use such dialogue events."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"creating-dialogue-events",children:"Creating Dialogue Events"}),"\n",(0,i.jsxs)(t.p,{children:["To use dialogue events, we need to create one first. Click on the ",(0,i.jsx)(t.strong,{children:"New Dialogue Event"})," button in the toolbar of the Dialogue Manager editor."]}),"\n",(0,i.jsx)(t.p,{children:"Now, choose the type of event you want from the options presented."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"For descriptions of each event type, refer to the [[Dialogue Events]] document."})}),"\n",(0,i.jsx)(t.p,{children:"In this example, let's choose Instanced Event to create an instance dialogue event."}),"\n",(0,i.jsx)(t.p,{children:"After creating the dialogue event asset, writing the event logic for that asset begins by overriding the following function:"}),"\n",(0,i.jsx)(t.p,{children:"For C++ derived classes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"virtual void ReceiveEventTrigger(class UDialogueWidgetBase* Widget, const TMap<FName, UActorComponent*>& ConversationParticipants);\n"})}),"\n",(0,i.jsx)(t.p,{children:"For Blueprint assets:"}),"\n",(0,i.jsx)(t.p,{children:"Insert the desired event logic here."}),"\n",(0,i.jsx)(t.p,{children:"As we have created a Blueprint asset, let's follow the second method."}),"\n",(0,i.jsx)(t.p,{children:"For a simple example, let's create logic to play a particle effect at the location of a participant actor when triggered. We'll add properties to specify the particle asset and participant actor's name. Make these properties public to display them in the Dialogue Manager editor."}),"\n",(0,i.jsx)(t.p,{children:"Now, attach the created event to a node in the manager."}),"\n",(0,i.jsx)(t.p,{children:'Click on the node, add a new element to the Events property in the Events section. Let\'s name the event key "HappyParticle."'}),"\n",(0,i.jsx)(t.p,{children:"Now, select our recently created event in the Instanced Events section."}),"\n",(0,i.jsx)(t.p,{children:"You can see that an event instance is attached to the node instance in this way. Now, set the desired particle and participant name for this event."}),"\n",(0,i.jsx)(t.h2,{id:"triggering-dialogue-events-with-a-dialogue-inline-command",children:"Triggering Dialogue Events with a Dialogue Inline Command"}),"\n",(0,i.jsx)(t.p,{children:"But we're not done yet. Dialogue nodes do not automatically call the events attached to them."}),"\n",(0,i.jsx)(t.p,{children:"To call the attached event, we need some method. There are various ways to do this: you can use fragments or inline commands to call the event, or design one event to call another. Alternatively, you can access the event externally (another actor receiving the widget reference and accessing the node) or modify the node's operation to make the event run automatically (or using [[Execute Node]] provided by the plugin)."}),"\n",(0,i.jsx)(t.p,{children:"Here, let's explore the most common and frequently used method: using an inline command. We'll use the inline command to call the event when the text reaches a specific point. This method is accomplished using the DI_Event command provided by the plugin."}),"\n",(0,i.jsx)(t.p,{children:"Click on the desired point in the text where you want to call the event, press the Bind Command button, and select Event."}),"\n",(0,i.jsx)(t.p,{children:"Once the inline command is inserted, click on it and enter the event key we attached to this node."}),"\n",(0,i.jsx)(t.p,{children:"If you play it now, you'll see that the event is properly triggered when the part of the text with our event runs."}),"\n",(0,i.jsx)(t.h2,{id:"triggering-dialogue-events-with-a-execute-node",children:"Triggering Dialogue Events with a Execute Node"}),"\n",(0,i.jsx)(t.p,{children:"The most convienient way to trigger dialogue events is using the Execute node."}),"\n",(0,i.jsx)(t.p,{children:"Find and place a Execute Node on the graph on the new node context menu of the graph."}),"\n",(0,i.jsx)(t.p,{children:"Click the Execute Node and attach the events you want to trigger."}),"\n",(0,i.jsx)(t.p,{children:"then if the dialogue meets this execute node on the playback, It will trigger the events on the node automatically."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"It will execute the events by the order of the elements on the array."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"[!note] There are lightweight and creative ways within our plugin to execute gameplay logic. The inline commands, including the Event command briefly mentioned in this document, are the heroes. The next tutorial is [[Trying Inline Commands]]."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);