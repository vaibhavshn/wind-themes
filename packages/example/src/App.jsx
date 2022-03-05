import LogIn from './components/LogIn'
import ThemeCard from './components/ThemeCard'

function App() {
  return (
    <>
      <header className="border-b border-gray-200">
        <div className="flex h-20 items-center justify-between container">
          <h1 className="text-3xl font-bold select-none">wind-themes 🎨</h1>
          <a
            href="https://github.com/vaibhavshn/wind-themes"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full hover:bg-secondary/75 transition-colors"
            title="wind-themes repository"
            aria-label="wind-themes repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      </header>
      <div className="prose mt-6 container">
        <blockquote>
          <code>wind-themes</code> is a lightweight tailwindcss plugin that
          handles multiple themes 🖍
        </blockquote>
        <hr className="!my-3" />
        <p>
          You can try switching back and forth the themes in the{' '}
          <a href="#play">Playground</a>
          .
          <br />
          This page also remembers the theme you set the last time you visited
          with the help of the bundled <code>&lt;ThemeProvider /&gt;</code> for
          React!
        </p>
        <p>
          Head over to the{' '}
          <a
            target="_blank"
            href="https://github.com/vaibhavshn/wind-themes"
            title="wind-themes repository"
            aria-label="wind-themes repository"
          >
            repository
          </a>{' '}
          to read more on how to add <code>wind-themes</code> to your
          tailwindcss config.
        </p>
      </div>
      <div className="container mt-2">
        <h2 id="play" className="text-3xl font-semibold">
          Playground
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-8 mb-24">
          <div className="w-full max-w-md mx-auto mb-8">
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
      </div>
    </>
  )
}

export default App
