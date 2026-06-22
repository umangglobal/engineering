interface Window {
  gtag: (...args: unknown[]) => void
  
  grecaptcha: {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    ready: (callback: () => void) => void;
  };
}

declare module "*.svg" {
  import type { SVGProps } from "react";
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'swiper/css';
declare module 'swiper/css/*';