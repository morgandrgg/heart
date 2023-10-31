import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {links} from './MyLinksArray.jsx'

const HeaderLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return <>
        {links.map((link,Index) => (
            <div key={Index} className='z-50 md:hover:bg-pink-900 hover:bg-yellow-500 hover:text-white'>
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group" onClick={() => {
                        heading !== link.name ? setHeading(link.name) : setHeading("");
                        setSubHeading(""); }}>

                        {link.name}

                        <span className="text-xl md:hidden inline"> {`${heading === link.name ? "^" : "▼"}`}</span>
                        <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2"> {"▼"} </span>

                    </h1>

                    {link.submenu && (
                        <div>
                            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-3 absolute mt-1 bg-yellow-500 rotate-45"></div>
                                </div>

                                <div className="bg-yellow-500 p-5">
                                    {link.sublinks.map((mysublinks,subIndex) => (
                                        <div key={subIndex}>

                                            <h1 className="text-lg font-semibold text-gray-900">
                                                {mysublinks.Head}
                                            </h1>

                                            {mysublinks.sublink.map((slink,subSubIndex) => (
                                                <li key={subSubIndex} className="text-sm text-white my-2.5 hover:text-gray-200">

                                                    <Link to={slink.link} className="hover:text-primary">
                                                        {slink.name}
                                                    </Link>

                                                </li>))}

                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>)}
                </div>


                {/* Mobile menus */}
                <div className={`${heading === link.name ? "md:hidden" : "hidden"} `}>
                    {/* sublinks */}
                    {link.sublinks.map((slinks, mobileIndex) => (
                        <div key={mobileIndex} className='hover:bg-pink-900 hover:text-white'>
                            <div>
                                <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                                    className="py-4 pl-7 font-semibold md:pr-0' pr-5' flex justify-between items-center md:pr-0 pr-5">
                                    {slinks.Head}
                                    <span className="text-xl md:mt-1 md:ml-2 inline">
                                {`${heading === link.name ? "^" : "▼"}`}
                            </span>
                                </h1>

                                <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                    {slinks.sublink.map((slink, mobileSubIndex) => (<li key={mobileSubIndex} className="py-3 pl-14">
                                        <Link to={slink.link}>{slink.name}</Link>
                                    </li>))}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>))}
    </>
}

export default HeaderLinks;