import { useState, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);
  const showToast = useCallback((msg, xp = null) => {
    setToast({ msg, xp });
    setTimeout(() => setToast(null), 2500);
  }, []);
  return { toast, showToast };
}
