import { useState } from "react" /* Estados. Hooks. Añadir cierta funcionalidad al código de read */

export function TwitterFollowCard({ children, formatUserName, userName = 'unknown', initialIsFollowing }) {

    //las props nunca se pueden modificar, son INMUTABLES!!

    const formatedUserName = formatUserName(userName)

    /* Estado */
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) /*Valor por defecto false. 1. parametro: el valor del estado. (como está la luz, encendida o apagada) 2. parametro: función para actualizar el estado (interruptuor para apagar o encender la luz*/
    
    /* Estado interno, cada vez que reusamos este componente el estado es independiente */

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    /* renderizado condicional */
    
    const buttonText = isFollowing ? 'Jarraitzen' : 'Jarraitu'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    return (
        <article className='tw-followCard'>
            {/* <div>
                <h1 style={{ color: '#fff' }}>Twitter Card</h1>
            </div> */}
            
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="{name}(ren) argazkia" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                   <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatedUserName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} title={buttonText}>
                    <span className="tw-followCard-text">{buttonText}</span> {/* Children. Hijo del elemento button */}
                    <span className="tw-followCard-stopFollow">Utzi Jarraitzen</span>
                </button>
            </aside>
        </article>  
    )

    /* Children solo puede tener uno */
}