import { Link } from "@remix-run/react";

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string
}

const defaultCssClass = 'font-inter uppercase rounded-3xl text-black/50 px-4 py-2 text-sm flex items-center justify-center hover:bg-gradient-to-r from-green to-lightblue ';

const bigCssClass = 'font-inter uppercase text-black/50 rounded-full px-12 py-4 text-base flex items-center justify-center hover:bg-gradient-to-r from-green to-lightblue ';

const footerCssClass = 'text-black/50 rounded-3xl flex align-center justify-center p-7 bg-white flex items-center justify-center hover:bg-gradient-to-r from-green to-lightblue lg:p-10 xl:p-12 '

export default function LinkButton({ href, children, className }: LinkButtonProps) {
    return <Link to={href} className={defaultCssClass + className}>{children}</Link>;
}

export function LinkButtonBig({ href, children, className }: LinkButtonProps) {
    return <Link to={href} className={bigCssClass + className}>{children}</Link>;
}

export function LinkOutsideButton({ href, children, className }: LinkButtonProps) {
    return <a href={href} target="_blank" className={defaultCssClass + className} rel="noreferrer">{children}</a>;
}
export function LinkOutsideButtonBig({ href, children, className }: LinkButtonProps) {
    return <a href={href} target="_blank" className={bigCssClass + className} rel="noreferrer">{children}</a>;
}

export function LinkFooter({ href, children, className }: LinkButtonProps) {
    return <a href={href} target="_blank" className={footerCssClass + className} rel="noreferrer">{children}</a>;
}

