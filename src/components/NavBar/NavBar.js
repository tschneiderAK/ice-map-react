const NavBar = ( props ) => {
    return ( 
        <nav className="navbar">
            <h1> { props.appName } Navigation Placeholder </h1>
            <div className="links">
                <a href="/reports">Reports</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </div>
        </nav>
     );
}
 
export default NavBar;
