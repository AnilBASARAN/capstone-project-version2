
import { Link } from 'react-router-dom';

const HomePage = () => {
  return(
    <div className="flex" >
        <div className="relative hidden md:flex">
    
    <img className="h-screen object-cover" src="https://img.freepik.com/free-photo/business-owner-holding-we-are-open-sign_53876-127038.jpg" />
    <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
        </div>
    
        <div className= "flex-1 bg-green-50 flex flex-col justify-center items-center h-screen">
            <img className="w-24" src="https://static-task-assets.react-formula.com/capstone_logo_dark.png" />
            <div className="hidden md:flex text-2xl font-fair text-emerald-700">Welcome</div>
            <div className="flex md:hidden text-center text-2xl font-fair text-emerald-700">
                     Welcome<br />We are open
                            </div>
    
                            <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/login" className="link link-primary">
                Create account
              </Link>
            </p>

            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/sign-up" className="link link-primary">
                Log In
              </Link>
            </p>
          </div>
           
        </div>
        
    </div>
        );
}

export default HomePage