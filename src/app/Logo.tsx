
import localFont from 'next/font/local'

const montserratAlt1 = localFont({
    src: [
      {
        path: './fonts/MontserratAlt1/MontserratAlt1-Light.woff2',
        weight: '400',
        style: 'normal',
      },
    ],
  })

export default function Logo() {
    return (
        <div className={`text-4xl ${montserratAlt1.className}`}><span className='text-gray-900'>JAKOB</span>&nbsp;<span className='text-gray-400'>HORNDAHL</span></div>
    )
}