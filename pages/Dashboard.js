import Floor_oneDb from "../jade_components/Floor_oneDb"
import Floor_twoDb from "../jade_components/Floor_twoDb"
import Floor_threeDb from "../jade_components/Floor_threeDb"

const Dashboard = () => {
    return (
      <div>
        <dashboardnavbar/>
        <Floor_oneDb/>
        <Floor_twoDb/>
        <Floor_threeDb/>
      </div>
    );
  };
  
  export default Dashboard;