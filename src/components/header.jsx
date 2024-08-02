
const Header = () => {
    return(
        <div className="flex justify-evenly py-6">
            <img className="w-14 h-7" src="/image/copy.png"/>
            <div className="flex gap-5">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <input className="border border-r-2 " type="text"/>

        </div>
    )
}
export default Header;