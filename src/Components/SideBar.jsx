function SideBar() {
  return (
    
    <ul className=" my-1 menu pb-180 bg-base-200  w-56 [&_li>*]:rounded-none p-0">
    <div className=" text-xl">
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Categories</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Recipies</a>
      </li>
      <li>
        <a>Sign Out</a>
      </li>
      </div>
    </ul>

  );
}
export default SideBar;
