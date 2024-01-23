"use client"
import { Image as ImageIcon, Twitter, Youtube, Code } from "lucide-react";
import {
    ReactSlashMenuItem, ToggledStyleButton, Toolbar, CreateLinkButton
} from "@blocknote/react";
import { imageHandler, codeHandler, youtubeHandler, twitterHandler } from "./blockNoteHandler"
import { BlockNoteEditor } from "@blocknote/core";





export const FormattingToolbar = (props: { editor: BlockNoteEditor }) => {
    return (
        <Toolbar>
            <ToggledStyleButton editor={props.editor} toggledStyle={"bold"} />
            <ToggledStyleButton editor={props.editor} toggledStyle={"italic"} />
            <ToggledStyleButton editor={props.editor} toggledStyle={"underline"} />
            <CreateLinkButton editor={props.editor} />
        </Toolbar>
    )
}


function ToggleContainer ({ children, handler, editor }: { children: React.ReactNode, handler: (editor: BlockNoteEditor) => any, editor: BlockNoteEditor }) {

    return (
        <div className="w-fit h-fit p-1 rounded-md hover:cursor-pointer hover:bg-slate-400" onClick={() => handler(editor)}>
            {children}
        </div>
    )
} 

export function CustomSideMenu( { editor }: { editor: BlockNoteEditor } ) {
    
    return (
        <div className="flex justify-center gap-x-1">
            <ToggleContainer editor={editor} handler={imageHandler}>
                <ImageIcon size={20} />
            </ToggleContainer>
            <ToggleContainer  editor={editor} handler={twitterHandler}>
                <Twitter size={20} />
            </ToggleContainer>
            <ToggleContainer  editor={editor} handler={youtubeHandler}>
                <Youtube size={20} />
            </ToggleContainer>
            <ToggleContainer  editor={editor} handler={codeHandler}>
                <Code size={20} />
            </ToggleContainer>
        </div>
    )
}