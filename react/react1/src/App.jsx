import ButttonClick from "./components/ButttonClick";
import LearnCss from "./components/LearnCss";
import Counter from "./components/useState/Counter";
import LearnUseState from "./components/useState/LearnUseState";

const App = function () {
    return (
        <div>
            <h3>Hello,</h3>
            <h1>Welcome to the React app. </h1>
            <ButttonClick />
            <LearnCss />
            {/* Use State  */}
            <br />
            <hr />
            <h1>Use State </h1>
            <LearnUseState></LearnUseState>
            <Counter></Counter>
        </div>
    );
};

export default App;
