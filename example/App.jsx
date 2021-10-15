import clsx from 'clsx';
import { useTheme } from '../react';

const ThemeCard = ({ theme, colors }) => {
  const { theme: globalTheme, setTheme } = useTheme();

  return (
    <div
      className={clsx(
        'p-4 border-2 rounded-xl border-gray-200 hover:shadow-lg transition',
        theme
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">{theme}</h2>
          {theme === globalTheme && (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          )}
        </div>
        <button
          className="text-sm px-3 py-1 border border-gray-300 text-gray-800 rounded-md"
          onClick={() => setTheme(theme)}
        >
          Activate
        </button>
      </div>

      <hr className="mt-2 mb-4 border-gray-200" />
      <div className="flex flex-col space-y-1">
        {colors.map(([name, className]) => (
          <div className="flex items-center justify-between" key={theme + name}>
            <code className="text-sm">{name}</code>
            <div className={clsx('color-box', className)}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LogIn = ({ className }) => {
  return (
    <div
      className={clsx(
        'w-full max-w-sm mx-auto p-4 text-text bg-secondary rounded-lg border border-border',
        className
      )}
    >
      <h3 className="mt-1 text-2xl font-bold">Log In</h3>
      <div className="mt-4 space-y-3">
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="h-10 px-3 py-2 rounded-md bg-secondary-100"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="h-10 px-3 py-2 rounded-md bg-secondary-100"
          />
        </div>
      </div>
      <button className="w-full h-10 mt-4 font-bold bg-primary text-text-100 rounded-md">
        Log In
      </button>
      <div className="mt-2 text-center">
        <a href="#" className="text-xs text-primary-100">
          Forgot Password
        </a>
      </div>
    </div>
  );
};

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
