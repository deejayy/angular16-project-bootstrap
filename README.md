# Angular 16 Project Bootstrap

This is a starter project you can use to bootstrap your Angular frontend.

The demo module can be removed completely (src/app/feature/demo) without losing any preset functionality. No need to figure out how the things are interconnected to get a clean project.

# Preset features

## Code quality settings

### `.editorconfig`

The default `.editorconfig` extended with HTML specific settings.

### `.eslintrc.json`

A set of really strict boundaries regarding formatting and usage of js/ts features. A lot of things are coming from my earlier projects and similar 'strict' config packages.

### `.prettierrc`

Feel free to rely on autoformatting by prettier. The recommended vscode extensions will make sure it will be in sync with linter rules.

### `tsconfig.json`

Based on the strictest TypeScript configurations.

### `stylelint.json`

Best working rules inherited from earlier versions of this project.

### Unit testing with `jest`

Some example unit tests included, jest set up, but currently only works with `npx jest` command (`npm run test`).

### Lint staged

A process available to set up in git commit hook. It considers *.ts files (linting, testing) and *.scss files (stylelint).

By issuing `npm install` in this repo will set the hooks directory to `./git-hooks` which has the commit hook set already.

## Static files content

`index.html` contains some shiny things, like noscript fallback, color-scheme aware loading progress indicator shown on slow networks (with fade-in effect), adjusted viewport, favicons you may want to replace.

`manifest.json` with some basic properties.

## Theme setup

### Material components and palette

Primary and accent palette predefined, base color is coming from scss variables. Check `$theme-color` and `$alt-color` in `app-theme.scss`. Variables are redundant intentionally: `$theme-hue` is actually used in the palette, but `$theme-color` is defined to have a preview in VSCode (it can't calculate scss values yet). Same applies for `$theme-saturation` and similarly to `$alt-*` variables.

In short: `$(theme|alt)-color` is for preview in VSCode, `$(theme|alt)-hue` and `$(theme|alt)-saturation` are used in palette. Make sure you keep them in sync.

### Fonts and icons

Roboto is used, current woff2 files are served from /assets/fonts (in case somebody filters out google domains or blocks cdn behaviour), but only latin and latin-extended character sets. Less-used ones, like greek, cyrillic, vietnamese, etc. are still referenced from Google font CDN.

Material icons snapshot is also served from /assets/fonts folder (outlined version).

To sum it up: your app should work and look fine in a restricted network as well.

### Dark mode support

Present, automatic with media-query. Only drawback is that Material needs a complete duplication of the whole theme in the compiled css bundle, so it doubles the size. This may need revision in the future.

### Reset.css

This is provided by `modern-css-reset` package.

Other than that, custom scrollbars are styled and the ugly yellow-colored autofill is mitigated with a CSS hack.

### Mixins

Two mixins in place: `mq` which is a short-hand for media query (with meaningful device name maps, check the mixins file) and `smart-scale` function to size elements proportionally with designated screen size.

```scss
    @include mq(tablet) {
      flex-direction: column-reverse;
      align-items: center;
    }
```

This will scale the padding between 30px and 100px in a range from 320px to 1440px wide screen (this range is the default).

```scss
.class {
  padding-top: smart-scale(30, 100);
  padding-top: smart-scale(30, 100, 320, 1440);
}
```

Combined together: above tablet size, it will be scaled between 50 and 100, below tablet size: 30 and 50.

```scss
.class {
  padding-top: smart-scale(50, 100, map_get($breakpoints, tablet), 1440);

  @include mq(tablet) {
    padding-top: smart-scale(30, 50, 320, map_get($breakpoints, tablet));
  }
}
```

## State management

Preinstalled and setup state management packages with dev tools. `immer` is also installed for simplify state management with deeper objects.

Additional `produceOn` helper added in `@shared` folder to be able to build reducers with `immer`.

## Build configuration in angular.json

- separate vendor chunk
- separate material theme css computed in a single file (since rarely changing)
- global styles in another file
- manifest, favicon, assets as usual

## Module path aliases

Defined 3 simple aliases for the following directories (both in tsconfig and jest config):

- `src/environments/` shorthand: `@env/`
- `src/app/shared/` shorthand: `@shared/`
- `src/app/feature/` shorthand: `@feature/`

## Recommended VSCode extensions

(all listed in recommendations under `.vscode/extensions.json`)

- Angular Language Service
- Editorconfig for VS Code
- Prettier - Code formatter
- ESLint
- Prettier ESLint
- SCSS IntelliSense
- Stylelint

# Custom packages usually needed

## Api caller

SPAs often deal with API calls with JSON payloads back and forth. `@deejayy/api-caller` library is to ease the handling of these kind of tasks and add a consistent backend communication approach.

You can choose from quick and dirty (fetch from a random API endpoint and deal with the reponse, no error handling, disposable result) to fully managed (api catalog, global error handling, central config, etc.).

It supports token based authentication, json communication, binary up/download.

Refer to [@deejayy/api-caller](https://www.npmjs.com/package/@deejayy/api-caller).

Example (quick + dirty approach):

```ts
this.apiCallerService
  .callApi<DataModel[]>({ api: 'https://endpoint-url/api/v1/', path: 'path/to/call' })
  .data$.pipe(
    filter((v: DataModel[]) => v?.length > 0),
    take(1),
  ).subscribe(
    (v: DataModel[]) => console.log(v[0]),
  );
```

## Reactive config

Some application-specific settings need to be bundled with the app together. The old way was to put these settings (e.g. api endpoint url, feature flags, etc) into the `environment.ts` file and import whenever required. Drawback is, the settings are compiled into the application bundle statically, "hardcoded".

Reactive config aims to elevate the configuration handling to a new level: load the config when the application loads. It either can be a config.json in the assets folder or even an API endpoint somewhere on the internet: it will be loaded before the app starts.

You can load, reload, get and set whatever properties you want to keep in the configuration.

Check [@deejayy/reactive-config](https://www.npmjs.com/package/) for more info.

## Runtime localizer

This bootstrap application is set up for localization, translation files already put in place (with some placeholder tokens), necessary packages installed. The default behaviour of Angular Localization package is to generate as many bundles of the app as languages you want to cover, but I don't see it as the ideal approach. With runtime localizer you can have your translations in a simple JSON file and load it from either /assets/messages/ or from any API endpoint.

Works with templates and TS code as well.

See [@deejayy/runtime-localizer](https://www.npmjs.com/package/@deejayy/runtime-localizer) for details.

# Demo page

Clone this repo & ng serve: there is a demo page with all the preset features.
