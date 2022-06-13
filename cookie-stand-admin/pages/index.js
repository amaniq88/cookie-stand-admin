import Header from "./components/Header"
import Head from "./components/Head"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ReportTable from "./components/ReportTable"
import { useState } from "react"




function Home(){
    const [report,setReport] = useState({}); 
    const [reporthead,setReporthead] = useState(""); 
    const [counter,setcounter]=useState(0);
    const [addlocation,setaddlocation]=useState("");
    const [randlist,setrandlist]=useState([])
    const [row,setrow]=useState([])

    function formHandle(event) {
        event.preventDefault();
        var listtest = [];
                var total = 0;
                for (var i = 0; i < 14; i++) {
                    let rr = Math.floor(Math.random() * (event.target.L3.value - event.target.L2.value + 1) + event.target.L2.value);
                    listtest.push(rr);
                    total += rr;
                  } 
                listtest.push(total)
                setrandlist(listtest)
        let addedrow ={
            location:event.target.L1.value,
            randlist:listtest
        };
        setrow([...row,addedrow]);

        const CreateReport= {
        Location: event.target.L1?.value,
        minCustomers: event.target.L2?.value,
        maxCustomers: event.target.L3?.value,
        AvgCookies: event.target.L4?.value,
        };
        if  (event.target.L1.value == ""){
            if (event.target.L2.value == ""){
                if (event.target.L3.value == ""){
                    if (event.target.L4.value== ""){
                        setReporthead("No Cookie Stands Available")
                        setReport()

                    }
                    
                }
            }
        }   
            else{
                setReport(CreateReport)
                setcounter(counter + 1);
                setReporthead("")
                setaddlocation(event.target.L1.value)
                

            }
                
   }
    return (
        <>
            <Head/>
            <Header/>
            <Main formHandle={formHandle} report={report}  reporthead={reporthead}/>
            <ReportTable addlocation={addlocation}  row={row} counter={counter}/>
            <Footer counter={counter}/>
        </>
    )
}
export default Home
