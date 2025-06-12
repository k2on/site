import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image className="rounded-3xl" width={500} height={300} alt="Max Koon" src="/headshot_small.JPG" />
      <br />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My name is Max Koon, welcome to my website.
      </h1>
      <p className="mb-4">{`First of all, I love Jesus and I want you to know Him. He has changed my life forever, and His love has the power to change you.`}</p>
      <p className="mb-4 prose">
        {`I am a student at Clemson University studying Computer Science and Chinese, and open to contract work.`}
      </p>
      <h4 className="text-xl font-semibold">Posts</h4>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
