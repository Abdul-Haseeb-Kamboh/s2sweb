import React from "react";

const About = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(222, 148, 242,0.5)",
        width: "90%",
        height: 500,
        padding: 20,
        borderRadius: 20,
      }}
    >
      <p style={{ letterSpacing: 2 }}>
        Welcome to the About Us page of the Two-Way Sign Language Translator web
        application! This project was developed by Haseeb Gulraiz, Fiza Rashid,
        Abdul Haseeb, and Kaleemullah, students of Sir Syed University of
        Engineering and Technology. Our goal was to create a tool that would
        help break down communication barriers between the deaf-mute community
        and those who do not know sign language. The web application allows for
        seamless translation between sign language and text, making it easier
        for both parties to communicate and understand each other. We are
        passionate about technology and its ability to improve lives and bridge
        gaps between communities. Our team consists of skilled software
        developers and design experts who work tirelessly to create
        user-friendly and accessible solutions. We believe that our Two-Way Sign
        Language Translator has the potential to make a real difference in the
        lives of deaf-mute individuals and their families, and we are excited to
        see its impact. Thank you for taking the time to learn more about our
        project and our team. We look forward to hearing from you!
      </p>
    </div>
  );
};

export default About;
