function Nav(){
    const navOption = [
        {
            name:'예술',
            code:'n1',
        },
        {
            name:'공포',
            code:'n2',
        },
        {
            name:'액션',
            code:'n3',
        },
    ]
    return (
        <div>
            {navOption.map((e)=>{
                return(
                    <div>${e.name}</div>
                )
            })}
        </div>
    )
}

export default Nav;