"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4460],{384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5893),a=i(1151);const s={title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",sidebar_position:2},o=void 0,r={id:"guide_docs/tutorial/creating-your-first-dialogue/creating-your-first-dialogue",title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",source:"@site/docs/guide_docs/tutorial/creating-your-first-dialogue/creating-your-first-dialogue.md",sourceDirName:"guide_docs/tutorial/creating-your-first-dialogue",slug:"/guide_docs/tutorial/creating-your-first-dialogue/",permalink:"/docs/guide_docs/tutorial/creating-your-first-dialogue/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/creating-your-first-dialogue/creating-your-first-dialogue.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating Your First Dialogue",description:"Learn the basic concepts while creating your first dialogue.",sidebar_position:2},sidebar:"GuideSidebar",previous:{title:"Installation and Setting Up",permalink:"/docs/guide_docs/tutorial/installation-and-setting-up/"},next:{title:"Styling Context Texts and Text Holder Widget",permalink:"/docs/guide_docs/tutorial/styling-context-texts-and-text-holder-widget/"}},l={},d=[{value:"Creating a Dialogue Manager",id:"creating-a-dialogue-manager",level:2},{value:"Attaching Dialogue Nodes",id:"attaching-dialogue-nodes",level:2},{value:"Adding Dialogue to the Dialogue Node",id:"adding-dialogue-to-the-dialogue-node",level:3},{value:"Running the Dialogue",id:"running-the-dialogue",level:2},{value:"Assigning Dialogue Participants",id:"assigning-dialogue-participants",level:3},{value:"Fixing Some Default Visual Issue",id:"fixing-some-default-visual-issue",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Once you've installed and activated the Simple Dialogue System in your engine project, now it's time to create your first dialogue."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-dialogue-manager",children:"Creating a Dialogue Manager"}),"\n",(0,n.jsxs)(t.p,{children:["Start by right-clicking in the Content Browser and select ",(0,n.jsx)(t.strong,{children:"Dialogue -> Dialogue Manager"})," from the context menu to create a new Dialogue Manager."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(799).Z+"",width:"1229",height:"682"})}),"\n",(0,n.jsx)(t.p,{children:"Dialogue Manager is a script bundle where you attach various dialogue nodes to express your own dialogues. All dialogues in the Simple Dialogue System are implemented through the Dialogue Manager."}),"\n",(0,n.jsxs)(t.p,{children:["Double-click on the created Dialogue Manager to open the Dialogue Manager Editor. Here, you can attach ",(0,n.jsx)(t.strong,{children:"Dialogue Nodes"})," to the ",(0,n.jsx)(t.strong,{children:"Dialogue Root Nod"}),"e of this Dialogue Manager asset to implement the desired dialogues."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(2066).Z+"",width:"1249",height:"757"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"attaching-dialogue-nodes",children:"Attaching Dialogue Nodes"}),"\n",(0,n.jsx)(t.p,{children:"You can add new Dialogue Nodes by right-clicking in the empty space of the graph and open the node creation menu, and selecting the node type you want to use."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(3278).Z+"",width:"1137",height:"649"})}),"\n",(0,n.jsx)(t.p,{children:"In this example, let's create one Monologue Node and connect it to the start pin of the root node."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(871).Z+"",width:"1404",height:"469"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The Monologue Node is a basic node that represents a short dialogue between multiple participants."})}),"\n",(0,n.jsx)(t.h3,{id:"adding-dialogue-to-the-dialogue-node",children:"Adding Dialogue to the Dialogue Node"}),"\n",(0,n.jsx)(t.p,{children:"Here, let's enter a basic dialogue into the text input box in the center of this Monologue Node."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(2852).Z+"",width:"1313",height:"487"})}),"\n",(0,n.jsxs)(t.p,{children:["Nodes based on ",(0,n.jsx)(t.strong,{children:"Dialogue Node Base Context"})," have a text box in the center like this, allowing you to enter dialogue, and this text is stored in the Context Text property of the Dialogue Node Base Context class. This property serves as the dialogue spoken by this the node when encountered during dialogue playback."]}),"\n",(0,n.jsxs)(t.p,{children:["Now, when this Dialogue Manager is played and encounters this node starting from the root node, the ",(0,n.jsx)(t.strong,{children:"Dialogue Widget Base"})," will display the message ",(0,n.jsx)(t.em,{children:"Hello, Welcome to the world of SDS!"})," on the screen."]}),"\n",(0,n.jsx)(t.h2,{id:"running-the-dialogue",children:"Running the Dialogue"}),"\n",(0,n.jsx)(t.p,{children:"Now, let's test out the Dialogue Manager we created so far!"}),"\n",(0,n.jsxs)(t.p,{children:["Playing the dialogue for your gameplay situation and making it seemless and persuasive is on your own, but we provide a handy helper for the control of the dialogues, ",(0,n.jsx)(t.strong,{children:"SimpleDialogueSubsystem"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, we are gonna play the dialogue with the SDSS(SimpleDialogueSubsystem) when the level is intialized."}),"\n",(0,n.jsx)(t.p,{children:"We will open the level blueprint,"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(8257).Z+"",width:"651",height:"391"})}),"\n",(0,n.jsx)(t.p,{children:"And find the SimpleDialogueSubsystem on the context menu."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(5078).Z+"",width:"846",height:"549"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(6975).Z+"",width:"450",height:"331"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you added it on the event graph, Drag off from the pin on the subsystem and find ",(0,n.jsx)(t.em,{children:"Start Dialogue"})," function."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(9969).Z+"",width:"749",height:"447"})}),"\n",(0,n.jsx)(t.p,{children:"This function will start off the dialogue manager we specified and create a widget for the dialogue."}),"\n",(0,n.jsxs)(t.p,{children:["Now let's specify the ",(0,n.jsx)(t.strong,{children:"Dialogue Asset to Play"})," argument with the Dialogue Manager we just created, and also the ",(0,n.jsx)(t.strong,{children:"Widget Class"})," argument with ",(0,n.jsx)(t.strong,{children:"WB_SpeechBubble"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["WB_SpeechBubble is the sample widget blueprint enveloped in the plugin, that is derived from the ",(0,n.jsx)(t.strong,{children:"SpeechBubbleWidget_Handled"}),", base class for the dialogue widgets with speech bubble related actions."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(7978).Z+"",width:"836",height:"574"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(9667).Z+"",width:"919",height:"521"})}),"\n",(0,n.jsx)(t.p,{children:"When you are done, let's start the PIE and see the play result of the dialogue."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(6283).Z+"",width:"1296",height:"691"})}),"\n",(0,n.jsx)(t.p,{children:"You can see the dialogue is being displayed on the screen."}),"\n",(0,n.jsx)(t.h3,{id:"assigning-dialogue-participants",children:"Assigning Dialogue Participants"}),"\n",(0,n.jsx)(t.p,{children:"But in the first run, you would see that the dialogue widget was not being displayed properly. This is because we didn't set up the participants for the dialogue yet."}),"\n",(0,n.jsxs)(t.p,{children:["In the SDS, The plugin stores and regonizes the ",(0,n.jsx)(t.strong,{children:"Speech Bubble Handle Component"})," instance as participants of the dialogue, so if you want to make your character participate in your dialogue, then you must attach a new Speech Bubble Handle Component to your character actor first."]}),"\n",(0,n.jsx)(t.p,{children:"Let's add a Speech Bubble Handle Component to the characters we want to use as participants on the dialogue."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(6367).Z+"",width:"1119",height:"551"})}),"\n",(0,n.jsx)(t.p,{children:"If you select the component, then you will see the properties on the Speech Bubble tab."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(9142).Z+"",width:"1305",height:"880"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"IDName"})," is an identification of this participant component on dialogues. You will use this ID to specifying which characters are speaking on each node. In this tutorial, We will set it to ",(0,n.jsx)(t.strong,{children:'"NPC_Fox"'})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"DisplayName"})," is the localizable name that will be displayed to the player. It is used only for the cosmetic purpose. In this tutorial, We will set it to ",(0,n.jsx)(t.strong,{children:'"Fox"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's do this to the other character in the scene. In the tutorial, We will set the parrot character's participant component's IDName to ",(0,n.jsx)(t.strong,{children:'"NPC_Parrot"'})," and DisplayName to ",(0,n.jsx)(t.strong,{children:'"Yellow"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(1458).Z+"",width:"1328",height:"838"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Repeat the process to the all the characters that you want to use as participants on your dialogues."})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"In practice, an actor can have multiple Speech Bubble Handle Components, each with a different IDName. This allows one actor to have multiple dialogue participants. This is useful when you have to make a character with multiple personality or just simply multiple heads (just like medusa). It's advisable to consider these components participating in the dialogue rather than the character actor."})}),"\n",(0,n.jsx)(t.p,{children:"Once we finished adding the dialogue components on the characters in the scene, then let's go back to the dialogue manager we created in this tutorial."}),"\n",(0,n.jsx)(t.p,{children:"Now, let's specify the participants of the monologue node."}),"\n",(0,n.jsx)(t.p,{children:"Select the Monologue Node, and see the detail tab and find the Participant property and unfold it, then you will see the Speakers property and Listeners property."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(2607).Z+"",width:"1142",height:"353"})}),"\n",(0,n.jsx)(t.p,{children:"These properties represent characters speaking and characters listening to the dialogue."}),"\n",(0,n.jsxs)(t.p,{children:["To make the characters you want to participate in the dialogue, add an element to the array you want (speakers / listeners) with the IDName as the ",(0,n.jsx)(t.strong,{children:"Participant Name"})," that character's participant components use."]}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial, we will make the ",(0,n.jsx)(t.strong,{children:"fox"})," say this line to the ",(0,n.jsx)(t.strong,{children:"yellow (the bird)"}),", so we will add an element to the ",(0,n.jsx)(t.strong,{children:"speakers array with NPC_Fox as participant name"}),", an element to the ",(0,n.jsx)(t.strong,{children:"listeners array with NPC_Parrot as participant name."})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(2930).Z+"",width:"1115",height:"474"})}),"\n",(0,n.jsx)(t.p,{children:"let's run this dialogue again."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(6702).Z+"",width:"929",height:"497"})}),"\n",(0,n.jsx)(t.p,{children:'Now you will see the dialogue widget is being displayed well around the fox character, and also will see the name text "Fox" is being displayed and indicating the speaker of the node well.'}),"\n",(0,n.jsx)(t.p,{children:"The dialogue managers will automatically grab the references of the participant components when the dialogues is played, and use the reference of the participant component on displaying such texts or informations."}),"\n",(0,n.jsxs)(t.p,{children:["At this point, please note that the name of the character speaking the dialogue is ",(0,n.jsx)(t.strong,{children:"Fox"}),", the Display Name of the Speech Bubble Handle Component with the ",(0,n.jsx)(t.strong,{children:"NPC_Fox"})," IDName is displayed."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can set multiple characters (participant component) with an identical Display name. This is useful when you have to set multiple characters have names like ",(0,n.jsx)(t.strong,{children:"Enemy"}),", ",(0,n.jsx)(t.strong,{children:"???"})," or etc."]}),(0,n.jsx)(t.p,{children:"Still, each character will have their own IDName, you can control it one-by-one by its IDName."}),(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"But IDName can be shared by multiple characters, and this is used for some unique purposes. refer to the ... document to see the advanced usages."}),(0,n.jsx)(t.p,{children:"When the dialogue manager finds multiple characters with same IDName, then it will ignore all the other components and use the first one that it iterated through."})]})]}),"\n",(0,n.jsx)(t.h3,{id:"fixing-some-default-visual-issue",children:"Fixing Some Default Visual Issue"}),"\n",(0,n.jsx)(t.p,{children:"But well, the widget seems being rendered way too low from the character. let's fix it."}),"\n",(0,n.jsx)(t.p,{children:"Go to the participant component of the character, and change the widget offset value. In this tutorial, we will set the z value of it to 100."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(8148).Z+"",width:"889",height:"342"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(1645).Z+"",width:"651",height:"327"})}),"\n",(0,n.jsx)(t.p,{children:"Then you can see that the widget is being rendered a bit higher then before."}),"\n",(0,n.jsx)(t.p,{children:"Now let's change the location of the notch of the speech bubble a bit."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(1870).Z+"",width:"711",height:"323"})}),"\n",(0,n.jsxs)(t.p,{children:["Attach ",(0,n.jsx)(t.strong,{children:"BP Notch Position Holder"})," Component to the character."]}),"\n",(0,n.jsxs)(t.p,{children:["And set the ",(0,n.jsx)(t.strong,{children:"Target Handle Component IDName"})," property to have the IDName of the participant component we want, and adjust its location a little bit."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(7783).Z+"",width:"1206",height:"663"})}),"\n",(0,n.jsx)(t.p,{children:"Then you will see the notch's tail is now being displayed on the location of the component!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(1934).Z+"",width:"958",height:"527"})}),"\n",(0,n.jsx)(t.p,{children:"and Finally, Let's hide that debug red line."}),"\n",(0,n.jsxs)(t.p,{children:["Go to the ",(0,n.jsx)(t.strong,{children:"WB_SpeechBubble"})," asset on the content browser, and open it."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["If you have difficulty on finding the asset, make sure you made the plugin's asset visible on the content browser.\r\nFollow the final step of ",(0,n.jsx)(t.a,{href:"installation-and-setting-up",children:"installation and setting up"})," to do so."]}),(0,n.jsx)(t.p,{children:"You can either access it via browse button on the Start Dialogue funtion's Widget Class."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(9147).Z+"",width:"779",height:"393"})})]}),"\n",(0,n.jsx)(t.p,{children:"Click the root row on the hierarchy tab on the editor then you will see the properties related to the widget is displayed on the detail tab."}),"\n",(0,n.jsxs)(t.p,{children:["At there, search ",(0,n.jsx)(t.strong,{children:"Hide Trace Debug Draw Method"})," and change it to None."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(7319).Z+"",width:"1810",height:"729"})}),"\n",(0,n.jsx)(t.p,{children:"If you run it again, you will see the red line is gone."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:i(4822).Z+"",width:"946",height:"494"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You've just taken your first step into the world of creating dialogues."}),"\n",(0,n.jsx)(t.p,{children:"However, there's still a lot of cool, easy, and powerful features to show you."}),"\n",(0,n.jsx)(t.p,{children:"The remaining tutorials are structured in the order that makes it easiest to learn the plugin, so don't stop here and try the next tutorial to learn more about the plugin's capabilities."})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2066:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-1-97d19183633f9abc8e5c2a9a2e59552e.png"},9667:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-10-3fe00e1a957b16548df066e1e31bb64c.png"},6283:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-11-e203c302d966e5e1999083d7cd59fc68.png"},6367:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-12-cc96c47e5fe03f8517b53e5eaf17126d.png"},9142:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-13-8a26257570d26f87af0f2dc3975b3b2f.png"},1458:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-14-b29d290bf9130e65c4c80bfb59443b42.png"},2607:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-15-e7b8f279a8dac084b6b9a11834816756.png"},6702:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-16-b3ee0aa9559b19de4594c16da18f5940.png"},2930:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-17-aa84f8d9143cb991ec08567a70f5130b.png"},1645:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-18-b1695109737836261ba9a57997ecf45f.png"},8148:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-19-fa58502917cac3ecff3d681dd0a37e65.png"},3278:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-2-46e9264a341d643475c90dc027a9891b.png"},1870:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-20-47eade1570a74144d1277030439d6e06.png"},7783:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-21-ce8215804ff8be37fe1bbc30fbb6b12e.png"},1934:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-22-a8aa76fdc4d68f6a80d98b6a8115af41.png"},9147:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-23-97defffbe48525c53bf8281e93b3c5a6.png"},7319:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-24-6c16d3b1a4f2c3affe88553bbb26ef63.png"},4822:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-25-4840bf248e69200055d9be3bb38b5eb2.png"},871:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-3-cf4c10aafad89fe83e4fd72228449e42.png"},2852:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-4-9bc3c1c56a4ada8c2e892e3a3322dc46.png"},8257:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-5-5ee2c62cdcb4ced09f1678a0b8820189.png"},5078:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-6-17bde7daa5cf4de9d90b63138ee18d63.png"},6975:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-7-eb6d95aed248f21fe674be4dd7df23de.png"},9969:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-8-7f2f22c94b29457ccf1c5794171115b6.png"},7978:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-9-ea420bed00514b40b6e66c4081529791.png"},799:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-c506e0059bbc4280d50dbfee89e0d9dc.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);