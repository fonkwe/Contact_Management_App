import React from 'react';


class AddContact extends React.Component {
    render() {
        return(
            <div className="ui-main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name of the Person" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email of the Person" />
                    </div>
                    <button className="ui button">Add</button>
                </form>
            </div>

        );
    }

}


export default AddContact;