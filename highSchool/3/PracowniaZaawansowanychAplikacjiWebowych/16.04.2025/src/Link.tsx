export default function Link({children}: {children: string}) {
    function click() {
        alert("Link nie zawiera adresu");
    }
    
    return (
        <a href="" onClick={click}>{children}</a>
    )
}