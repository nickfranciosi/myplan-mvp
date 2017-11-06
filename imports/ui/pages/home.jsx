import React from 'react';
import PlanCard from '../components/planCard/index';

export const Home = () => (
  <div>
    <h2>Home page</h2>
    <PlanCard
      student="Jane Doe"
      school={{
        name: "Road Meadows Middle School",
        link: "/school/road-meadows-middle-school",
      }}
      planName="Geography Chocolate Company"
      media="http://lorempixel.com/400/200/"
      amountRaised="$300"
      daysRemaining={10}
      supporterCount={22}
    />
    <PlanCard
      student="Jane Doe"
      school={{
        name: "Road Meadows Middle School",
        link: "/school/road-meadows-middle-school",
      }}
      planName="Geography Chocolate Company"
      media="http://lorempixel.com/400/200/"
      amountRaised="$300"
      daysRemaining={10}
      supporterCount={22}
    />
    <PlanCard
      student="Jane Doe"
      school={{
        name: "Road Meadows Middle School",
        link: "/school/road-meadows-middle-school",
      }}
      planName="Geography Chocolate Company"
      media="http://lorempixel.com/400/200/"
      amountRaised="$300"
      daysRemaining={10}
      supporterCount={22}
    />
  </div>
);