'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from '../../components/Dashboard';
import styles from './page.module.css';

const queryClient = new QueryClient();
export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}
