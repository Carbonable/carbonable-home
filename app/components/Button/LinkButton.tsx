import { Link } from "@remix-run/react";

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string
}

const defaultCssClass = 'font-inter uppercase rounded-3xl px-4 py-2 text-sm hover:bg-gradient-to-r from-green to-lightblue ';

const bigCssClass = 'font-inter uppercase rounded-full px-12 py-4 text-xl text-sm hover:bg-gradient-to-r from-green to-lightblue ';

export default function LinkButton({ href, children, className }: LinkButtonProps) {
    return <Link to={href} className={defaultCssClass + className}>{children}</Link>;
}

export function LinkButtonBig({ href, children, className }: LinkButtonProps) {
    return <Link to={href} className={bigCssClass + className}>{children}</Link>;
}

export function LinkOutsideButton({ href, children, className }: LinkButtonProps) {
    return <a href={href} target="_blank" className={defaultCssClass + className} rel="noreferrer">{children}</a>;
}
