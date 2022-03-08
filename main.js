const divTag = document.getElementById("react-id");

const User = (props) => {
    const [user, setUser] = React.useState(props.age)
    return (
        <div key={props.name}>name: {props.name} - age: {props.age}</div>
    )
}

function Component(props) {
    const [users, setUsers] = React.useState([
        { name: "Đinh Tuấn Anh", age: 21, title: "fe" },
        { name: "Ngụy Minh Thắng", age: 22, title: "fe" },
        { name: "Nguyễn Anh Thư", age: 20, title: "fe" },
        { name: "Bế Trọng Hiếu", age: 21, title: "java" },
        { name: "Ngô Huỳnh Đức", age: 22, title: "java" },
        { name: "Nguyễn Mạnh Dũng", age: 20, title: "java" }
    ]);
    
    React.useEffect(() => {
        
    },)
    return (
        <div>
            <div ><h1>list member of React class</h1>
                <span>{users.map((user) => {
                    return (
                        
                        <div key={user.name}>
                            {user.title === "fe" &&
                            <div >
                                <div>
                                <User name={user.name} age={user.age} />
                                <button onClick={() => {
                                    user.title = "java"
                                    setUsers([...users])
                                }}>
                                    tranfer
                                </button>
                                </div>
                            </div>
                            }
                        </div>
                    )
                })}</span>

            </div>
            <div><h1>list member of Java class</h1>
            <span>{users.map((user) => {
                    return (
                        <div key={user.name}>
                            {user.title === "java" &&
                            <div>
                                <User name={user.name} age={user.age} />
                                <button onClick={() => {
                                    user.title = "fe"
                                    setUsers([...users])
                                }}>
                                    tranfer
                                </button>
                            </div>
                            }
                        </div>
                    )
                })}</span>
            </div>
        </div>
    )
}
ReactDOM.render(<div><Component /></div>, divTag);