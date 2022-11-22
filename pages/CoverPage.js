import Title from "../jade_components/Title"
import Developers from "../jade_components/Developers"
import About from "../jade_components/About"
import Contact from "../jade_components/Contact"

const COVER = () => {
    return (
      <div>
        <Title />
        <About/>
        <Developers/>
        <Contact/>
      </div>
    );
  };
  
  export default COVER;