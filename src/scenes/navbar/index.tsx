import React, { useState }  from 'react';
import {Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from './Link';


type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;  
    // void is used where there is no data. For example, if a function does not return any value then you can specify void as return type. There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between"
  return (
    <nav>
       <div className={`${flexBetween} fixed z-30 py-6 top-0 w-full`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img alt='logo' src={Logo} />
                    {/* RIGHT SIDE */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                          
                                <Link page="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                           
                            
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar