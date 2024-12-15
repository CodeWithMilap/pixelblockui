import React from "react";
import Section from "../Section";
import Grid from "../Grid";
import Title from "../Title";
import Cards from "../Cards";
import { BrainCircuit } from "@/constants/Icons";

// Static data for the Cards
export const featureCards = [
  {
    icon: <BrainCircuit />, // Assuming BrainCircuit is a component
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <BrainCircuit />,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <BrainCircuit />,
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

const Feature3 = () => {
  return (
    <Section className="bg-primary-500/5 lg:py-24 py-12">
      <Grid gap={14}>
        <Title
          className="max-w-lg text-center mx-auto"
          title="Why our clients choose Ensome?"
          content="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        />
        <Grid columns={3} gap={8}>
          {featureCards.map((card, index) => (
            <Cards key={index} blok={card} />
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default Feature3;
