import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, location, date, projets }) => {
    return (
        <div>
            <Card title={title} subTitle={location} footer={date}>
                <div>
                    <h5>Projets:</h5>
                    <ul>
                        {projets.map((projet, index) => (
                            <li key={index}>
                                <div>{projet.titre}</div>
                                <b>Technologies :</b> {projet.technologie}

                                <br></br>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
            <br />
        </div>
    );
};

const Projets = () => {
    const experienceData = [
        {
            title: 'Projet de fin de formation',
            date: '2021',
            location: 'ISGI - MARRAKECH',
            projets: [
                {
                    titre:
                        "Application de bureau en C# qui permet la gestion des demandes de réparation d'appareils électroniques pour les clients.",
                    technologie: 'C# , Entity FrameWork , Azure SQL SERVER , GitHub',
                },
            ],
        },
        {
            title: "Projet d'école",
            date: '2023',
            location: 'EMSI - MARRAKECH',
            projets: [
                {
                    titre: 'Création d\'un site web pour la location de voitures en ligne',
                    technologie: 'Django, Azure MySQL, GitHub',
                },
                {
                    titre: 'Création d\'un site web pour rechercher des pharmacies dans votre région',
                    technologie: 'Spring Boot, React JS, Azure MySQL, GOOGLE MAP API',
                },
                {
                    titre:
                        "Création d'un site de réseau social avec Django et React, ainsi qu'une application mobile avec Flutter, conçus spécifiquement pour les amateurs de football qui aiment jouer des matchs de 5 contre 5. De plus, il offre une solution pratique pour la location de terrains dans votre région, tout en offrant aux propriétaires de terrains un accès à leurs statistiques et la possibilité de modifier leurs informations en ligne.",
                    technologie: 'Django , React JS , Flutter, Azure MySQL, GOOGLE MAP API',
                },
            ],
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    location={experience.location}
                    date={experience.date}
                    projets={experience.projets}
                />
            ))}
        </section>
    );
};

export default Projets;
