function Calculation()
{
    const a = 10;
    return (
        <>
            <h1>Danh sách kết quả</h1>
            <ul>
                <li>
                    { a } + { a } = { a + a };
                </li>
                <li>
                    { a } - { a } = { a - a };
                </li>
                <li>
                    { a } * { a } = { a * a };
                </li>
                <li>
                    { a } / { a } = { a / a };
                </li>
            </ul>
        </>
    );
}

export default Calculation;