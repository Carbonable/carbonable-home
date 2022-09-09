import { Link } from "@remix-run/react";

interface LinkButtonProps {
    href: string;
    children: string;
    className: string
}

const defaultCssClass = 'font-inter text-black/50 uppercase rounded-3xl px-4 py-2 text-sm hover:bg-gradient-to-r from-green to-lightblue ';

export default function LinkButton({ href, children, className }: LinkButtonProps) {
    return <Link to={href} className={defaultCssClass + className}>{children}</Link>;
}

export function LinkOutsideButton({ href, children, className }: LinkButtonProps) {
    return <a href={href} target="_blank" className={defaultCssClass + className} rel="noreferrer">{children}</a>;
}

