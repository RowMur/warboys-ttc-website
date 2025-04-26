import Image from 'next/image'
import { Mail } from './icons/Mail'
import { Pin } from './icons/Pin'
import { Event } from './icons/Event'
import { PhotoCollage } from './components/PhotoCollage/PhotoCollage'
import {
    COMPETITION_CONTENT,
    COMPETITION_TITLE,
    FAQs,
    PRACTICE_NIGHTS_CONTENT,
    PRACTICE_NIGHTS_TITLE,
} from './content'

/**
 * Sections...
 *
 * - Navbar
 * - Hero
 * - Practice nights
 * - History / about + where to find us
 * - Competition
 * - Contact
 * - FAQs
 * - Footer
 */

const clubEmail = 'warboystabletennisclub@gmail.com'

const clubAddressShort = 'Warboys Sports & Social Club'
const clubAddressLong =
    'Warboys Sports & Social Club, Forge Way, Warboys, Huntingdon PE28 2TA'

export default function Home() {
    return (
        <>
            <nav className="bg-navy px-4">
                <div className="max-w-7xl mx-auto flex justify-between py-2">
                    <Image
                        src="/logo.png"
                        alt="Warboys Table Tennis Club Logo"
                        height={80}
                        width={80}
                    />
                    <div className="text-light flex items-center gap-4">
                        <a href={`mailto:${clubEmail}`}>
                            <div className="flex gap-2">
                                <Mail />
                                <div>
                                    <p className="font-semibold">Send Mail</p>
                                    <p>{clubEmail}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
            <section className="flex items-center max-w-7xl mx-auto py-16">
                <div className="grow basis-1/2 flex flex-col gap-4">
                    <h1 className="text-6xl font-black">
                        Warboys Table Tennis Club
                    </h1>
                    <p className="flex font-semibold text-lg items-center gap-4">
                        <span className="flex items-center">
                            <Pin />
                            <span>{clubAddressShort}</span>
                        </span>
                        <span className="flex items-center">
                            <Event />
                            <span>Thursdays, 7:30pm onwards</span>
                        </span>
                    </p>
                </div>
                <PhotoCollage />
            </section>
            <section className="bg-blue">
                <div className="max-w-7xl mx-auto py-16 flex justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">
                            {PRACTICE_NIGHTS_TITLE}
                        </h2>
                        <p className="flex items-center gap-4 mt-4 max-w-xl">
                            {PRACTICE_NIGHTS_CONTENT}
                        </p>
                        <h2 className="text-4xl font-bold mt-8">
                            {COMPETITION_TITLE}
                        </h2>
                        <p className="flex items-center gap-4 mt-4 max-w-xl">
                            {COMPETITION_CONTENT}
                        </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18573.133972422787!2d-0.08253697270635704!3d52.39723498913108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877e0df452b9b03%3A0xe9c2da897813fd03!2sWarboys%20Sports%20%26%20Social%20Club!5e1!3m2!1sen!2suk!4v1745703533290!5m2!1sen!2suk"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <section className="max-w-7xl mx-auto py-16">
                <h2 className="text-4xl font-bold">FAQs</h2>
                {FAQs.map((faq) => (
                    <>
                        <p className="text-xl font-semibold mt-8">
                            {faq.question}
                        </p>
                        <p className="mt-2">{faq.answer}</p>
                    </>
                ))}
            </section>
            <footer className="bg-navy text-light py-4">
                <div className="max-w-7xl mx-auto flex gap-8">
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Warboys Table Tennis Club Logo"
                            height={64}
                            width={64}
                        />
                    </div>
                    <div className="max-w-80">
                        <p className="text-2xl mb-6 font-semibold">Contact</p>
                        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-4 justify-center">
                            <div className="mx-auto">
                                <Mail />
                            </div>
                            <div>
                                <p className="font-semibold">Send Mail</p>
                                <p>{clubEmail}</p>
                            </div>
                            <div className="mx-auto">
                                <Pin />
                            </div>
                            <div>
                                <p className="font-semibold">Address</p>
                                <p>{clubAddressLong}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
