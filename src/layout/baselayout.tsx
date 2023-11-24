import { Outlet } from "react-router-dom"
import SideBar from "../components/sidebar"


const BaseLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <div>
        <SideBar />
      </div>
      <div className="p-3 w-screen h-screen overflow-scroll md:p-6">
        <Outlet />
      </div> 
    </div>
  )
}

export default BaseLayout