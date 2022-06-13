export const hourlist   = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
export default function ReportTable(props) {
    if (props.counter == 0){
        return
    }
    return (
      <table className="w-1/2 mx-auto my-4">
        <thead>
          <th className="border border-blue-600">Location</th>
          {
            hourlist.map(hour =>{
                return(
                    <th className="border border-blue-600">{hour}</th>
                );

            })
          }
          <th className="border border-blue-600">Totals</th>
        </thead>
            <tbody>
            {
                props.row.map(row => {
                    return(
                        <tr>
                            <td className="border border-blue-600">{row.location}</td>
                            {
                            row.randlist.map(rand =>{
                                return(
                                    <td className="border border-blue-600">{rand}</td>
                                );
                            })
                            }
                        </tr>

                    );
                })
               
            }
            </tbody>
            {/* <tfoot>
                <td>
                    {
                        hourlist.map((cell=>{
                            return(
                                <td>{cell*props.row.length}</td>
                            );
                        }))
                    }
                </td>
                <td>
                    {
                        hourlist.reduce((total,curr)=> total +=curr,0) * props.row.length
                    }
                </td>
            </tfoot> */}
            
      </table>
      //   <h1> try 01</h1>
    );
  }