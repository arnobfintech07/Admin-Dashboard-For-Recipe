function Navbar(){
return(
    <div className="sticky top-0 z-50 navbar bg-base-100 shadow">
  <div className="flex-1 pr-100 text-left">
    <a className="btn btn-ghost text-xl">Admin Dashboard</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
   
  </div>
</div>
)
}
export default Navbar