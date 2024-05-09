'use client';

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Hand, Winner } from '@/lib/types';
import { cn, delay } from '@/lib/utils';
import HandButton from '@/components/hand-button';
import RulesButton from '@/components/rules-button';

const hand = ['rock', 'paper', 'scissors'];

const getRandomHand = (): Hand => {
  return hand[Math.floor(Math.random() * hand.length)] as Hand;
};

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue, removeValue] = useLocalStorage('score', 0);

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

      <div className='flex flex-1 flex-col items-center gap-8 py-20'>
        <div className='flex w-full flex-row justify-around pt-8'>
          <div className='flex w-1/2 flex-col items-center gap-4 md:gap-8'>
            <p className='relative z-50 line-clamp-1 h-10 text-center text-xl tracking-wide md:text-4xl'>
              {userPick && 'YOU PICKED'}
            </p>
            {userPick ? (
              <HandButton handType={userPick} winner={winner === 'user'} />
            ) : (
              <HandButton
                handType='paper'
                onClick={() => handlePick('paper')}
              />
            )}
          </div>

          <div className='flex w-1/2 flex-col items-center gap-4 md:gap-8'>
            <p className='relative z-50 line-clamp-1 h-10 text-center text-xl tracking-wide md:text-4xl'>
              {housePick && 'THE HOUSE PICKED'}
            </p>
            {userPick ? (
              housePick && (
                <HandButton handType={housePick} winner={winner === 'house'} />
              )
            ) : (
              <HandButton
                handType='scissors'
                onClick={() => handlePick('scissors')}
              />
            )}
          </div>
        </div>

        {!userPick && (
          <HandButton handType='rock' onClick={() => handlePick('rock')} />
        )}

        {userPick && winner && (
          <div className='flex flex-col gap-4 pt-20'>
            <p className='text-center text-4xl font-bold text-primary md:text-6xl'>
              {winner === 'user' && 'YOU WIN'}
              {winner === 'house' && 'YOU LOSE'}
              {winner === 'draw' && 'DRAW'}
            </p>
          </div>
        )}
      </div>

      <div className='flex w-full justify-center'>
        <RulesButton />
      </div>
    </main>
  );
};
export default Home;
