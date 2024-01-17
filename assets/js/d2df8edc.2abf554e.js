"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1807],{3418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=n(5893),s=n(1151);const o={title:"1.16.1",description:"Conditional Answer & Skip Action rework, UDialogueButtonWidget Changed and bug fixes",sidebar_position:1},a=void 0,d={id:"release_note/SDS1/1.16/1.16.1/1.16.1",title:"1.16.1",description:"Conditional Answer & Skip Action rework, UDialogueButtonWidget Changed and bug fixes",source:"@site/docs/release_note/SDS1/1.16/1.16.1/1.16.1.md",sourceDirName:"release_note/SDS1/1.16/1.16.1",slug:"/release_note/SDS1/1.16/1.16.1/",permalink:"/docs/release_note/SDS1/1.16/1.16.1/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/release_note/SDS1/1.16/1.16.1/1.16.1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1.16.1",description:"Conditional Answer & Skip Action rework, UDialogueButtonWidget Changed and bug fixes",sidebar_position:1},sidebar:"releaseNoteSidebar",previous:{title:"1.16.0",permalink:"/docs/release_note/SDS1/1.16/1.16.0/"}},r={},h=[{value:"Changes to WB_SpeechBubble",id:"changes-to-wb_speechbubble",level:2},{value:"1.16.1 Changes",id:"1161-changes",level:3},{value:"1.16.1_Final Changes",id:"1161_final-changes",level:3},{value:"Skip actions has been changed",id:"skip-actions-has-been-changed",level:2},{value:"Speech Bubble Widget&#39;s <strong>Hide on Behind a object</strong> feature&#39;s change",id:"speech-bubble-widgets-hide-on-behind-a-object-features-change",level:2},{value:"Rework of UDialogueButtonWidget",id:"rework-of-udialoguebuttonwidget",level:2},{value:"Changes to the Select Node",id:"changes-to-the-select-node",level:2},{value:"Rework of Conditional Answer Feature in Select Node",id:"rework-of-conditional-answer-feature-in-select-node",level:2},{value:"DialogueAnswerCondition",id:"dialogueanswercondition",level:3},{value:"Default DialogueAnswerConditions Provided",id:"default-dialogueanswerconditions-provided",level:3},{value:"Fixed",id:"fixed",level:2}];function l(e){const t={admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"changes-to-wb_speechbubble",children:"Changes to WB_SpeechBubble"}),"\n",(0,i.jsx)(t.h3,{id:"1161-changes",children:"1.16.1 Changes"}),"\n",(0,i.jsx)(t.p,{children:"Some of the bugs has been fixed and due to that, there are some changed parts on the BP."}),"\n",(0,i.jsxs)(t.p,{children:["Change the functions or events as following. ",(0,i.jsx)(t.strong,{children:"If you want to maintain your custom widget after the update, check out these functions and events and patch the changed logic."})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(5297).Z+"",width:"1698",height:"896"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4365).Z+"",width:"1395",height:"732"})}),"\n",(0,i.jsx)(t.h3,{id:"1161_final-changes",children:"1.16.1_Final Changes"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(7373).Z+"",width:"899",height:"409"})}),"\n",(0,i.jsx)(t.p,{children:"(New function added)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(9241).Z+"",width:"1870",height:"545"})}),"\n",(0,i.jsx)(t.p,{children:"(New function added)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(7532).Z+"",width:"1821",height:"614"})}),"\n",(0,i.jsx)(t.h2,{id:"skip-actions-has-been-changed",children:"Skip actions has been changed"}),"\n",(0,i.jsxs)(t.p,{children:["Now, the dialogue widgets don't do anything about the skip action on the ",(0,i.jsx)(t.strong,{children:"C++ side"}),".\r\nWhich means, if you want to make the users can not interact with the button when the widget is not skippable, you have to manually add logic for such actions on the BP side."]}),"\n",(0,i.jsxs)(t.p,{children:["We changed the basic BP asset (WB_SpeechBubble) and attached some additional functions to ",(0,i.jsx)(t.strong,{children:"check whether the current node allows skip actions and changes the visibility of the skip button according to that."})," Check out how we implemented the action. (or check out the last three images right above this section. that's the things we added.)"]}),"\n",(0,i.jsxs)(t.p,{children:["Also, we seperated the ",(0,i.jsx)(t.strong,{children:"bEnableSkip"})," property on the ",(0,i.jsx)(t.strong,{children:"DialogueNodeBase_Context"})," into two different properties: ",(0,i.jsx)(t.strong,{children:"bEnableContextSkip, bEnableMoveToNextNode"}),"\r\nbEnableContextSkip is a property for the text skip action, and bEnableMoveToNextNode is a property for the node skip action when the node's text update is finished."]}),"\n",(0,i.jsxs)(t.h2,{id:"speech-bubble-widgets-hide-on-behind-a-object-features-change",children:["Speech Bubble Widget's ",(0,i.jsx)(t.strong,{children:"Hide on Behind a object"})," feature's change"]}),"\n",(0,i.jsxs)(t.p,{children:["Now it trace on the world with sphere instead of a single line.\r\nUse a property ",(0,i.jsx)(t.strong,{children:"Hide Sphere Radius"})," to specify the radius of the trace ray."]}),"\n",(0,i.jsxs)(t.p,{children:["also we now provide a property ",(0,i.jsx)(t.strong,{children:"Hide Trace Debug Draw Method"})," that allow you to draw a debug trace for the ray to make it easy to find some when something goes off.\r\nChange this property to ",(0,i.jsx)(t.strong,{children:"None"})," to hide the debug trace"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The debug trace will be hidden automatically on the final stage of the game."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4868).Z+"",width:"603",height:"234"})}),"\n",(0,i.jsx)(t.h2,{id:"rework-of-udialoguebuttonwidget",children:"Rework of UDialogueButtonWidget"}),"\n",(0,i.jsx)(t.p,{children:"Completely changed internal functionalities and structure for easier customization."}),"\n",(0,i.jsxs)(t.p,{children:["The name of ",(0,i.jsx)(t.strong,{children:"UDialogueButtonWidget"})," has now been changed to ",(0,i.jsx)(t.strong,{children:"UDialogueAnswerButtonWidget"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Access and assignment of references for Button/Text Holder Widgets should now be done through getters and setters. This enables more natural customization by allowing control over the creation of the Text Holder Widget in C++ and the button's control in Blueprints."}),"\n",(0,i.jsx)(t.p,{children:"Especially noteworthy is the ability to use an already created Text Holder Widget instead of generating a new one, facilitating customization through designers."}),"\n",(0,i.jsx)(t.p,{children:"Several helpful functions have been added:"}),"\n",(0,i.jsx)(t.p,{children:"Create Text Holder: Generates a Text Holder Widget based on the given Answer Data.\r\nSync Text Holder: Synchronizes the text of the Text Holder Widget with the text in the Context Text of the Answer Data.\r\nRefer to the changes in the default WB_SelectButton widget, as it demonstrates the modifications well."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(1821).Z+"",width:"1920",height:"1047"})}),"\n",(0,i.jsx)(t.p,{children:'Check out the changed "WB_SelectButton" Asset and see how the logic has been changed.'}),"\n",(0,i.jsx)(t.h2,{id:"changes-to-the-select-node",children:"Changes to the Select Node"}),"\n",(0,i.jsxs)(t.p,{children:["The properties ",(0,i.jsx)(t.strong,{children:"Button Text Holder Widget Class"})," and ",(0,i.jsx)(t.strong,{children:"Button Text Style Table"})," have been added. This allows for the uniform specification of the dialogue text holder widget class and text style table to be used by the buttons."]}),"\n",(0,i.jsx)(t.h2,{id:"rework-of-conditional-answer-feature-in-select-node",children:"Rework of Conditional Answer Feature in Select Node"}),"\n",(0,i.jsx)(t.p,{children:"The existing logic used to check conditions not on the Answer itself but by evaluating the playability of the underlying nodes registered in the Answer. However, now, the Answer itself has a condition."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(5125).Z+"",width:"1675",height:"420"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"New Properties:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Condition:"})," The condition used to display this Answer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ConditionFailBehavior:"})," Determines whether to hide or disable the pin when the condition check fails. It has two options : ",(0,i.jsx)(t.strong,{children:"DoNotDisplay, DisplayButDisableTheButton."})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"dialogueanswercondition",children:"DialogueAnswerCondition"}),"\n",(0,i.jsxs)(t.p,{children:["The original Dialogue Condition has some certain limits when it is used on the answer, For example, it can not tell which answer this condition is being applied to.\r\nSo we added a new version of Dialogue Condition Named ",(0,i.jsx)(t.strong,{children:"Dialogue Answer Condition"}),", which can take the answer data that the condition applied on."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You can still use both the basic dialogue condition and new Dialogue Answer Condition for the answers."})}),"\n",(0,i.jsx)(t.p,{children:"You can create a new blueprint under the Create Blueprint tab or generate it from the Dialogue Manager's editor toolbar."}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(7350).Z+"",width:"324",height:"185"})}),(0,i.jsxs)(t.p,{children:["Unlike existing condition assets, you must override the ",(0,i.jsx)(t.strong,{children:"CheckAnswerCondition"})," function."]})]}),"\n",(0,i.jsx)(t.h3,{id:"default-dialogueanswerconditions-provided",children:"Default DialogueAnswerConditions Provided"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DAC_CheckNoAnswerYet:"})," Passes the test when no Answer has been implemented as a button in the node."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"An answer that uses this condition must be placed at the end of the answer array for proper functionality."})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DAC_HasNodeToPlay:"})," Passes the test only when there is at least one playable sub-node in the choices."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"fixed",children:"Fixed"}),"\n",(0,i.jsx)(t.p,{children:"Bug fix where the Dialogue Tree Viewer crashes the engine when drawing a graph containing deleted fragments or node classes."}),"\n",(0,i.jsx)(t.p,{children:"Fixed the issue where the error info of the graph nodes was not updating correctly."}),"\n",(0,i.jsx)(t.p,{children:'Some bug fixed related to the "Hide behind A Object" feature of the widget. (it wasn\'t taking a trace channel correctly.)'})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5125:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-1-b15069b63b65c830a6116f8b72961767.png"},7350:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-2-8bea3353ee410cdd6b5770623579804a.png"},5297:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-3-89c4d705d9c15ab76ab2714358f11fde.png"},4365:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-4-04375513bfe7c320a554de66bfd56e00.png"},1821:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-5-29c2fdf043db8560a752446b914b639e.png"},7373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-6-c390e5605717a60451a66fd371104c37.png"},9241:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-7-1288f1aa1e7b991dce4edde8a5b5a102.png"},7532:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-8-a001d906ad8c5ba65ab4cfc374dc498e.png"},4868:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-9-558652653eded2f9a82022bb45ca092e.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);