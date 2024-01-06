"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8778],{9834:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(5893),o=i(1151);const r={title:"Trying Dialogue Conditions",description:"Explore dialogue conditions that control branching and node playback.",sidebar_position:5},a=void 0,s={id:"guide_docs/tutorial/trying-dialogue-conditions/trying-dialogue-conditions",title:"Trying Dialogue Conditions",description:"Explore dialogue conditions that control branching and node playback.",source:"@site/docs/guide_docs/tutorial/trying-dialogue-conditions/trying-dialogue-conditions.md",sourceDirName:"guide_docs/tutorial/trying-dialogue-conditions",slug:"/guide_docs/tutorial/trying-dialogue-conditions/",permalink:"/docs/guide_docs/tutorial/trying-dialogue-conditions/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/trying-dialogue-conditions/trying-dialogue-conditions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Trying Dialogue Conditions",description:"Explore dialogue conditions that control branching and node playback.",sidebar_position:5},sidebar:"GuideSidebar",previous:{title:"Trying the Context Text Styling Editor",permalink:"/docs/guide_docs/tutorial/trying-context-text-styling-editor/"},next:{title:"Trying Dialogue Events",permalink:"/docs/guide_docs/tutorial/trying-dialogue-events/"}},d={},c=[{value:"Creating Dialogue Conditions",id:"creating-dialogue-conditions",level:2},{value:"With Node Priority Feature",id:"with-node-priority-feature",level:2},{value:"With Branch Node",id:"with-branch-node",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This document focuses on the usage of functionality rather than the configuration of [[Dialogue Condition]]. For detailed information about Dialogue Condition, refer to the [[Dialogue Condition]] document."})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Dialogue Conditions"})," are blueprint(or C++) asset than contain logic that decide whether to play a dialogue node, and drive the main way of branching of the dialogue system. you can freely write and use the logic you need. In this document, we'll learn how to create and use such dialogue conditions."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-dialogue-conditions",children:"Creating Dialogue Conditions"}),"\n",(0,n.jsxs)(t.p,{children:["Let's start by creating a dialogue condition. Click on the ",(0,n.jsx)(t.strong,{children:"New Dialogue Condition"})," button in the toolbar of the Dialogue Manager editor."]}),"\n",(0,n.jsx)(t.p,{children:"Now, choose the type of condition you want from the options presented."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"For descriptions of each condition type, refer to the [[Dialogue Condition]] document."})}),"\n",(0,n.jsx)(t.p,{children:"In this example, we'll choose Instanced Condition to create an instance dialogue condition."}),"\n",(0,n.jsx)(t.p,{children:"After creating the dialogue condition asset, the process of writing the condition logic begins by overriding the following function:"}),"\n",(0,n.jsx)(t.p,{children:"For C++ derived classes:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"virtual bool CheckCondition(class UDialogueWidgetBase* Widget, const TMap<FName, UActorComponent*>& ConversationParticipants);\n"})}),"\n",(0,n.jsx)(t.p,{children:"For Blueprint assets:"}),"\n",(0,n.jsx)(t.p,{children:"You have to implement the logic that checks the requirements for the condition. If the condition check is successful, return true; otherwise, return false."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"In normal usage, if the return value of this function is true then the nodes(or the logic with it) will be executed or be played, otherwise, it will not."})}),"\n",(0,n.jsx)(t.p,{children:"As we have created a Blueprint asset, let's follow the second method."}),"\n",(0,n.jsx)(t.p,{children:"For a simple real-world usage explanation, let's assume a situation. We want the condition to pass only if the player reached at the enough score on a button clicker game."}),"\n",(0,n.jsx)(t.p,{children:"And if the player presses this button in the world, it will increment a score property in the world's game mode instance. The condition should only pass if the score is higher than a value we specify."}),"\n",(0,n.jsx)(t.p,{children:"Create a property on the condition to store the target score that will be used as a threshold for the condition execution, and make it public to display it in the Dialogue Manager editor."}),"\n",(0,n.jsx)(t.p,{children:"Now, attach the created condition to a node in the manager."}),"\n",(0,n.jsx)(t.p,{children:"Click on the node, add a new element to the Conditions property in the Conditions section."}),"\n",(0,n.jsx)(t.p,{children:"Now, select our recently created condition in the Instanced Conditions section."}),"\n",(0,n.jsx)(t.p,{children:"You can see that a condition instance is attached to the node instance.\r\nNow, set the desired score for this condition. In this example, let's set it to 3."}),"\n",(0,n.jsx)(t.p,{children:"If you play it now, you'll observe that the node is executed only when the current score is higher than the specified 3."}),"\n",(0,n.jsx)(t.h2,{id:"with-node-priority-feature",children:"With Node Priority Feature"}),"\n",(0,n.jsxs)(t.p,{children:["But we're not done yet.\r\nUtilize the ",(0,n.jsx)(t.strong,{children:"node priority feature"})," to specify another node to play if this node execution fails. This allows you to display a message to the player indicating that the score is lower than the specified value."]}),"\n",(0,n.jsx)(t.p,{children:"Connect another node to the pin where you attached the condition. You can see a number displayed in the bottom right corner of the node."}),"\n",(0,n.jsx)(t.p,{children:"Lower numbers indicate higher priority. When a dialogue is played, nodes with higher priority are tested first. If a node with higher priority fails the test, the system tries the next one with lower priority. If all nodes fail, the dialogue ends."}),"\n",(0,n.jsx)(t.p,{children:"By setting it up this way, if the score is lower than the specified value, the node with the failure message will automatically play after the node with the success message fails."}),"\n",(0,n.jsx)(t.h2,{id:"with-branch-node",children:"With Branch Node"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can use a [[Branch Node]] to control branching based on the success or failure of a specific condition."}),"\n",(0,n.jsx)(t.p,{children:"If we replace the logic we just created with a Branch Node, it would look like this:"}),"\n",(0,n.jsx)(t.p,{children:"Attach our newly created condition to the Branch Node. Connect the success message node to the true pin, and the failure message node to the false pin."}),"\n",(0,n.jsx)(t.p,{children:"For more details, refer to the [[Branch Node]] document."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"While the ability of branching the dialogue with your gameplay logic is cool concept, it would be even cooler to execute actual gameplay logic. The next tutorial is [[Trying Events]]."})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var n=i(7294);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);