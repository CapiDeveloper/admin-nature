const { Menu } = require("../../components/index");

export default function Layout({children}) {
    return(
        <>
        <Menu />
        { children }
        </>
    )
}