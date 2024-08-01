import ButtonAuth from "../components/ButtonAuth";

export default function Home() {
  return (
        <main className="h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-8/12 h-1/2 md:h-full relative">
            <img 
              src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-285904-842711.jpg&fm=jpg" 
              alt="Enhanced landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-4/12 h-screen">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="font-bold text-2xl"> Inizia </h1>
                <div className="flex flex-row space-x-4 justify-center items-center">
                  <ButtonAuth url="/login" text="Login"/>
                  <ButtonAuth url="/signUp" text="Sign Up"/>
                </div>
              <div className="w-4/12 text-center space-y-2 absolute bottom-0 mb-4">
                <p> logo</p>
                <div className="flex justify-center font-normal text-slate-400 text-xs underline">
                  <a href="" className="px-2">
                    condizioni d'uso
                  </a>
                  <span> | </span>
                  <a href="" className="px-2">
                    Informativa sulla privacy
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </main>
  );
}
