import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
    return (
    <Link href={`/products/${category}`} 
    >{category}
    </Link>
    );
}

export default NavLink;