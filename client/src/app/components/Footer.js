import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <Link href="./index.html">
                <img src="/assets/img/logo.webp" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="#">
                            <i className="bx bxl-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="bx bxl-whatsapp"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="bx bxl-telegram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="bx bxl-gmail"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            <p>کپی رایت</p>
        </footer>
    );
}
