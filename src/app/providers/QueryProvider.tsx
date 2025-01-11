import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
