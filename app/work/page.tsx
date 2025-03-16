import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Work',
  description: 'My past work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Portfolio</h1>

      <div className="grid md:grid-cols-2 gap-4">
          <Link 
            target="_blank" 
            href="https://apps.apple.com/us/app/coveted/id6475173819"
            className="flex"
          >
            <div className="border transition hover:bg-zinc-900 border-zinc-700 rounded-[40px] py-4 w-full flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <Image 
                  className="drop-shadow mx-auto object-contain" 
                  alt="Coveted App" 
                  src="/work/elytra/rider.png" 
                  width={200} 
                  height={200} 
                />
              </div>
              <div className="mt-auto py-4">
                <h1 className="text-white text-center text-xl font-semibold">Car Pooling System</h1>
              </div>
            </div>
          </Link>
          <Link 
            target="_blank" 
            href="https://apps.apple.com/us/app/coveted/id6475173819"
            className="flex"
          >
            <div className="border transition hover:bg-zinc-900 border-zinc-700 rounded-[40px] py-4 w-full flex flex-col h-full">
              <div className="flex-1 flex items-center justify-center">
                <Image 
                  className="drop-shadow mx-auto object-contain" 
                  alt="Coveted App" 
                  src="/work/coveted/screenshot-portrait.png" 
                  width={200} 
                  height={200} 
                />
              </div>
              <div className="mt-auto py-4">
                <h1 className="text-white text-center text-xl font-semibold">Online Shopping App</h1>
              </div>
            </div>
          </Link>
        </div>

    </section>
  )
}
