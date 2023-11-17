import List from "./List";
import logo from "../assets/reactjs-icon 2.png";
function MainContent() {
  return (
    <div className="bg-main-color min-h-screen flex flex-col relative text-white">
      <h1 className="font-bold text-4xl mt-16 ml-6">Fun facts about React</h1>
      <List />
      <img className="absolute self-end top-[9rem]" src={logo} />
    </div>
  );
}

export default MainContent;
