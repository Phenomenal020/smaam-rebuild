import React from 'react';
import styles from '@/app/blog/page.module.css'
import Image from 'next/image';

const FruitDay = () => {

    return (
        <article className={styles.blogPost}>
            <h1 className={styles.title}>Nourishing Body and Mind: Fruit Day Tradition</h1>

            <div className={styles.imageWrapper}>
                <Image src="/images/blog-fruits.jpg" alt="Fruit Day" fill={true} className={styles.image} />
            </div>

            <div className={styles.content}>
                <p className={styles.paragraph}>
                    At St. Michael the Archangel Academy Makurdi, Tuesdays hold a special place in the hearts of students and staff alike. It&apos;s a day that stands out from the rest of the week, not because of exams, classes, or tests, but for an entirely different reason - it&apos;s Fruit Day!
                </p>
                <p className={styles.paragraph}>
                    Every Tuesday, the school comes alive with the vibrant colors and sweet aromas of a variety of fruits. It&apos;s a day when students eagerly grab their backpacks and make sure they have an extra special something tucked away inside - a delicious assortment of fruits for lunch. But this tradition is about much more than just the joy of eating fruits; it&apos;s about nurturing both body and mind.
                </p>
                <h2 className={styles.h2}>The Importance of Fruit Day</h2>
                <p className={styles.paragraph}>
                    Fruit Day at St. Michael the Archangel Academy is more than just a fun tradition; it&apos;s a well-thought-out practice with several important benefits.
                </p>
                <ol className={styles.ol}>
                    <li>Promoting Healthy Eating Habits: By dedicating a day to fruits, the school encourages students to make healthier food choices. Fruits are packed with essential vitamins, minerals, and fiber, providing students with the nourishment they need to stay focused and energized throughout the day.</li>
                    <li>Educating on Nutrition: Fruit Day serves as an opportunity to educate students about the nutritional value of fruits. They learn about the vitamins and minerals in different fruits and how these nutrients benefit their overall health.</li>
                    <li>Cultivating Lifelong Habits: By instilling the habit of eating fruits from a young age, St. Michael the Archangel Academy helps students develop lifelong healthy eating habits. These habits are not only beneficial during their school years but also contribute to a healthier future.</li>
                    <li>Environmental Awareness: Encouraging the consumption of fruits also promotes an awareness of the environment. Fruits are a natural, eco-friendly food source, and teaching students about their benefits aligns with the school&apos;s commitment to sustainability and responsible living.</li>
                </ol>
                <p className={styles.paragraph}>
                    St. Michael the Archangel Academy&apos;s Fruit Day tradition is a testament to the school&apos;s commitment to holistic education. In the midst of the weekly routine, it serves as a colorful reminder that nurturing body and mind is essential for academic excellence and lifelong well-being.
                </p>
                <p className={styles.paragraph}>
                    So, the next time Tuesday rolls around, you can be sure that St. Michael the Archangel Academy will be buzzing with excitement, as students eagerly share the fruits of knowledge and health.
                </p>
            </div>
        </article>
    );
};

export default FruitDay;

