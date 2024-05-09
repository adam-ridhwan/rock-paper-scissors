'use client';

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Hand, Winner } from '@/lib/types';
import { cn, delay } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import HandButton from '@/components/hand-button';
import RulesButton from '@/components/rules-button';

const hand = ['rock', 'paper', 'scissors'];

const getRandomHand = (): Hand => {
  return hand[Math.floor(Math.random() * hand.length)] as Hand;
};

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useLocalStorage('score', 0);

  const [userPick, setUserPick] = useState<Hand>();
  const [housePick, setHousePick] = useState<Hand>();

  const [winner, setWinner] = useState<Winner>();

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  const determineWinner = (userPick: Hand, housePick: Hand) => {
    if (userPick === housePick) {
      return 'draw';
    } else if (
      (userPick === 'rock' && housePick === 'scissors') ||
      (userPick === 'scissors' && housePick === 'paper') ||
      (userPick === 'paper' && housePick === 'rock')
    ) {
      return 'user';
    } else {
      return 'house';
    }
  };

  const handlePick = async (pick: Hand) => {
    setUserPick(pick);
    const housePick = getRandomHand();
    setHousePick(housePick);
    const winner = determineWinner(pick, housePick);
    setWinner(winner);
    await delay(2000);
    setUserPick(undefined);
    setHousePick(undefined);
    setWinner(undefined);
    if (winner === 'user') {
      setValue(value + 1);
    } else if (winner === 'house') {
      setValue(value - 1);
    }
  };

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
          <p className='text-4xl text-primary-foreground'>
            {isMounted ? value : 0}
          </p>
        </div>
      </div>

      <div className='h-2 w-full overflow-hidden bg-muted-foreground'>
        <div
          className={cn('h-2 origin-left transform bg-primary opacity-0', {
            'animate-timer opacity-100': winner !== undefined,
          })}
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <div className='flex flex-1 flex-col justify-evenly py-10'>
          <div className='flex w-full flex-row justify-around gap-8'>
            <div className='flex w-1/2 flex-col items-center gap-4 md:gap-8'>
              <p className='relative z-50 line-clamp-1 h-10 text-center text-xl tracking-wide md:text-4xl'>
                {userPick && 'YOU PICKED'}
              </p>
              {userPick && (
                <HandButton
                  className='w-full'
                  handType={userPick}
                  isWinner={winner === 'user'}
                />
              )}
            </div>

            <div className='flex w-1/2 flex-col items-center gap-4 md:gap-8'>
              <p className='relative z-50 line-clamp-1 h-10 text-center text-xl tracking-wide md:text-4xl'>
                {housePick && 'THE HOUSE PICKED'}
              </p>
              {userPick && housePick && (
                <HandButton
                  className='w-full'
                  handType={housePick}
                  isWinner={winner === 'house'}
                />
              )}
            </div>
          </div>

          {userPick && winner && (
            <div className='relative z-50 flex flex-col gap-4'>
              <p className='text-center text-4xl font-bold text-primary md:text-6xl'>
                {winner === 'user' && 'YOU WIN'}
                {winner === 'house' && 'YOU LOSE'}
                {winner === 'draw' && 'DRAW'}
              </p>
            </div>
          )}
        </div>

        <div className='flex gap-4 pb-8 md:gap-16 md:pb-16'>
          <HandButton
            handType='rock'
            disabled={!!winner}
            onClick={() => handlePick('rock')}
            className='size-1/3'
          />
          <HandButton
            handType='paper'
            disabled={!!winner}
            onClick={() => handlePick('paper')}
            className='size-1/3'
          />
          <HandButton
            handType='scissors'
            disabled={!!winner}
            onClick={() => handlePick('scissors')}
            className='size-1/3'
          />
        </div>
      </div>

      <div className='flex w-full justify-center gap-4'>
        <RulesButton />
        <Button
          disabled={!!winner}
          variant='outline'
          onClick={() => setValue(0)}
          className='px-8 tracking-widest'
        >
          RESET SCORE
        </Button>
      </div>
    </main>
  );
};
export default Home;
