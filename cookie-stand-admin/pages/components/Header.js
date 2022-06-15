function Header(props){
    return(
        <header className="flex justify-between  py-4 items-center bg-lgreen">
            <h1 className="text-4xl mx-1">Cookie Stand Admin</h1>
            <h2 className="text-2xl border-2 border-white-600"></h2>
            <form onSubmit={props.signOutHandler}>
                <label class="self-center h-12 px-4 py-2 rounded shadow bg-silver  w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline foucus:outline-none">rudy</label>
                {"    "}
                <button type="submit"
                class="self-center h-12 px-4 py-2 rounded shadow bg-silver  w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline foucus:outline-none">sign Out</button>
                {"    "}
                <label class="self-center h-12 px-4 py-2 rounded shadow bg-silver  w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline foucus:outline-none">
                Overview</label>
                </form>
           

        </header>
    )
}


export default Header