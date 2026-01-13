const ModalWrapper2 = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="m-16 bg-white rounded-xl shadow-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper2;