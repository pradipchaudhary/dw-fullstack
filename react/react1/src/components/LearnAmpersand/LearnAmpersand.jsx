const LearnAmpersand = () => {
    let name = "Pradip";
    return (
        <div>
            <p>{true && name}</p>
            <p>{true && false && name}</p>
        </div>
    );
};

export default LearnAmpersand;
