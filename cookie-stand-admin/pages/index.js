import Header from "./components/Header"
import Head from "./components/Head"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"




function Home(){
    const [report,setReport] = useState({}); 

    function formHandle(event) {
        event.preventDefault();
        const CreateReport= {
        Location: event.target.L1?.value,
        minCustomers: event.target.L2?.value,
        maxCustomers: event.target.L3?.value,
        AvgCookies: event.target.L4?.value,
        };
        setReport(CreateReport)
   }
    return (
        <>
            <Head/>
            <Header/>
            <Main formHandle={formHandle} report={report}/>
            <Footer/>
        </>
    )
}
export default Home
