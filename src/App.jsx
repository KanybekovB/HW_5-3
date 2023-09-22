import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { PostsPage } from "./pages/PostsPage";
import { HomePage } from "./pages/HomePage";
import { SinglePostPage } from "./pages/SinglePostPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<PostsPage />} />
          <Route path="users/:id" element={<SinglePostPage />} />

        </Route>
      </Routes>
    </>
  );
}
