import "./App.css";
import useSWR from 'swr';

const fetcher  = (...args) => fetch(...args).then(res => res.json());

const App = () => {


  const url = "https://data.police.uk/api/crimes-street-dates";

  const {data,error} = useSWR(url,fetcher);

  console.log(data[0].date,error);

  if(error){
    return <div>Error</div>; 
  }

  if(!data){
    return <center>Loading...</center>
  }

  return ( 
    <div className="App">

      <pre>{JSON.stringify(data,null,2)}</pre>


      
    </div>
   );
}
 
export default App;