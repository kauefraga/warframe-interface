<div align="center">
  <h1><code>Warframe Interface</code></h1>

  <p>
    <strong>🎮 Faster and easy to understand Warframe information 🎮</strong>
  </p>

  <p>
    <img
      alt="GitHub top language"
      src="https://img.shields.io/github/languages/top/kauefraga/warframe-interface.svg"
    />
    <img
      alt="Repository size"
      src="https://img.shields.io/github/repo-size/kauefraga/warframe-interface.svg"
    />
    <a href="https://github.com/kauefraga/warframe-interface/commits/main">
      <img
        alt="GitHub last commit"
        src="https://img.shields.io/github/last-commit/kauefraga/warframe-interface.svg"
      />
    </a>
    <img
      alt="GitHub LICENSE"
      src="https://img.shields.io/github/license/kauefraga/warframe-interface.svg"
    />
  </p>
</div>

> I was searching for something to do and discovered the Warframe Worldstate API,
therefore i decided to give it a try. Chose Node because i know the ecosystem
better (npm) than Python's one. Also, i want to create some static site with [Astro](https://astro.build) and it's the opportunity to.

### Features

- All source code stored in a single project (monorepo).
- Typescript developer experience is something.

## 📦 Packages (pnpm workspace)

- 🚧 [Command Line Interface](packages/cli)
- 🚧 [Site](packages/web)

## 🎲 Prerequisites

To run this project you will need to have [Node](https://nodejs.org/en).
- Node Version Managers: [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm), [asdf](https://asdf-vm.com)...

## ⬇️ How to install and use it

1. Clone the repository and enter in it
2. Install all the dependencies
3. Select some of the packages above and read the documentation

```bash
git clone https://github.com/kauefraga/warframe-interface.git
cd warframe-interface

pnpm i --frozen-lockfile
```
You are welcome to open issues and pull requests!

## 🛠 Technologies

The following tools have been used to build the whole project:

- [Warframe Worldstate](https://docs.warframestat.us) - An API that provides "everything about Warframe".
- [Node](https://nodejs.org/en) - A runtime based on V8 JavaScript.
- [Eslint](https://npm.im/eslint-config-airbnb-typescript) - Code ruler/styler with Airbnb style guide.
- [Typescript](https://typescriptlang.org), [tsx](https://www.npmjs.com/package/tsx) and [tsup](https://www.npmjs.com/package/tsup) - Improve the DX by adding type safety and a blazingly fast execution/build provided by esbuild.

## 📝 License

This project is licensed under the GPL-3.0 License - See the [LICENSE](https://github.com/kauefraga/warframe-interface/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
