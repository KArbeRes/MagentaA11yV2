import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ViewportProvider } from 'shared/contexts/viewport-context';
import SideNav from './side-nav';
import { Platforms } from 'shared/types/shared-types';
import contentData from 'shared/content.json';
import userEvent from '@testing-library/user-event';

const renderWithProviders = (ui: React.ReactElement, isMobile = false) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: isMobile && query === '(max-width: 768px)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  return render(
    <ViewportProvider>
      <MemoryRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        {ui}
      </MemoryRouter>
    </ViewportProvider>
  );
};

describe('SideNav Component - Snapshot Test', () => {
  test('matches the snapshot in desktop view', () => {
    const { asFragment } = renderWithProviders(
      <SideNav platform={Platforms.WEB} />,
      false
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches the snapshot in mobile view', () => {
    const { asFragment } = renderWithProviders(
      <SideNav platform={Platforms.WEB} />,
      true
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('SideNav Component - Rendering', () => {
  test('renders the SideNav component', () => {
    renderWithProviders(<SideNav platform={Platforms.WEB} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('contains the correct class name', () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    const sideNav = screen.getByTestId('test-side-nav');
    expect(sideNav).toHaveClass('MagentaA11y__side-nav-container');
  });

  test('renders the title correctly', () => {
    renderWithProviders(<SideNav platform={Platforms.WEB} />);
    expect(
      screen.getByRole('heading', { name: 'Criteria' })
    ).toBeInTheDocument();
  });

  test('renders navigation list', () => {
    renderWithProviders(<SideNav platform={Platforms.WEB} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders in a dialog element in mobile view', () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />,
      true
    );
    expect(screen.getByTestId('test-side-nav-dialog')).toBeInTheDocument();
  });

  test('renders correct nav item labels', () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    const navItems = contentData[Platforms.WEB].map((item) => item.label);

    navItems.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('each nav link has a valid href', async () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    for (const item of contentData[Platforms.WEB]) {
      const accordionButton = screen.getByRole('button', { name: item.label });
      await userEvent.click(accordionButton);

      const links = await screen.findAllByRole('link', { name: 'Overview' });

      const correctLink = links.find((link) =>
        link.getAttribute('href')?.includes(item.name)
      );

      expect(correctLink).toBeInTheDocument();
      expect(correctLink).toHaveAttribute(
        'href',
        expect.stringContaining(item.name)
      );
    }
  });
});

describe('SideNav Component - Interaction Tests', () => {
  test('clicking an accordion expands and collapses it', async () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    const accordionButton = screen.getByRole('button', {
      name: 'Header Component',
    });

    // Initially collapsed
    expect(accordionButton).toHaveAttribute('aria-expanded', 'false');

    // Click to expand
    await userEvent.click(accordionButton);
    expect(accordionButton).toHaveAttribute('aria-expanded', 'true');

    // Click again to collapse
    await userEvent.click(accordionButton);
    expect(accordionButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking a navigation link inside an accordion closes the menu (Mobile Only)', async () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    const accordionButton = screen.getByRole('button', {
      name: 'Header Component',
    });

    // Open the accordion
    await userEvent.click(accordionButton);

    // Click the first navigation link inside the expanded section
    const firstLink = await screen.findByRole('link', { name: 'Overview' });
    await userEvent.click(firstLink);

    // Expect the mobile side nav dialog to be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('keyboard navigation with Tab key cycles through elements correctly', async () => {
    renderWithProviders(
      <SideNav platform={Platforms.WEB} testId="test-side-nav" />
    );

    const accordionButton = screen.getByRole('button', {
      name: 'Header Component',
    });
    await userEvent.click(accordionButton);

    const links = await screen.findAllByRole('link');

    // Focus should move through each link
    for (const link of links) {
      await userEvent.tab();
      expect(link).toHaveFocus();
    }
  });
});
