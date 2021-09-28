import { useState, useEffect } from 'react';

function UsersQuantity(props) {

    const [initialState, setState]= useState({totalUsers:0});
    useEffect(() => {
        //fetch("http://localhost:3004/users/api/all_users")
        fetch("https://mameli.herokuapp.com/users/api/all_users")
            .then(response => response.json())  
            .then(data => {
                setState({totalUsers: data.count})
            })
            .catch(error => console.error(error))
    }, []);
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{initialState.totalUsers}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}
  
export default UsersQuantity;