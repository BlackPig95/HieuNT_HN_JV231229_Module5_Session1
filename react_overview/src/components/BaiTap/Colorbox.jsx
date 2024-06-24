import "./colorbox.css";
function Colorbox({ color })
{
    const chosenColor = color;
    return (
        <>
            <p className={ chosenColor }>Box</p>
        </>
    );
}

export default Colorbox;