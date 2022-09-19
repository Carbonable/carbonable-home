interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: any;
}

const modalCssClass = 'font-inter text-white mt-8 uppercase rounded-full px-8 py-4 font-bold text-sm hover:bg-gradient-to-r from-green to-lightblue ';
const whitelistCssClass = 'font-inter text-black/50 text-white uppercase rounded-full px-4 py-4 font-bold hover:bg-gradient-to-r from-green to-lightblue ';

export default function ModalButton({ children, className, onClick }: ButtonProps) {
    return <button className={modalCssClass + className} onClick = {() => { onClick(true); }}>{children}</button>;
}

export function WhitelistButton({ children, className, onClick }: ButtonProps) {
    return <button className={whitelistCssClass + className} onClick = {() => { onClick(true); }}>{children}</button>;
}

