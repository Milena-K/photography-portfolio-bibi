import React from "react";
import Link from "next/link";


const Logo: React.FC = () => {
    return (
        <div className="flex">
            <Link href="/">
                <h1 className="text-3xl font-bold ">Biljana Kukolj</h1>
            </Link>
        </div>
    );
};

export default Logo;
