import image from "../../assets/background.jpg";
export default function Quizzes() {
    return (
        <div >
            <img src={image} alt="Background" style={{ width: "100%", height: "auto" }} />
            <h1>Quizzes Page</h1>
            <p>Welcome to the quizzes section!</p>
        </div>
    );
}