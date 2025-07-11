import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Profile() {
    return (
        <>
            <article className="profile">
                <section className="sidebar">
                    <div>
                        <img src="/assets/img/bot.webp" />
                        <span>نام کاربری</span>
                    </div>
                    <ul>
                        <li className="sidebarLabels">فعالسازی اکانت</li>
                        <li className="sidebarLabels">کامنت ها</li>
                        <li className="sidebarLabels">فالو</li>
                        <li className="sidebarLabels">آنفالو</li>
                        <li className="sidebarLabels">ویرایش پروفایل</li>
                    </ul>
                </section>

                <section className="content">
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
                        <a href="#">
                            <img className="logo" src="/assets/img/logo.webp" />
                        </a>
                    </header>

                    <section className="sidebarContents part1">
                        <h2>فعالسازی اکانت</h2>
                        <form>
                            <img src="/assets/img/pic 2.png" />
                            <label htmlFor="username">
                                <h3>نام کاربری اکانت اینستاگرام:</h3>
                                <input type="text" name="username" />
                            </label>

                            <label htmlFor="email">
                                <h3>ایمیل اکانت اینستاگرام:</h3>
                                <input type="email" name="email" />
                            </label>
                            <input type="submit" name="submit" value="بررسی" />
                        </form>
                    </section>

                    <section className="sidebarContents part2">
                        <h2>کامنت ها</h2>
                        <form>
                            <label htmlFor="newPhrase">
                                <h3>عبارت جدید:</h3>
                                <input type="text" name="newPhrase" />
                            </label>
                            <label htmlFor="newAnswer">
                                <h3>پاسخ:</h3>
                                <input type="text" name="newAnswer" />
                            </label>
                            <input
                                type="submit"
                                name="create"
                                value="اضافه کن"
                            />
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <th>عبارت</th>
                                    <th>پاسخ</th>
                                    <th>ویرایش</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>کلمه اول</td>
                                    <td>جایگزین اول</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="sidebarContents part3">
                        <h2>فالو</h2>
                        <form>
                            <label htmlFor="follow">
                                <h3>تعداد فالو در روز:</h3>
                                <input type="text" name="follow" />
                            </label>
                            <input
                                type="submit"
                                name="followSubmit"
                                value="ثبت"
                            />
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th>تعداد فالو</th>
                                    <th>ویرایش</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2000</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="sidebarContents part4">
                        <h2>فالو</h2>
                        <form>
                            <label htmlFor="unfollow">
                                <h3>تعداد آنفالو در روز:</h3>
                                <input type="text" name="unfollow" />
                            </label>
                            <input
                                type="submit"
                                name="unfollowSubmit"
                                value="ثبت"
                            />
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th>تعداد آنفالو</th>
                                    <th>ویرایش</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2000</td>
                                    <td>
                                        <i className="bx bxs-edit edit"></i>
                                    </td>
                                    <td>
                                        <i className="bx bx-x delete"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="sidebarContents part5">
                        <h2>ویرایش پروفایل</h2>
                        <div>
                            <img src="/assets/img/bot.webp" />
                            <Link href="#">تغییر پروفایل</Link>
                            <h3>نام کاربری</h3>
                            <span>احمد احمدی</span>
                            <h3>اکانت اینستاگرام</h3>
                            <span>instaaccount</span>
                            <h3>ایمیل</h3>
                            <span>email@email.com</span>
                        </div>
                    </section>
                </section>
            </article>
            <Footer />
        </>
    );
}
