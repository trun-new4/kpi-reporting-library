import './styles.css';

interface Props {
  children: React.ReactNode;
  border?: boolean;
}
export default function Pill({ children, border }: Props) {
  const className = border ? 'pill pill--border' : 'pill';
  return (
    <span className={className}>{children}</span>
  );
}
