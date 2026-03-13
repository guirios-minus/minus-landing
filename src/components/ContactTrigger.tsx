'use client';

import { useContactModal } from '@/context/ContactModalContext';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Drop-in replacement for <a href="#contact"> buttons.
 * Renders a <button> that opens the ContactModal via context.
 * Safe to import from Server Components.
 */
export default function ContactTrigger({ children, className }: Props) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
