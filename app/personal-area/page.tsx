"use client";
import React, { useState } from 'react'

export default function page() {

    const [visable, setVisible] = useState(false);



  return (
    <div>
        <header className="w-full items-center justify-between mb-8">
        <div className="flex items-center space-x-4 bg-white self-end relative top-0 p-[27px]">







            <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#F19E39"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
            <h3 > 
             שלום, זידאן מוסטפא
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
          <img
            src="https://niteop.nite.org.il/images/header_right_logo.png"
            alt="Logo"
            width={150}
            height={170}
            className="object-contain absolute right-0 top-3"
          />
        </div>

        <img 
            src="https://niteop.nite.org.il/images/registration/top_img_1.png"
            alt="Login Image"
            className=" absolute left-0 right-0 top-17  h-50 w-full "
        />

        <div className="text-3xl font-bold text-white p-4 w-full absolute top-[200px]" style={{backgroundColor: "rgba(37, 47, 66, .8)"}}>
            <h1 className="text-end">
                אזור אישי
            </h1>
        </div>
      </header>


        <div className=" bg-gray-100 h-svh">
        <h2 className="text-3xl font-bold text-black p-4 w-full text-end mt-[170px]">
            פרטים אישיים
        </h2>
        <div className=" flex flex-col gap-4 p-7 ">
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
                    שם פרטי ומשפחה
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
                    זידאן מוסטפא

                </h3>
            </div>
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
                    תאריך לידה
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
                   16/05/2007



                </h3>
            </div>
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
                   תעודת זהות
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
                   2166384990

                </h3>
            </div>

            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
                    יישוב
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
                   כפר מנדא


                </h3>
            </div>
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
                   רחוב
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.3)" }} className="text-end text-2xl">
נא לעדכן פרטים

                </h3>
            </div>
            
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
מיקוד                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
1790700


                </h3>
            </div>

            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
טלפון                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.3)" }} className="text-end text-2xl">
נא לעדכן פרטים


                </h3>
            </div>
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
טלפון נייד
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
055-9907102


                </h3>
            </div>
            <div className=" justify-end gap-4">
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,1)" }} className="text-end text-sm">
דואר אלקטרוני
                </h3>
                <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.7)" }} className="text-end text-2xl">
