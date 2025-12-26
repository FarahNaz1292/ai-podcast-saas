import { Header } from "@/components/home/Header";

function dashboardlayout({children}:{children:React.ReactNode}) {
    return(
     
      <div className="min-h-screen"> 
           <Header/>
           <main className="">
              {children}
           </main>
          
           </div>
    )
}


export default dashboardlayout;