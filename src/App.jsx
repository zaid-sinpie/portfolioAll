import Buttons from "./components/ui/Buttons.jsx"
import Certification from "./components/Certification";
function App() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-primary">
      <Certification/>
      <Buttons>Login</Buttons>
   
    </div>
  );
}

export default App;
