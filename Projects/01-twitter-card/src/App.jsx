import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const formatUserName = (userName) => `@${userName}`
    
    const amaia = { initialIsFollowing: false, formatUserName: formatUserName, userName: "amaiagalvez" } 
    
    return (
        <section className="App">
            <TwitterFollowCard {...amaia}> {/* rest operation */}
                Amaia Galvez Itarte
            </TwitterFollowCard>  { /* pasamos como prop una función, NO la ejecución de una función */}
               
            <TwitterFollowCard
                initialIsFollowing
                formatUserName={formatUserName} 
                userName="peioxabier"> 
                Peio Galvez Itarte
            </TwitterFollowCard>{/* initialIsFollowing = true */}

            <TwitterFollowCard
                formatUserName={formatUserName} 
                userName="25galvez25" >
                Jon Ander Galvez Itarte
            </TwitterFollowCard> {/* initialIsFollowing = undefined */}

            <TwitterFollowCard
                formatUserName={formatUserName}>
            </TwitterFollowCard>
        </section>
    )
}