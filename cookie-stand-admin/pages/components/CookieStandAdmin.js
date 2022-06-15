import Header from "./Header";
import Head from "./Head";
import Main from "./Main";
import Footer from "./Footer";
import ReportTable from "./ReportTable";

function CookieStandAdmin(props) {  

    return (
        <>
            <Head/>
            <Header/>
            <Main formHandle={props.formHandle} report={props.report}  reporthead={props.reporthead}/>
            <ReportTable addlocation={props.addlocation}  row={props.row} counter={props.counter}/>
            <Footer counter={props.counter}/>
        </>

      
    )
  }
  
  
  export default CookieStandAdmin