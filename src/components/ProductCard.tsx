import InteractiveCard from './InteractiveCard';

export default function ProductCard({dentistName, experience, expertise}: {dentistName:string, experience:number, expertise:number}) {
    return (
        <InteractiveCard contentName={dentistName}>
            <div className='w-full h-[15%] p-[10px] text-black underline-none'>
                {dentistName}
            </div>
            <img src='/img/dentist-default.jpg' alt={dentistName} className="w-auto h-1/2 mb-5 mx-auto rounded-xl" />
            <div className='w-full h-[15%] p-[10px] text-black text-sm'>Experience: {experience} years</div>
            <div className='w-full h-[15%] p-[2px] text-black text-sm'>Expertise in {expertise}</div>
            
        </InteractiveCard>
    );
}