weko08531@gmail.com


                </h3>
            </div>
           
        </div>
            
        </div>


        <div className="gap-0">
        <h2 className="text-3xl font-bold text-black p-4 w-full text-end mt-7">
            רשימת הבחינות שלי
        </h2>
        <div className=" flex flex-col gap-4 p-7 ">
            <div className=" flex w-full p-7 ">
                <div className=" justify-end gap-4 bg-gray-200 p-2 w-full ">
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,0.4)" }} className="text-end text-lg">
    הבחינה הפסיכומטרית
                    </h3>
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.4)" }} className="text-end text-md">
                    ם 2-3 בספטמבר 2025 
                </h3>
                    

                </div>
                <div 
                    onClick={() => setVisible(!visable)}
                    className=" justify-end gap-4 bg-orange-500 p-2 items-center flex">
                    {!visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>}
                    {visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>}
                </div>


            </div>
            {visable &&
            <div className=" w-full p-7 text-end">
                <h1 className="text-sky-500 font-bold text-lg">
                    פרטי הבחינה
                </h1>
                <p>
                    אסמכתא: 137016P

שפת הבחינה: ערבית

שפת מטלת הכתיבה: ערבית

קיבלנו את בקשתך להרשמה לבחינת הכניסה הפסיכומטרית שתיערך ביום ג' 2 בספטמבר 2025, ט' באלול תשפ"ה. מקום הבחינה שנקבע לך:

אוניברסיטת חיפה, הר-הכרמל, בשעה 14:30.

בניין הפקולטה למדעי החברה חדר 5008.
                </p>

                 <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
*** מכתב זה מבטל מכתב הזמנה קודם *** ***אין אפשרות להכנס עם רכב פרטי לקמפוס ***
                    </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

                </div>


                <div className=" w-3/4 self-center bg-gray-500 h-0.5 flex mt-5 ml-[50px]"></div>

                <h1 className="text-sky-400 font-bold text-lg mt-7">
ציונים
                </h1>

                <p>
                    0תאריך הבחינה :2/09/2025
                </p>

                <div className='mt-5'>
                    <p className='font-bold'>
                        תחומים
                    </p>
                    <p>
                        אנגלית <span className='  mr-[70px]' style={{ fontWeight: "700"}}>102</span>

                    </p>

                    <p>
מילולי <span className='  mr-[75px]' style={{ fontWeight: "700"}}>120</span>
                    </p>

                    <p>
כמותי <span className='  mr-[75px]' style={{ fontWeight: "700"}}>140</span>
                    </p>
                </div>
                <div className='mt-5'>
                    <p className='font-bold'>
                        שקלולים
                    </p>
                    <p>
רב תחומי <span className='  mr-[87px]' style={{ fontWeight: "700"}}>592</span>
                    </p>

                    <p>
בדגש מילולי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>583</span>
                    </p>

                    <p>
בדגש כמותי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>620</span>
                    </p>
                </div>


                <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
מכיוון שחלפו 90 יום ממועד בחינתך, לא תוכל לבקש בדיקה חוזרת
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>

            </div> 
            }

            
            </div>


            <div className=" flex flex-col gap-4 p-7 bottom-25 relative">
            <div className=" flex w-full p-7 ">
                <div className=" justify-end gap-4 bg-gray-200 p-2 w-full ">
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,0.4)" }} className="text-end text-lg">
בחינת יע"ל
                    </h3>
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.4)" }} className="text-end text-md">
                    ם 2-3 בספטמבר 2025 
                </h3>
                    

                </div>
                <div 
                    onClick={() => setVisible(!visable)}
                    className=" justify-end gap-4 bg-orange-500 p-2 items-center flex">
                    {!visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>}
                    {visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>}
                </div>


            </div>
            {visable &&
            <div className=" w-full p-7 text-end">
                <h1 className="text-sky-500 font-bold text-lg">
                    פרטי הבחינה
                </h1>
                <p>
                    אסמכתא: 137016P

שפת הבחינה: ערבית

שפת מטלת הכתיבה: ערבית

קיבלנו את בקשתך להרשמה לבחינת הכניסה הפסיכומטרית שתיערך ביום ג' 2 בספטמבר 2025, ט' באלול תשפ"ה. מקום הבחינה שנקבע לך:

אוניברסיטת חיפה, הר-הכרמל, בשעה 14:30.

בניין הפקולטה למדעי החברה חדר 5008.
                </p>

                 <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
*** מכתב זה מבטל מכתב הזמנה קודם *** ***אין אפשרות להכנס עם רכב פרטי לקמפוס ***
                    </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

                </div>


                <div className=" w-3/4 self-center bg-gray-500 h-0.5 flex mt-5 ml-[50px]"></div>

                <h1 className="text-sky-400 font-bold text-lg mt-7">
ציונים
                </h1>

                <p>
                    0תאריך הבחינה :2/09/2025
                </p>

                <div className='mt-5'>
                   
                    <p>
                        ציון כללי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>127</span>

                    </p>

                    <p>
חלק סגור <span className='  mr-[75px]' style={{ fontWeight: "700"}}>120</span>
                    </p>

                    <p>
חיבור <span className='  mr-[75px]' style={{ fontWeight: "700"}}>140</span>
                    </p>
                </div>
                

                <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
מכיוון שחלפו 90 יום ממועד בחינתך, לא תוכל לבקש בדיקה חוזרת
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>

            </div> 
            }

            
            </div>


