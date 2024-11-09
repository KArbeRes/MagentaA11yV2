// src/custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'md-outlined-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { href?: string };

    'md-text-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { href?: string };
  }
}
