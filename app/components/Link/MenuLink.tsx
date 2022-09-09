import { Link } from "@remix-run/react";

interface LinkProps {
    href: string;
    children: string;
    className?: string
}

const defaultCssClass = 'text-beaige transition duration-500 ease-out delay-100 hover:text-green ';

export default function MenuLink({ href, children, className }: LinkProps) {
    return <Link to={href} className={defaultCssClass + className}>{children}</Link>;
}

