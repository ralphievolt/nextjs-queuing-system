import React, { useRef } from 'react';


export default function PanelDemo() {

    return (
        <div className="grid">
            {/* <div className="col-12 md:col-6">
                <div className="card">
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
                            <p className="text-8xl w-10 font-bold ml-4">TELLER 1</p>
                            <p className="w-2 text-right font-bold text-blue-500 mr-6 text-8xl">5</p>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
                            <p className="text-8xl w-10 font-bold ml-4">TELLER 2</p>
                            <p className="w-2 text-right font-bold text-blue-500 mr-6 text-8xl">5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 mb-0">
                <div className="card">
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
                            <p className="text-8xl w-10 font-bold ml-4">TELLER 3</p>
                            <p className="w-2 text-right font-bold text-blue-500 mr-6 text-8xl">5</p>
                        </div>

                    </div>

                </div>
                <div className="card mt-3">
                    <div className="flex flex-wrap align-items-center justify-content-center">
                        <div className="flex align-items-center border-bottom-1 surface-border surface-overlay w-full">
                            <p className="text-8xl w-10 font-bold ml-4">TELLER 4</p>
                            <p className="w-2 text-right font-bold text-blue-500 mr-6 text-8xl">5</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="col-12">
                <p className="text-8xl font-bold ml-4">Service Queue</p>
            </div>

            <div className="col-4 mt-0">
                <p className="text-8xl font-bold ml-4">TELLER 4</p>
            </div>
            <div className="col-1 mt-0">
                <p className="text-8xl  font-bold ml-4">67</p>
            </div>
            <div className="col-1 mt-0" />
            <div className="col-4 mt-0">
                <p className="text-8xl font-bold ml-4">TELLER 4</p>
            </div>
            <div className="col-1 mt-0">
                <p className="text-8xl  font-bold ml-4">67</p>
            </div>


        </div>
    )
}