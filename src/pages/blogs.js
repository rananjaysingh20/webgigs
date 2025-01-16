import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BlogCard from "../components/blogCard";
import { Stack } from "../components/cardStack";

const BlogContainer = styled.div`
  background-color: #dcd9ff;
  height: 80vh;
  position: relative;
`;

const LatestText = styled.div`
  color: #2f5f48;
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 48px;
  position: absolute;
  top: 10px;
  left: 60px;
  @media (max-width: 768px) {
    font-size: 28px;
    left: 30px;
  }
`;

const BlogItems = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 60px;
  top: 100px;
  width: 90%;
  height: 560px;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 768px) {
    left: 0px;
    height: 500px;
    width: 100%;
  }
`;

const blogs = [
  {
    heading: "Enhance Your Online Presence with Expert Website Redesigning",
    content:
      "In today's digital age, having a strong online presence is crucial for businesses and individuals alike. Your website is often the first impression people have of your brand, and it can significantly influence their perception of your credibility and professionalism. If your website is outdated, difficult to navigate, or not optimized for mobile devices, you could be losing potential customers or readers. This is where expert website redesigning comes into play. Redesigning a website isn’t just about changing its appearance; it’s about improving its functionality, user experience, and overall performance.\n\n" +
      "When considering a redesign, it’s important to analyze your current website's weaknesses. Are visitors leaving your site too quickly? Are they struggling to find the information they need? An expert redesign involves conducting a thorough audit of your site to identify these pain points. From there, designers and developers can craft a strategy to address these issues. This might involve streamlining navigation, enhancing load times, or ensuring that the design is responsive across all devices.\n\n" +
      "A fresh design can also align your website with current trends, making it visually appealing and relevant to your audience. For instance, incorporating elements like interactive features, animations, and modern typography can capture visitors’ attention and keep them engaged longer. However, a good redesign goes beyond aesthetics. It focuses on creating a user-friendly interface that allows visitors to quickly find what they’re looking for. Simplicity and clarity are key—users should be able to navigate your site intuitively without unnecessary clicks or confusion.\n\n" +
      "Another critical aspect of redesigning is SEO optimization. Your website needs to rank well on search engines for people to find it easily. During a redesign, you can ensure that your website’s structure, content, and metadata adhere to the best SEO practices. This might involve creating keyword-rich content, improving page speed, and ensuring the site is mobile-friendly.\n\n" +
      "In addition to SEO, accessibility should be a priority. A well-redesigned site caters to all users, including those with disabilities. Features like text-to-speech functionality, keyboard navigation, and appropriate color contrasts can make your site more inclusive.\n\n" +
      "Lastly, redesigning your website is an opportunity to integrate advanced analytics tools. These tools allow you to track user behavior, identify popular pages, and understand areas needing improvement. With this data, you can make informed decisions to continuously enhance your online presence.\n\n" +
      "In summary, expert website redesigning is a multifaceted process that improves aesthetics, functionality, and performance. By investing in a professional redesign, you not only elevate your brand's image but also create a platform that effectively serves your audience and achieves your goals.",
    author: "Rananjay Singh",
  },
  {
    heading: "The Art of Minimalism in Modern Web Design",
    content:
      "Minimalism is more than a passing trend; it is a powerful design philosophy that emphasizes simplicity, clarity, and focus. In modern web design, minimalism has become increasingly popular as businesses and creators strive to provide users with seamless, distraction-free experiences. At its core, minimalism is about reducing clutter and allowing key elements to shine.\n\n" +
      "The foundation of minimalism lies in its visual aesthetic. Clean layouts, ample white space, and simple typography create a sense of elegance and sophistication. By eliminating unnecessary elements, minimalist designs help users focus on what truly matters—the content and functionality of a website. This approach not only enhances the user experience but also creates a professional and modern impression.\n\n" +
      "However, minimalism is not about removing elements for the sake of simplicity. It is about purposeful design. Every element on a minimalist website serves a function. For example, instead of using multiple fonts, a minimalist design might rely on one or two carefully chosen typefaces to convey the brand's personality. Similarly, color schemes are often limited to a few complementary tones, creating a harmonious visual experience.\n\n" +
      "In terms of navigation, minimalism encourages streamlined menus and intuitive layouts. Complex dropdown menus and redundant links are replaced with straightforward navigation bars that guide users effortlessly through the site. This simplicity extends to content as well. Minimalist websites often prioritize concise copy that delivers key messages without overwhelming readers.\n\n" +
      "Another advantage of minimalism is its impact on performance. With fewer elements to load, minimalist websites tend to have faster loading times. This is especially important in today’s mobile-first world, where users expect quick access to information. Additionally, minimalist designs are inherently responsive, adapting seamlessly to various screen sizes and devices.\n\n" +
      "Minimalism also aligns with current SEO best practices. By reducing clutter and focusing on core content, minimalist websites make it easier for search engines to crawl and index pages. This can lead to improved rankings and greater visibility online.\n\n" +
      "Creating a successful minimalist website requires a balance between simplicity and functionality. It involves thoughtful decisions about what to include and what to leave out. Designers must consider the user’s journey and prioritize elements that enhance usability and engagement.\n\n" +
      "In conclusion, minimalism in modern web design is about creating a clean, focused, and user-friendly experience. By embracing this design philosophy, businesses and individuals can create websites that not only look stunning but also deliver exceptional performance and value to their users.",
    author: "Deepanshi Singh",
  },
  {
    heading: "10 Tips to Boost Your Blog's Engagement",
    content:
      "Blogging is more than just publishing content; it's about connecting with your audience and fostering engagement. Whether you're a seasoned blogger or just starting, boosting your blog's engagement can significantly enhance its impact and reach. Here are 10 practical tips to help you achieve this goal.\n\n" +
      "1. **Create High-Quality Content**: The foundation of engagement is valuable content. Focus on creating informative, entertaining, and well-researched posts that resonate with your target audience. High-quality content keeps readers coming back for more.\n\n" +
      "2. **Understand Your Audience**: Know who you're writing for. Conduct surveys, analyze demographics, and engage with your readers to understand their preferences and interests. Tailoring your content to their needs will increase engagement.\n\n" +
      "3. **Use Eye-Catching Headlines**: Your headline is the first thing readers see. Craft compelling, curiosity-driven titles that encourage clicks. Avoid clickbait; instead, deliver on the promise your headline makes.\n\n" +
      "4. **Incorporate Visuals**: Break up text-heavy posts with images, videos, infographics, and other visual elements. Visuals not only make your blog more appealing but also help convey information effectively.\n\n" +
      "5. **Encourage Interaction**: Invite readers to comment, share, and participate in discussions. End your posts with questions or prompts that encourage readers to share their thoughts.\n\n" +
      "6. **Optimize for Mobile**: With most users accessing content on mobile devices, ensure your blog is mobile-friendly. Responsive designs and fast loading times are essential for retaining readers.\n\n" +
      "7. **Leverage Social Media**: Share your blog posts on social media platforms to reach a broader audience. Engage with followers, respond to comments, and participate in conversations to build relationships.\n\n" +
      "8. **Post Consistently**: Regular posting keeps your audience engaged and establishes your blog as a reliable source of content. Create a content calendar and stick to it.\n\n" +
      "9. **Optimize for SEO**: Use relevant keywords, meta descriptions, and internal links to improve your blog's visibility on search engines. SEO brings organic traffic, which can lead to higher engagement.\n\n" +
      "10. **Analyze and Improve**: Use analytics tools to monitor your blog's performance. Identify popular posts, track user behavior, and make data-driven decisions to enhance engagement.\n\n" +
      "In conclusion, boosting blog engagement requires a strategic approach that combines quality content, audience interaction, and optimization. By implementing these tips, you can create a vibrant, interactive, and successful blog.",
    author: "Vidhi Sharma",
  },
];

const Wrapper = styled(Stack)`
  background: #dcd9ff;
`;

const Item = styled.div`
  background: #f9fafb;
  width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  text-shadow: 0 10px 10px #d1d5db;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transform: ${(props) => {
    let rotation = Math.random() * (5 - -5) + -5;
    return props.removeRotate ? "" : `rotate(${rotation}deg)`;
  }};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default function Blogs() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [removeRotate, setRemoveRotate] = React.useState(false);

  React.useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check and event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BlogContainer>
      <LatestText>Latest Articles</LatestText>
      <BlogItems
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        {isMobile && (
          <Wrapper removeRotate={removeRotate} onVote={(item, vote) => console.log(item.props, vote)}>
            {blogs.map((blog, index) => {
                return (
                  <Item removeRotate={removeRotate} data-value="donuts" whileTap={{ scale: 1.15 }}>
                    <BlogCard isMobile={isMobile} blog={blog} index={index} setRemoveRotate={setRemoveRotate} />
                  </Item>
                )
            })}
          </Wrapper>
        )}
        {!isMobile &&
          blogs.map((item, index) => {
            return <BlogCard setRemoveRotate={setRemoveRotate} isMobile={isMobile} blog={item} index={index} />;
          })}
      </BlogItems>
    </BlogContainer>
  );
}
