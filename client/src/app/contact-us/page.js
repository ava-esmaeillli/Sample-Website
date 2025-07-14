"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
    return (
        <>
            <Header />
            <article className="contactUs">
                <h1>ارتباط با ما</h1>
                <section className="part1">
                    <ContactForm />
                    <img src="/assets/img/contact 1.png" />
                </section>
            </article>
            <Footer />
        </>
    );
}
