import React ,{useState , useEffect} from 'react'
import { ab1 ,ab2 } from './ApiStore/ApiStore';

function DataFetch() {

    const [data, setData] = useState([]);

    const fun = async () => {
      const data = await ab1();
      setData(data);
    
    };

    const [user ,setUser] =useState([]);

    const fun1 = async () => {
        const data1 = await ab2();
        setUser(data1);
      
      };
    

    useEffect(() => {
      fun();
      fun1();
    }, []);


  return (

       <div className='container-xl container-lg container-md container-sm container-xs mt-5'>

<table className="table table table-striped table-hover  table-bordered">
    <thead className="table-danger">
        <tr>
            <th className="text-center" scope="col">Id</th>
            <th className="text-center" scope="col">Title</th>
            <th className="text-center" scope="col">Completed</th>
        </tr>
    </thead>
    {user.map((comm1) => (
    <tbody>
        <tr>
            <td className="text-center">{comm1.id}</td>
            <td className="text-center">{comm1.title}</td>
            <td className="text-center">{comm1.userId}</td>
        </tr>
    </tbody>
     ))}
</table>







<div className="container-xl container-lg container-md container-sm container-xs mt-5">
      {data.map((comm) => (
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <div
              class="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
              id="navbarSupportedContent"
            >
              <ul class="order-list navbar-nav me-auto mb-2 mt-3 ms-5 mb-lg-0">
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.id}.</a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.title}</a>
                </li>
                <li className="m-3 nav-item">
                  <a class="nav-link">
                    <img
                      src={comm.image}
                      className="img-fluid rounded"
                      height="350px"
                      width="350px"
                      alt=""
                    />
                  </a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.description}</a>
                </li>
                <li className="m-3 nav-item fs-5 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.category}</a>
                </li>
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.price}</a>
                </li>
                <li className="m-3 nav-item fs-4 fw-semibold font-monospace text-capitalize">
                  <a class="li nav-link">{comm.rating.rate}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </div>



    </div>
  )
}

export default DataFetch

