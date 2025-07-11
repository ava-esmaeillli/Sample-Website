import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header>
            <Link href="/profile">
                <i className="bx bxs-user-circle"></i>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href="/services">خدمات</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">ارتباط با ما</Link>
                    </li>
                </ul>
            </nav>
            <Link href="#">
                <img className="logo" src="./assets/img/logo.webp" />
            </Link>
        </header>
    );
}
