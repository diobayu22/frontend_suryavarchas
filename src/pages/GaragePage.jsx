import Layout from "../components/Layout"
import Garage from "../components/Garage"
import Search from "../components/Search"

export default function GarasiPage(){
    return(
        <Layout>
            <div className="container garage-page">
                <Search />
                <Garage />
            </div>
        </Layout>
    )
}