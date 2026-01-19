import React from "react";

const ModalWrapper = ({ children }) => {
  return (
      <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box dark:bg-base-300 bg-white w-full h-350 ">
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

export default ModalWrapper;
