import './styles.css';
interface Props {
  display?: 'featured';
  children: React.ReactNode;
}
export default function Card({ children, display }: Props) {
  return (
    <section className={'card ' + display}>
      {children}
    </section>
  );
}
