import "./header.css";

const Header = () =>
{
    //Phạm vi viết code JS
    const userName = "Nguyễn Văn A";
    const user =
    {
        id: 1,
        name: "A",
        age: 12
    };
    return (
        <>
            <h1>Heading 1</h1>
            <p style={ { color: "red", fontSize: 20, fontWeight: 600 } }>Lorem ipsum dolor sit amet.</p>
            <div>
                Tên: { userName }
            </div>
            <ul>
                <li>
                    Id: { user.id }
                </li>
                <li>
                    Name: { user.name }
                </li>
            </ul>
        </>
    );
};
export default Header;