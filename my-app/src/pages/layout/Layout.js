import {Link, Outlet} from "react-router-dom";


function Layout(){

    return<>
      
           <nav>
            <Link to='/'>All</Link>
            <Link to='/images'>Images</Link>
            <Link to='/videos'>Videos</Link>
          </nav>

          <div className="content">
                <Outlet />
            </div>

            </>
}

export default Layout