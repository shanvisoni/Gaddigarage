import Cars from '../components/Cars'
import Cities from '../components/Cities'
import ProblemInput from '../components/ProblemInput'
import Problems from '../components/Problems'
import GarageListing from '../components/GarageListing'
const UserSelection=()=>{
    return(
        <>
        <div className="container mx-auto  bg-gray-100 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex justify-center items-center ">
        {/* Cars, Cities, ProblemInput are placed in the grid without borders */}
         <div className="p-0 m-0 ">
            <Problems/> 
        </div>
        <div className="p-0 m-0 ">
          <Cars />
        </div>
        <div className="p-0 m-0">
        <Cities /> 
        </div>
        <div className="p-0 m-0">
        <ProblemInput />
        </div>
      </div> 
      </div> 
        <GarageListing/>
        </>
    )
}
export default UserSelection;