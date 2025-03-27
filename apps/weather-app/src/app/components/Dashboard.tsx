// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function Dashboard() {
  const query = useQuery({
    queryFn: async () => {
      const response = await fetch(
        'http://api.weatherapi.com/v1/current.json?key=50eaf8239b584375ade12404252203&q=melbourne&aqi=no'
      );
      const data = await response.json();

      return data.current;
    },
    queryKey: ['current'],
  });

  return (
    <main>
      Hello, welcome to Weather app
      <h2>{query.data?.condition?.text}</h2>
    </main>
  );
}
