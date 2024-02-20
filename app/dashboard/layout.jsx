const { Menu } = require("../../components/index");

export default function({children}) {
    return(
        <>
        <Menu />
        { children }
        </>
    )
}