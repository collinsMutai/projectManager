import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsSate, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
   
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  let content;

  if (projectsSate.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsSate.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddproject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddproject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
