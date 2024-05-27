'use client';
import { NavigationLink } from './Navigation.d';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
export default function NavigationItem({ href, label }: NavigationLink) {
  const pathName = usePathname();
  const linkClass = styles.link;
  const className = pathName === href ? `${linkClass} ${styles.active}` : linkClass;
  return (
    <a href={href} title={label} className={className}>
      {label}
    </a>
  );
}
