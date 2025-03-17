import AppRoutes from 'components/app-routes/app-routes';
import { NavItem } from 'components/navigation/nav.types';
import TopNav from 'components/navigation/top-nav/top-nav';
import SkipLink from 'components/skip-link/SkipLink';
import { useKeyboardNavigation } from 'hooks/useKeyboardNavigation';
import { usePageTitle } from 'hooks/usePageTitle';
import { useRef } from 'react';
import { useCriteria } from 'shared/contexts/criteria-context';
import { ReactComponent as BookmarkIconOutlined } from '../../assets/svgs/bookmark-outlined.svg';

const MainLayout: React.FC = () => {
  const { savedCriteria } = useCriteria();
  const savedCriteriaCount = savedCriteria.length;
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const isKeyboardNavigation = useKeyboardNavigation();

  const badgeString = savedCriteriaCount
    ? savedCriteriaCount > 99
      ? '99+'
      : `${savedCriteriaCount}`
    : '';

  const navItems: NavItem[] = [
    { label: 'Web Criteria', href: '/web-criteria' },
    { label: 'Native Criteria', href: '/native-criteria' },
    { label: 'How to test', href: '/how-to-test' },
    { label: 'About us', href: '/about' },
    {
      label: 'My criteria',
      href: '/my-criteria',
      icon: <BookmarkIconOutlined />,
      withBadge: badgeString,
      ariaLabel: badgeString
        ? `My Criteria, ${badgeString} criteria has been saved`
        : '',
    },
  ];

  usePageTitle();

  return (
    <div className="MagentaA11y">
      <SkipLink
        mainContentRef={mainContentRef}
        isKeyboardNavigation={isKeyboardNavigation}
      />
      <header className="MagentaA11y-header">
        <TopNav navItems={navItems} />
      </header>
      <div className="MagentaA11y--content" ref={mainContentRef} tabIndex={-1}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default MainLayout;
