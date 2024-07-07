import Education from "./components/Education.jsx"

import Certification from "./components/Certification";
function App() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-primary">
      <Certification/>
      <Education/>
    </div>
  );
}

export default App;
