import '~/css/fightGame.scss';

export default function FightGame() {

    return <main className="bg-amber-100 min-h-screen text-zinc-800 p-12">
        {/* <h1 className='font-bold text-6xl w-full text-center'>Fight Game</h1> */}
        <section className="arena p-4">
            <div className="player">
                <div className="body">
                    <div className="head" />
                    <div className="arm arm-l">
                        <div className="bicep" >
                            <div className="forearm">
                                <div className="hand"></div>
                            </div>
                        </div>
                    </div>
                    <div className="arm arm-r">
                        <div className="bicep" >
                            <div className="forearm">
                                <div className="hand"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="player rotate-180">
                <div className="body">
                    <div className="head" />
                    <div className="arm arm-l">
                        <div className="bicep" >
                            <div className="forearm">
                                <div className="hand"></div>
                            </div>
                        </div>
                    </div>
                    <div className="arm arm-r">
                        <div className="bicep" >
                            <div className="forearm">
                                <div className="hand"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hud">
            <div className="player">
                <div className="health-bar">
                    <div className="health"></div>
                </div>
                <div className="avatar"></div>
            </div>
        </section>
    </main>
}