import Header from "../components/header";
import Footer from "../components/footer";

export default function Component() {
    return (
        <div className={"layout-wrapper"}>
            <Header/>
            <div className={"homepage-container"}>Content goes here</div>
            <Footer/>
        </div>
    );
}
