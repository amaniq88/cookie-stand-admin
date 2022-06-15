
function LoginForm(props) {  

    return (
      <>
          <form 
              onSubmit={props.loginHandler}
              className="flex w-1/4 pt-10 mx-auto bg-lfgreen relative mx-auto my-8  h-1/3 flex-col space-y-4 items-center " 
                // className="flex w-1/2 bg-lfgreen shadow-md rounded items-center"
          >
         
            <dev className="mb-4 items-center">
              <label className="block text-gray-700 text-sm font-bold ">Username</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3"  type={"text"} id="L2" />
            </dev>
            <dev className="mb-4 items-center">
              <label className="block text-gray-700 text-sm font-bold mb-2 items-center">password</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3" type={"text"}  id="L3"/>
              <button 
              type="submit"
              className="self-center h-12 px-4 py-2 rounded shadow bg-emerald-600 w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline foucus:outline-none" 
          >
              {" "}
              SIGHN IN{" "}
          </button>
            </dev>
          
          </form>
        
      </>
    )
  }
  
  
  export default LoginForm