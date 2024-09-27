import express from 'express';
import cors from 'cors';
const app = express();
const port = 4000;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({
        education: [
            {
                institution: "Stanford University",
                years: "2011 - 2013",
                degree: "Master Degree Graduate in Design",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                institution: "Chicago University",
                years: "2007 - 2010",
                degree: "Bachelor Degree in Design",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            } ],
        jobExperience: [
            {
                company: "Creative Agency",
                location: "Chicago",
                years: "2020 - Present",
                position: "Senior Web Designer",
                description: "Lorem Ipsum has been the industry's standard dummy text since the 1500s. Lorem Ipsum has been the industry's standard dummy text since the 1500s."
            },
            {
                company: "Creative Market",
                location: "United Kingdom",
                years: "2015 - 2020",
                position: "Graphic Designer",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            },
            {
                company: "Marketing Agency",
                location: "United Kingdom",
                years: "2013 - 2015",
                position: "Marketing Manager",
                description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            } ],
        contact: [
            {
                phone: "+380-50-848-51-20",
                website: "www.yourwebsite.com",
                address: "769 Prudence Street, Lincoln Park, MI 48146"
            }],
        skills: [
            { name: "Adobe Photoshop", level: "90%" },
            { name: "Adobe Illustrator", level: "65%" },
            { name: "Microsoft Word", level: "85%" },
            { name: "Microsoft PowerPoint", level: "70%" },
            { name: "HTML5/CSS3", level: "80%" }
        ],
        hobbies: [
            { name: "Book Reading", level: "90%" },
            { name: "Travelling", level: "65%" },
            { name: "Playing Chess", level: "85%" },
            { name: "Painting", level: "70%" },
            { name: "Graphic Design", level: "83%" }
        ],
        languages: [
            { name: "English", level: "85" },
            { name: "German", level: "65" },
            { name: "Spanish", level: "45" }
        ],
        references: [
            {
                name: "Darwin B. Magana",
                address: "2813 Shobe Lane Mancos, CO.",
                phone: "+1-970-533-3393",
                email: "www.yourwebsite.com"
            },
            {
                name: "Jane Doe",
                address: "914 Ivy Street Centennial, CO.",
                phone: "+1-908-987-5103",
                email: "www.yourwebsite.com"
            }
        ],
    });
});

app.listen(port, () => {
    console.log(`Server works on http://localhost:${port}`);
});
