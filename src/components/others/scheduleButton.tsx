import { PhoneOutgoing } from 'lucide-react';
import Link from 'next/link';

export default function ScheduleButton() {
  return (
    <div className="z-[999] fixed right-[7%] bottom-[7%]">
      <Link 
        href={'#'}
        className="
          px-7
          py-3
          transition-all
          duration-300
          ease-out
          flex group 
          items-center 
          hover:gap-x-3
          text-white 
          font-medium 
          rounded-full 
          bg-primary 
          hover:bg-[#E86C3A]/90
          hover:shadow-lg
        "
      >
        <div className="
           bg-white 
          text-primary 
          group-hover:p-1 
          rounded-full 
          w-0 
          h-0
          group-hover:w-[1.6rem] 
          group-hover:h-[1.6rem]
          overflow-hidden
          transition-all 
          duration-300 
          ease-out
          flex 
          items-center 
          justify-center
        ">
          <PhoneOutgoing />
        </div>
        <span>Schedule A Free Call</span>
      </Link>
    </div>
  );
}