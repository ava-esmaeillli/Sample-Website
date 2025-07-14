"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    //todo: add RestAPI
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>نام و نام خانوادگی:</h3>
                <input
                    type="text"
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="email">
                <h3>ایمیل:</h3>
                <input
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="message">
                <h3>متن پیام:</h3>
                <textarea
                    name="message"
                    value={data.message}
                    rows="5"
                    onChange={handleChange}
                ></textarea>
            </label>
            <input type="submit" name="submit" value="ارسال" />
        </form>
    );
}
