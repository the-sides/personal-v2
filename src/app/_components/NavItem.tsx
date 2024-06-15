interface NavItemProps {
    title?: string;
    description: string;
    width?: string;
}

export function NavItem({ title, description, width }: NavItemProps) {
    return <div className={`${width || 'w-[200px]'} flex-shrink-0 pr-3`}>
        {title && <h3 className="text-2xl">{title}</h3> }
        <p className="text-sm p-px font-['Helvetica','Arial','sans-serif']">{description}</p>
    </div>
}