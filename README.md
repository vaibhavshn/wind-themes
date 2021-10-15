# 🎨 wind-themes

A lightweight (~5kB) [tailwindcss](https://tailwindcss.com) plugin that handles multiple themes. 🎨

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
