import React, { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SkipLink from './SkipLink';

describe('SkipLink Component', () => {
  test('renders the SkipLink button', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });
    expect(button).toBeInTheDocument();
  });

  test('focuses on the SkipLink button when isKeyboardNavigation is true', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter>
        <SkipLink mainContentRef={mainContentRef} isKeyboardNavigation={true} />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });
    expect(button).toHaveFocus();
  });

  test('focuses on the main content when SkipLink button is clicked', () => {
    const mainContentRef = { current: document.createElement('div') };
    mainContentRef.current.setAttribute('tabindex', '-1');
    document.body.appendChild(mainContentRef.current);

    render(
      <MemoryRouter>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });

    fireEvent.click(button);

    expect(mainContentRef.current).toHaveFocus();

    document.body.removeChild(mainContentRef.current);
  });

  test('does not focus the SkipLink button when isKeyboardNavigation is false', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });

    expect(button).not.toHaveFocus();
  });

  test('assigns the SkipLink button ref correctly', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button).toBeTruthy();
  });

  test('clicking SkipLink does nothing if mainContentRef is null', () => {
    const mainContentRef = { current: null };

    render(
      <MemoryRouter>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /skip to main content/i,
    });

    fireEvent.click(button);

    expect(button).not.toHaveFocus();
  });
});
