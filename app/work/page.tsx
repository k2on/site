import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Work',
  description: 'My past work.',
}

const WORK: Item[] = [
    {
        title: "Car Pooling System",
        link: "https://github.com/k2on/elytrarides",
        image: "/work/elytra-rides/rider.png"
    },
    {
        title: "Library Locator",
        link: "https://github.com/k2on/atthelib.com",
        image: "/work/atthelib/screenshot.png"
    },
    {
        title: "Online Shopping App",
        link: "https://apps.apple.com/us/app/coveted/id6475173819",
        image: "/work/coveted/screenshot-portrait.png"
    },
    {
        title: "Point Tracking System",
        link: "https://apps.apple.com/ca/app/elytra-social/id6671938478",
        image: "/work/elytra-social/elytra-social-portrait.png"
    },
]

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {WORK.map(item => <Showcase key={item.title} item={item} />)}
      </div>
    </section>
  )
}

type Item = {
    title: string;
    link: string;
    image: string;
}

type ShowcaseProps = {
    item: Item;
};
function Showcase({ item }: ShowcaseProps) {
    const { title, link, image } = item;

    return (
      <Link 
        target="_blank" 
        href={link}
        className="flex"
      >
        <div className="border transition bg-white dark:bg-black hover:bg-zinc-100 dark:hover:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded-[40px] py-4 w-full flex flex-col h-full group">
          <div className="flex-1 flex items-center justify-center">
            <Image 
              className="drop-shadow mx-auto object-contain transition duration-150 ease-in-out group-hover:scale-95" 
              alt={title} 
              src={image} 
              width={200} 
              height={200} 
            />
          </div>
          <div className="mt-auto py-4">
            <h1 className="text-center text-xl font-semibold">{title}</h1>
          </div>
        </div>
      </Link>
    );
}
