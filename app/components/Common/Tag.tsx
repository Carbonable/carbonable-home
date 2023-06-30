export default function Tag({color, text}: {color: string, text: string}) {
    return (
        <div className={`border text-xs rounded-2xl px-[12px] py-[4px] ml-2 w-fit`} style={{color: color, borderColor: color}}>
            {text}
        </div>
    )
}
