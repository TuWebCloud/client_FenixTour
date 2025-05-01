export default function ViajePil ({ children }) {
    return (
        <>
        <span className="pil">
            {children}
        </span>
        <style jsx>{`
            .pil {
                font-size: 20px;
                font-weight: 100;
                color: #fff;
                background-color: #ffffff33;
                border: .5px solid #666;
                padding: 2px 10px;
                border-radius: 20px;
            }    
        `}</style>
        </>
    )
}