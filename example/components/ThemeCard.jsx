import clsx from 'clsx';
import { useTheme } from '../../react';

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

export default ThemeCard;
