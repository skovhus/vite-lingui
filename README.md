# vite-lingui

Example of how [Vite](https://vitejs.dev/) and [LinguiJS](https://lingui.js.org/) can co-exist using [vite-plugin-babel-macros](https://github.com/itsMapleLeaf/vite-plugin-babel-macros).

The performance impact of this approach needs to be investigated, but it seems pretty fast. 🔎

This is an alternative to the solution suggested in https://github.com/capaj/vite-lingui-poc

To test it out:

```sh
yarn # install dependencies
yarn dev # starts the vite dev server (port is listed)
yarn build # production build
```
