// import axios from 'axios';
import { useCurrent } from '../lib/api/current/useCurrent';

export function Dashboard() {
  const { data: currentWeather, status } = useCurrent();

  return (
    <main>
      {/* Hello, welcome to Weather app */}
      {status === 'success' ? currentWeather?.condition?.text : 'Loading'}
    </main>
  );
}
