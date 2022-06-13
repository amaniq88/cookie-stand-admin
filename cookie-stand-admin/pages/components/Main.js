
function Main(props) {  

  return (
    <>
        <form 
            onSubmit={props.formHandle}
            className="flex w-4/5 pt-10 mx-auto bg-lfgreen relative mx-auto my-8  h-1/2 flex-col space-y-4 items-center " 
        >
        <label className="text-3xl ">Create Cookie Stand</label>
        <div className="flex items-center justify-center w-full my-2">
          <label className="mx-2 my-2 ">Location</label>
          <input 
          type={"text"}  
          id="L1"
          className="w-4/5 h-full mx-2 my-2 bg-gray-100"
          />
        </div>
       
        <dev className="grid grid-cols-4 grid-rows-2 gap-1">
            <label className="mx-2 mt-2">Minimum Customers per Hour</label>
            <input className="mx-2 mb-2 h-fit"  type={"text"} id="L2" />
            <label className="mx-2 mt-2">Maximum Customers per Hour </label>
            <input className="mx-2 mb-2 h-fit" type={"text"}  id="L3"/>
            <label className="mx-2 mt-2"  >Average Cookies per Sale</label>
            <input  className="mx-2 mb-2 h-fit" type={"text"} id="L4"/>
            <button 
            type="submit"
            className="self-center h-12 px-4 py-2 rounded shadow bg-emerald-600 w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline foucus:outline-none" 
        >
            {" "}
            Create{" "}
        </button>
        </dev>
        
        </form>
        <h3 className="w-1/2 mx-auto my-4">
        <h2 className="text-3xl">{props.reporthead}</h2>
        </h3>
        <div  className="w-1/2 mx-auto my-4">
          {/* <h2>{JSON.stringify(props.report)}</h2> */}
        </div>
  
    </>
  )
}


export default Main