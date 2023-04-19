import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, location, date, projets }) => {
    return (
        <Card title={title} subTitle={location} footer={date}>
            <div>
                <h5>Projets:</h5>
                <ul>
                    {projets.map((projets, index) => (
                        <li key={index}>{projets}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

const Projets = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Projet de fin de formation',
            date: '2021',
            location: 'ISGI - MARRAKECH',
            projets: [
                'Application de bureau en C# qui permet la gestion des demandes de réparation d\'appareils électroniques pour les clients.',
            ]
        },
        {
            title: 'Projet d\'ecole',
            date: '2023',
            location: 'EMSI - MARRAKECH',
            projets: [
                'Création d\'un site web pour la location de voitures en ligne avec Django.',
                'Création d\'un site web pour rechercher des pharmacies dans votre région avec Spring Boot et React.',
                'Création d\'un site de réseau social avec Django et React, ainsi qu\'une application mobile avec Flutter, conçus spécifiquement pour les amateurs de football qui aiment jouer des matchs de 5 contre 5. De plus, il offre une solution pratique pour la location de terrains dans votre région, tout en offrant aux propriétaires de terrains un accès à leurs statistiques et la possibilité de modifier leurs informations en ligne.',
            ]
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    position={experience.location}
                    duration={experience.date}
                    projets={experience.projets}
                />
                
            ))}
        </section>
    );
};

export default Projets;
