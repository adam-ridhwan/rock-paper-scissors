import { cn } from '@/lib/utils';
import { PaperIcon, RockIcon, ScissorsIcon } from '@/components/icons';

type HandButtonProps = {
  handType: 'rock' | 'paper' | 'scissors';
  onClick?: () => void;
  isWinner?: boolean;
  disabled?: boolean;
  className?: string;
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

const HandButton = ({
  handType,
  onClick,
  isWinner,
  disabled,
  className,
}: HandButtonProps) => {
  const Icon = actions[handType].icon;

  return (
    <button
      disabled={disabled || onClick === undefined}
      onClick={onClick}
      className={cn(
        'relative flex aspect-square max-w-[300px] items-center justify-center rounded-full shadow-2xl',
        { 'opacity-20': disabled },
        className
      )}
    >
      {isWinner && (
        <>
          <div className='absolute top-1/2 size-[175%] -translate-y-[50%] rounded-full bg-[#223453]' />
          <div className='absolute top-1/2 size-[125%] -translate-y-[50%] rounded-full bg-[#2c3a58]' />
          <div className='absolute top-1/2 size-[150%] -translate-y-[50%] rounded-full bg-[#273655]' />
        </>
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
