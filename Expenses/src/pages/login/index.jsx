

function Login(){
    return(
        <div className="h-screen w-full flex flex-col items-center justify-center ">
            <div className="flex flex-col bg-gray-200 w-[500px] h-[350px] rounded-2xl justify-evenly p-4">
                <h2>Manage your income better with Expensify</h2>
                <div className="flex flex-col gap-4">
                    <div >
                        <p className="pr-26">Username</p>
                        <input className="border rounded-xl"/>
                    </div>
                    <div >
                        <p className="pr-26">Password</p>
                        <input className="border rounded-xl"/>
                    </div>
                    <div>
                        <button className="w-[80px] h-[50px] bg-amber-200 rounded-xl">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;