import React, { Component } from 'react';

class LastUserInDB extends Component{
    constructor (props) {
        super(props);
        this.state = {
            totalUsers: false,
            nameLastUser: false,
            pathImageLastUser: false
        }
    }

    componentDidMount(){
        //fetch("http://localhost:3004/users/api/all_users")
        fetch("https://mameli.herokuapp.com/users/api/all_users")
            .then (response => response.json())
            .then (data => {
                this.setState({
                    totalUsers: data.count,
                    nameLastUser: data.users[Number(data.users.length)-1].user_name+" "+data.users[Number(data.users.length)-1].lastName_user,
                    pathImageLastUser: data.users[Number(data.users.length)-1].user_image
                })
            }) 
            .catch (error => console.log(error)) 
    }

    render () {
        let pathImage;

        if(this.state.pathImageLastUser == false) {
            pathImage = <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="" alt="image dummy" />
        }
        else {
            pathImage = <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.pathImageLastUser} alt="image dummy" />
        }

        return ( 
             <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Last user in Data Base: {this.state.nameLastUser}</h6>
                    </div>
                    <div class="card-body">
                        {pathImage}
                    </div>
                </div>
            </div>
        );
    } 
}

export default LastUserInDB;