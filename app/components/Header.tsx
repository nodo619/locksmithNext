import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-gray-100">
      <Image src="/placeholder.svg?height=100&width=200" alt="Car Locksmith Logo" width={200} height={100} className="mb-8" />
      <div className="flex gap-8 mb-8">
        <a href="#" className="text-3xl text-gray-800 hover:text-blue-600 transition-colors">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-3xl text-gray-800 hover:text-pink-600 transition-colors">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="tel:+1234567890" className="text-3xl text-gray-800 hover:text-green-600 transition-colors md:hidden">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <span className="text-2xl font-bold hidden md:block">123-456-7890</span>
    </header>
  )
}

