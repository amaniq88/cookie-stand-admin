import { useState } from "react";

function Main() {
  function handleSubmit(e) {
    e.preventDefault()
    const {location, minCustomers, maxCusomers , avgCookies} = e.target.elements
    const test = {location: L1.value, minCustomers: L2.value, maxCusomers:L3.value, avgCookies:L4.value   }
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(test));
    }
}

  function Dtathandler() {
    const stringifiedPerson = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    const personAsObjectAgain = JSON.parse(stringifiedPerson);
    return personAsObjectAgain
  }


  var test2 = Dtathandler()

  return (
    <>
        <form className="flex w-1/2 pt-10 mx-auto bg-lfgreen relative mx-auto my-8  h-1/2 flex-col space-y-4 items-center " onSubmit={handleSubmit}>
            <label className="text-3xl ">Create Cookie Stand</label>
            <label className="flex px-2 py-3 w-96 ">Location
              <input type={"text"}  id="L1"/>
            </label>
            <dev class="flex space-x-4 ...">
                <label className="flex px-2 py-5 ">Minimum Customers per Hour
                  <input className="flex px-0 py-5 "  type={"text"} id="L2" />
                </label>
                <label className="flex px-5 py-5">Maximum Customers per Hour
                  <input type={"text"}  id="L3"/>
                </label>
                <label className="flex px-8 py-5 "  >Average Cookies per Sale
                    <input type={"text"} id="L4"/>
                </label>
            </dev>
            <input  className="border-4 border-indigo-500/100 ..." type="submit" value="Create" />


            {/* <button className="border-4 border-indigo-500/100 ..." onclick={this.getValueInput} type="button"> Create</button> */}
        </form>
        <h3>Report Table Coming Soon ...</h3>
        <pre>
          {JSON.stringify(test2, null, 2)}
        </pre>
    </>
  )
}


export default Main