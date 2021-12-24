import { Button } from 'primereact/button';
import { useAtom } from 'jotai'
import { useEffect } from 'react';


import { teller1Atom, teller2Atom, teller3Atom } from "../store"


export default function Queue() {
    const [teller1, setTeller1] = useAtom(teller1Atom);
    const [teller2, setTeller2] = useAtom(teller2Atom)
    const [teller3, setTeller3] = useAtom(teller3Atom)

    useEffect(() => {
      }, [teller1,teller2,teller3]); // Only re-run the effect if count changes

    return (
        <div className="surface-0">
            <div className=" font-bold text-6xl mb-4 text-center" style={{ color: "#f8e943" }}>Priority Service</div>
            <div className="text-xl mb-6 text-center line-height-3" style={{ color: "#f8e943" }}>
                Please wait until your number is called
            </div>

            <div className="grid">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className=" font-medium text-xl mb-2 text-cyan-400" >Business Permit</div>

                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="text-center">
                                <span className="font-bold text-7xl" style={{ color: "#f8e943" }}>TELLER 1</span>

                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <span className="font-bold text-center text-cyan-400" style={{ fontSize: 150 }}>{teller1}</span>
                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                            <Button label="Call Now" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller1(teller1 + 1)} />

                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className=" font-medium text-xl mb-2 text-cyan-400" >Certificate</div>

                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="text-center">
                                <span className="font-bold text-7xl text-center" style={{ color: "#f8e943" }}>TELLER 2</span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <span className="font-bold text-center text-cyan-400" style={{ fontSize: 150 }}>{teller2}</span>

                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <Button label="Call Now" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller2(teller2 + 1)} />

                        </div>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                            <div className=" font-medium text-xl mb-2 text-cyan-400" >Taxation</div>

                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <div className="text-center">
                                <span className="font-bold text-7xl " style={{ color: "#f8e943" }}>TELLER 3</span>
                            </div>
                            <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />

                            <span className="font-bold text-center text-cyan-400" style={{ fontSize: 150 }}>{teller3}</span>

                            <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                            <Button label="Call Now" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller3(teller3 + 1)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}