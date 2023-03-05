declare module "*.jpg" {
              const value: string;
              export default value;
            };
declare module "*.png" {
              const value: string;
              export default value;
            };
declare module 'react' {
              export = React;
 }
 declare module 'express' {
  export = express;
}
 declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

            