<div className=" flex flex-col gap-4 p-7 relative bottom-50">
            <div className=" flex w-full p-7 ">
                <div className=" justify-end gap-4 bg-gray-200 p-2 w-full ">
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,0.4)" }} className="text-end text-lg">
    הבחינה הפסיכומטרית
                    </h3>
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.4)" }} className="text-end text-md">
                    ם 9-10 באפריל  2025 
                </h3>
                    

                </div>
                <div 
                    onClick={() => setVisible(!visable)}
                    className=" justify-end gap-4 bg-orange-500 p-2 items-center flex">
                    {!visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>}
                    {visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>}
                </div>


            </div>
            {visable &&
            <div className=" w-full p-7 text-end">
                <h1 className="text-sky-500 font-bold text-lg">
                    פרטי הבחינה
                </h1>
                <p>
                    אסמכתא: 137016P

שפת הבחינה: ערבית

שפת מטלת הכתיבה: ערבית

קיבלנו את בקשתך להרשמה לבחינת הכניסה הפסיכומטרית שתיערך ביום ג' 2 בספטמבר 2025, ט' באלול תשפ"ה. מקום הבחינה שנקבע לך:

אוניברסיטת חיפה, הר-הכרמל, בשעה 14:30.

בניין הפקולטה למדעי החברה חדר 5008.
                </p>

                 <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
*** מכתב זה מבטל מכתב הזמנה קודם *** ***אין אפשרות להכנס עם רכב פרטי לקמפוס ***
                    </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

                </div>


                <div className=" w-3/4 self-center bg-gray-500 h-0.5 flex mt-5 ml-[50px]"></div>

                <h1 className="text-sky-400 font-bold text-lg mt-7">
ציונים
                </h1>

                <p>
                    0תאריך הבחינה :2/09/2025
                </p>

                <div className='mt-5'>
                    <p className='font-bold'>
                        תחומים
                    </p>
                    <p>
                        אנגלית <span className='  mr-[70px]' style={{ fontWeight: "700"}}>102</span>

                    </p>

                    <p>
מילולי <span className='  mr-[75px]' style={{ fontWeight: "700"}}>120</span>
                    </p>

                    <p>
כמותי <span className='  mr-[75px]' style={{ fontWeight: "700"}}>140</span>
                    </p>
                </div>
                <div className='mt-5'>
                    <p className='font-bold'>
                        שקלולים
                    </p>
                    <p>
רב תחומי <span className='  mr-[87px]' style={{ fontWeight: "700"}}>592</span>
                    </p>

                    <p>
בדגש מילולי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>583</span>
                    </p>

                    <p>
בדגש כמותי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>620</span>
                    </p>
                </div>


                <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
מכיוון שחלפו 90 יום ממועד בחינתך, לא תוכל לבקש בדיקה חוזרת
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>

            </div> 
            }

            
            </div>


            <div className=" flex flex-col gap-4 p-7 bottom-75 relative">
            <div className=" flex w-full p-7 ">
                <div className=" justify-end gap-4 bg-gray-200 p-2 w-full ">
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,0.4)" }} className="text-end text-lg">
בחינת יע"ל
                    </h3>
                    <h3 style={{fontWeight: "500", color: "rgba(0,0,0,.4)" }} className="text-end text-md">
                    ם  9-10 באפריל 2025 
                </h3>
                    

                </div>
                <div 
                    onClick={() => setVisible(!visable)}
                    className=" justify-end gap-4 bg-orange-500 p-2 items-center flex">
                    {!visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>}
                    {visable && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>}
                </div>


            </div>
            {visable &&
            <div className=" w-full p-7 text-end">
                <h1 className="text-sky-500 font-bold text-lg">
                    פרטי הבחינה
                </h1>
                <p>
                    אסמכתא: 137016P

שפת הבחינה: ערבית

שפת מטלת הכתיבה: ערבית

קיבלנו את בקשתך להרשמה לבחינת הכניסה הפסיכומטרית שתיערך ביום ג' 2 בספטמבר 2025, ט' באלול תשפ"ה. מקום הבחינה שנקבע לך:

אוניברסיטת חיפה, הר-הכרמל, בשעה 14:30.

בניין הפקולטה למדעי החברה חדר 5008.
                </p>

                 <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
*** מכתב זה מבטל מכתב הזמנה קודם *** ***אין אפשרות להכנס עם רכב פרטי לקמפוס ***
                    </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

                </div>


                <div className=" w-3/4 self-center bg-gray-500 h-0.5 flex mt-5 ml-[50px]"></div>

                <h1 className="text-sky-400 font-bold text-lg mt-7">
ציונים
                </h1>

                <p>
                    0תאריך הבחינה :2/09/2025
                </p>

                <div className='mt-5'>
                   
                    <p>
                        ציון כללי <span className='  mr-[70px]' style={{ fontWeight: "700"}}>127</span>

                    </p>

                    <p>
חלק סגור <span className='  mr-[75px]' style={{ fontWeight: "700"}}>120</span>
                    </p>

                    <p>
חיבור <span className='  mr-[75px]' style={{ fontWeight: "700"}}>140</span>
                    </p>
                </div>
                

                <div className="bg-sky-100 p-2 mt-4 flex justify-between gap-2">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800">
מכיוון שחלפו 90 יום ממועד בחינתך, לא תוכל לבקש בדיקה חוזרת
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#00c3e6"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                </div>

            </div> 
            }

            <div className="bg-sky-100 p-2 mt-4  gap-2 w-full">
                    <h1 style={{ fontWeight: "700"}} className="text-sky-800 text-end text-3xl">
הפניות שלי
                    </h1>
                    <p className="text-end w-full">
                        כאן תוכלו לפנות אל המדור לפניות הציבור בכל שאלה הנוגעת לבחינות הכניסה והמיון וכן בתלונות הנוגעות לתהליך ההרשמה ולמהלך הבחינה.<span style={{fontWeight: "700"}}>שימו לב: תלונות על מהלך הבחינה יתקבלו עד 7 ימים מיום הבחינה.</span>
                    </p>
                </div>
            </div>


           
            
            
        </div>
    </div>
  )
}
