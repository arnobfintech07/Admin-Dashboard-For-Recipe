const Card2 = ({cardValue}) => {
//   const cardValue = 500;
  return (
    <>
      <div className="bg-red-400 rounded-3xl p-6 flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <span className="text-xl lg:2xl font-bold">Total Receipes</span>
          <span className="p-2">
            <i>this is an icon</i>
          </span>
        </div>
        <div>
          <span className="text-xl lg:text-6xl">{cardValue}</span>
        </div>
      </div>
    </>
  );
};

export default Card2;
