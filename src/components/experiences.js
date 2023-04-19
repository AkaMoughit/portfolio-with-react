import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position,location, duration, sujet }) => {
    return (
        <Card title={title} subTitle={position} footer={duration}>
            <p>{location}</p>
            <p>{sujet}</p>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'stage de fin d\'année 2022',
            position: 'Stagiaire',
            duration: 'juillet 2022 - septembre 2022',
            location: 'ONEE - MARRAKECH',
            sujet: 'Mise en œuvre d\'une application intranet en C# pour la gestion des dossiers de litiges.',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    position={experience.position}
                    duration={experience.duration}
                    location={experience.location}
                    sujet={experience.sujet}
                />
            ))}
        </section>
    );
};

export default Experiences;
