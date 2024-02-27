function ScreenUnit ({input, setInput}) {
    return (
        <div>
            <input type="text" className="screen-unit" value={input} onChange={e => setInput(e.target.value)}/>
        </div>
    )
}

export default ScreenUnit