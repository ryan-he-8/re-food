import React from 'react';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/find recipe">find recipe</a></li>
          <li><a href="/favorites">favorites</a></li>
        </ul>
      </nav>
      <main>
        <h1> re-food </h1>
        <p>Each year, 119 billion pounds of food is wasted in the United States. That equates to 130 billion meals and more than $408 billion in food thrown away each year. Shockingly, nearly 40% of all food in America is wasted.</p>
      </main>
    </div>
  );
}

export default HomePage;