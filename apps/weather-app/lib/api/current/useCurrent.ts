import { useQuery } from '@tanstack/react-query';
import { getCurrentInfoQueryFn } from './queries';

export const useCurrent = () => {
  const { data, status } = useQuery({
    queryFn: () => getCurrentInfoQueryFn({ location: 'melbourne' }),
    queryKey: ['current'],
  });

  return {
    data,
    status,
  };
};
