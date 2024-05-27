'use client';
import { useRouter } from 'next/navigation'
import './styles.css';

interface Props {
  children: React.ReactNode;
  closeUrl: string;
}
export default function Modal({ children, closeUrl }: Props) {
  const router = useRouter()
  function closeModal(): void {
    router.push(closeUrl, { scroll: true })
  }
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={closeModal}></div>
      <div className="modal__window">
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
}
