<br>
<div align="center"> 
<a href="https://symbols.dynamicdevs.io/">
<img src="https://dynamicdevscommon.blob.core.windows.net/engineering/roots-logo-regular.svg" alt="Roots logo" height="60"/>
</a>
</div>

<br>

<p align="center">
<a href="https://symbols.dynamicdevs.io/">roots.dynamicdevs.io</a>
</p>

## About The Project

[Roots][roots] is a web application to centralized information and social network links to make them easy to manage. One link for your digital presence designed and developed by [Dynamic Devs][dynamicdevs].

## Build With

- [Nx][nx]
- [React][react]
- [TypeScript][typescript]
- [EsLint][eslint]
- [Tailwind][tailwind]
- [Symbols][symbols]

## Infrastructure

- [Azure Front Door][azure-frontdoor]
- [Azure Content Delivery Network][azure-cdn]
- [Azure Blob Storage][azure-storage]

## Run The Project 

1. Clone the project

    ```
    git clone git@github.com:dynamicdevs/roots.git
    ```

2. Navigate to path project

    ```
    cd roots
    ```

3. Create .env file and add environment variables.

    ```
    NX_ACCESS_TOKEN=<your-contentful-access-token>
    NX_SPACE_ID=<your-contentful-space-id>
    NX_ENVIRONMENT=<your-contentful-environment>
    ```
4. Install dependencies

    ```
    npm install
    ```

5. Start project

    ```
    npx nx serve website
    ``` 

## Using Relative Paths On Project

It’s recommended to use relative paths for a better project managing. E.g.

Without alias

```
import Icon from '../../elements/atoms/Icon';
```

With alias

```
import Icon from '@app/elements/atoms/Icon';
```

The alias is configured within tsconfig.json `website` app

```
{
  "baseUrl": ".",
  "paths": {
    "@*": ["./src/*"]
  }
}
```

## Contributors

<br>

<a href="https://github.com/dynamicdevs/roots/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dynamicdevs/roots" />
</a>

## Community

Join to the conversation and help the community.

- [Youtube][youtube]
- [Spotity][spotify]
- [Twitch][twitch]

## Contact

Dynamic Devs - business@dynamicdevs.io

<br>

***

<p align="center">
<a href="https://ko-fi.com/D1D6C947W">
<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Kofi button"/>
</a>
</p>

[dynamicdevs]: https://www.dynamicdevs.io/
[nx]: https://nx.dev/
[react]: https://es.reactjs.org/
[typescript]:https://www.typescriptlang.org/
[eslint]:https://eslint.org/
[tailwind]:https://tailwindcss.com/
[symbols]:https://symbols.dynamicdevs.io/
[youtube]: https://www.youtube.com/channel/UCD2cpIbELBfK_-9p8PoCGWg
[spotify]: https://open.spotify.com/show/4fvKHii2mWHkX8mz28klz8?si=d95553238ea04ec4
[twitch]: https://www.twitch.tv/dynamicdevs
[azure-frontdoor]: https://azure.microsoft.com/es-es/services/frontdoor/#overview
[azure-cdn]: https://azure.microsoft.com/es-es/services/cdn/#overview
[azure-storage]: https://azure.microsoft.com/en-us/services/storage/blobs/#overview
[roots]:https://roots.dynamicdevs.io/