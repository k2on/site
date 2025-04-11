"use client";

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

// export const metadata = {
//   title: 'Work',
//   description: 'My past work.',
// }

const FREELANCE: Item[] = [
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
];


const OPENSOURCE: Item[] = [
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
        title: "Calendar Sharing App",
        link: "https://github.com/k2on/trinity",
        image: "/work/trinity/screenshot.png"
    },
    {
        title: "Cards Point Tracker",
        link: "https://github.com/k2on/nertz.pro",
        image: "/work/nertz-pro/screenshot.png"
    },
];

type Position = [number, number];

export default function Page() {
  const [pos, setPos] = useState<Position>([0, -1]);
  const [x, y] = pos;
  const maxRows = 4;
  const maxCols = 2;

  function scroll(y: number) {
      if (y == 0) {
          window.scrollTo(0, 0);
          return;
      }
      const el = document.querySelector(`[data-pos-y='${y}']`) as any;
      if (!el) return;
      const top = el.offsetTop - 50;
      window.scrollTo(0, top);
      console.log(top)
  }

  // const [pos, setPos] = useState<Position>([0, 0]);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const [x, y] = pos; // Get current position from closure

    if (e.key === 'j') {
      if (y === maxRows - 1) return;
      const newPos: Position = [x, y + 1];
      setPos(newPos);
      scroll(newPos[1]);
    } else if (e.key === 'k') {
      if (y === 0) return;
      const newPos: Position = [x, y - 1];
      setPos(newPos);
      scroll(newPos[1]);
    } else if (e.key === 'h') {
      if (x === 0) return;
      setPos([x - 1, y]);
    } else if (e.key === 'l') {
      if (x === maxCols - 1) return;
      setPos([x + 1, y]);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  
  // Clean up the event listener when component unmounts or when pos changes
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [pos, maxRows, maxCols]); // Include any other dependencies

  return (
    <section>
      <div className="mb-12">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Freelace Work</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {FREELANCE.map((item, i) => <div data-pos-y={(i % 1)} className={`${x == (i % 2) && y == (i % 1) ? 'border' : ''}`}><Showcase key={item.title} item={item} /></div>)}
          <Link 
            target="_blank" 
            href="https://naturadesign.pro"
            className={`flex md:row-span-2 md:col-span-2 ${y == (1 % 2) ? "border" : ""}`}
            data-pos-y={1 % 2}
          >
            <div className="border transition bg-white dark:bg-black hover:bg-zinc-100 dark:hover:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded-[40px] py-4 w-full flex flex-col h-full group">
              <div className="flex-1 flex items-center justify-center">
                <Image 
                  className="drop-shadow mx-auto object-contain transition duration-150 ease-in-out group-hover:scale-95" 
                  alt="Natura Design Pro"
                  src="/work/natura/screenshot.png"
                  width={397} 
                  height={200} 
                  placeholder="empty"
                />
              </div>
              <div className="mt-auto py-4">
                <h1 className="text-center text-xl font-semibold">Landscaping Landing Page</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Open Source</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {OPENSOURCE.map((item, i) => <div data-pos-y={Math.floor((i + 4) / 2)} className={`${x == ((i) % 2) && y == Math.floor((i + 4) / 2) ? 'border' : ''}`}><Showcase key={item.title} item={item} /></div>)}
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
              height={397} 
              placeholder="empty"
            />
          </div>
          <div className="mt-auto py-4">
            <h1 className="text-center text-xl font-semibold">{title}</h1>
          </div>
        </div>
      </Link>
    );
}
