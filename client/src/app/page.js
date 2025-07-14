import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <article className="homePage">
                <section className="part1">
                    <div>
                        <h1>ربات اینستاگرام اینبو</h1>
                        <h2>برترین ربات اینستاگرام ایران از سال 1395</h2>
                        <p>
                            ربات اینستاگرام اینبو دستیار هوشمند، اختصاصی و خستگی
                            ناپذیر شما در اینستاگرام است! مدیریت پیج خود را به
                            ربات اینبو بسپارید تا به صورت 24 ساعته و هدفمند
                            فعالیت کرده و محصولات و خدمات شما را به جامعه‌ی هدف
                            معرفی کند. در اینبو ثبت نام کنید و پیج خود را بصورت
                            حرفه‌ای مدیریت کنید!
                        </p>
                        <div className="btnStyleBox">
                            <Link href="#" className="btnStyle">
                                استارت بات اینستاگرام
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/img/bot.webp" />
                    </div>
                    <img src="/assets/img/back 2.png" />
                </section>

                <section className="part2">
                    <SecondPartSection
                        data={{
                            icon: "bx bx-message-dots",
                            title: "پاسخ آنی و لحظه ای کامنت ها",
                            content:
                                "این ربات، می تواند کامنت ها را در لحظه پاسخ دهد و رضایت کاربران را به دنبال داشته باشد. بنابراین یکی از مهم ترین ابزار های مدیریت اینستاگرام را دارا می باشید.",
                        }}
                    />
                    <SecondPartSection
                        data={{
                            icon: "bx bxs-cog",
                            title: "کاملا هوشمند و اتوماتیک",
                            content:
                                "تمامی افراد موفق اینستا یک نکته‌ مشترک دارند: نظم! با ربات اینبو، از تعامل با کاربران گرفته تا انتشار محتوا، همه چیز هم سروقته، هم اتوماتیکه! یکبار ربات را تنظیم کنید تا پیج شما به منظم ترین پیج در لیست فالووینگ مخاطبانتان تبدیل شود!",
                        }}
                    />
                    <SecondPartSection
                        data={{
                            icon: "bx bxs-user-check",
                            title: "جذب فالوور واقعی",
                            content:
                                "با جذب هدفمند فالوور، سکوی پرتاب کسب و کارتان را بسازید! ربات اینستاگرام اینبو، دقیقا کاربرانی را که شما تعیین می‌کنید به پیجتان جذب می‌کند؛ کاری که در تبلیغ انبوه عملا غیرممکن است.",
                        }}
                    />
                </section>

                <section className="part3">
                    <img src="/assets/img/pic 1.png" />
                    <div>
                        <h2>معرفی ربات اینستاگرام اینبو</h2>
                        <p>
                            اگر به دنبال افزایش بازدیدکننده و فالوور واقعی
                            هستید، به وبسایت درستی آمده‌اید! به زبان بسیار ساده،
                            ربات اینستاگرام inbo هرکاری که شما برای جذب فالوور
                            نیاز دارید را انجام میدهد، آن هم به صورت 24 ساعته!
                        </p>
                        <p>
                            ربات اینستاگرام اینبو با سرازیر کردن بازدیدکنندگان
                            به پیج شما، باعث دیده شدن و شناخته شدن هر چه بیشتر
                            محصولات و خدمات شما خواهد شد. بازدید پست‌های شما در
                            روزهای بعد از استفاده از ربات اینستاگرام چندین برابر
                            شده و شما دیگر نیازی به پرداخت مبالغ گزاف برای تبلیغ
                            بی‌نتیجه و بیهوده نخواهید داشت.
                        </p>
                        <p>
                            این را هم در نظر داشته باشید که با ربات افزایش
                            فالوور اینستاگرام اینبو شما می‌توانید بر جامعه‌ی هدف
                            کاملا مشخصی تمرکز کنید؛ این امری است که هیچگاه در
                            تبلیغ انبوه روی نمی‌دهد.
                        </p>
                    </div>
                </section>

                <section className="part4">
                    <aside>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                ربات اینستاگرامی چیست؟
                            </div>
                            <div className="accordion-content">
                                <p>
                                    ربات اینستاگرام اینبو سیستم هوشمندی است که
                                    با قابلیت‌های افزایش تعامل، حذف فالوور فیک و
                                    سایر ابزارها باعث پیشرفت سریع پیجتان می‌شود.
                                    با داشتن ربات اینستاگرامی تنها دغدغه شما
                                    تولید محتوای جذاب خواهد بود!
                                </p>
                            </div>
                        </div>
                    </aside>
                    <aside>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                جذب فالوور واقعی و هدفمند
                            </div>
                            <div className="accordion-content">
                                <p>
                                    ربات اینبو با قابلیت‌هایی که دارد، باعث جذب
                                    فالوورهای 100درصد واقعی و هدفمند می‌شود که
                                    به موضوع پیج شما علاقه‌مند هستند. کیفیت
                                    محتوای پیجتان هم در میزان تبدیل بازدیدهای
                                    جذب‌شده توسط ربات به فالوور موثر است.
                                </p>
                            </div>
                        </div>
                    </aside>
                    <aside>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                ارزان ترین تبلیغ در اینستاگرام
                            </div>
                            <div className="accordion-content">
                                <p>
                                    قابلیت‌های ربات اینستاگرام یعنی فالو خودکار،
                                    لایک و کامنت اتوماتیک و پیام دایرکت انبوه،
                                    یکی از بهترین روش‌ها برای تبلیغات به شمار
                                    می‌روند. مزیت بزرگ این روش ارزان بودن آن
                                    است.
                                </p>
                            </div>
                        </div>
                    </aside>
                    <aside>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                تشخیص پیج های فعال از غیر فعال
                            </div>
                            <div className="accordion-content">
                                <p>
                                    ربات اینستاگرام اینبو می‌تواند فالوورهای فیک
                                    را از واقعی‌ها تشخیص دهد و فعالیت خود را روی
                                    فالوورهای واقعی متمرکز کند.
                                </p>
                            </div>
                        </div>
                    </aside>
                    <img src="/assets/img/shape 1.png" />
                    <img src="/assets/img/shape 1.png" />
                    <img src="/assets/img/shape 1.png" />
                    <img src="/assets/img/shape 1.png" />
                    <img src="/assets/img/back 3.jpg" />
                </section>

                <section className="part5">
                    <div>
                        <h2>ثبت نام و استارت بات اینستاگرام</h2>
                        <p>
                            تجربه افزایش فالوور و پیشرفت سریع در اینستاگرام فقط
                            با کامل‌ترین ربات اینستاگرام ممکنه؛ همین امروز، همین
                            حالا شروع کنین!
                        </p>
                        <Link href="#">
                            ثبت نام<i className="bx bx-chevrons-left"></i>
                        </Link>
                    </div>
                    <img src="/assets/img/contact.png" />
                </section>

                <section className="part6">
                    <h2>تعرفه ها</h2>
                    <SixthPartSection
                        data={{
                            title: "اشتراک پایه",
                            content: "مناسب برای کسب و کارهای کوچک",
                            price: 79,
                            options: [
                                "فعالیت بر روی 1 پیج",
                                "تشخیص و حذف خودکار فالوور فیک",
                                "پیام دایرکت اتوماتیک",
                                "فالو و آنفالو خودکار",
                                "لایک و کامنت اتوماتیک",
                                "قابلیت هدف‌گذاری با معیار دلخواه",
                                "پشتیبانی کامل و برخط",
                            ],
                        }}
                    />
                    <SixthPartSection
                        data={{
                            title: "اشتراک نقره ای",
                            content: "مناسب برای کسب و کارهای کوچک",
                            price: 179,
                            options: [
                                "فعالیت بر روی 1 پیج",
                                "تشخیص و حذف خودکار فالوور فیک",
                                "پیام دایرکت اتوماتیک",
                                "فالو و آنفالو خودکار",
                                "لایک و کامنت اتوماتیک",
                                "قابلیت هدف‌گذاری با معیار دلخواه",
                                "پشتیبانی کامل و برخط",
                            ],
                        }}
                    />
                    <SixthPartSection
                        data={{
                            title: "اشتراک طلائی",
                            content: "مناسب برای کسب و کارهای کوچک",
                            price: 279,
                            options: [
                                "فعالیت بر روی 1 پیج",
                                "تشخیص و حذف خودکار فالوور فیک",
                                "پیام دایرکت اتوماتیک",
                                "فالو و آنفالو خودکار",
                                "لایک و کامنت اتوماتیک",
                                "قابلیت هدف‌گذاری با معیار دلخواه",
                                "پشتیبانی کامل و برخط",
                            ],
                        }}
                    />
                </section>
            </article>
            <Footer />
        </>
    );
}

function SecondPartSection(props) {
    return (
        <aside>
            <div>
                <i className={props.data.icon}></i>
                <h2>{props.data.title}</h2>
                <p>{props.data.content}</p>
                <Link href="/services">
                    مطالعه بیشتر
                    <i className="bx bx-chevrons-left"></i>
                </Link>
            </div>
        </aside>
    );
}

function SixthPartSection(props) {
    return (
        <div>
            <aside>
                <div className="head">
                    <h3>{props.data.title}</h3>
                    <h4>{props.data.content}</h4>
                </div>
                <span>ماهیانه</span>
                <b>
                    <span>{props.data.price}</span>هزار تومان
                </b>
                <ul>
                    {props.data.options.map((element, index) => {
                        return <li key={index}>{element}</li>;
                    })}
                </ul>
                <Link href="#">فعالسازی</Link>
            </aside>
        </div>
    );
}
