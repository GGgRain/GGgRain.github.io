"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8147],{5253:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=i(5893),a=i(1151);const s={title:"Trying Out Dialogue Inline Commands",description:"Explore the usage of dialogue inline commands to execute gameplay logic during dialogues.",sidebar_position:6},o=void 0,d={id:"guide_docs/tutorial/trying-dialogue-inline-commands/trying-dialogue-inline-commands",title:"Trying Out Dialogue Inline Commands",description:"Explore the usage of dialogue inline commands to execute gameplay logic during dialogues.",source:"@site/docs/guide_docs/tutorial/trying-dialogue-inline-commands/trying-dialogue-inline-commands.md",sourceDirName:"guide_docs/tutorial/trying-dialogue-inline-commands",slug:"/guide_docs/tutorial/trying-dialogue-inline-commands/",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-inline-commands/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/tutorial/trying-dialogue-inline-commands/trying-dialogue-inline-commands.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Trying Out Dialogue Inline Commands",description:"Explore the usage of dialogue inline commands to execute gameplay logic during dialogues.",sidebar_position:6},sidebar:"GuideSidebar",previous:{title:"Trying Dialogue Events",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-events/"},next:{title:"Trying Out Dialogue Fragments",permalink:"/ko-kr/docs/guide_docs/tutorial/trying-dialogue-fragments/"}},l={},r=[{value:"Using Dialogue Inline Commands",id:"using-dialogue-inline-commands",level:2},{value:"Binding Inline Commands via Command Bind Editor",id:"binding-inline-commands-via-command-bind-editor",level:3},{value:"Modifying a Bound Dialogue Inline Command",id:"modifying-a-bound-dialogue-inline-command",level:3},{value:"Creating and Binding New Dialogue Inline Commands to the Project",id:"creating-and-binding-new-dialogue-inline-commands-to-the-project",level:2},{value:"Attaching Attributes On the Inline Commands",id:"attaching-attributes-on-the-inline-commands",level:3},{value:"Registering Dialogue Inline Commands in Node Classes",id:"registering-dialogue-inline-commands-in-node-classes",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Directly Binding Dialogue Inline Commands",id:"directly-binding-dialogue-inline-commands",level:3},{value:"Binding Dialogue Inline Commands with Attributes",id:"binding-dialogue-inline-commands-with-attributes",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Dialogue Inline Commands are powerful tools that help bind and utilize actions at specific points in text within the Dialogue Node Base Context's Context Text."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Dialogue Inline Commands are designed to be used on the cosmetic purposes such as playing sound or spawning particles, and ",(0,t.jsx)(n.strong,{children:"not recommended to be used on the important gameplay logics since this can be vulunerable on an injection attack, Though we have a internal injection attack protector for the system."})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"using-dialogue-inline-commands",children:"Using Dialogue Inline Commands"}),"\n",(0,t.jsx)(n.h3,{id:"binding-inline-commands-via-command-bind-editor",children:"Binding Inline Commands via Command Bind Editor"}),"\n",(0,t.jsx)(n.p,{children:"The Node Body of the Dialogue Node Base Context has a convenient button built in to assist in binding Dialogue Inline Commands to the Context Text. In this example, we'll explain using the Monologue Node."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(3204).Z+"",width:"669",height:"281"})}),"\n",(0,t.jsxs)(n.p,{children:["First, click on the part of the Context Text where you want to attach the command, and click the button labeled ",(0,t.jsx)(n.strong,{children:"Bind Command"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(5716).Z+"",width:"846",height:"533"})}),"\n",(0,t.jsxs)(n.p,{children:["Then a menu will appear where you can select the inline command to bind. From various default commands, let's hover over the command labeled ",(0,t.jsx)(n.strong,{children:"SetSpeed"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Descriptions of each command are available in the [[Dialogue Inline Commands]] document."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(9977).Z+"",width:"1123",height:"508"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, you see a brief explanation of the ",(0,t.jsx)(n.strong,{children:"SetSpeed"})," command's functionality and an explanation of the attribute (parameter) the command uses, which is ",(0,t.jsx)(n.strong,{children:"Value"})," in this case."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, click on ",(0,t.jsx)(n.strong,{children:"SetSpeed"})," to bind this command to the text."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(1353).Z+"",width:"717",height:"337"})}),"\n",(0,t.jsxs)(n.p,{children:["Voila! The ",(0,t.jsx)(n.strong,{children:"SetSpeed"})," command is now bound to the text."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"bound command"})," is indicated by a ",(0,t.jsx)(n.strong,{children:"button with the command's sequence on a black background"}),". Below the text, a display box is added for each sequence, showing the full content of the command."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, when the dialogue widget updates the text and passes the part with our bound ",(0,t.jsx)(n.strong,{children:"SetSpeed"})," command, it will be triggered. Very simple, isn't it?"]}),"\n",(0,t.jsxs)(n.p,{children:["However, as we saw earlier, the ",(0,t.jsx)(n.strong,{children:"SetSpeed"})," command uses the ",(0,t.jsx)(n.strong,{children:"Value"})," attribute, and we haven't initialized this value yet. Let's change this value now."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Uninitialized attributes are automatically initialized with class default values."})]}),"\n",(0,t.jsx)(n.h3,{id:"modifying-a-bound-dialogue-inline-command",children:"Modifying a Bound Dialogue Inline Command"}),"\n",(0,t.jsx)(n.p,{children:"Click on the bound command displayed above the text."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(8233).Z+"",width:"664",height:"391"})}),"\n",(0,t.jsxs)(n.p,{children:["A menu named ",(0,t.jsx)(n.strong,{children:"Command Editor"})," appears. You can modify everything about the command, including its attributes. Let's focus on modifying the section for the ",(0,t.jsx)(n.strong,{children:"Value"})," attribute in the center."]}),"\n",(0,t.jsxs)(n.p,{children:["Click the checkbox to the left of the ",(0,t.jsx)(n.strong,{children:"Value"})," attribute."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(2853).Z+"",width:"595",height:"408"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can see that the ",(0,t.jsx)(n.strong,{children:"Value"}),' attribute\'s value has become editable. You also notice that the text "Value=" has been added to the Raw Command part. By checking the checkbox, we explicitly state that we want to initialize the value of this attribute. Now, you can modify this value as desired to control the behavior of the command. in this tutorial, We will set it to 0.2.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(4439).Z+"",width:"556",height:"404"})}),"\n",(0,t.jsx)(n.p,{children:"Once you've modified the value as desired, click on a blank area of the graph to close the Command Editor and save the changes."}),"\n",(0,t.jsx)(n.p,{children:"Now, if you run the dialogue manager and trigger the inline command, you'll see that the update frequency of the dialogue widget's text changes as you've set."}),"\n",(0,t.jsx)(n.h2,{id:"creating-and-binding-new-dialogue-inline-commands-to-the-project",children:"Creating and Binding New Dialogue Inline Commands to the Project"}),"\n",(0,t.jsx)(n.p,{children:"Of course you can make a whole new Dialogue Inline Command in your project."}),"\n",(0,t.jsxs)(n.p,{children:["Open any Dialogue Manager and click on the ",(0,t.jsx)(n.strong,{children:"Create Custom Inline Command"})," button in the toolbar of the Dialogue Manager editor."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(9800).Z+"",width:"745",height:"320"})}),"\n",(0,t.jsx)(n.p,{children:"Select DialogueInlineCommand in the menu."}),"\n",(0,t.jsx)(n.p,{children:"After creating the dialogue Inline Command asset, writing the Inline Command for that asset begins by overriding the following function:"}),"\n",(0,t.jsx)(n.p,{children:"For C++ derived classes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"virtual void ReceiveCommandTrigger(FExecutionRunStruct ExecutionRun, class UDialogueWidgetBase* Widget, const TMap<FName, UActorComponent*>& ConversationParticipants) override;\n"})}),"\n",(0,t.jsx)(n.p,{children:"For Blueprint assets:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(3572).Z+"",width:"699",height:"245"})}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, since we are deriving the DialogueInlineCommand class as a child blueprint class, We are going to override the second function."}),"\n",(0,t.jsx)(n.p,{children:"Write the logic here to be executed when the command is called."}),"\n",(0,t.jsx)(n.h3,{id:"attaching-attributes-on-the-inline-commands",children:"Attaching Attributes On the Inline Commands"}),"\n",(0,t.jsxs)(n.p,{children:["We call the arguments that can be parsed to the command instance, can be stored in text form and exposed to the Inline Command Editor as ",(0,t.jsx)(n.strong,{children:"attribute"}),".\r\nIt's like the ",(0,t.jsx)(n.strong,{children:"Value"})," argument we saw above in SetSpeed Command."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(4439).Z+"",width:"556",height:"404"})}),"\n",(0,t.jsxs)(n.p,{children:["You can attach new attributes by ",(0,t.jsx)(n.strong,{children:"adding variables to the inline command and marking them as public or editable in instances"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(5854).Z+"",width:"334",height:"231"})}),"\n",(0,t.jsx)(n.p,{children:"In this image, NewVar_0~2 will be implemented as attributes for the command, and NewVar_3 will not. (Though you can use it as just like the other bp variable.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(6764).Z+"",width:"683",height:"443"})}),"\n",(0,t.jsx)(n.p,{children:"These variables automatically become attributes of the inline command. Attribute variables are displayed in the command bind editor, allowing you to specify values through the editor or by assigning values in text. Attribute variables are initialized with the specified values at the time of command execution."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Dialogue Inline Commands can use only the property types that can be stored in ",(0,t.jsx)(n.strong,{children:"the string form and numeric form"})," as attribute.\r\nThe property types that can be attribute are as following:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Boolean"}),"\n",(0,t.jsx)(n.li,{children:"Numeric types (int, float, double...)"}),"\n",(0,t.jsxs)(n.li,{children:["Text (With a transient key and namespace. ",(0,t.jsx)(n.strong,{children:"You can not localize this text"}),".)"]}),"\n",(0,t.jsx)(n.li,{children:"String, Name"}),"\n",(0,t.jsx)(n.li,{children:"Byte Types (Enums)"}),"\n"]}),(0,t.jsxs)(n.p,{children:["The property types ",(0,t.jsx)(n.strong,{children:"can not be attribute"})," are as following:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Object, class reference"}),"\n",(0,t.jsx)(n.li,{children:"Map, Array, Set, Tuple"}),"\n",(0,t.jsx)(n.li,{children:"Struct"}),"\n"]}),(0,t.jsxs)(n.p,{children:["As you can see, It has a certain limits on some applications, and this is why we also support ",(0,t.jsx)(n.strong,{children:"Dialogue Events"}),"! use Dialogue Events instead for this case."]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(9977).Z+"",width:"1123",height:"508"})}),"\n",(0,t.jsx)(n.p,{children:"The descriptions set in the class settings and the descriptions of variables marked as public are displayed as explanations for these variables in the command bind editor. This provides a more intuitive and convenient way to use commands."}),"\n",(0,t.jsx)(n.h3,{id:"registering-dialogue-inline-commands-in-node-classes",children:"Registering Dialogue Inline Commands in Node Classes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(8722).Z+"",width:"1650",height:"896"})}),"\n",(0,t.jsx)(n.p,{children:"In the editor's project settings tab, in the Dialogue Inline Commands section, you can register the dialogue inline command class to be used for each dialogue node class. You can register the created dialogue inline command for the desired node class with the desired signature."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The command bind data is stored in the DefaultDialogueNodeCommandsRuntimeSetting.ini file in the Config folder of the project's root directory."})}),"\n",(0,t.jsxs)(n.p,{children:["The string value that command bind elements have is called a ",(0,t.jsx)(n.strong,{children:"signature"}),". ",(0,t.jsx)(n.strong,{children:"(e.g., Signature of the DI_Event inline command: Event)"})," This signature is used to call the command in the Context Text, so it is advisable to choose a concise and descriptive signature."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The subsequent explanations are for advanced users."})}),"\n",(0,t.jsx)(n.h3,{id:"directly-binding-dialogue-inline-commands",children:"Directly Binding Dialogue Inline Commands"}),"\n",(0,t.jsx)(n.p,{children:"Having registered the signature to the Context Text earlier, you can now bind the command directly to the text."}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned before, when the dialogue widget updates the text and encounters text in the ",(0,t.jsx)(n.code,{children:"[[signature]]"})," format, it executes the command corresponding to that signature."]}),"\n",(0,t.jsx)(n.h3,{id:"binding-dialogue-inline-commands-with-attributes",children:"Binding Dialogue Inline Commands with Attributes"}),"\n",(0,t.jsx)(n.p,{children:"You can include attributes with the inline command signature to provide arguments for the command when it is executed."}),"\n",(0,t.jsx)(n.p,{children:"To use attributes, enter the attribute's name, followed by an equal sign and the value inside double quotes. Each attribute is separated by a space. With these considerations, you can bind an inline command with multiple attributes as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'[[signature attribute1Name="attribute1Value" attribute2Name="attribute2Value" ...]]'})}),"\n",(0,t.jsx)(n.p,{children:"Similarly, if you don't initialize the attribute, the class's default value will be used."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8722:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Assign-f593444d2a3f3af500112c137194acff.png"},1353:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-1-6e9959dd025b74b7f3116b81eb9ae145.png"},6764:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-10-6dbc2d676b20216c3b507c3035f9fb1f.png"},9977:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-2-ed790ffee9e6abd032ac5302e88c203f.png"},5716:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-3-149290c8f24ebc808a19d47f8a4a9a03.png"},8233:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-4-61051f6033da040485c77518d2960c3e.png"},2853:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-5-0d432115bb733eedb814786441742d3a.png"},4439:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-6-04aa7cda3b340ee4167fb24d6307de5c.png"},9800:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-7-7e9b279553cbebdbf353a0ed3e8649d5.png"},3572:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-8-634a9276d83cb7404935c41703fcb4e0.png"},5854:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-9-13ff340f5a6d5e60f2c4659e6f92f601.png"},3204:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-d7e98c3d8489334b343945f9384874b0.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var t=i(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);