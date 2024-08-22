import ButttonClick from "./components/ButttonClick";
import Info from "./components/Info";
import LearnCss from "./components/LearnCss";

const App = function () {
    return (
        <div>
            <div>Hello,</div>
            <div>Welcome to the React 1 app. </div>
            <Info />
            <ButttonClick />
            <LearnCss />
        </div>
    );
};

export default App;
