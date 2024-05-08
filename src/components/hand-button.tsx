import { cn } from '@/lib/utils';
import { PaperIcon, RockIcon, ScissorsIcon } from '@/components/icons';

type HandButtonProps = {
  type: 'rock' | 'paper' | 'scissors';
};

const actions = {
  rock: {
    icon: RockIcon,
    bg: 'bg-[#9D1634]',
    gradient: 'from-[#dc2e4e] to-[#dd405d]',
  },
  paper: {
    icon: PaperIcon,
    bg: 'bg-[#C76C1B]',
    gradient: 'from-[#ec9e0e] to-[#eca922]',
  },
  scissors: {
    icon: ScissorsIcon,
    bg: 'bg-[#2A45C2]',
    gradient: 'from-[#4865F4] to-[#5671F5]',
  },
};

const HandButton = ({ type }: HandButtonProps) => {
  const Icon = actions[type].icon;

  return (
    <button className='relative flex size-[144px] items-center justify-center rounded-full shadow-2xl md:size-[300px]'>
      <div
        className={cn(
          'absolute top-1.5 z-10 size-full rounded-full md:top-3',
          actions[type].bg
        )}
      />

      <div
        className={cn(
          'absolute z-10 size-full rounded-full bg-gradient-to-t',
          actions[type].gradient
        )}
      />

      <div className='absolute z-10 size-[80%] overflow-hidden rounded-full'>
        <div className='absolute z-10 size-full translate-y-1 rounded-full bg-[#F3F3F3] md:translate-y-3' />
        <div className='z-10 size-full rounded-full bg-[#BABFD4]' />
      </div>

      <Icon />
    </button>
  );
};

export default HandButton;
