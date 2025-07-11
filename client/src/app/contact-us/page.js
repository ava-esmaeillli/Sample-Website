import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
    return (
        <>
            <Header />
            <article className="contactUs">
                <h1>ارتباط با ما</h1>

                <section className="part1">
                    <form>
                        <label htmlFor="name">
                            <h3>نام و نام خانوادگی:</h3>
                            <input type="text" name="name" />
                        </label>
                        <label htmlFor="email">
                            <h3>ایمیل:</h3>
                            <input type="email" name="email" />
                        </label>
                        <label htmlFor="message">
                            <h3>متن پیام:</h3>
                            <textarea name="message" rows="5"></textarea>
                        </label>
                        <input type="submit" name="submit" value="ارسال" />
                    </form>
                    <img src="/assets/img/contact 1.png" />
                </section>
            </article>
            <Footer />
        </>
    );
}
