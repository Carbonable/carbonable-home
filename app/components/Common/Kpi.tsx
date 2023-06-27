export default function Kpi({value, unit, label}: any) {
    return(
        <div className="mt-8 w-full text-center md:w-1/2 lg:w-full">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-greenish-500 to-blue font-inter font-extrabold uppercase text-4xl">{value}{value !== 'n/a' ? unit : null}</div>
            <div className="font-inter text-neutral-100 uppercase">{label}</div>
        </div>
    )
}