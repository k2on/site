import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Contact',
  description: 'Contact me.',
}

const SIGNAL_LINK = "https://signal.me/#eu/JWW290GUL0G-UbJtcMKop6AeGOdChrLjVOl4adcjCXjBGvJ-poVI6avUXjIBVqiu";
const EMAIL = "max@koonindustries.com"

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

        <p>Message me on <Link target="_blank" className="underline" href={SIGNAL_LINK}>Signal</Link>,</p>
        <br />

        <Link target="_blank" href={SIGNAL_LINK}>
            <Image width={200} height={300} alt="Signal" src="/signal.png" />
        </Link>

        <br />

        <p>or email: <Link className="underline" href={'mailto:' + EMAIL}>{EMAIL}</Link></p>


        
      </div>
    </section>
  )
}

