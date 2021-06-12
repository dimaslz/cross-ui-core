# Cross UI components

<div style="text-align: center; margin: 50px 0;">

<img src="./playground/src/assets/images/logo.svg" />

</div>

<div style="text-align: center; margin: 30px 0;">
	<img src="./playground/src/assets/images/cross-ui-logo-react.svg" height="40" style="margin: 0 10px" />
	<img src="./playground/src/assets/images/cross-ui-logo-vue.svg" height="40" style="margin: 0 10px"/>
	<img src="./playground/src/assets/images/cross-ui-logo-angular.svg" height="40" style="margin: 0 10px"/>
</div>

Cross UI is a agnostic components library based in [StencilJS](https://github.com/ionic-team/stencil) framework. At the moment is not ready to accept collaborations or use in production. I am working on it just for fun, trying to learn something interesting, have a personal library for my projects and, if I get to have enough stable components, contribute with the OpenSource community.

In advance, thank you for your interest about it, in fact, if you want to give me some tips, recommendation or just some suggest me  what you would like to have in a components library, fill free to open an issue [https://github.com/dimaslz/cross-ui-core/issues](https://github.com/dimaslz/cross-ui-core/issues).

The intention is support at least the common frameworks like React, Vue and Angular.

The UI of this project, at the moment, is based on [TailwindCSS](https://tailwindcss.com)

## Do you want to play with?
Great, if this repo is helpful in your learning, feel free to clone in your machine or fork. But, if you want better details about how Stencil framework works, follow this repo [https://github.com/ionic-team/stencil-component-starter](https://github.com/ionic-team/stencil-component-starter) and the official documentation [StencilJS](https://github.com/ionic-team/stencil).

### Installation

npm users: `npm install`

yarn users: `yarn install`

Once you have installed, start running playground:

npm users: `npm run start:playground`

yarn users: `yarn start:playground`.

This will start rendering the playground package and open in your browser in http://localhost:4001 if is not used. You should see a website like this: https://cross-ui.dimaslz.dev


Every change that you do in `/packages/core` will affect to the UI but, keep in mind that usually, changes could be a bit slow, the playground will not update automatically and you need to refresh your site manually. I am pending to improve it if is possible, but is not a priority now.

### Project distribution
I am looking for the best folders organization. At the moment, I will follow `/projects/playground` for the landing to have a demo of components.

And `/packages/core`, a stencil project just to have the Stencil component to create the bundle to distribute to npm.

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```
