import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center py-8">Aqui é a header</h1>
      <Suspense fallback={<SpinLoader />}>
        <PostsList/>
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </div>
  );
}
