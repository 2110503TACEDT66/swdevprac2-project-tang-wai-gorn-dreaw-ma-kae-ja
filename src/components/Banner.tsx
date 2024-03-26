'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner (){
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)

    const router = useRouter()

    const {data: session} = useSession()
    console.log(session?.user.token)
    return (
        <div className={styles.banner} onClick={() => {setIndex(index + 1)}}>
            <Image src = {covers[index%4]} 
            alt = 'cover'
            fill = {true}
            objectFit='cover'
            priority
            />
            <div className={styles.bannerText}>
                <h1 className='text-base md:text-xl lg:text-2xl xl:text-4xl font-semibold text-black mt-[25px]'>Welcome to Dentist Booking Website</h1>
                <h3 className='text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-black mt-[20px]'>Keep your teeth healthy</h3>
            </div>
            <button className=' bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-4 m-2 rounded z-30 absolute bottom-[25px] right-[25px] hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e) => {e.stopPropagation(); router.push('/dentist')}}>
                Select Your Dentist
            </button>
        </div>
    );
}