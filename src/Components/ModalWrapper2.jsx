const ModalWrapper2 = ({ children }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-black bg-white w-full h-350 ">
          <div className="">{children}</div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalWrapper2;
