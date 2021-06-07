import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-introduction',
  styleUrl: 'app-introduction.scss',
  shadow: true,
})
export class AppIntroduction {
  render() {
    return (
      <div class="Introduction">
        <h1 class="Introduction__title text-4xl text-left mb-4 border-b">
          Cross UI components <span class="text-2xl">welcome</span>
        </h1>

        <div class="Introduction__section flex font-sans text-sm">
          Welcome to CrossUI components. Let's try to build common components in a core library with support to frameworks as Angular, Vue or React.
        </div>

        <div class="Introduction__section py-4">
          <h2 class="text-2xl mb-2 bg-gray-100 px-2">Motivation</h2>
          <p class="px-4 font-sans text-sm">
            I am a{' '}
            <a href="https://tailwindcss.com" target="_blank" class="text-gray-700 hover:text-gray-600">
              TailwindCSS
            </a>{' '}
            lover, for that, I decided to use as UI this CSS utility library to stylize this library of components.
          </p>

          <p class="px-4 py-2 font-sans text-sm">
            The idea it's to create the same style in multiple frameworks, so, a UI components cross framework. This component are built with StancilJS, so, you can integrate this
            components with any framework or just Javascript, but I would like to give easy integration with Vue, React and Angular, let's give examples. At the same time, I will
            try to give a Figma document with all UI system. I motivated to do it because, when I working in some project, with either Vue, Angular or React, I choose something
            like material ui or bootstrap, but there are nothing based in TailwindCSS, or at least something consistent and with good support, so, for that, instead have to build a
            components in each framework I working, I decided to try to build some core based in web components, then I chose Stencil (to have more information about Stencil,{' '}
            <a href="https://stenciljs.com" target="_blank" class="text-gray-700 hover:text-gray-600">
              click here
            </a>
            .
          </p>
        </div>

        <div class="Introduction__section py-4">
          <h2 class="text-2xl mb-2 bg-gray-100 px-2">Author</h2>
          <ul class="px-4 font-sans text-sm">
            <li>
              twitter{' '}
              <a href="https://twitter.com/dimaslz" class="text-gray-700 hover:text-gray-600">
                dimaslz
              </a>
            </li>
            <li>
              github{' '}
              <a href="https://github.com/dimaslz" class="text-gray-700 hover:text-gray-600">
                github
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
