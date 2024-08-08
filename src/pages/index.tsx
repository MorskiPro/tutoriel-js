import { Seo } from "@/ui/components/seo";
import head from "next/head";

export default function Home() {
  return (
   <>
     <Seo title="Application test" description="description..."/>
    <h1>Hello World</h1>
   </>
  );
}
