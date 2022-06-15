import CookieStandAdmin from "./components/CookieStandAdmin"
import { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";




function Home(){
    const [report,setReport] = useState({}); 
    const [reporthead,setReporthead] = useState(""); 
    const [counter,setcounter]=useState(0);
    const [addlocation,setaddlocation]=useState("");
    const [randlist,setrandlist]=useState([])
    const [row,setrow]=useState([])
    const [token,settoken]=useState(null)
    const userdata={
        username : "Admin",
        password : "abcd1234"
    }

    useEffect(()=>{
        if(localStorage.getItem("token") === undefined){
            axios.post("http://127.0.0.1:3000/api/v1/token", userdata).then(res=>{
                localStorage.setItem('userToken',res.data.access)
            })
            settoken(localStorage.getItem("userToken"))
        }
    }, [])

    function loginHandler(event) {
        event.preventDefault();
        settoken("added")
    }

    function signOutHandler(event) {
        settoken(undefined)
    }


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
   if(token == null){
    return(
        <LoginForm  loginHandler={loginHandler}/>
    );
   }
    return (
        <>
            <CookieStandAdmin signOutHandler={signOutHandler} formHandle={formHandle} report={report}  reporthead={reporthead} addlocation={addlocation}  row={row} counter={counter} />
        </>
    )
}
export default Home
