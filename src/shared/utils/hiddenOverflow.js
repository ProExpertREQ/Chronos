import { useEffect } from 'react';

export default function hiddenOverflow() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // eslint-disable-next-line no-return-assign
    return () => document.body.style.overflow = 'unset';
  }, []);
}
