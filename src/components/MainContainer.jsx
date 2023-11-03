export default function MainContainer({children}){
    return (<>
    <div className="flex h-screen bg-gradient-to-b from-emerald-800 to-zinc-900">
        {children}
    </div>
    
    </>)
}