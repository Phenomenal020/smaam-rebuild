import React from 'react';
import styles from '@/app/blog/page.module.css'
import Image from 'next/image';

const ColorWeek = () => {
    return (
        <article className={styles.blogPost}>
            <h1 className={styles.title}>Painting the School in Shades of Blue: Blue Week</h1>

            <div className={styles.imageWrapper}>
                <Image src="/images/blog-color-week.jpg" alt="Colour Week" fill={true} className={styles.image} />
            </div>

            <div className={styles.content}>
                <p className={styles.paragraph}>
                    February at St. Michael the Archangel Academy Makurdi brought with it a wave of vibrant hues, as students and staff enthusiastically embraced the spirit of unity and creativity during the much-anticipated Blue Week. For seven unforgettable days, our school transformed into a sea of blue, weaving a tapestry of togetherness and school pride.
                </p>
                <h2 className={styles.h2}>Blue: A Color of Significance</h2>
                <p className={styles.paragraph}>
                    Blue Week, held during the first week of February 2023, was a celebration of color with deep meaning. Blue is not just a shade; it&apos;s a symbol of wisdom, loyalty, and trust. It represents the vastness of the sky and the boundless potential within each of us. As we adorned ourselves and our beloved school in blue, we embodied these qualities and embarked on a journey of self-discovery and unity.
                </p>
                <h2 className={styles.h2}>A Sea of Blue Attire</h2>
                <p className={styles.paragraph}>
                    Throughout Blue Week, our students and staff radiated in various shades of blue. It was a sight to behold as the corridors, classrooms, and playgrounds were filled with the dazzling array of blue outfits.
                </p>
                <h2 className={styles.h2}>Decorating with Elegance</h2>
                <p className={styles.paragraph}>
                    To enhance the blue atmosphere, the school was adorned with elegant blue ribbons and lively blue balloons. The sight was breathtaking, as the decorations gracefully swayed in the breeze, creating a tranquil and joyful ambiance. Blue Week wasn&apos;t just about wearing the color; it was about living and breathing it in every corner of our school.
                </p>
                <h2 className={styles.h2}>A Celebration of Unity</h2>
                <p className={styles.paragraph}>
                    Blue Week was more than just a celebration of color; it was a celebration of unity. It was a reminder that we are all part of something greater, a community that supports and inspires one another. As we walked the blue-clad hallways, we felt a sense of belonging and pride in being a part of St. Michael the Archangel Academy, Makurdi.
                </p>
                <p className={styles.paragraph}>
                    Blue Week 2023 will forever be etched in our school&apos;s history as a time when we painted our world in shades of blue, reminding us of the wisdom, loyalty, and trust that define our community. Until next year&apos;s Blue Week, may the color blue continue to inspire us to reach for new heights and unite in the spirit of camaraderie.
                </p>
            </div>
        </article>
    );
};

export default ColorWeek;