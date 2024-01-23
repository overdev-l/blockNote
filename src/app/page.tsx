import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"))
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto h-screen">
      <Editor></Editor>
    </main>
  );
}
