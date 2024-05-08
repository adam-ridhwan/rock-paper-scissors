import { Button } from '@/components/ui/button';
import { PaperIcon, RockIcon, ScissorsIcon } from '@/components/icons';

export default function Home() {
  return (
    <main className='container flex min-h-dvh flex-col py-10'>
      <div className='flex flex-row items-center justify-between border border-muted-foreground p-4'>
        <div>
          <p className='text-2xl font-bold leading-5 text-primary'>ROCK</p>
          <p className='text-2xl font-bold leading-5 text-primary'>PAPER</p>
          <p className='text-2xl font-bold leading-5 text-primary'>SCISSORS</p>
        </div>

        <div className='flex size-20 flex-col items-center justify-center rounded-md bg-primary'>
          <p className='text-xs text-primary-foreground'>SCORE</p>
          <p className='text-4xl text-primary-foreground'>12</p>
        </div>
      </div>

      <div className='flex flex-1 flex-col items-center justify-center gap-4'>
        <div className='flex w-full flex-row justify-around'>
          <button className='relative flex size-36 items-center justify-center rounded-full shadow-2xl'>
            <div className='absolute top-1.5 z-10 size-full rounded-full bg-[#2A45C2]' />
            <div className='absolute z-10 size-full rounded-full bg-gradient-to-t from-[#4865F4] to-[#5671F5]' />
            <div className='absolute z-10 size-[80%] overflow-hidden rounded-full'>
              <div className='absolute z-10 size-full translate-y-1 rounded-full bg-[#F3F3F3]' />
              <div className='rounded-fu ll z-10 size-full bg-[#BABFD4]' />
            </div>
            <PaperIcon />
          </button>

          <button className='relative flex size-36 items-center justify-center rounded-full shadow-2xl'>
            <div className='absolute top-1.5 z-10 size-full rounded-full bg-[#C76C1B]' />
            <div className='absolute z-10 size-full rounded-full bg-gradient-to-t from-[#ec9e0e] to-[#eca922]' />
            <div className='absolute z-10 size-[80%] overflow-hidden rounded-full'>
              <div className='absolute z-10 size-full translate-y-1 rounded-full bg-[#F3F3F3]' />
              <div className='z-10 size-full rounded-full bg-[#BABFD4]' />
            </div>
            <ScissorsIcon />
          </button>
        </div>

        <div className='flex size-32 w-full justify-center'>
          <button className='relative flex size-36 items-center justify-center rounded-full shadow-2xl'>
            <div className='absolute top-1.5 z-10 size-full rounded-full bg-[#9D1634]' />
            <div className='absolute z-10 size-full rounded-full bg-gradient-to-t from-[#dc2e4e] to-[#dd405d]' />
            <div className='absolute z-10 size-[80%] overflow-hidden rounded-full'>
              <div className='absolute z-10 size-full translate-y-1 rounded-full bg-[#F3F3F3]' />
              <div className='z-10 size-full rounded-full bg-[#BABFD4]' />
            </div>
            <RockIcon />
          </button>
        </div>
      </div>

      <div className='flex w-full justify-center'>
        <Button variant='outline' className='px-8 tracking-widest'>
          RULES
        </Button>
      </div>
    </main>
  );
}
