import { Dropdown } from 'bootstrap'
import React from 'react'

const Action=() => {
    return()

}

const location = () => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    choose your location
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="Action">Bhaktapur</Dropdown.Item>
                    <Dropdown.Item href="Action">Kathmandu</Dropdown.Item>
                    <Dropdown.Item href="Action">Lalipur</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </div>
    )
}

export default location