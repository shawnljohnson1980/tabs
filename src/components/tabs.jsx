import React, { useState } from 'react'

const Form = props => {
    return (
        <>
            <div className="col-4 mt-5">
                <nav class="navbar navbar-light  navbar-expand-md shadow mb-5"> <p className="ml-5"> Welcome to my Tabs </p></nav>
                <label className="border-rider" htmlFor="Form">Create Tabs here</label>
                <form className="p-5 border border-rounded border-warning shadow ">
                    <div className="form-group mt-5 text-left">
                        <label htmlFor="TabName">Tech</label>
                        <input type="text" name="tabName" className="form-control shadow border border-rounded border-warning mt-3" />
                    </div>
                    <div className=" form-group mt-5 text-left">
                        <label htmlFor="Category" className="mt-3 text-left">Category</label>
                        <select name="category" className="form-control shadow border border-rounded border-warning mt-3">
                            <option value="" label="<--Select-->"></option>
                            <option value="Info" label="Info"></option>
                            <option value="Tutorials" label="Tutorials"></option>
                            <option value="Tech" label="Tech"></option>
                        </select>
                    </div>
                    <div className="form-group mt-5 text-left">
                        <label htmlFor="importance" >Importance</label>
                        <select name="importance" className="form-control shadow border border-rounded border-warning mt-3" >
                            <option value="" label="<--Select-->"></option>
                            <option value="want" label="Want"></option>
                            <option value="Have" label="Don't Have"></option>
                        </select>
                    </div>
                    <div className="form-group2 text-right">
                        <input type="submit" name="newTab" className="btn btn-info shadow border border-rounded border-secondary mt-5 mr-5" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Form;