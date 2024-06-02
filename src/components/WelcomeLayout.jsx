export default function WelcomeLayout ({children}){
    return(
        <div className="welcome">
            {children}
            <img src="/images/global/side-welcome.svg" className="side-welcome" />
        </div>
    )
}