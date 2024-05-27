import Navigation from '@ux/navigation';
import './styles.css';

interface Props {
  title: string;
  subtitle: string;
}
export default function Header({ title, subtitle }: Props) {
  return (
    <section className="header">
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <Navigation />
    </section>
  );
}
