import { cn } from '@/lib/utils';
import { PaperIcon, RockIcon, ScissorsIcon } from '@/components/icons';

type HandButtonProps = {
  handType: 'rock' | 'paper' | 'scissors';
  onClick?: () => void;
  winner?: boolean;
};

const actions = {
  rock: {
    icon: RockIcon,
    bg: 'bg-[#9D1634]',
    gradient: 'from-[#dc2e4e] to-[#dd405d]',
  },
  paper: {
    icon: PaperIcon,
    bg: 'bg-[#2A45C2]',
    gradient: 'from-[#4865F4] to-[#5671F5]',
  },
  scissors: {
    icon: ScissorsIcon,
    bg: 'bg-[#C76C1B]',
    gradient: 'from-[#ec9e0e] to-[#eca922]',
  },
};

const HandButton = ({ handType, onClick, winner }: HandButtonProps) => {
  const Icon = actions[handType].icon;

  return (
    <button
      disabled={onClick === undefined}
      onClick={onClick}
      className='relative flex size-[144px] items-center justify-center rounded-full shadow-2xl md:size-[300px]'
    >
      {winner && (
        <div className='absolute top-1/2 size-[175%] -translate-y-[50%] rounded-full bg-[#223453]' />
      )}
      {winner && (
        <div className='absolute top-1/2 size-[150%] -translate-y-[50%] rounded-full bg-[#273655]' />
      )}
      {winner && (
        <div className='absolute top-1/2 size-[125%] -translate-y-[50%] rounded-full bg-[#2c3a58]' />
      )}

      <div
        className={cn(
          'absolute top-1.5 z-10 size-full rounded-full md:top-3',
          actions[handType].bg
        )}
      />

      <div
        className={cn(
          'absolute z-10 size-full rounded-full bg-gradient-to-t',
          actions[handType].gradient
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
