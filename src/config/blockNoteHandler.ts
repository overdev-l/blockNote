import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";

export function imageHandler(editor: BlockNoteEditor) {
    const currentBlock: Block<any, any, any> = editor.getTextCursorPosition().block;
    let imageBlock:PartialBlock<any,any,any>  = {
        type: 'image',
        props: {
          src: 'https://example.com/image.jpg',
          width: 400,
        }
      };
      editor.insertBlocks([imageBlock], currentBlock, "after");
}
export function codeHandler(editor: BlockNoteEditor) {
    const currentBlock: Block<any, any, any> = editor.getTextCursorPosition().block;
    let imageBlock:PartialBlock<any,any,any>  = {
        type: 'image',
        props: {
          src: 'https://example.com/image.jpg',
          width: 400,
        }
      };
      editor.insertBlocks([imageBlock], currentBlock, "after");
}
export function twitterHandler(editor: BlockNoteEditor) {
    const currentBlock: Block<any, any, any> = editor.getTextCursorPosition().block;
    let imageBlock:PartialBlock<any,any,any>  = {
        type: 'image',
        props: {
          src: 'https://example.com/image.jpg',
          width: 400,
        }
      };
      editor.insertBlocks([imageBlock], currentBlock, "after");
}
export function youtubeHandler(editor: BlockNoteEditor) {
    const currentBlock: Block<any, any, any> = editor.getTextCursorPosition().block;
    let imageBlock:PartialBlock<any,any,any>  = {
        type: 'image',
        props: {
          src: 'https://example.com/image.jpg',
          width: 400,
        }
      };
      editor.insertBlocks([imageBlock], currentBlock, "after");
}