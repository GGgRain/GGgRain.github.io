"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9197],{3325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=n(5893),s=n(1151);const o={title:"Trying Out Basic Nodes",description:"Explore the usage of default provided node classes in the plugin, learning the basics of script creation through them.",sidebar_position:3},a=void 0,d={id:"guide_docs/tutorial/trying-basic-nodes/trying-basic-nodes",title:"Trying Out Basic Nodes",description:"Explore the usage of default provided node classes in the plugin, learning the basics of script creation through them.",source:"@site/docs/guide_docs/tutorial/trying-basic-nodes/trying-basic-nodes.md",sourceDirName:"guide_docs/tutorial/trying-basic-nodes",slug:"/guide_docs/tutorial/trying-basic-nodes/",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-basic-nodes/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/trying-basic-nodes/trying-basic-nodes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Trying Out Basic Nodes",description:"Explore the usage of default provided node classes in the plugin, learning the basics of script creation through them.",sidebar_position:3},sidebar:"GuideSidebar",previous:{title:"Creating Your First Dialogue",permalink:"/ko-kr/docs/guide_docs/tutorial/create-first-dialogue"},next:{title:"Trying the Context Text Styling Editor",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-context-text-styling-editor/"}},c={},r=[{value:"Monologue Node",id:"monologue-node",level:2},{value:"Select Node",id:"select-node",level:2},{value:"Random Node",id:"random-node",level:2},{value:"Execute Node",id:"execute-node",level:2},{value:"Branch Node",id:"branch-node",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",hr:"hr",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In this document, we will explore the usage of default provided node classes in the plugin, learning the basics of script creation through them."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"monologue-node",children:"Monologue Node"}),"\n",(0,i.jsx)(t.p,{children:"The Monologue Node is used to express dialogue among multiple speakers."}),"\n",(0,i.jsxs)(t.p,{children:["As explained in the ",(0,i.jsx)(t.a,{href:"create-first-dialogue",children:"Creating Your First Dialogue"})," document, you can type the desired dialogue context into the text box in the middle of the graph node, then specify the speaker or listener, and it will be ready to use. You can specify multiple characters as the speakers and listeners of the dialogue."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(1819).Z+"",width:"748",height:"352"})}),"\n",(0,i.jsx)(t.p,{children:"The execution result is as follows."}),"\n",(0,i.jsx)(t.p,{children:"You can see the speakers' display name we specified being displayed on the widget's speaker box and expressing the script we provided."}),"\n",(0,i.jsx)(t.h2,{id:"select-node",children:"Select Node"}),"\n",(0,i.jsxs)(t.p,{children:["You can express a question and their corresponding answers with the ",(0,i.jsx)(t.strong,{children:"Select Node"})]}),"\n",(0,i.jsx)(t.p,{children:"You can add a question text and possible answers that the player can choose."}),"\n",(0,i.jsx)(t.p,{children:"First, create a node, specify the participants, and input the question text."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(8871).Z+"",width:"631",height:"265"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, in the Details tab of the graph node, add new elements to the ",(0,i.jsx)(t.strong,{children:"Answers"})," property to input the answers to be displayed on this node."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4970).Z+"",width:"1406",height:"502"})}),"\n",(0,i.jsx)(t.p,{children:"Now, you can see the answers we added displayed on the graph node."}),"\n",(0,i.jsx)(t.p,{children:"Each answer will be implemented as a pin on the node, and you can attach nodes to be executed when each answer is selected, allowing for simple branching control."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(1193).Z+"",width:"1241",height:"447"})}),"\n",(0,i.jsx)(t.p,{children:"The execution result is as follows."}),"\n",(0,i.jsx)(t.p,{children:"!Select Node Result(Pasted%20image%2020231125104930.png)"}),"\n",(0,i.jsx)(t.p,{children:"You can see the question text and the answers we added displayed correctly. Let's choose the first answer here."}),"\n",(0,i.jsx)(t.p,{children:"!Select Node Result Chosen Answer(Pasted%20image%2020231125105249.png)"}),"\n",(0,i.jsx)(t.p,{children:"Then, you can see the node connected to the first answer being executed."}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you can separately specify the text style table to apply to the text displayed for each answer option button or change the Dialogue Text Holder Widget class to create buttons with different visual."}),"\n",(0,i.jsx)(t.p,{children:"In the example, we changed the text style table for the text of the first answer option to use a different font, a RAINBOW font."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(287).Z+"",width:"1610",height:"426"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"You can also see the result of the styling on the pin's label."})}),"\n",(0,i.jsx)(t.p,{children:"Now you can see the styling of the first option button text has changed."}),"\n",(0,i.jsx)(t.p,{children:"Select Node Styling Result(Pasted%20image%2020231125112107.png)"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/docs/reference/class_reference/asset/DialogueInlineCommand",children:"Dialogue Inline Commands"})," include DI_StartSelect specifically for Select Nodes. Its signature is StartSelect (by default), and by calling it from the desired point within the text, you can invoke the generation of the answer choice buttons at that point of the text update."]}),"\n",(0,i.jsx)(t.p,{children:"Click the location in the text where you want to insert the command, click the Bind Command button, and select StartSelect."}),"\n",(0,i.jsx)(t.p,{children:"Now, the StartSelect command has been bound as follows."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"Detailed explanation of using Dialogue Inline Commands is covered in the [[Trying Out Inline Commands]] document. For now, it's recommended to acknowledge this and come back to read it after completing the learning of that document.\r\n::"}),(0,i.jsx)(t.p,{children:"The execution result when inserting the StartSelect command in the middle of the text is as follows. When reaching the point where we added the command, you can see the answer buttons being displayed."}),(0,i.jsx)(t.p,{children:"If the inline command is not bound within the text, when the should automatically append StartSelect at the end property is true, this command is automatically added at the end of the text after it is fully displayed, and the answer buttons are then automatically displayed."}),(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"If this property is false, the buttons will not be displayed automatically, which can result in blocking the flow of the dialogue by making it unable to proceed to the next node as expected. Please note this."})})]}),"\n",(0,i.jsx)(t.h2,{id:"random-node",children:"Random Node"}),"\n",(0,i.jsx)(t.p,{children:"The Random Node selects and executes nodes connected to the output pin based on a specified random logic."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(626).Z+"",width:"524",height:"229"})}),"\n",(0,i.jsx)(t.p,{children:"After adding a node and connecting it to the previous node,\r\nwe connected the nodes we wanted to play randomly to the output pin of the Random Node."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(9735).Z+"",width:"1056",height:"484"})}),"\n",(0,i.jsxs)(t.p,{children:["Then you need to select the ",(0,i.jsx)(t.strong,{children:"Random Instance"}),". Of course, you can use the default provided Randomizer Instance, but let's create a new one this time. ",(0,i.jsx)(t.strong,{children:"Random Instance"})," is a class that handle the calculation of the chance of playback for each nodes."]}),"\n",(0,i.jsxs)(t.p,{children:["Press the Create New Blueprint button on the ",(0,i.jsx)(t.strong,{children:"Content Browser"})," and select the ",(0,i.jsx)(t.strong,{children:"Dialogue Random Instance"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt text",src:n(2751).Z+"",width:"1257",height:"773"})," ",(0,i.jsx)(t.img,{alt:"Alt text",src:n(5374).Z+"",width:"746",height:"613"})]}),"\n",(0,i.jsxs)(t.p,{children:["Go into the created blueprint and override the ",(0,i.jsx)(t.strong,{children:"CalculateChance"})," function."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt text",src:n(3940).Z+"",width:"550",height:"161"})," ",(0,i.jsx)(t.img,{alt:"Alt text",src:n(2979).Z+"",width:"602",height:"286"})]}),"\n",(0,i.jsx)(t.p,{children:"This function is responsible for calculating and returning the function to be executed for each node."}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"The CalculateChance function of the Random Instance Node should pass the individual selection weights of the nodes connected to the output pin of the Random Node to the Return Array in the order (index) in which the nodes are connected to the pin."}),(0,i.jsx)(t.p,{children:"As is common in programming languages, the starting index of the Chance Array is from 0. For example, the element index corresponding to the first node in the Chance Array is 0, the very first element."}),(0,i.jsx)(t.p,{children:'Here, the term "selection weight" refers to the tendency of each node to be played, expressed as a number. CalculateChance calculates the final probability of each node\'s playback based on the ratio of each selection weight to the total probability, which is obtained by summing all the probabilities in the Chance Array.'}),(0,i.jsx)(t.p,{children:"For example, when connecting two nodes to the output pin, if you put 1 in the 0th element and 3 in the 1st element, the playback probability of Node 1 becomes 1/4 or 25%, and the probability of Node 2 being played becomes 3/4 or 75%. The same calculation applies when multiple nodes are connected."}),(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"This operational method allows for calculating the probability of each node without the need to compute the probabilities individually when a random number of various nodes are connected. By passing only the scalar values of weights, it reduces the burden on the user, which is why this approach was adopted."})})]}),"\n",(0,i.jsx)(t.p,{children:"Now, put this instance into the Random Node we created earlier and test it.\r\nIn this tutorial, we just made a variable and exposed it to the editor by marking it instance-able and public, and set the chance for each nodes in the dialogue manager editor directly. it play the first node at 25% chance, and the second one with 75% chance. Of course in the real usage, it can be driven by much more complex and unique logic that fit to your project."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(9782).Z+"",width:"1204",height:"402"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"alt",src:n(3336).Z+"",width:"1634",height:"464"}),"\r\nThen, according to the logic we created, you can see that the next node is executed randomly."]}),"\n",(0,i.jsx)(t.h2,{id:"execute-node",children:"Execute Node"}),"\n",(0,i.jsx)(t.p,{children:"The Execute Node sequentially executes all events registered in the node at runtime."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(7598).Z+"",width:"370",height:"184"})}),"\n",(0,i.jsxs)(t.p,{children:["After creating the Execute Node, in the Details tab of the node, put events into the ",(0,i.jsx)(t.strong,{children:"Events to Provoke"})," property."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(3169).Z+"",width:"1033",height:"285"})}),"\n",(0,i.jsx)(t.p,{children:"When actually executed, you can see that the events registered in the Execute Node are called when encountering this node."}),"\n",(0,i.jsx)(t.h2,{id:"branch-node",children:"Branch Node"}),"\n",(0,i.jsx)(t.p,{children:"The Branch Node controls branching based on the test results of the given dialogue conditions."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4404).Z+"",width:"518",height:"272"})}),"\n",(0,i.jsxs)(t.p,{children:["After creating the Branch Node, in the Details tab of the node, put conditions into the ",(0,i.jsx)(t.strong,{children:"BranchConditions"})," property."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(3075).Z+"",width:"1032",height:"292"})}),"\n",(0,i.jsx)(t.p,{children:"When executed, depending on the execution results of the dialogue conditions registered in the node, if the test passes, nodes attached to the True pin are executed; otherwise, nodes attached to the False pin are executed."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The next tutorial is [trying context text styling editor][trying-context-text-styling-editor]. It covers the WYSIWYG editor-based text styling system unique to this plugin in a somewhat relaxed manner."})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8871:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-1-edfa824aa14e719f8906a58ffc21564e.png"},9735:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-10-1210ab7659370a684b623e0281f0cda3.png"},2751:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-11-334e603d366d96189ddb154b42ba9ae2.png"},5374:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-12-073d25e81de34dde47ac6b17bc6867d3.png"},3940:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-13-4e0e88f4b0489d480e007f92fb4ce046.png"},2979:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-14-7d42e1355b29fadf315c7de259be45f8.png"},3336:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-15-4d803b08983357a94f78e6b0a4cef7dc.png"},9782:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-16-c03057a6df3140fa4806b7f5461d6249.png"},4970:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-2-6209b4fdf76360836740fb7803b8da6f.png"},1193:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-3-e425f4890ab7ae7552d24d67e5ce7f07.png"},287:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-4-c3b2f4e183ef35a48d36e14978a36a99.png"},7598:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAC4CAYAAAD+IGdvAAAcsElEQVR4nO3deVCU9x0G8GeXXRD2Qk4ROaqCqI1aI2hF6xm0qSmCBw1pesQ0zoSpNpOmmaRpp860Y6eHTdJqajqTHkksJhEkVpEKsUajVowGtF4IggaUcCzsJezZP5xdOXZhF/Z65fnMOAnv7u99f+/77j77nt9XlJ6ebsMAKpUK3d3dAwe7raurC5GRkSNuP9rps31g23P9j+32XP/+by8e8dSIiCgoMMiJiASOQU5EJHAMciIigWOQExEJHIOciEjgGORERAInyszMHHQd+Wg1NTUhJSXF26MlgeD6H9u4/v1P4uzC89Fe0A5AcBfUs7332gNc/2O5PcD1zxuCiIjIIwxyIiKBY5ATEQkcg5yISOAY5EREAscgJyISOAY5EZHAMciJiASOQU5EJHAMciIigWOQExEJHIOciEjgGORERALHICciEjhRXFyc1+uRExGR/0giIyMHDRxtPd2uri44G6+7hFgPmO3v4/of2+25/lmPnIiIPMQgJyISOAY5EZHAMciJiASOQU5EJHAMciIigWOQExEJHIOciEjgGORERALHICciEjgGORGRwDHIiYgEjkFORCRwDHIiIoETZWZmer0eeVNTE1JSUrw9WhIIrv+xjevf/yTO6t6Otp4uAMHV82V777UHuP7HcnuA65/1yImIyCMMciIigWOQExEJHIOciEjgGORERALHICciEjgGORGRwDHIiYgEjkFORCRwDHIiIoFjkBMRCRyDnIhI4BjkREQCxyAnIhI41iMnr+P6H9u4/v2P9cjZ3uvtAa7/sdwe4PpnPXIiIvIIg5yISOAY5EREAscgJyISOEmgOzBW5efnIy8vD1lZWYHuChEA4MyZMygtLUVVVVWgu0IeYpD7WWJiInbt2oWMjIxAd4Won6ysLGRlZaGurg6bN29Gc3NzoLtEbmKQ+1FiYiLKysqgUCgcw0pLS1FSUoLq6uoA9ozGsszMTMceIgCkpaWhrKwMubm5DHOB4DFyP9q1a5cjxJubm7F27Vq89NJLDHEKqOrqarz00ktYu3atI7gVCgV27doV4J6RuxjkfpKfn+84nGIP8StXrgS4V0T3XblypV+YZ2RkID8/P8C9IncwyP3EvtsKAEVFRdBqtQHsDZFzWq0WRUVFjr/7fm4p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"},3169:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-6-e3475c479523777bff679c84917a3785.png"},4404:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-7-a4789e320b646ef90ea4aaf6e59c4818.png"},3075:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-8-256b36611b38a2bc77576b49c891b50f.png"},626:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-9-b5a4f426bbe42b82948510edbcb3723f.png"},1819:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-fbf072ff669ed0a7cb9130c81309d241.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);