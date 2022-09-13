interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: any;
}

const defaultCssClass = 'font-inter text-white mt-8 uppercase rounded-full px-8 py-4 font-bold text-sm hover:bg-gradient-to-r from-green to-lightblue ';

export default function ModalButton({ children, className, onClick }: ButtonProps) {
    return <button className={defaultCssClass + className} onClick = {() => { onClick(true); }}>{children}</button>;
}

