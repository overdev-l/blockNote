"use client"
import { BlockNoteView, FormattingToolbarPositioner, HyperlinkToolbarPositioner, ImageToolbarPositioner, SideMenuPositioner, SlashMenuPositioner, useBlockNote } from "@blocknote/react";
import { FormattingToolbar, CustomSideMenu } from "@/config/blockNote"
import "@blocknote/react/style.css";
export default function Editor() {

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
    },
  });

  return (
    <>
      <BlockNoteView editor={editor} >
        <FormattingToolbarPositioner editor={editor} formattingToolbar={FormattingToolbar} />
        <HyperlinkToolbarPositioner editor={editor} />
        <SideMenuPositioner
        editor={editor}
        sideMenu={() => <CustomSideMenu editor={editor}></CustomSideMenu>}
      />
      </BlockNoteView>
    </>
  );
}