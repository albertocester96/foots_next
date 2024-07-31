import ButtonAuth from "../components/ButtonAuth";

export default function Home() {
  return (
        <main className="h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 h-1/2 md:h-full relative">
            <img 
              src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-285904-842711.jpg&fm=jpg" 
              alt="Enhanced landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full h-screen md:w-1/2">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="font-bold text-2xl"> Inizia </h1>
              <div className="flex flex-row space-x-4 justify-center items-center">
                <ButtonAuth url="/login" text="Login"/>
                <ButtonAuth url="/signUp" text="Sign Up"/>
              </div>
            </div>
            
          </div>
        </main>
  );
}
