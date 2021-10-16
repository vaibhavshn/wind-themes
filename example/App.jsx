import { useTheme } from '../react';

import LogIn from './components/LogIn';
import ThemeCard from './components/ThemeCard';

function App() {
  const { theme } = useTheme();
  return (
    <>
      <header className="bg-secondary text-text border-b border-border">
        <div className="flex h-20 items-center justify-between w-full max-w-screen-lg px-4 mx-auto">
          <h1 className="text-3xl font-bold select-none text-text">
            wind-themes
          </h1>
          <div
            className="flex flex-col w-10 h-10 border border-border rounded-full overflow-hidden -rotate-45"
            aria-label={theme}
          >
            <div className="flex-1 bg-primary"></div>
            <div className="flex-1 bg-secondary"></div>
          </div>
        </div>
      </header>
      <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-screen-lg mx-auto mt-12 mb-24 p-4">
        <div className="w-full max-w-sm mx-auto mb-8">
          <LogIn className="md:sticky top-12" />
        </div>
        <main className="flex-1 flex flex-col space-y-4">
          <ThemeCard
            theme="soft-gold"
            colors={[
              ['primary', 'bg-primary'],
              ['primary-100', 'bg-primary-100'],
              ['secondary', 'bg-secondary'],
              ['secondary-100', 'bg-secondary-100'],
              ['text', 'bg-text'],
              ['text-100', 'bg-text-100'],
              ['border', 'bg-border'],
            ]}
          />
          <ThemeCard
            theme="dark-red"
            colors={[
              ['primary', 'bg-primary'],
              ['primary-100', 'bg-primary-100'],
              ['secondary', 'bg-secondary'],
              ['secondary-100', 'bg-secondary-100'],
              ['text', 'bg-text'],
              ['text-100', 'bg-text-100'],
              ['border', 'bg-border'],
            ]}
          />
          <ThemeCard
            theme="light-purple"
            colors={[
              ['primary', 'bg-primary'],
              ['primary-100', 'bg-primary-100'],
              ['secondary', 'bg-secondary'],
              ['secondary-100', 'bg-secondary-100'],
              ['text', 'bg-text'],
              ['text-100', 'bg-text-100'],
              ['border', 'bg-border'],
            ]}
          />
          <ThemeCard
            theme="full-purple"
            colors={[
              ['primary', 'bg-primary'],
              ['primary-100', 'bg-primary-100'],
              ['secondary', 'bg-secondary'],
              ['secondary-100', 'bg-secondary-100'],
              ['text', 'bg-text'],
              ['text-100', 'bg-text-100'],
              ['border', 'bg-border'],
            ]}
          />
        </main>
      </div>
    </>
  );
}

export default App;
