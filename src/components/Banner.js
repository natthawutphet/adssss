import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "รับทำโฆษณาGoogle Ads รับทำโฆษณาFacebook Ads (สายเทา)",
    desc: "เริ่มต้นใช้บริการกับเราเพื่อความสะดวกและความพร้อมทันที! บริษัทของเรามีบริการคุณภาพสูงและประสบการณ์ที่น่าประทับใจ ด้วยการโฆษณา Google Ads และ Facebook Ads ที่มีผลตอบรับและการแปลงที่สูง มาเป็นส่วนหนึ่งของความสำเร็จของคุณวันนี้ รับทำโฆษณาGoogle Ads & รับทำโฆษณาFacebook Ads"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="https://lin.ee/qjjcK05" className="banner-btn">ติดต่อทำโฆษณา </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
