import { NavigationLink } from './Navigation.d';
import NavigationItem from './NavigationItem';
import styles from './styles.module.css';

export default function Navigation() {
  const links: NavigationLink[] = [
    {
      label: 'Featured',
      href: '/',
    },
    {
      label: 'KPI',
      href: '/kpi',
    },
    {
      label: 'Layouts',
      href: '/layouts',
    },
    {
      label: 'Storyboards',
      href: '/storyboards',
    },
  ];
  return (
    <nav className={styles.navigation}>
      <ul>
        {links.map((link: NavigationLink) => {
          return (
            <NavigationItem
              key={link.label}
              label={link.label}
              href={link.href}
            />
          );
        })}
        <li></li>
      </ul>
    </nav>
  );
}
