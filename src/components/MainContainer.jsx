export default function MainContainer({children,...props}){
    return (<>
    <div className="flex overflow-x-hidden h-screen space-x-3 bg-gradient-to-b from-emerald-800 to-zinc-900">
        {children}
    </div>
    </>)
}