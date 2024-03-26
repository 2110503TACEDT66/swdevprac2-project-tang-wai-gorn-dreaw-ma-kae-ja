import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';
export default async function TopMenu(){

    const session = await getServerSession(authOptions)
    return(
        <div className={styles.menucontainer}>
            <Link href='/'>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title='Dentists' pageRef='/dentist'/>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <TopMenuItem title='About' pageRef='/about'/>
            <div className='flex flex-row absolute right-0 h-full'>
                <TopMenuItem title='Your Booking' pageRef='/mybooking'/>
                <TopMenuItem title='Register' pageRef='/register'/>
                {
                    session? <Link href='/api/auth/signout' className='no-underline'>
                        <div className="flex items-center h-full pr-5 pl-2 text-cyan-600 text-sm font-semibold hover:font-extrabold no-underline">
                            Sign-Out
                            </div>
                        </Link>
                    : <Link href='/api/auth/signin' className='no-underline'>
                        <div className="flex items-center h-full pr-5 pl-2 text-cyan-600 text-sm font-semibold hover:font-extrabold no-underline">
                            Sign-In
                            </div>
                        </Link>
                }
            </div>
        </div>
    );
}