import './featuredBanner.css';
import { CoolCanvasBanner } from '../CoolCanvasBanner/CoolCanvasBanner';

export default function FeaturedBanner() {
  // inner functionalities of CoolCanvasBanner depends on the id `featuredBanner`
  return (
    <section id="featuredBanner">
      <CoolCanvasBanner client:load/>
      <h1>
        Fabric.js is a powerful and simple Javascript HTML5 canvas library
      </h1>
      <p>
        Fabric provides interactive object model on top of canvas element Fabric
        also provide serialization and has SVG-to-canvas (and canvas-to-SVG)
        parser
      </p>
    </section>
  );
}
