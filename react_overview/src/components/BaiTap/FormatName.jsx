function FormatName({ name1, name2 })
{
    const user = {
        fistName: name1,
        lastName: name2
    };
    return (
        <>
            <h1>Full name: { user.fistName } { user.lastName }</h1>
        </>
    );
}

export default FormatName;