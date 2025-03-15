import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My name is Max Koon, welcome to my website.</h1>
      <p className="mb-4">{`First of all, I love Jesus and I want you to know Him. He has changed my life forever, and His love has the power to change you.`}</p>
      <p className="mb-4">{`I am a student at Clemson University studying Computer Science and Chinese, and am currently looking for somewhere to work this summer.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
