import { NavigateFunction } from 'react-router-dom';

/**
 * A map of callable functions that can be referenced inside Markdown files rendered as HTML.
 *
 * Markdown content sometimes includes interactive elements like <button data-fn="showAlert">.
 * Since React does not allow inline event handlers like `onclick="..."`, this utility provides
 * a safe way to bind predefined JavaScript functions to those buttons using the `data-fn` attribute.
 *
 * Each key in this map corresponds to a function name that can be used in Markdown:
 *
 * Example Markdown:
 *   <button data-fn="showAlert">Click Me</button>
 *
 * The render logic (usually inside the `ReactMarkdown` component's `components` prop) should
 * look for the `data-fn` attribute and bind the appropriate function from this map to the
 * element's `onClick` handler.
 *
 * ⚠️ Important: All functions included here must be safe to expose and should not depend
 * on runtime context that isn't available when Markdown is rendered.
 */
export const getMarkdownFunctionMap = (
  navigate: NavigateFunction
): Record<string, (event: React.MouseEvent<Element>) => void> => ({
  showAlert: () => alert('This works with a keyboard and a mouse!'),
  showAlertWhenDisabled: () =>
    alert('This disabled button is still actionable for mouse and screen readers users!'),
  showMouseAlert: () => alert('This only works with a mouse'),
  goToHome: () => navigate('/home'),

  toggleAccordionState: (event) => {
    const targetButton = event.currentTarget as HTMLButtonElement;
    const expanded = targetButton.getAttribute('aria-expanded') === 'true';
    targetButton.setAttribute('aria-expanded', String(!expanded));
  },

  scrollToTopOnly: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  scrollToHref: () => {
    const dest = document.getElementById('destination');
    if (dest) {
      dest.focus();
    }
  },

  scrollAndFocusMain: () => {
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
