'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RulesIcon } from '@/components/icons';

const RulesButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='px-8 tracking-widest'>
          RULES
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>RULES</DialogTitle>
          <RulesIcon />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RulesButton;
