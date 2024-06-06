// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import Heading from '@theme/Heading';
import 'url-pattern';

import React from "react";

import WebsiteBackground from './ressources/Fond.svg';
import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG } from "@lithium-framework/core-dom/directives";
import { popUpWindow } from '../components';

import { DesignSystem } from "@microsoft/fast-foundation"
import { allComponents } from '@microsoft/fast-components';

DesignSystem.getOrCreate().register( allComponents );

import './index.css';
import '../router';

// import styles from './index.module.css';

export default function Home(){
  // const {siteConfig} = useDocusaurusContext();
  // return (
  //   <Layout
  //     title={`Hello from`}
  //     description="Description will go into a meta tag in <head />">
  //     <main>

  //     </main>
  //   </Layout>
  // );
  // return (<div></div>);
  render( html`<main-application></main-application>` , document.body );
}
