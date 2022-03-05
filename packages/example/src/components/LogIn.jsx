import clsx from 'clsx'

const LogIn = ({ className }) => {
  return (
    <div
      id="logIn"
      className={clsx(
        'w-full max-w-md mx-auto p-4 text-text bg-secondary rounded-lg border border-border transition-colors',
        className
      )}
    >
      <h3 className="mt-1 text-2xl font-bold">Log In</h3>
      <div className="mt-6 space-y-3">
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="h-10 px-3 py-2 rounded-md bg-secondary-100 text-text-inverted outline-none ring-2 ring-transparent focus-visible:ring-primary transition"
            defaultValue="hello@example.com"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="h-10 px-3 py-2 rounded-md bg-secondary-100 text-text-inverted outline-none ring-2 ring-transparent focus-visible:ring-primary transition"
          />
        </div>
      </div>
      <button className="w-full h-10 mt-6 font-bold bg-primary text-text-100 rounded-md">
        Log In
      </button>
      <div className="mt-2 text-center">
        <a href="#" className="text-xs text-primary-100">
          Forgot Password
        </a>
      </div>
    </div>
  )
}

export default LogIn
