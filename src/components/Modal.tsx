import ReactDOM from 'react-dom';

function Modal({ children }: { children: React.ReactNode }) {
  const modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      {children}
    </div>,
    modalRoot,
  );
}

export { Modal };
