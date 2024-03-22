import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'FabricJS Docs and Guides',
    plugins: [
      // Generate the documentation.
      starlightTypeDoc({
        entryPoints: ['./node_modules/fabric/fabric.ts'],
        tsconfig: './node_modules/fabric/typedoc.config.json',
      }),
    ],
  }), react()]
});