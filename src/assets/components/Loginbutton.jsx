import { useState } from "react";

function Loginbutton() {
    const [firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    // const [message, setMessage] = useState("");
    const [fullname, setFullName] =useState("");
    
    const handleClick = () => {
        // e.previentDefault();
        setFullName(`${firstname}  ${lastname}`)
    };
    return (
        <div className="Loginbutton">
            <h1>
                Full Name Display
            </h1>
            <form onSubmit={handleClick}>
                <div>
                    <label>First Name:</label>
                    <input
                     type="text"
                     value={firstname}
                     onChange={(e) => setFirstname(e.target.value)}
                     required
                      />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                     type="text"
                     value={lastname}
                     onChange={(e) => setLastname(e.target.value)}
                     required
                      />
                </div>
                <button Submit={handleClick}>Submit</button>
            </form>
            {fullname && <h2>Full Name: {fullname}</h2>}

        </div>
    );
};
export default Loginbutton;