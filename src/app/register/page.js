"use client"
import {useSession , signIn , signOut} from "next-auth/react";
const Register = () => {
    const googleSighIn = (e) =>{
        console.log("GGGGGGGGGogle");
       // e.preventDefault();
        signIn("google", { callbackUrl: "http://localhost:3000/" })
    }
    const backImg = '/assets/img/curved-images/curved14.jpg'
    return (
        <main className="mt-0 transition-all duration-200 ease-soft-in-out">
            <section className="min-h-screen mb-32">
                <div
                    className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
                    style={{backgroundImage: `url(${backImg})`}}>
                    <span
                        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
                    <div className="container z-10">
                        <div className="flex flex-wrap justify-center -mx-3">
                            <div
                                className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                <h1 className="mt-12 mb-2 pb-3 text-white rounded-lg bg-luster-1">عضویت</h1>
                                <p className="text-white">عضویت در سایت اتحادیه لوستر سازان تهران</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                        <div
                            className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                            <div
                                className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                    <h5>عضویت با</h5>
                                </div>
                                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <button onClick={googleSighIn} className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           >
                                            <img src="/google_cover.jpg" className="w-full h-full"/>
                                        </button>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <a className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           href="#">
                                            <img src="/github2.png" className="w-full h-full"/>
                                        </a>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <a className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           href="#">
                                            <img src="/linkdin.png" className="w-full h-full"/>
                                        </a>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <a className="inline-block w-full h-16 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           href="#">
                                            <img src="/insta.jpg" className="w-full h-full"/>
                                        </a>
                                    </div>
                                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">یا</p>
                                    </div>
                                </div>
                                <div className="flex-auto p-6">
                                    <form role="form text-left">
                                        <div className="mb-4">
                                            <input type="text"
                                                   className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="نام کاربری" aria-label="Name" aria-describedby="email-addon"/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="email"
                                                   className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="ایمیل" aria-label="Email"
                                                   aria-describedby="email-addon"/>
                                        </div>
                                        <div className="mb-4">
                                            <input type="password"
                                                   className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                                   placeholder="رمز عبور" aria-label="Password"
                                                   aria-describedby="password-addon"/>
                                        </div>
                                        <div className="text-center">
                                            <button type="button"
                                                    className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                                                عضویت
                                            </button>
                                        </div>
                                        <p className="mt-4 mb-0 leading-normal text-sm">اگر قبلا عضو شده اید <a
                                            href="../pages/sign-in.html" className="font-bold text-slate-700">ورود</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Register;