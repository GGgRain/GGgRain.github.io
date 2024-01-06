"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7034],{9134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(5893),i=a(1151);const o={title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",sidebar_position:2},r=void 0,s={id:"guide_docs/tutorial/create-first-dialogue",title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",source:"@site/docs/guide_docs/tutorial/create-first-dialogue.md",sourceDirName:"guide_docs/tutorial",slug:"/guide_docs/tutorial/create-first-dialogue",permalink:"/ko-kr/docs/guide_docs/tutorial/create-first-dialogue",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/create-first-dialogue.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",sidebar_position:2},sidebar:"GuideSidebar",previous:{title:"\uc124\uce58",permalink:"/ko-kr/docs/guide_docs/tutorial/installation"},next:{title:"Trying Out Basic Nodes",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-basic-nodes/"}},l={},d=[{value:"Creating a Dialogue Manager",id:"creating-a-dialogue-manager",level:2},{value:"Attaching Dialogue Nodes",id:"attaching-dialogue-nodes",level:2},{value:"Adding Dialogue to the Dialogue Node",id:"adding-dialogue-to-the-dialogue-node",level:3},{value:"Assigning Dialogue Participants",id:"assigning-dialogue-participants",level:3},{value:"Running the Dialogue",id:"running-the-dialogue",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Once you've installed and activated the Simple Dialogue System in your engine project, now it's time to create your first dialogue."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-dialogue-manager",children:"Creating a Dialogue Manager"}),"\n",(0,n.jsxs)(t.p,{children:["Start by right-clicking in the Content Browser and select ",(0,n.jsx)(t.strong,{children:"Dialogue -> Dialogue Manager"})," from the context menu to create a new Dialogue Manager."]}),"\n",(0,n.jsx)(t.p,{children:"![[dmcreate.png]]"}),"\n",(0,n.jsx)(t.p,{children:"Dialogue Manager is a script bundle where you attach various dialogue nodes to express your own dialogues. All dialogues in the Simple Dialogue System are implemented through the Dialogue Manager."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Refer to the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/asset/DialogueManager",children:"Dialogue Manager"})," documentation for more details."]})}),"\n",(0,n.jsx)(t.p,{children:"![[Image/GettingStarted/Untitled/Editor.png]]"}),"\n",(0,n.jsxs)(t.p,{children:["Double-click on the created Dialogue Manager to open the Dialogue Manager Editor. Here, you can attach ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/dialogue_node/DialogueNode",children:"Dialogue Nodes"})," to the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/dialogue_node/DialogueRootNode",children:"Dialogue Root Node"})," of this Dialogue Manager asset to implement the desired dialogues."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"attaching-dialogue-nodes",children:"Attaching Dialogue Nodes"}),"\n",(0,n.jsxs)(t.p,{children:["In the empty space of the graph, right-click to open the node creation menu, and add a ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/dialogue_node/based_on_DialogueNodeBase_Context/DialogueNode_Monologue",children:"Monologue Node"}),". In this example, let's create one Monologue Node and connect it to the start pin of the root node."]}),"\n",(0,n.jsx)(t.p,{children:"A Monologue Node is a basic node that represents a short dialogue between multiple participants."}),"\n",(0,n.jsx)(t.h3,{id:"adding-dialogue-to-the-dialogue-node",children:"Adding Dialogue to the Dialogue Node"}),"\n",(0,n.jsx)(t.p,{children:"Here, let's enter basic dialogue into the text input box in the center of this Monologue Node."}),"\n",(0,n.jsx)(t.p,{children:"![[script.png]]"}),"\n",(0,n.jsxs)(t.p,{children:["We've added dialogue. Now, when this Dialogue Manager is executed and encounters this node starting from the root node, the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/widget/dialogue_widget/DialogueWidgetBase",children:"Dialogue Widget Base"})," will display the message ",(0,n.jsx)(t.em,{children:"Hello, World of Simple Dialogue System"})," on the screen."]}),"\n",(0,n.jsxs)(t.p,{children:["Nodes based on ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/dialogue_node/DialogueNodeBase_Context",children:"Dialogue Node Base Context"})," have a text box in the center like this, allowing you to enter dialogue, and this text is stored in the Context Text property of the Dialogue Node Base Context class. This property serves as the dialogue spoken by the node when encountered during dialogue playback. Refer to the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/dialogue_node/DialogueNodeBase_Context",children:"Dialogue Node Base Context"})," documentation for more details."]}),"\n",(0,n.jsx)(t.p,{children:"When you play the dialogue created so far, you can see that the entered dialogue is displayed correctly."}),"\n",(0,n.jsx)(t.h3,{id:"assigning-dialogue-participants",children:"Assigning Dialogue Participants"}),"\n",(0,n.jsx)(t.p,{children:"Although the entered dialogue is displayed correctly, the part where the name of the character speaking the dialogue should be displayed is empty, and it's unclear who is speaking and who is listening. Let's specify the participants of the dialogue by assigning the dialogue participants."}),"\n",(0,n.jsx)(t.p,{children:"![[participant.png]]"}),"\n",(0,n.jsxs)(t.p,{children:["You can specify the participants of the dialogue by going to the details tab of the selected Dialogue Node, where you will find the Speakers property and Listeners property. These properties represent characters speaking and characters listening to the dialogue, respectively. To make the characters you want to participate in the dialogue, use the IDName property of the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/runtime/SpeechBubbleHandleComponent",children:"Speech Bubble Handle Component"})," that the characters possess."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["In practice, an actor can have multiple ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/runtime/SpeechBubbleHandleComponent",children:"Speech Bubble Handle Components"}),", each with a different IDName. This allows one actor to have multiple dialogue participants. It's advisable to consider these components participating in the dialogue rather than the character actor. Refer to the ",(0,n.jsx)(t.a,{href:"/docs/reference/class_reference/runtime/SpeechBubbleHandleComponent",children:"Speech Bubble Handle Components"})," documentation for more details."]})}),"\n",(0,n.jsx)(t.p,{children:"Before filling in these properties, let's attach the [[Speech Bubble Handle Component]] to our characters in the world to add dialogue-related data."}),"\n",(0,n.jsx)(t.p,{children:"First, we have placed the characters in the world."}),"\n",(0,n.jsx)(t.p,{children:"The character on the left is Jack, and the one on the right is Manny. They are friends with the familiar appearance of the default Unreal skeletal."}),"\n",(0,n.jsx)(t.p,{children:"Now that we have placed the characters, let's attach the Speech Bubble Handle Component and, if you look in the details tab of the component, you will see a property called Display Name. This name represents the name displayed in the Dialogue Widget when this Speech Bubble Handle Component is assigned as the speaker."}),"\n",(0,n.jsx)(t.p,{children:"Let's put the names of each character into this property. I have entered Jack and Manny."}),"\n",(0,n.jsx)(t.p,{children:"Now, in the ID Name property below, let's enter a unique ID used to identify each character. For the first and second tutorial NPC, I will put NPC_Tutorial_1 and NPC_Tutorial_2, respectively."}),"\n",(0,n.jsx)(t.p,{children:"Now, return to the Dialogue Manager, add elements to the Speakers array with NPC_Tutorial_1 in the Participant Name and add elements to the Listeners array with NPC_Tutorial_2 in the Participant Name."}),"\n",(0,n.jsx)(t.p,{children:"If you run it now, you can see that Jack with the NPC_Tutorial_1 IDName speaks the dialogue, and Manny with the NPC_Tutorial_2 IDName listens."}),"\n",(0,n.jsx)(t.p,{children:"At this point, note that the name of the character speaking the dialogue is Jack, and the Display Name of the Speech Bubble Handle Component with the NPC_Tutorial_1 IDName we specified is displayed."}),"\n",(0,n.jsx)(t.p,{children:"The crucial point here is that the Display Name is only for displaying purposes and cannot be used to identify or specify characters. For example, in cases where characters represented by Speech Bubble Handle Components have the same Display Name, it is possible that they are completely identical, such as Enemy or ???, and cannot be used to distinguish characters."}),"\n",(0,n.jsx)(t.p,{children:"To address this, the plugin uses the ID Name property to identify characters. Using this, even if characters have the same display name, you can smoothly handle characters by utilizing unique IDs."}),"\n",(0,n.jsx)(t.p,{children:"For testing purposes, change the Display names of both characters to Not Same Character, and put both characters as speakers."}),"\n",(0,n.jsx)(t.p,{children:"Then, you can see that two characters with the same name speak the dialogue together."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"running-the-dialogue",children:"Running the Dialogue"}),"\n",(0,n.jsx)(t.p,{children:"If you've followed along up to this point, you've learned all the basic ways to set up the Dialogue Manager. Now, let me explain the most important part: how to execute the dialogue."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You've just taken your first step into the world of creating dialogues."}),"\n",(0,n.jsx)(t.p,{children:"However, there's still a lot of cool, easy, and powerful features to show you."}),"\n",(0,n.jsx)(t.p,{children:"The remaining tutorials are structured in the order that makes it easiest to learn the plugin, so don't stop here and try the next tutorial to learn more about the plugin's capabilities."}),"\n",(0,n.jsx)(t.p,{children:"The next tutorial is [[Try Using Conditions]]."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"[!note] Let's learn the powerful features of the plugin step by step. The next tutorial is [[Try Basic Nodes]]."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var n=a(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);