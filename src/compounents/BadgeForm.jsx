import React, { Component } from "react"
import './Style/BadgeForm.css'

class BadgeForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input 
                            type ="text"
                            className="form-control"
                            name="name"
                            onChange={this.props.onChange}
                            value={this.props.formValue.name}
                            />
                        </div>
                        
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Profile picture URL
                            </label>
                            <input 
                            type ="text"
                            className="form-control"
                            name="picture"
                            onChange={this.props.onChange}
                            value={this.props.formValue.picture}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className="mb-1">
                                header picture
                            </label>
                            <input 
                            type ="text"
                            className="form-control"
                            name="Header_P"
                            onChange={this.props.onChange}
                            value={this.props.formValue.Header_p}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age
                            </label>
                            <input 
                            type ="text"
                            className="form-control"
                            name="age"
                            onChange={this.props.onChange}
                            value={this.props.formValue.age}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input 
                            type ="text"
                            className="form-control"
                            name="city"
                            onChange={this.props.onChange}
                            value={this.props.formValue.city}
                            />
                            <button type="submit" className="Submit__button">
                                save
                            </button>
                        </div>

                        
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeForm;