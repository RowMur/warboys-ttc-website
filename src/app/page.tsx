import Image from 'next/image'
import { Mail } from './icons/Mail'
import { Pin } from './icons/Pin'
import { Event } from './icons/Event'
import { PhotoCollage } from './components/PhotoCollage/PhotoCollage'

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
            <section className="flex items-center max-w-7xl mx-auto">
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
