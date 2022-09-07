import { Link } from "@remix-run/react";

interface LinkProps {
    href: string;
    children: string;
    className?: string
}

const defaultCssClass = 'text-beaige transition duration-600 ease-out delay-200 hover:text-green ';

export default function MenuLink({ href, children, className }: LinkProps) {
    return <Link to={href} className={defaultCssClass + className}>{children}</Link>;
}

