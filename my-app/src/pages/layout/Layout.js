import { Outlet, Link } from "react-router-dom";


function Layout(){

    return(
        <div>
           <nav>
            <Link to='/'>All</Link>
            <Link to='/images'>Images</Link>
            <Link to='/videos'>Videos</Link>
          </nav>

          <div className="content">
                <Outlet />
            </div>

        </div>

        
    )
}

export default Layout