import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({dentistName, experience, expertise, onCompare}: {dentistName:string, experience:number, expertise:number, onCompare?:Function}) {
    return (
        <InteractiveCard contentName={dentistName}>
            <div className='w-full h-[15%] p-[10px]'>
                {dentistName}
            </div>
            <div>Experience: {experience}</div>
            <div>Expertise: {expertise}</div>
            {
                onCompare ? <button className='block h-[10%] text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm' onClick={(e)=> {e.stopPropagation(); e.preventDefault(); onCompare(dentistName)}}>Compare</button>: ''
            }
        </InteractiveCard>
    );
}