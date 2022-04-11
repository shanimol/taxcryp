/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

export function useOnClickOutside(ref: React.RefObject<HTMLHeadingElement>, handler: (event: Event) => void) {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event ? event?.target : null)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}