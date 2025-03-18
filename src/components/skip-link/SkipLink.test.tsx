import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import SkipLink from './SkipLink';

describe('SkipLink Component', () => {
  test('renders the SkipLink button', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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

  test('does not render an aria-live message for root path', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('live-region')).toBeEmptyDOMElement();
  });

  test('renders an aria-live message for a non-root path', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/components/button']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('live-region')).toHaveTextContent(
      'components "button page"'
    );
  });

  const TestWrapper = ({
    mainContentRef,
  }: {
    mainContentRef: React.RefObject<HTMLDivElement>;
  }) => {
    const navigate = useNavigate();

    return (
      <>
        <button onClick={() => navigate('/patterns/forms')}>Go to Forms</button>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </>
    );
  };

  test('updates aria-live message when navigating to a new path', async () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/components/button']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Routes>
          <Route
            path="/*"
            element={<TestWrapper mainContentRef={mainContentRef} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('live-region')).toHaveTextContent(
      'components "button page"'
    );

    screen.getByRole('button', { name: /go to forms/i }).click();

    await waitFor(() => {
      expect(screen.getByTestId('live-region')).toHaveTextContent(
        'patterns "forms page"'
      );
    });
  });

  test('formats aria-live message correctly for multi-segment paths', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/guidelines/typography/overview']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('live-region')).toHaveTextContent(
      'guidelines "typography overview page"'
    );
  });

  test('formats hyphenated paths correctly in aria-live message', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/components/skip-link']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </MemoryRouter>
    );

    expect(screen.getByTestId('live-region')).toHaveTextContent(
      'components "skip link page"'
    );
  });

  test('ensures aria-live region has correct attributes', () => {
    const mainContentRef = createRef<HTMLDivElement>();

    render(
      <MemoryRouter
        initialEntries={['/components/button']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <SkipLink
          mainContentRef={mainContentRef}
          isKeyboardNavigation={false}
          liveRegionTestId="live-region"
        />
      </MemoryRouter>
    );

    const liveRegion = screen.getByTestId('live-region');

    expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
  });
});
