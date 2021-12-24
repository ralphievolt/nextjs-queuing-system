import { Button } from 'primereact/button';
import { useAtom } from 'jotai'

import { teller1Atom, teller2Atom, teller3Atom } from "../store"


export default function Caller() {
    const [teller1, setTeller1] = useAtom(teller1Atom);
    const [teller2, setTeller2] = useAtom(teller2Atom)
    const [teller3, setTeller3] = useAtom(teller3Atom)

    return (

        <div className="surface-0">
            <div className=" font-bold text-6xl mb-4 text-center" style={{ color: "#f8e943" }}>Priority Service</div>
            <div className="text-xl mb-6 text-center line-height-3" style={{ color: "#f8e943" }}>
                Please wait until your number is called
            </div>

            <div className="grid">
                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <Button label="Call Now 1" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller1(teller1 + 1)} />
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <Button label="Call Now 2" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller2(teller2 + 1)} />
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full">
                        <Button label="Call Now 3" className="p-3 w-full p-button-outlined text-cyan-400" onClick={() => setTeller3(teller3 + 1)} />
                    </div>
                </div>
            </div>
        </div>

    )
}