import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      {/* login page */}
      <header className="w-full items-center justify-between mb-8">
        <div className="flex items-center space-x-4 bg-white self-end relative top-0 p-[37px]">
          <img
            src="https://niteop.nite.org.il/images/header_right_logo.png"
            alt="Logo"
            width={150}
            height={170}
            className="object-contain absolute right-0 top-3"
          />
        </div>

        <div className="text-3xl font-bold text-white p-4 w-full" style={{backgroundColor: "rgba(37, 47, 66, .8)"}}>
          <h1 className="text-end">
            כניסה לאזור האישי
          </h1>
        </div>
      </header>

      <img 
        src="https://niteop.nite.org.il/images/personal-area/login_img.jpg"
        alt="Login Image"
        
        className="fixed left-0 right-0 top-17 -z-10 w-full h-full object-cover"
      />

      <form action="/personal-area" method="post" className="login-form w-3/4  py-7" >
        <h2 style={{fontSize: "39px", fontWeight: "100", textAlign: "center"}}>
          כניסה לאזור האישי
        </h2>
        <div className="flex w-full self-center justify-center mt-7">
          <div className="flex mr-4 gap-1">
            <h1 style={{color: "rgba(0,0,0,.5)", fontWeight: "700"}}>דרכון זר</h1>
            <input type="radio" name="userType" value="foreigner" className="mr-2" />
          </div>
          <div className="flex mr-4 gap-1">
            <h3 style={{color: "rgba(0,0,0,.5)", fontWeight: "700"}}>תעודת זהות</h3>
            <input type="radio" name="userType" value="resident" className="mr-2" />
          </div>

          <h3 style={{display: "inline-block", fontWeight: "700", color: "rgba(0,0,0,.5)"}}>
            סוג התעודה * 
          </h3>
        </div>
        <div className=" flex flex-col gap-4 p-5">
        <input type="text" name="username" placeholder="הקלד" className="p-2 border border-gray-500 w-3/4 self-center text-end" />
        <input type="password" name="password" placeholder="הקלד" className="p-2 border border-gray-500 w-3/4 self-center text-end mt-7" />
        <a href="#" className="text-blue-500 text-end">?שכחתי סיסמה</a>

        <button type="submit" className="bg-orange-500 shadow-sm shadow-gray-500 w-fit px-15 self-center text-white p-2 ">המשך</button>
      
        </div>
      </form>



    </div>
  )
}
