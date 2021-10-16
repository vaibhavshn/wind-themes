# 🎨 wind-themes

A lightweight [tailwindcss](https://tailwindcss.com) plugin that handles multiple themes. 🎨

<p>

<a href="https://github.com/tailwindcss/wind-themes/releases"><img src="https://img.shields.io/npm/v/wind-themes.svg" alt="Latest Release"></a>
<a href="https://www.npmjs.com/package/wind-themes"><img src="https://img.shields.io/npm/dt/wind-themes.svg" alt="Total Downloads"></a>
<a href="https://github.com/tailwindcss/tailwindcss/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/tailwindcss.svg" alt="License"></a>

</p>

<a href="https://wind-themes.netlify.app"><img src="https://api.netlify.com/api/v1/badges/4db8f230-0b65-48d8-9205-989e99842a1c/deploy-status" alt="Netlify Status"/></a>

---

## Usage

Check out the [example](./example) in this repo, or read on.

Install `wind-themes`

```sh
npm install wind-themes
```

Check out the sample [themes config specified in a json file](./themes.json) for a single source of truth, you can use this file for now and update later.

In your `tailwind.config.js`, add the plugin and pass your theme object.

> NOTE: You can store this config in a json file as mentioned above, so you can easily use the themes data anywhere in your app later, especially when using the `<ThemeProvider />` in React.

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  // ..
  plugins: [
    require('wind-themes')({
      extend: true, // false by default
      importColors: true, // false by default
      defaultTheme: 'dark-red',
      themes: {
        'dark-red': {
          primary: '#C75A5A',
          secondary: {
            DEFAULT: '#181818',
            100: '#494949',
          },
        },
        'light-purple': {
          primary: '#7D50DC',
          secondary: {
            DEFAULT: '#FFFFFF',
            100: '#EBEBEB',
          },
        },
      },
    }),
  ],
};
```

Now, you can use these _dynamic_ colors as follows:

```html
<div class="text-primary">wind-themes</div>
<input class="bg-secondary-100" />
```

Also, if you set `importColors` to true, you can use every color defined in the config by using it's theme name, color and shade as follows:

```html
<div class="text-dark-red-primary">wind-themes</div>
<input class="bg-light-purple-secondary-100" />
```

### Usage in React

Right now, this only supports class based theme support, so you need to add a class to the root of the html tree or wherever you want a specific theme hardcoded.

For React, there is a `<ThemeProvider />` included with this package.

You can use it as shown:

```js
import { ThemeProvider } from 'wind-themes/react';

ReactDOM.render(
  <ThemeProvider defaultTheme="dark-red" themes={['dark-red', 'light-purple']}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

Also, there is a custom `useTheme()` hook also included which lets you read and update the `theme` state.

```jsx
import { useTheme } from 'wind-themes/react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={() => setTheme('dark-red')}>Set dark-red</button>
      <button onClick={() => setTheme('light-purple')}>Set light-purple</button>
    </div>
  );
};
```

## Configuration

In it's configuration, the object has two switches/flags.

| Config       | Default | Description                                                                                         |
| ------------ | ------- | --------------------------------------------------------------------------------------------------- |
| extend       | `false` | Whether to extend the default colors.                                                               |
| importColors | `false` | Whether to import colors defined in theme as: `text-dark-primary-100` to be used directly           |
| defaultTheme |         | Name of the default theme you want                                                                  |
| themes       |         | An object of multiple themes, with each key denoting a theme name with the colors set as the value. |

```js
const themeObj = {
  extend: true, // false by default
  importColors: true, // false by default
  defaultTheme: 'dark-red',
  themes: {
    'dark-red': {
      primary: '#C75A5A',
      secondary: {
        DEFAULT: '#181818',
        100: '#494949',
      },
      border: '#555',
    },
    'light-purple': {
      primary: '#7D50DC',
      secondary: {
        DEFAULT: '#FFFFFF',
        100: '#EBEBEB',
      },
    },
  },
};
```
