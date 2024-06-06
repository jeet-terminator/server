import { useEffect } from 'react';

export default function Home(){

  useEffect(() => {

    Promise.all([
      import("@lithium-framework/core-dom"),
      import("@microsoft/fast-foundation"),
      import('@microsoft/fast-components'),
      import('url-pattern'),
      import('../router'),
      import('./index.css'),
    ])
    .then(([{ html , render } , { DesignSystem } , { allComponents }]) => {

      DesignSystem.getOrCreate().register( allComponents );
      render( html`<main-application></main-application>` , document.body );

    })

  }, []);
  
  return null;

}
