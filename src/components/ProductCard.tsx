import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({dentistName, experience, expertise}: {dentistName:string, experience:number, expertise:number}) {
    return (
        <InteractiveCard contentName={dentistName}>
            <div className='w-full h-[15%] p-[10px] text-black underline-none'>
                {dentistName}
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>Experience: {experience}</div>
            <div className='w-full h-[15%] p-[10px] text-black'>Expertise: {expertise}</div>
        </InteractiveCard>
    );
}