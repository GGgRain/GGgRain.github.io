"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6803],{2690:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var s=i(5893),n=i(1151);const a={title:"Using Simple Dialogue Subsystem",description:"Learn how to use the Simple Dialogue Subsystem and how to control dialogues",sidebar_position:8},o=void 0,l={id:"guide_docs/tutorial/using-simple-dialogue-subsystem/using-simple-dialogue-subsystem",title:"Using Simple Dialogue Subsystem",description:"Learn how to use the Simple Dialogue Subsystem and how to control dialogues",source:"@site/docs/guide_docs/tutorial/using-simple-dialogue-subsystem/using-simple-dialogue-subsystem.md",sourceDirName:"guide_docs/tutorial/using-simple-dialogue-subsystem",slug:"/guide_docs/tutorial/using-simple-dialogue-subsystem/",permalink:"/ko-kr/docs/guide_docs/tutorial/using-simple-dialogue-subsystem/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/using-simple-dialogue-subsystem/using-simple-dialogue-subsystem.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Using Simple Dialogue Subsystem",description:"Learn how to use the Simple Dialogue Subsystem and how to control dialogues",sidebar_position:8},sidebar:"GuideSidebar",previous:{title:"Trying Out Dialogue Fragments",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-fragments/"},next:{title:"Trying Out Basic Nodes",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-basic-nodes/"}},d={},r=[{value:"Accessing Simple Dialogue Subsystem on BP",id:"accessing-simple-dialogue-subsystem-on-bp",level:2},{value:"Provided Features",id:"provided-features",level:2},{value:"Starting Dialogue",id:"starting-dialogue",level:3},{value:"StartDialogue",id:"startdialogue",level:4},{value:"StartDialogueWithParams",id:"startdialoguewithparams",level:4},{value:"Ending Dialogues",id:"ending-dialogues",level:3},{value:"Finding Dialogues &amp; Getting All Dialogues",id:"finding-dialogues--getting-all-dialogues",level:3},{value:"Ending Dialogues",id:"ending-dialogues-1",level:3},{value:"Finding Participant Handle (Speech Bubble Handle)",id:"finding-participant-handle-speech-bubble-handle",level:3},{value:"Delegates for Dialogue Start / End",id:"delegates-for-dialogue-start--end",level:3}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Simple Dialogue Subsystem"})," is a subsystem that handles the whole logic related to the playback and searching of the dialogues ingame."]}),"\n",(0,s.jsx)(t.p,{children:"Learning how to use Simple Dialogue Subsystem is essential step to control the playback of the dialogues."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"accessing-simple-dialogue-subsystem-on-bp",children:"Accessing Simple Dialogue Subsystem on BP"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SDSS(SimpleDialogueSubsystem)"})," reference can be obtained on ",(0,s.jsx)(t.strong,{children:"any C++ class"})," by as following :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"if(!GetGameInstance()) { return nullptr; }\r\n\r\nif(!GetGameInstance()->GetSubsystem<USimpleDialogueSubsystem>()) { return nullptr; }\r\n\r\nreturn GetGameInstance()->GetSubsystem<USimpleDialogueSubsystem>();\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SDSS(SimpleDialogueSubsystem)"})," reference can be obtained on ",(0,s.jsx)(t.strong,{children:"any blueprint"})," by searching as following :"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(9890).Z+"",width:"897",height:"509"})}),"\n",(0,s.jsx)(t.h2,{id:"provided-features",children:"Provided Features"}),"\n",(0,s.jsx)(t.h3,{id:"starting-dialogue",children:"Starting Dialogue"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(8011).Z+"",width:"1222",height:"486"})}),"\n",(0,s.jsx)(t.p,{children:"SDSS provides those two functions you can use to start off any dialogues."}),"\n",(0,s.jsx)(t.h4,{id:"startdialogue",children:"StartDialogue"}),"\n",(0,s.jsx)(t.p,{children:"You can create a dialogue widget with dialogue manager you want with this function."}),"\n",(0,s.jsx)(t.p,{children:"You can specify the dialogue widget class you want to use, and dialogue asset to play on the dialogue."}),"\n",(0,s.jsx)(t.p,{children:"You can select whether to automatically add it to the viewport. if you don't want to add it to the screen right away, then you can disable it and find the dialogue widget later and use it as you want."}),"\n",(0,s.jsx)(t.p,{children:"You can specify the node where the dialogue will start from. Leave it blank(none) to start from the beginning."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"You can double-click the name label for the node to rename the node as you want."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(531).Z+"",width:"906",height:"365"})})]}),"\n",(0,s.jsxs)(t.p,{children:["If you specify the ",(0,s.jsx)(t.strong,{children:"Dialogue ID"})," property you want, then it will set the dialogue's ID to it, and later you can access to the dialogue with the ID, either you can make it use a specific ID and access the dialogue via that ID on other multiple BPs."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"If you don't specify the ID, it will use ramdomly generated ID instead."})}),"\n",(0,s.jsx)(t.p,{children:"Return value of both functions is the dialogue ID the newly generated dialogue has."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"You must to use this function to start off dialogue. It is not good way to manually create a dialogue widget and feed a dialogue manager to it."})}),"\n",(0,s.jsx)(t.h4,{id:"startdialoguewithparams",children:"StartDialogueWithParams"}),"\n",(0,s.jsxs)(t.p,{children:["it's almost same with the StartDialogue, but it provide an argument called ",(0,s.jsx)(t.strong,{children:"IDToHandleComponentReferenceOverride"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It literally overrides the participant components' references for the specific Participant Key that dialogue widget automatically collects when the dialogue initializes."}),"\n",(0,s.jsxs)(t.p,{children:["This is useful for some occasions such as ",(0,s.jsx)(t.strong,{children:"when you have to specify the participants that has different IDName from the role in the dialogue, or when you have to specify a character among multiple characters with same IDNames."})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"Here is the real usage:"}),(0,s.jsx)(t.p,{children:'When a dialogue manager has "Cube" as a one of the participants, and if you want to feed a UDialogueHandleComponent with the IDName as "Cube_Test1" to that role,'}),(0,s.jsxs)(t.p,{children:["Add this fair to this function's ",(0,s.jsx)(t.strong,{children:"IDToHandleComponentReferenceOverride"}),' : ("Cube", target_UDialogueHandleComponent_reference(in this case, a UDialogueHandleComponent with the IDName "Cube_Test1")).']})]}),"\n",(0,s.jsx)(t.h3,{id:"ending-dialogues",children:"Ending Dialogues"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(1718).Z+"",width:"726",height:"300"})}),"\n",(0,s.jsxs)(t.p,{children:["SDSS provides ",(0,s.jsx)(t.strong,{children:"End Dialogue"})," that make the specified dialogue end."]}),"\n",(0,s.jsx)(t.p,{children:"All you have to do is feeding the ID of the dialogue you want to make end."}),"\n",(0,s.jsx)(t.p,{children:"Also you can specify whether to terminate it immediately. (Remove from the viewport immediately)"}),"\n",(0,s.jsx)(t.h3,{id:"finding-dialogues--getting-all-dialogues",children:"Finding Dialogues & Getting All Dialogues"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(458).Z+"",width:"919",height:"355"})}),"\n",(0,s.jsxs)(t.p,{children:["SDSS provides ",(0,s.jsx)(t.strong,{children:"Find Dialogue"})," that returns the dialogue widget reference for the specified ID."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(2490).Z+"",width:"892",height:"366"})}),"\n",(0,s.jsxs)(t.p,{children:["SDSS also provides ",(0,s.jsx)(t.strong,{children:"Find Dialogue"})," that returns the whole dialogue widgets' references that are being played on the level."]}),"\n",(0,s.jsx)(t.h3,{id:"ending-dialogues-1",children:"Ending Dialogues"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(458).Z+"",width:"919",height:"355"})}),"\n",(0,s.jsxs)(t.p,{children:["SDSS provides ",(0,s.jsx)(t.strong,{children:"Find Dialogue"})," that returns the dialogue widget reference for the specified ID."]}),"\n",(0,s.jsx)(t.h3,{id:"finding-participant-handle-speech-bubble-handle",children:"Finding Participant Handle (Speech Bubble Handle)"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(1470).Z+"",width:"737",height:"597"})}),"\n",(0,s.jsxs)(t.p,{children:["SDSS provides ",(0,s.jsx)(t.strong,{children:"FindFirstSpeechbubbleHandle"}),", ",(0,s.jsx)(t.strong,{children:"FindSpeechBubbleHandles"}),", ",(0,s.jsx)(t.strong,{children:"GetAllSpeechBubbleHandleComponents"})," that can be used to gather the references of participant handle component with specific IDName, or all the components on the level."]}),"\n",(0,s.jsx)(t.h3,{id:"delegates-for-dialogue-start--end",children:"Delegates for Dialogue Start / End"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:i(1950).Z+"",width:"738",height:"420"})}),"\n",(0,s.jsx)(t.p,{children:"You can also use those delegates to detect the start / end of the dialogue."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Detecting dialogue's start event will not be triggered on the very first beginning of the game world as expected."})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8011:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-1-37afda28ee0950b250b7b36261a43381.png"},531:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-2-06285d90faaab5ebc0740be9fd510968.png"},1718:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-3-65e3e48d7928a5089bc71a1196d53c55.png"},458:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-4-dff10f91f0100d9d87351b7c5c7af2a3.png"},2490:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-5-9ecffc62e5bd3d6601c3fd61b33b3e8f.png"},1470:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-6-17d0bd91ef9136a7242b565fbb8fb5af.png"},1950:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-7-aeeb5c0c568ffb5f4fbaa7df6a6fff98.png"},9890:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/image-e024ca338a5764793409ff667e724de0.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var s=i(7294);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);