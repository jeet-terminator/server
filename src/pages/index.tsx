import 'url-pattern';
import { html , render } from "@lithium-framework/core-dom";

import { DesignSystem } from "@microsoft/fast-foundation"
import { allComponents } from '@microsoft/fast-components';

DesignSystem.getOrCreate().register( allComponents );

import './index.css';
import '../router';

export default function Home(){
  render( html`<main-application></main-application>` , document.body );
}
