const ModalWrapper2 = ({ children }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-220 ">
          <div className="">{children}</div>
          <div className="modal-action"></div>
        </div>
        <form method="dialog" className="modal-backdrop">
          {/* if there is a button, it will close the modal */}
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalWrapper2;
