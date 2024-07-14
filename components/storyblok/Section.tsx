import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Container from "../Container";

const Section = ({ blok }: any) => {
    return (
        <section className="py-14 lg:py-28">
            <Container>
                {blok?.body?.map((nestedBlok: any) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </Container>
        </section>
    );
};

export default Section;
