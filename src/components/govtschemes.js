import React, {Component} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import Navbar from './Navbar'


class govtschemes extends Component{
    constructor(props){
        super(props);
        this.state={
        }
      
    
    }


    render(){
        return( 
            
    <React.Fragment>
        
                <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Title</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Info</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Detail Info</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputState">District</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                </form>

        </React.Fragment>
        );
}
}
export default govtschemes