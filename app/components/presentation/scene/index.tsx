import './styles.css';

interface Props {
  children: React.ReactNode;
}
export default function Scene({ children }: Props) {
  return (
    <section className="scene">
      <div className='scene__wrapper'>
        <div className='scene__content'>
          {children}
        </div>
      </div>
    </section>
  );
}
